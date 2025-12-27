import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Database, Download, Trash2, Search, FileText, Archive } from "lucide-react"

export default function DataStorage() {
  const [searchQuery, setSearchQuery] = useState("")

  const storageData = [
    {
      id: 1,
      category: "Candidate Resumes",
      count: 248,
      size: "145 MB",
      lastUpdated: "2025-01-20",
      status: "Active"
    },
    {
      id: 2,
      category: "Interview Recordings",
      count: 32,
      size: "2.3 GB",
      lastUpdated: "2025-01-20",
      status: "Active"
    },
    {
      id: 3,
      category: "Screening Reports",
      count: 248,
      size: "89 MB",
      lastUpdated: "2025-01-20",
      status: "Active"
    },
    {
      id: 4,
      category: "Email Communications",
      count: 156,
      size: "12 MB",
      lastUpdated: "2025-01-19",
      status: "Active"
    },
    {
      id: 5,
      category: "Analytics Data",
      count: 1,
      size: "34 MB",
      lastUpdated: "2025-01-20",
      status: "Active"
    },
    {
      id: 6,
      category: "Archived Applications (2024 Q3)",
      count: 512,
      size: "287 MB",
      lastUpdated: "2024-10-15",
      status: "Archived"
    }
  ]

  const recentActivity = [
    { action: "Resume uploaded", candidate: "Sarah Johnson", time: "2 minutes ago" },
    { action: "Data exported", type: "PDF Report", time: "15 minutes ago" },
    { action: "Backup completed", type: "Full System", time: "1 hour ago" },
    { action: "Interview data saved", candidate: "Michael Chen", time: "2 hours ago" }
  ]

  const filteredData = storageData.filter((item) =>
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalSize = storageData.reduce((acc, item) => {
    const size = parseFloat(item.size)
    const unit = item.size.includes("GB") ? 1024 : 1
    return acc + size * unit
  }, 0)

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
            <Link to="/dashboard">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Data Storage & Management</h1>
          <p className="text-muted-foreground">Manage and monitor all recruitment data and files</p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Storage</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(totalSize / 1024).toFixed(2)} GB</div>
              <p className="text-xs text-muted-foreground">Across all categories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Files</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,197</div>
              <p className="text-xs text-muted-foreground">Active documents</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <Archive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Data categories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Backup</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1h ago</div>
              <p className="text-xs text-muted-foreground">Automatic backup</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Storage Categories</CardTitle>
                  <CardDescription>Detailed breakdown of stored data</CardDescription>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredData.map((item) => (
                  <div key={item.id} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold text-foreground">{item.category}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>{item.count} files</span>
                          <span>•</span>
                          <span>{item.size}</span>
                          <span>•</span>
                          <Badge variant={item.status === "Active" ? "default" : "secondary"} className="text-xs">
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Export
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-2" variant="outline">
                  <Download className="h-4 w-4" />
                  Export All Data
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <Database className="h-4 w-4" />
                  Create Backup
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <Archive className="h-4 w-4" />
                  Archive Old Data
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <FileText className="h-4 w-4" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest data operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <Database className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.candidate || activity.type} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="mb-1 text-sm font-medium text-foreground">Active Applications</p>
                  <p className="text-xs text-muted-foreground">Stored for 2 years</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-foreground">Archived Data</p>
                  <p className="text-xs text-muted-foreground">Stored for 5 years</p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-foreground">Interview Records</p>
                  <p className="text-xs text-muted-foreground">Stored for 1 year</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}