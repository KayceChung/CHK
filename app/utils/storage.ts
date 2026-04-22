/**
 * Storage utility functions with comprehensive error handling
 * Handles QuotaExceededError, CorruptedData, and BrowserStorageDisabled
 */

// Version for data structure changes
const STORAGE_VERSION = 1;

/**
 * Check if localStorage is available and accessible
 */
export function isStorageAvailable(type: 'localStorage' | 'sessionStorage' = 'localStorage'): boolean {
  try {
    const storage = type === 'localStorage' ? window.localStorage : window.sessionStorage;
    const testKey = '__storage_test__';
    storage.setItem(testKey, 'test');
    storage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Get item from storage with error handling
 */
export function getStorageItem<T>(
  key: string,
  defaultValue: T,
  type: 'localStorage' | 'sessionStorage' = 'localStorage'
): T {
  try {
    const storage = type === 'localStorage' ? window.localStorage : window.sessionStorage;
    const item = storage.getItem(key);
    
    if (!item) {
      return defaultValue;
    }
    
    const parsed = JSON.parse(item);
    
    // Check version compatibility
    if (parsed.v !== STORAGE_VERSION) {
      console.warn(`Storage version mismatch for key "${key}". Clearing.`);
      storage.removeItem(key);
      return defaultValue;
    }
    
    return parsed.value;
  } catch (e) {
    // Corrupted data - silent fix
    if (import.meta.env.DEV) {
      console.error(`Error reading from ${type}:`, e);
    }
    return defaultValue;
  }
}

/**
 * Set item in storage with error handling
 */
export function setStorageItem<T>(
  key: string,
  value: T,
  type: 'localStorage' | 'sessionStorage' = 'localStorage'
): boolean {
  try {
    const storage = type === 'localStorage' ? window.localStorage : window.sessionStorage;
    const data = {
      v: STORAGE_VERSION,
      value,
      savedAt: new Date().toISOString()
    };
    
    storage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    if (e instanceof Error && e.name === 'QuotaExceededError') {
      // Storage is full - try to clear non-essential data
      console.warn('Storage quota exceeded. Attempting to clear non-essential data.');
      clearNonEssentialData(type);
      
      // Retry once
      try {
        const storage = type === 'localStorage' ? window.localStorage : window.sessionStorage;
        const data = {
          v: STORAGE_VERSION,
          value,
          savedAt: new Date().toISOString()
        };
        storage.setItem(key, JSON.stringify(data));
        return true;
      } catch (retryError) {
        console.error('Failed to save after clearing non-essential data');
        return false;
      }
    }
    
    if (import.meta.env.DEV) {
      console.error(`Error writing to ${type}:`, e);
    }
    return false;
  }
}

/**
 * Remove item from storage
 */
export function removeStorageItem(
  key: string,
  type: 'localStorage' | 'sessionStorage' = 'localStorage'
): void {
  try {
    const storage = type === 'localStorage' ? window.localStorage : window.sessionStorage;
    storage.removeItem(key);
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error(`Error removing from ${type}:`, e);
    }
  }
}

/**
 * Clear non-essential data to free up space
 */
function clearNonEssentialData(type: 'localStorage' | 'sessionStorage'): void {
  const storage = type === 'localStorage' ? window.localStorage : window.sessionStorage;
  
  // Non-essential keys (safe to clear)
  const nonEssentialKeys = [
    'projects_filters',
    'session_state',
    'scroll_position'
  ];
  
  nonEssentialKeys.forEach(key => {
    try {
      storage.removeItem(key);
    } catch (e) {
      // Ignore errors during cleanup
    }
  });
  
  // Clear old session data (older than 7 days)
  if (type === 'localStorage') {
    const keys = Object.keys(storage);
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    
    keys.forEach(key => {
      try {
        const item = storage.getItem(key);
        if (item) {
          const parsed = JSON.parse(item);
          if (parsed.savedAt && new Date(parsed.savedAt).getTime() < sevenDaysAgo) {
            storage.removeItem(key);
          }
        }
      } catch (e) {
        // Ignore errors during cleanup
      }
    });
  }
}

/**
 * Storage keys constants
 */
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  CONTACT_FORM_DRAFT: 'contact_form_draft',
  SESSION_STATE: 'session_state',
  PROJECTS_FILTERS: 'projects_filters',
  LANGUAGE: 'language'
} as const;
