/**
 * Accessibility Utilities
 * 
 * Helper functions and hooks for ensuring WCAG 2.1 AA compliance.
 * These utilities help with keyboard navigation, focus management,
 * and screen reader compatibility.
 */

import { useEffect, RefObject } from 'react';

// ===================================
// ARIA UTILITIES
// ===================================

/**
 * Generate a unique ID for ARIA attributes
 * Useful for linking labels, descriptions, and controls
 */
export function generateAriaId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get ARIA attributes for form fields
 */
export interface FormFieldAriaProps {
  id: string;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
}

export function getFormFieldAria(
  id: string,
  options: {
    required?: boolean;
    invalid?: boolean;
    errorId?: string;
    descriptionId?: string;
    labelId?: string;
  } = {}
): FormFieldAriaProps {
  const aria: FormFieldAriaProps = { id };

  if (options.required) {
    aria['aria-required'] = true;
  }

  if (options.invalid) {
    aria['aria-invalid'] = true;
  }

  const describedBy: string[] = [];
  if (options.errorId && options.invalid) {
    describedBy.push(options.errorId);
  }
  if (options.descriptionId) {
    describedBy.push(options.descriptionId);
  }
  if (describedBy.length > 0) {
    aria['aria-describedby'] = describedBy.join(' ');
  }

  if (options.labelId) {
    aria['aria-labelledby'] = options.labelId;
  }

  return aria;
}

// ===================================
// FOCUS MANAGEMENT
// ===================================

/**
 * Focus trap hook
 * Keeps focus within a container (useful for modals, drawers)
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement>,
  isActive: boolean
) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    
    // Focus first element when activated
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, containerRef]);
}

/**
 * Auto-focus hook
 * Focuses an element when component mounts
 */
export function useAutoFocus(ref: RefObject<HTMLElement>, shouldFocus = true) {
  useEffect(() => {
    if (shouldFocus && ref.current) {
      ref.current.focus();
    }
  }, [shouldFocus, ref]);
}

/**
 * Focus return hook
 * Returns focus to a previously focused element (useful after closing modals)
 */
export function useFocusReturn(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      const previouslyFocused = document.activeElement as HTMLElement;

      return () => {
        // Return focus when closing
        previouslyFocused?.focus();
      };
    }
  }, [isOpen]);
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================

/**
 * Keyboard event handler utilities
 */
export const KeyboardKeys = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

/**
 * Check if an element should be activated (Enter or Space)
 */
export function isActivationKey(key: string): boolean {
  return key === KeyboardKeys.ENTER || key === KeyboardKeys.SPACE;
}

/**
 * Make a non-interactive element keyboard accessible
 * Returns props to spread on the element
 */
export function makeKeyboardAccessible(
  onClick: (e: React.MouseEvent | React.KeyboardEvent) => void,
  options: {
    role?: string;
    tabIndex?: number;
  } = {}
) {
  return {
    role: options.role || 'button',
    tabIndex: options.tabIndex ?? 0,
    onClick,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (isActivationKey(e.key)) {
        e.preventDefault();
        onClick(e);
      }
    },
  };
}

// ===================================
// SCREEN READER UTILITIES
// ===================================

/**
 * Announce to screen readers without visual change
 * Creates a live region for announcements
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Hook to announce changes to screen readers
 */
export function useScreenReaderAnnouncement(
  message: string,
  trigger: boolean | number,
  priority: 'polite' | 'assertive' = 'polite'
) {
  useEffect(() => {
    if (trigger && message) {
      announceToScreenReader(message, priority);
    }
  }, [message, trigger, priority]);
}

// ===================================
// COLOR CONTRAST
// ===================================

/**
 * Calculate relative luminance for color contrast
 * Used to check WCAG contrast ratios
 */
function getRelativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * Returns a number between 1 and 21
 */
export function getContrastRatio(rgb1: [number, number, number], rgb2: [number, number, number]): number {
  const lum1 = getRelativeLuminance(...rgb1);
  const lum2 = getRelativeLuminance(...rgb2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if color contrast meets WCAG standards
 */
export function meetsContrastRequirement(
  foreground: [number, number, number],
  background: [number, number, number],
  level: 'AA' | 'AAA' = 'AA',
  isLargeText = false
): boolean {
  const ratio = getContrastRatio(foreground, background);
  
  if (level === 'AAA') {
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
  }
  
  // AA level
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

// ===================================
// REDUCED MOTION
// ===================================

/**
 * Hook to detect if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

// Missing import
import { useState } from 'react';

// ===================================
// VALIDATION HELPERS
// ===================================

/**
 * Validate if an element has required accessibility attributes
 */
export function validateAccessibility(element: HTMLElement): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check images have alt text
  if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
    errors.push('Image missing alt attribute');
  }

  // Check form inputs have labels
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
    const id = element.getAttribute('id');
    const ariaLabel = element.getAttribute('aria-label');
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    
    if (!ariaLabel && !ariaLabelledBy && id) {
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label) {
        errors.push(`Form field missing label (id: ${id})`);
      }
    }
  }

  // Check buttons have accessible names
  if (element.tagName === 'BUTTON' && !element.textContent?.trim() && !element.getAttribute('aria-label')) {
    errors.push('Button missing accessible name');
  }

  // Check links have href
  if (element.tagName === 'A' && !element.getAttribute('href')) {
    errors.push('Link missing href attribute');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
