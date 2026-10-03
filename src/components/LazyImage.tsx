import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  containerClassName?: string;
}

/**
 * LazyImage component:
 * - Employs native browser `loading="lazy"` and `decoding="async"`
 * - Includes IntersectionObserver for progressive eager loading before viewport entrance
 * - Zero-CLS placeholder with subtle pulse shimmer
 * - Smooth opacity fade-in once the asset is decoded
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  aspectRatio = 'aspect-video',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is unavailable, load immediately
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // preload 200px before appearing in viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const imageSource = error && fallbackSrc ? fallbackSrc : src;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${aspectRatio} ${containerClassName}`}
    >
      {/* Skeleton Shimmer Placeholder while loading */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-slate-200/70 dark:bg-slate-800/60 animate-pulse rounded-inherit" />
      )}

      {isInView && (
        <img
          src={imageSource}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
