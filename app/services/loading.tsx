import { Skeleton } from "@/components/ui/skeleton"

export default function ServicesLoading() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-16 w-full mx-auto" />
      </div>

      {/* Services Grid Loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-72 w-full rounded-lg" />
          ))}
      </div>

      {/* Pricing Section Loading */}
      <div className="mt-20">
        <Skeleton className="h-10 w-48 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-96 w-full rounded-lg" />
            ))}
        </div>
      </div>
    </div>
  )
}
