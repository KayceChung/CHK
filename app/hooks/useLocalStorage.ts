import React, { useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem, removeStorageItem } from '../utils/storage';

/**
 * Custom hook for localStorage with automatic persistence
 * @param key - Storage key
 * @param defaultValue - Default value if not found
 * @returns [value, setValue, removeValue]
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  // Initialize state with value from localStorage or default
  const [value, setValue] = useState<T>(() => {
    return getStorageItem<T>(key, defaultValue, 'localStorage');
  });

  // Update localStorage when value changes
  useEffect(() => {
    setStorageItem(key, value, 'localStorage');
  }, [key, value]);

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    removeStorageItem(key, 'localStorage');
    setValue(defaultValue);
  }, [key, defaultValue]);

  return [value, setValue, removeValue];
}

/**
 * Custom hook for sessionStorage with automatic persistence
 * @param key - Storage key
 * @param defaultValue - Default value if not found
 * @returns [value, setValue, removeValue]
 */
export function useSessionStorage<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  // Initialize state with value from sessionStorage or default
  const [value, setValue] = useState<T>(() => {
    return getStorageItem<T>(key, defaultValue, 'sessionStorage');
  });

  // Update sessionStorage when value changes
  useEffect(() => {
    setStorageItem(key, value, 'sessionStorage');
  }, [key, value]);

  // Remove value from sessionStorage
  const removeValue = useCallback(() => {
    removeStorageItem(key, 'sessionStorage');
    setValue(defaultValue);
  }, [key, defaultValue]);

  return [value, setValue, removeValue];
}

/**
 * Custom hook for debounced localStorage
 * Useful for form inputs that save on every keystroke
 * @param key - Storage key
 * @param defaultValue - Default value if not found
 * @param delay - Debounce delay in milliseconds (default: 500ms)
 * @returns [value, setValue, removeValue, isSaving]
 */
export function useDebouncedLocalStorage<T>(
  key: string,
  defaultValue: T,
  delay: number = 500
): [T, React.Dispatch<React.SetStateAction<T>>, () => void, boolean] {
  const [value, setValue] = useState<T>(() => {
    return getStorageItem<T>(key, defaultValue, 'localStorage');
  });
  
  const [isSaving, setIsSaving] = useState(false);

  // Debounced save to localStorage
  useEffect(() => {
    setIsSaving(true);
    const timeoutId = setTimeout(() => {
      setStorageItem(key, value, 'localStorage');
      setIsSaving(false);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [key, value, delay]);

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    removeStorageItem(key, 'localStorage');
    setValue(defaultValue);
    setIsSaving(false);
  }, [key, defaultValue]);

  return [value, setValue, removeValue, isSaving];
}
