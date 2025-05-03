import { Skeleton } from "@/components/ui/skeleton"

export default function HeroLoading() {
  return (
    <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-8 w-1/2" />
          </div>
          <Skeleton className="h-20 w-full" />
          <div className="flex flex-wrap gap-4 pt-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="flex items-center gap-6 pt-4">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <Skeleton className="relative w-64 h-64 md:w-80 md:h-80 rounded-full" />
        </div>
      </div>
      <div className="mt-20 md:mt-32">
        <Skeleton className="h-6 w-48 mb-6" />
        <div className="flex flex-wrap gap-3">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
        </div>
      </div>
    </div>
  )
}
