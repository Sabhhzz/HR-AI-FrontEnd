import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ArrowLeft, Eye } from "lucide-react"

const mockCandidates = [
  { id: 1, name: "Sarah Johnson", email: "sarah.johnson@email.com", score: 92, status: "Shortlisted" },
  { id: 2, name: "Michael Chen", email: "michael.chen@email.com", score: 88, status: "Shortlisted" },
  { id: 3, name: "Emily Rodriguez", email: "emily.rodriguez@email.com", score: 76, status: "Shortlisted" },
  { id: 4, name: "David Kim", email: "david.kim@email.com", score: 85, status: "Shortlisted" },
  { id: 5, name: "Jessica Williams", email: "jessica.williams@email.com", score: 65, status: "Rejected" },
  { id: 6, name: "James Wilson", email: "james.wilson@email.com", score: 58, status: "Rejected" },
  { id: 7, name: "Lisa Anderson", email: "lisa.anderson@email.com", score: 82, status: "Pending" },
  { id: 8, name: "Robert Taylor", email: "robert.taylor@email.com", score: 79, status: "Pending" },
]

export default function Candidates() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCandidates = mockCandidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || candidate.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "Shortlisted": return "default"
      case "Rejected": return "destructive"
      case "Pending": return "secondary"
      default: return "secondary"
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-red-500"
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
          <h1 className="mb-2 text-3xl font-bold text-foreground">Candidates</h1>
          <p className="text-muted-foreground">View and manage all candidate applications</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Candidates</CardTitle>
            <CardDescription>Search and filter by status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Candidates</CardTitle>
                <CardDescription>
                  Showing {filteredCandidates.length} of {mockCandidates.length} candidates
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredCandidates.length === 0 ? (
                <div className="rounded-lg border border-dashed border-border bg-muted/50 p-12 text-center">
                  <p className="text-sm text-muted-foreground">No candidates found</p>
                </div>
              ) : (
                filteredCandidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{candidate.name}</h3>
                      <p className="text-sm text-muted-foreground">{candidate.email}</p>
                      <div className="mt-2 flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          Resume Score: <span className={`font-semibold ${getScoreColor(candidate.score)}`}>{candidate.score}</span>
                        </span>
                        <Badge variant={getStatusBadgeVariant(candidate.status)}>{candidate.status}</Badge>
                      </div>
                    </div>
                    <Link to={`/candidates/${candidate.id}`}>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}