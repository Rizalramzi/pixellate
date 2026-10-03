import React from 'react';

interface SectionSkeletonProps {
  title?: string;
  minHeight?: string;
  className?: string;
}

/**
 * SectionSkeleton provides a zero-CLS (Cumulative Layout Shift) placeholder
 * with an elegant pulse shimmer matching Pixellate's clean tech aesthetic
 * in both light and dark themes.
 */
export const SectionSkeleton: React.FC<SectionSkeletonProps> = ({
  title,
  minHeight = 'min-h-[420px]',
  className = '',
}) => {
  return (
    <div
      className={`w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 ${minHeight} flex flex-col justify-center items-center relative overflow-hidden transition-colors ${className}`}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
        {/* Badge Placeholder */}
        <div className="h-6 w-36 bg-blue-100/70 dark:bg-blue-950/50 rounded-full animate-pulse mb-4" />

        {/* Title Placeholder */}
        <div className="h-10 w-3/4 max-w-md bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse mb-3" />

        {/* Subtitle Placeholder */}
        <div className="h-4 w-2/3 max-w-lg bg-slate-100 dark:bg-slate-800/60 rounded-md animate-pulse mb-10" />

        {/* Content Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="h-48 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 p-6 flex flex-col justify-between animate-pulse">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800/60 rounded" />
            </div>
          </div>
          <div className="h-48 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 p-6 flex flex-col justify-between animate-pulse hidden md:flex">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800/60 rounded" />
            </div>
          </div>
          <div className="h-48 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 p-6 flex flex-col justify-between animate-pulse hidden md:flex">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800/60 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSkeleton;
