"use client"

import { useEffect, useState } from "react"
import SectionTitle from "@/components/Common/SectionTitle"
import SingleBlog from "./SingleBlog"
import { getBlogs} from "@/lib/actions/blogs.actions"
import { Skeleton } from "@/components/ui/skeleton"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await getBlogs()
        setPosts(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch blogs")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-80 mx-auto mb-4" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-video w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/10">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold mb-2">Unable to load blogs</h3>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Latest University News & Insights"
          paragraph="Stay updated with the latest developments, research breakthroughs, and stories from our vibrant university community."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <SingleBlog key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
