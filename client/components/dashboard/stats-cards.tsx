import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Newspaper, Users, TrendingUp } from "lucide-react"

interface StatsCardsProps {
  totalEvents: number
  totalNews: number
  totalUsers: number
  loading: boolean
}

export function StatsCards({ totalEvents, totalNews, totalUsers, loading }: StatsCardsProps) {
  const stats = [
    {
      title: "Total Events",
      value: loading ? "..." : totalEvents.toString(),
      description: "Active events",
      icon: Calendar,
    },
    {
      title: "News Articles",
      value: loading ? "..." : totalNews.toString(),
      description: "Published articles",
      icon: Newspaper,
    },
    {
      title: "Users",
      value: loading ? "..." : totalUsers.toString(),
      description: "Registered users",
      icon: Users,
    },
    {
      title: "Total Content",
      value: loading ? "..." : (totalEvents + totalNews).toString(),
      description: "Combined content",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
