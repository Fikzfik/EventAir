import { cn } from "@/app/utils/cn";

interface SkeletonProps {
  className?: string;
}

/** Neo-Brutalist skeleton pulse block */
export const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={cn(
      "animate-pulse bg-black/10 border-3 border-black",
      className
    )}
  />
);

/** Full event card skeleton */
export const EventCardSkeleton = () => (
  <div className="border-3 border-black shadow-brutal bg-white p-6 space-y-4">
    <Skeleton className="h-48 w-full" />
    <Skeleton className="h-3 w-20" />
    <Skeleton className="h-7 w-3/4" />
    <div className="flex justify-between items-center">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-10 w-24" />
    </div>
  </div>
);

/** Bracket match card skeleton */
export const BracketSkeleton = () => (
  <div className="flex gap-16 overflow-x-auto p-8">
    {[4, 2, 1].map((matchCount, col) => (
      <div key={col} className="flex flex-col gap-8 min-w-[260px]">
        <Skeleton className="h-10 w-full" />
        {Array.from({ length: matchCount }).map((_, i) => (
          <div key={i} className="border-3 border-black shadow-brutal bg-white overflow-hidden">
            <div className="p-3 border-b-3 border-black flex justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-8" />
            </div>
            <div className="p-3 flex justify-between">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-8" />
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

/** Generic empty state */
export const EmptyState = ({
  icon,
  title,
  description,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}) => (
  <div className="border-3 border-black shadow-brutal bg-neo-yellow p-12 text-center">
    {icon && <div className="text-5xl mb-4">{icon}</div>}
    <p className="text-2xl font-black uppercase mb-2">{title}</p>
    {description && <p className="font-bold text-black/60">{description}</p>}
  </div>
);

/** Error state */
export const ErrorState = ({ message }: { message?: string }) => (
  <div className="border-3 border-black shadow-brutal bg-neo-pink p-12 text-center">
    <p className="text-4xl mb-2">⚠️</p>
    <p className="text-2xl font-black uppercase mb-2">Something Broke</p>
    <p className="font-bold text-black/70">{message ?? "An unexpected error occurred."}</p>
  </div>
);
