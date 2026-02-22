import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function FormLoading() {
  return (
    <div className="container py-12 md:py-16 max-w-3xl mx-auto">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>

        {/* Progress Bar Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-2 w-full" />
          <div className="flex justify-between gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-3 w-16" />
              </div>
            ))}
          </div>
        </div>

        {/* Form Card Skeleton */}
        <Card>
          <div className="p-6 space-y-4">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-96" />

            {/* Form Fields */}
            <div className="space-y-4 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
