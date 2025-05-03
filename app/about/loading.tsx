import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
        <div>
          <Skeleton className="h-10 w-64 mb-4" />
          <Skeleton className="h-20 w-full max-w-2xl" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="space-y-8">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))}
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section>
            <Skeleton className="h-8 w-32 mb-6" />
            <Skeleton className="h-32 w-full" />
          </section>

          <section>
            <Skeleton className="h-8 w-24 mb-6" />
            <div className="space-y-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-6 w-40 mb-3" />
                    <div className="flex flex-wrap gap-2">
                      {Array(4)
                        .fill(0)
                        .map((_, j) => (
                          <Skeleton key={j} className="h-6 w-16 rounded-full" />
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section>
            <Skeleton className="h-8 w-28 mb-6" />
            <Skeleton className="h-48 w-full" />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Loading
