import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonAvatar() {
  return (
    <div className="flex w-full justify-end items-end gap-4">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-150" />
        <Skeleton className="h-4 w-100" />
      </div>
    </div>
  )
}
