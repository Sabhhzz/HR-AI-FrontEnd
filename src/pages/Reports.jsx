import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Download, TrendingUp, Users, Clock, CheckCircle2, FileBarChart } from "lucide-react"


export default function Reports() {
  const [timeRange, setTimeRange] = useState("30")

  const summaryStats = {
    totalApplications: 248,
    screened: 248,
    shortlisted: 64,
    interviewed: 32,
    hired: 8,
    rejected: 184,
    avgProcessingTime: "2.1 days",
    avgScore: 72
  }

  const topSkills = [
    { skill: "React", count: 145, percentage: 58 },
    { skill: "Node.js", count: 132, percentage: 53 },
    { skill: "Python", count: 98, percentage: 40 },
    { skill: "AWS", count: 87, percentage: 35 },
    { skill: "Docker", count: 76, percentage: 31 }
  ]

  const weeklyData = [
    { week: "Week 1", applications: 45, shortlisted: 12, hired: 2 },
    { week: "Week 2", applications: 62, shortlisted: 18, hired: 3 },
    { week: "Week 3", applications: 71, shortlisted: 20, hired: 2 },
    { week: "Week 4", applications: 70, shortlisted: 14, hired: 1 }
  ]

  const handleDownloadReport = () => {
    alert("Generating detailed PDF report...")
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">HR</span>
              </div>
              <span className="text-lg font-semibold text-foreground">AI Recruit</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground">Comprehensive recruitment insights and performance metrics</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 Days</SelectItem>
                <SelectItem value="30">Last 30 Days</SelectItem>
                <SelectItem value="90">Last 90 Days</SelectItem>
                <SelectItem value="365">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleDownloadReport} className="gap-2">
              <Download className="h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <FileBarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryStats.totalApplications}</div>
              <p className="text-xs text-muted-foreground">+18% from last period</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shortlist Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round((summaryStats.shortlisted / summaryStats.totalApplications) * 100)}%
              </div>
              <p className="text-xs text-muted-foreground">{summaryStats.shortlisted} candidates</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round((summaryStats.hired / summaryStats.totalApplications) * 100)}%
              </div>
              <p className="text-xs text-muted-foreground">{summaryStats.hired} hired</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Processing Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryStats.avgProcessingTime}</div>
              <p className="text-xs text-muted-foreground">Per application</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recruitment Pipeline</CardTitle>
              <CardDescription>Candidate journey breakdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Applications Received</span>
                    <span className="text-sm font-bold text-foreground">{summaryStats.totalApplications}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">AI Screened</span>
                    <span className="text-sm font-bold text-foreground">{summaryStats.screened}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-blue-500" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Shortlisted</span>
                    <span className="text-sm font-bold text-green-500">{summaryStats.shortlisted}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: `${(summaryStats.shortlisted / summaryStats.totalApplications) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Interviewed</span>
                    <span className="text-sm font-bold text-yellow-500">{summaryStats.interviewed}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-yellow-500"
                      style={{ width: `${(summaryStats.interviewed / summaryStats.totalApplications) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Hired</span>
                    <span className="text-sm font-bold text-purple-500">{summaryStats.hired}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{ width: `${(summaryStats.hired / summaryStats.totalApplications) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Most In-Demand Skills</CardTitle>
              <CardDescription>Skills found in applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topSkills.map((item, index) => (
                <div key={item.skill}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="w-8 justify-center">
                        {index + 1}
                      </Badge>
                      <span className="text-sm font-medium text-foreground">{item.skill}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.count} resumes</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Weekly Performance</CardTitle>
              <CardDescription>Application and hiring trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyData.map((week) => (
                  <div key={week.week} className="rounded-lg border border-border bg-muted/50 p-4">
                    <div className="mb-3 font-semibold text-foreground">{week.week}</div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Applications</p>
                        <p className="text-xl font-bold text-foreground">{week.applications}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Shortlisted</p>
                        <p className="text-xl font-bold text-green-500">{week.shortlisted}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Hired</p>
                        <p className="text-xl font-bold text-purple-500">{week.hired}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}