import { Suspense } from "react"
import Hero from "./hero/page"
import HeroLoading from "./hero/heroLoading"

export default function Home() {
  return (
    <div>
      <Suspense fallback={<HeroLoading />}>
        <Hero />
      </Suspense>
    </div>
  )
}
