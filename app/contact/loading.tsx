import { Skeleton } from "@/components/ui/skeleton"

const HomePageLoading = () => (
  <div className="container py-12 md:py-16">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <Skeleton className="h-10 w-64 mx-auto mb-4" />
      <Skeleton className="h-16 w-full mx-auto" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="lg:col-span-2">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>

      <div>
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </div>
  </div>
)

export default HomePageLoading
