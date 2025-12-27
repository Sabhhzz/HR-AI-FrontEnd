import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Users,
  Mail,
  BarChart3,
  FileText,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function Dashboard() {
  const stats = [
    {
      title: "Total Resumes",
      value: "1,248",
      change: "+12.5%",
      trend: "up",
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "AI Screened",
      value: "1,089",
      change: "+8.3%",
      trend: "up",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Shortlisted",
      value: "342",
      change: "+15.2%",
      trend: "up",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Pending Review",
      value: "159",
      change: "-5.1%",
      trend: "down",
      icon: Clock,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      action: "AI Screening Completed",
      description: "Backend Developer position - 48 resumes processed",
      time: "5 minutes ago",
      icon: Brain,
      status: "success",
    },
    {
      id: 2,
      action: "New Applications",
      description: "15 candidates applied for Product Manager role",
      time: "1 hour ago",
      icon: FileText,
      status: "info",
    },
    {
      id: 3,
      action: "Shortlist Updated",
      description: "12 candidates moved to interview stage",
      time: "3 hours ago",
      icon: CheckCircle2,
      status: "success",
    },
    {
      id: 4,
      action: "Email Campaign Sent",
      description: "Rejection emails sent to 87 candidates",
      time: "5 hours ago",
      icon: Mail,
      status: "info",
    },
  ]

  const quickActions = [
    {
      title: "AI Screening",
      description: "Configure and run resume screening",
      icon: Brain,
      link: "/ai-screening",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
    },
    {
      title: "View Rankings",
      description: "See candidate rankings and scores",
      icon: BarChart3,
      link: "/ranking",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-500",
    },
    {
      title: "Manage Candidates",
      description: "Review and update candidate status",
      icon: Users,
      link: "/candidates",
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-500",
    },
    {
      title: "Automation Rules",
      description: "Set up email automation workflows",
      icon: Mail,
      link: "/automation",
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
                <span className="text-sm font-bold text-primary-foreground">HR</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                AI Recruit
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="gap-1.5">
                <Sparkles className="h-3 w-3" />
                Pro Plan
              </Badge>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">HR Dashboard</h1>
          <p className="text-muted-foreground">Manage your recruitment pipeline with AI-powered insights</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.title}
                className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
                      <div className="mt-2 flex items-center gap-1">
                        <TrendingUp
                          className={`h-4 w-4 ${
                            stat.trend === "up" ? "text-green-500" : "text-red-500 rotate-180"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            stat.trend === "up" ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-muted-foreground">vs last month</span>
                      </div>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Quick Actions</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <Link key={action.title} to={action.link}>
                      <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/50 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 cursor-pointer h-full">
                        <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                        <CardContent className="relative p-6">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                            <Icon className={`h-6 w-6 ${action.iconColor}`} />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold text-card-foreground">{action.title}</h3>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                          <ArrowRight className="mt-4 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Recent Activity</h2>
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-0">
                  <div className="divide-y divide-border/50">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon
                      return (
                        <div key={activity.id} className="p-4 transition-colors hover:bg-muted/50">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                                activity.status === "success"
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-blue-500/10 text-blue-500"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground">{activity.action}</p>
                              <p className="text-sm text-muted-foreground">{activity.description}</p>
                              <p className="mt-1 text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pipeline Status */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle>Pipeline Status</CardTitle>
                <CardDescription>Current recruitment overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">New Applications</span>
                  </div>
                  <Badge variant="secondary">248</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-foreground">In Screening</span>
                  </div>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">159</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-foreground">Shortlisted</span>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">342</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-foreground">Interview Scheduled</span>
                  </div>
                  <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">87</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-foreground">Rejected</span>
                  </div>
                  <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">412</Badge>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>AI screening performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-foreground">Processing Speed</span>
                    <span className="text-sm font-medium text-green-500">Excellent</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[95%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-foreground">Accuracy Rate</span>
                    <span className="text-sm font-medium text-green-500">98.2%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[98%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-foreground">API Usage</span>
                    <span className="text-sm font-medium text-orange-500">67%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[67%] rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/reports">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Reports
                  </Button>
                </Link>
                <Link to="/data-storage">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Data Storage
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}