"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/") // Redirect to the home page
    }, 5000) // 30 seconds

    return () => clearTimeout(timer)
  }, [router])

  return (
    <section className="py-24 text-center">
      <div className="container">
        <h2 className="text-2xl font-medium">Not Found</h2>
        <p className="opacity-50">Could not find requested resource</p>
        <Button asChild className="mt-3">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </section>
  )
}
