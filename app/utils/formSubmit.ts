/**
 * Contact Form Submission Utility
 * 
 * Handles form submission to web3forms.com API with:
 * - Rate limiting (max 3 submissions per 5 minutes)
 * - Error handling and retry logic
 * - Email validation
 * - Auto-reply support
 */

// ===============================
// CONFIGURATION
// ===============================

/**
 * Web3Forms Access Key
 * Get your free key at: https://web3forms.com/
 * 
 * Steps:
 * 1. Visit https://web3forms.com/
 * 2. Enter your email
 * 3. Verify email
 * 4. Copy access_key
 * 5. Replace 'YOUR_WEB3FORMS_ACCESS_KEY' below
 */
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';

// Rate limiting configuration
const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_SUBMISSIONS = 3;  // Max submissions allowed
const RATE_LIMIT_WINDOW = 5 * 60 * 1000;  // 5 minutes in milliseconds

// ===============================
// TYPES
// ===============================

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

interface RateLimitRecord {
  timestamps: number[];
  lastCleared: number;
}

// ===============================
// RATE LIMITING
// ===============================

/**
 * Check if user has exceeded rate limit
 * Returns true if rate limit exceeded, false if OK to submit
 */
function isRateLimited(): boolean {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return false;

    const record: RateLimitRecord = JSON.parse(stored);
    const now = Date.now();

    // Filter out timestamps older than the rate limit window
    const recentSubmissions = record.timestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
    );

    // Update the record with only recent submissions
    if (recentSubmissions.length !== record.timestamps.length) {
      localStorage.setItem(
        RATE_LIMIT_KEY,
        JSON.stringify({
          timestamps: recentSubmissions,
          lastCleared: now,
        })
      );
    }

    return recentSubmissions.length >= MAX_SUBMISSIONS;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return false; // On error, allow submission
  }
}

/**
 * Record a submission timestamp for rate limiting
 */
function recordSubmission(): void {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    let record: RateLimitRecord;

    if (stored) {
      record = JSON.parse(stored);
      // Filter out old timestamps
      record.timestamps = record.timestamps.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
      );
    } else {
      record = { timestamps: [], lastCleared: now };
    }

    record.timestamps.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(record));
  } catch (error) {
    console.error('Failed to record submission:', error);
  }
}

/**
 * Get time remaining until rate limit resets (in seconds)
 */
export function getRateLimitResetTime(): number {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return 0;

    const record: RateLimitRecord = JSON.parse(stored);
    const now = Date.now();
    const oldestTimestamp = Math.min(...record.timestamps);
    const timeUntilReset = RATE_LIMIT_WINDOW - (now - oldestTimestamp);

    return Math.ceil(timeUntilReset / 1000); // Convert to seconds
  } catch (error) {
    return 0;
  }
}

// ===============================
// VALIDATION
// ===============================

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate form data before submission
 */
function validateFormData(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return 'Name must be at least 2 characters long';
  }

  if (!data.email || !isValidEmail(data.email)) {
    return 'Please enter a valid email address';
  }

  if (!data.message || data.message.trim().length < 10) {
    return 'Message must be at least 10 characters long';
  }

  return null; // No errors
}

// ===============================
// SUBMISSION
// ===============================

/**
 * Submit contact form to web3forms.com
 * 
 * @param formData - The contact form data
 * @returns Promise with submission result
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<SubmissionResult> {
  // Check if access key is configured
  if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
    return {
      success: false,
      message: 'Form submission not configured. Please contact the site administrator.',
      error: 'MISSING_ACCESS_KEY',
    };
  }

  // Validate form data
  const validationError = validateFormData(formData);
  if (validationError) {
    return {
      success: false,
      message: validationError,
      error: 'VALIDATION_ERROR',
    };
  }

  // Check rate limit
  if (isRateLimited()) {
    const resetTime = getRateLimitResetTime();
    return {
      success: false,
      message: `Too many submissions. Please try again in ${resetTime} seconds.`,
      error: 'RATE_LIMITED',
    };
  }

  // Prepare submission data
  const submissionData = {
    access_key: WEB3FORMS_ACCESS_KEY,
    name: formData.name.trim(),
    email: formData.email.trim(),
    subject: formData.subject || `New Contact from ${formData.name}`,
    message: formData.message.trim(),
    from_name: formData.name.trim(),
    replyto: formData.email.trim(),
  };

  try {
    // Submit to web3forms
    const response = await fetch(WEB3FORMS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      // Record successful submission for rate limiting
      recordSubmission();

      return {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        data: result,
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to send message. Please try again.',
        error: 'SUBMISSION_FAILED',
        data: result,
      };
    }
  } catch (error) {
    console.error('Form submission error:', error);

    // Network error or other unexpected error
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
      error: 'NETWORK_ERROR',
    };
  }
}

/**
 * Submit with retry logic (up to 3 attempts)
 * 
 * @param formData - The contact form data
 * @param maxRetries - Maximum number of retry attempts (default: 2)
 * @returns Promise with submission result
 */
export async function submitContactFormWithRetry(
  formData: ContactFormData,
  maxRetries: number = 2
): Promise<SubmissionResult> {
  let lastError: SubmissionResult | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const result = await submitContactForm(formData);

    if (result.success) {
      return result;
    }

    // Don't retry on validation errors or rate limiting
    if (
      result.error === 'VALIDATION_ERROR' ||
      result.error === 'RATE_LIMITED' ||
      result.error === 'MISSING_ACCESS_KEY'
    ) {
      return result;
    }

    lastError = result;

    // Wait before retry (exponential backoff)
    if (attempt < maxRetries) {
      await new Promise((resolve) =>
        setTimeout(resolve, Math.pow(2, attempt) * 1000)
      );
    }
  }

  return (
    lastError || {
      success: false,
      message: 'Failed to send message after multiple attempts.',
      error: 'MAX_RETRIES_EXCEEDED',
    }
  );
}
