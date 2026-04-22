/**
 * Loading Spinner Component
 * 
 * Used as Suspense fallback during lazy loading of routes and components.
 * Displays a centered spinner with optional text.
 */

import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface LoadingSpinnerProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

export function LoadingSpinner({ 
  text = 'Loading...', 
  size = 'md',
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50'
    : 'flex items-center justify-center p-8';

  return (
    <motion.div 
      className={containerClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center gap-4">
        <Loader2 
          className={`${sizeClasses[size]} animate-spin text-blue-600`}
          aria-label="Loading"
        />
        {text && (
          <p className="text-sm text-gray-600 animate-pulse">
            {text}
          </p>
        )}
      </div>
    </motion.div>
  );
}

/**
 * Page Loading Spinner
 * Optimized for full-page route transitions
 */
export function PageLoadingSpinner() {
  return (
    <LoadingSpinner 
      text="Loading page..." 
      size="lg" 
      fullScreen 
    />
  );
}

/**
 * Minimal Loading Spinner
 * For inline loading states
 */
export function InlineLoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-4">
      <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
    </div>
  );
}
