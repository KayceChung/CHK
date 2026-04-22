# 📧 Contact Form Configuration Guide

## Overview
The contact form uses [Web3Forms](https://web3forms.com/) - a free, privacy-focused form backend service.

**Features:**
- ✅ Free tier available (250 submissions/month)
- ✅ No backend required
- ✅ Email notifications
- ✅ Spam protection
- ✅ Auto-reply support
- ✅ Rate limiting (3 submissions per 5 minutes)
- ✅ Retry logic with exponential backoff

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Access Key

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address (where you want to receive form submissions)
3. Click "Get Access Key"
4. Check your email and verify
5. Copy your `access_key` (looks like: `a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8`)

### Step 2: Configure the Form

Open `app/utils/formSubmit.ts` and replace the placeholder:

```typescript
// BEFORE (line 19)
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

// AFTER
const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8';
```

### Step 3: Test the Form

1. Start dev server: `npm run dev`
2. Navigate to contact section
3. Fill out the form
4. Submit
5. Check your email for the submission

---

## 🔧 Advanced Configuration

### Enable Auto-Reply

Web3Forms supports automatic reply emails to users who submit the form.

**Option 1: Via Dashboard**
1. Log in to [web3forms.com](https://web3forms.com/)
2. Go to your form settings
3. Enable "Auto Reply"
4. Customize the reply message

**Option 2: Via API (add to formSubmit.ts)**
```typescript
const submissionData = {
  access_key: WEB3FORMS_ACCESS_KEY,
  name: formData.name.trim(),
  email: formData.email.trim(),
  subject: formData.subject || `New Contact from ${formData.name}`,
  message: formData.message.trim(),
  
  // Auto-reply configuration
  autoreply: true,
  autoreply_subject: 'Thank you for contacting Chung Hiến Khang',
  autoreply_message: `
    Hi ${formData.name},
    
    Thank you for reaching out! I have received your message and will get back to you within 24-48 hours.
    
    Best regards,
    Chung Hiến Khang
    Solutions Consultant
  `,
};
```

### Custom Email Template

Add custom fields to the submission:

```typescript
const submissionData = {
  access_key: WEB3FORMS_ACCESS_KEY,
  name: formData.name.trim(),
  email: formData.email.trim(),
  subject: `💼 New Contact: ${formData.name}`,
  message: formData.message.trim(),
  
  // Custom fields
  source: 'Portfolio Website',
  timestamp: new Date().toISOString(),
  page_url: window.location.href,
  user_agent: navigator.userAgent,
};
```

### Webhook Integration

Forward submissions to your own backend:

1. Log in to web3forms.com
2. Go to form settings
3. Add webhook URL (e.g., `https://yourapi.com/webhook`)
4. Web3Forms will POST submissions to your URL

### Spam Protection

Web3Forms includes built-in spam protection via:
- reCAPTCHA v3 (optional, enable in dashboard)
- Honeypot fields (automatic)
- Rate limiting (client-side: 3/5min, server-side: 50/day)

**To add reCAPTCHA:**
```typescript
const submissionData = {
  access_key: WEB3FORMS_ACCESS_KEY,
  // ... other fields
  
  // Add reCAPTCHA token
  'g-recaptcha-response': await grecaptcha.execute(SITE_KEY, {action: 'submit'}),
};
```

---

## 🛡️ Rate Limiting

### Client-Side Rate Limiting
Implemented in `formSubmit.ts`:
- **Limit:** 3 submissions per 5 minutes
- **Storage:** localStorage (`contact_form_submissions`)
- **Reset:** Automatic after 5 minutes

### Server-Side Rate Limiting (Web3Forms)
- **Free tier:** 250 submissions/month
- **Per IP:** 50 submissions/day
- **Spam detection:** Automatic blocking

---

## 🧪 Testing

### Test in Development

```bash
npm run dev
```

1. Navigate to `/#contact`
2. Fill out form
3. Click "Send Message"
4. Check console for any errors
5. Check your email for submission

### Test Rate Limiting

1. Submit form 3 times quickly
2. 4th submission should show: "Too many submissions. Please wait X minutes."
3. Check localStorage: `contact_form_submissions`

### Test Auto-Save

1. Start typing in the form
2. Wait 500ms
3. Check localStorage: `contact_form_draft`
4. Refresh page
5. Should see "Restore draft?" dialog

### Test Error Handling

**Simulate network error:**
```typescript
// Temporarily in formSubmit.ts
throw new Error('Network error');
```

**Simulate validation error:**
- Submit with invalid email
- Submit with short message (< 10 chars)

---

## 📊 Monitoring

### View Submissions

1. Log in to [web3forms.com](https://web3forms.com/)
2. Go to "Submissions"
3. View all form submissions
4. Export to CSV

### Analytics

Track form performance:
- Submission rate
- Error rate
- Average response time

Add to Contact.tsx:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Track form start
  analytics.track('form_submit_started');
  
  const result = await submitContactFormWithRetry(formData);
  
  if (result.success) {
    analytics.track('form_submit_success');
  } else {
    analytics.track('form_submit_error', { error: result.error });
  }
};
```

---

## 🚨 Troubleshooting

### "Form submission not configured"
**Problem:** Access key not set  
**Solution:** Follow Step 2 above to configure access key

### "Too many submissions"
**Problem:** Rate limit exceeded  
**Solution:** Wait 5 minutes or clear localStorage:
```javascript
localStorage.removeItem('contact_form_submissions');
```

### "Network error"
**Problem:** Can't reach Web3Forms API  
**Solution:** 
- Check internet connection
- Check browser console for CORS errors
- Verify access key is correct

### Submissions not received
**Problem:** Email not arriving  
**Solution:**
1. Check spam folder
2. Verify email in Web3Forms dashboard
3. Check submission logs in Web3Forms
4. Try different email provider

### TypeScript errors
**Problem:** Type mismatches  
**Solution:** Ensure FormData interface matches:
```typescript
interface FormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}
```

---

## 🔒 Security Best Practices

### 1. Never commit access keys to Git

Use environment variables:

```typescript
// .env.local (add to .gitignore)
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here

// formSubmit.ts
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';
```

### 2. Validate on client AND server

Client-side validation is in place, but Web3Forms also validates:
- Email format
- Required fields
- Spam signatures

### 3. Rate limiting

Both client-side (3/5min) and server-side (50/day) limits protect against abuse.

### 4. Content Security Policy

Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  connect-src 'self' https://api.web3forms.com;
  script-src 'self' 'unsafe-inline';
">
```

---

## 💰 Pricing

### Free Tier
- **250 submissions/month**
- Email notifications
- Spam protection
- Auto-reply
- Webhook
- CSV export

### Pro Tier ($9/month)
- **10,000 submissions/month**
- File uploads
- Custom branding
- Advanced analytics
- Priority support

For portfolio websites, **free tier is sufficient**.

---

## 🔄 Migration from Formspree

Old code (Formspree):
```typescript
const response = await fetch('https://formspree.io/f/your_form_id', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

New code (Web3Forms):
```typescript
import { submitContactFormWithRetry } from '../utils/formSubmit';

const result = await submitContactFormWithRetry(formData);
if (result.success) {
  // Handle success
} else {
  // Handle error
}
```

**Benefits of migration:**
- ✅ Better error handling
- ✅ Retry logic
- ✅ Rate limiting
- ✅ Auto-reply support
- ✅ More generous free tier

---

## 📚 Additional Resources

- **Web3Forms Documentation:** https://docs.web3forms.com/
- **API Reference:** https://docs.web3forms.com/api-reference
- **Examples:** https://web3forms.com/examples
- **Support:** support@web3forms.com

---

## ✅ Checklist

Before deploying:
- [ ] Access key configured in `formSubmit.ts`
- [ ] Test form submission in dev
- [ ] Test rate limiting
- [ ] Test auto-save/restore
- [ ] Verify email delivery
- [ ] Configure auto-reply (optional)
- [ ] Set up webhook (optional)
- [ ] Add to .gitignore if using env vars
- [ ] Test on production

---

**Last Updated:** April 22, 2026  
**Maintainer:** Chung Hiến Khang  
**Status:** ✅ Production Ready
