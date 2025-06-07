"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getNews } from "@/lib/actions/news.actions"
import { getEvents } from "@/lib/actions/events.actions"

interface ActivityItem {
  id: string
  type: "news" | "event"
  title: string
  author?: string
  organizer?: string
  date: string
}

export function RecentActivity() {
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecentActivity = async () => {
      try {
        const [news, events] = await Promise.all([getNews({ limit: 3 }), getEvents({ limit: 3 })])

        const newsActivities: ActivityItem[] = news.map((item) => ({
          id: item.$id,
          type: "news",
          title: item.title,
          author: item.author,
          date: item.date,
        }))

        const eventActivities: ActivityItem[] = events.map((item) => ({
          id: item.$id,
          type: "event",
          title: item.title,
          organizer: item.organizer,
          date: item.date,
        }))

        const allActivities = [...newsActivities, ...eventActivities]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 5)

        setActivities(allActivities)
      } catch (error) {
        console.error("Failed to fetch recent activity:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecentActivity()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="w-9 h-9 bg-muted rounded-full animate-pulse" />
            <div className="space-y-1 flex-1">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-3 bg-muted rounded w-2/3 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center space-x-4">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{activity.type === "news" ? "N" : "E"}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">
              {activity.type === "news" ? `By ${activity.author}` : `Organized by ${activity.organizer}`} •{" "}
              {new Date(activity.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
