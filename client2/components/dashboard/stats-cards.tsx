import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Newspaper, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Events",
    value: "24",
    description: "+2 from last month",
    icon: Calendar,
  },
  {
    title: "News Articles",
    value: "156",
    description: "+12 from last month",
    icon: Newspaper,
  },
  {
    title: "Team Members",
    value: "89",
    description: "+5 from last month",
    icon: Users,
  },
  {
    title: "Page Views",
    value: "12,543",
    description: "+15% from last month",
    icon: TrendingUp,
  },
]

export function StatsCards() {
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
