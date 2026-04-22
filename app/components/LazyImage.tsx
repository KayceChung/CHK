/**
 * Lazy Image Component
 * 
 * Optimized image component with:
 * - Lazy loading (Intersection Observer)
 * - WebP support with fallback
 * - Responsive srcset
 * - Blur-up placeholder
 * - Error handling
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  webpSrc?: string;
  srcSet?: string;
  sizes?: string;
  aspectRatio?: string;
  priority?: boolean; // Skip lazy loading for above-fold images
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyImage({
  src,
  alt,
  className = '',
  webpSrc,
  srcSet,
  sizes,
  aspectRatio,
  priority = false,
  onLoad,
  onError,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip observer if priority image

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const containerStyle = aspectRatio
    ? { paddingBottom: aspectRatio }
    : undefined;

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 ${className}`}
      style={containerStyle}
    >
      {/* Blur placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}

      {/* Actual image */}
      {isInView && (
        <picture>
          {/* WebP source if provided */}
          {webpSrc && (
            <source type="image/webp" srcSet={webpSrc} sizes={sizes} />
          )}
          
          {/* Fallback image */}
          <motion.img
            ref={imgRef}
            src={src}
            alt={alt}
            srcSet={srcSet}
            sizes={sizes}
            className={`
              w-full h-full object-cover transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
              ${hasError ? 'hidden' : ''}
            `}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </picture>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Responsive Image Component
 * Automatically generates srcset for common breakpoints
 */
interface ResponsiveImageProps extends Omit<LazyImageProps, 'srcSet' | 'sizes'> {
  baseUrl: string; // Base URL without size suffix
  widths?: number[]; // Available widths (default: [640, 768, 1024, 1280, 1920])
}

export function ResponsiveImage({
  baseUrl,
  widths = [640, 768, 1024, 1280, 1920],
  ...props
}: ResponsiveImageProps) {
  // Generate srcset from widths
  const srcSet = widths
    .map((width) => `${baseUrl}?w=${width} ${width}w`)
    .join(', ');

  // Default sizes (can be overridden)
  const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return <LazyImage {...props} srcSet={srcSet} sizes={sizes} />;
}

/**
 * Avatar Image Component
 * Optimized for profile/avatar images
 */
interface AvatarImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function AvatarImage({ 
  src, 
  alt, 
  size = 'md',
  className = '' 
}: AvatarImageProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  return (
    <LazyImage
      src={src}
      alt={alt}
      className={`rounded-full ${sizeClasses[size]} ${className}`}
      priority
    />
  );
}
