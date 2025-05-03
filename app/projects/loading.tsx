import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-16 w-full mx-auto" />
      </div>

      {/* Filter buttons loading */}
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-full" />
          ))}
      </div>

      {/* Projects grid loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-80 w-full rounded-lg" />
          ))}
      </div>
    </div>
  )
}
