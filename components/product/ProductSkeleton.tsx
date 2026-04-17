import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="aspect-square w-full rounded-xl" style={{ background: "var(--brand-border)" }} />
      <Skeleton className="h-4 w-3/4 rounded" style={{ background: "var(--brand-border)" }} />
      <Skeleton className="h-3 w-full rounded" style={{ background: "var(--brand-border)" }} />
      <Skeleton className="h-3 w-2/3 rounded" style={{ background: "var(--brand-border)" }} />
      <Skeleton className="h-9 w-full rounded-lg mt-1" style={{ background: "var(--brand-border)" }} />
    </div>
  );
}
