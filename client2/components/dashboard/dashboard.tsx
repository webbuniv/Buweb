"use client"

import { useEffect, useState } from "react"
import { StatsCards } from "./stats-cards"
import { RecentActivity } from "./recent-activity"
import { Overview } from "./overview"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getNews } from "@/lib/actions/news.actions"
import { getEvents } from "@/lib/actions/events.actions"
import { getUsers } from "@/lib/actions/user.actions"

export function Dashboard() {
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalNews: 0,
    totalUsers: 0,
    loading: true,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [news, events, users] = await Promise.all([
          getNews({ limit: 1000 }),
          getEvents({ limit: 1000 }),
          getUsers(),
        ])

        setStats({
          totalEvents: events.length,
          totalNews: news.length,
          totalUsers: users.length,
          loading: false,
        })
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error)
        setStats((prev) => ({ ...prev, loading: false }))
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the Bugema University admin dashboard</p>
      </div>

      <StatsCards
        totalEvents={stats.totalEvents}
        totalNews={stats.totalNews}
        totalUsers={stats.totalUsers}
        loading={stats.loading}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Monthly statistics for the current year</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
