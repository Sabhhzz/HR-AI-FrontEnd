import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, TrendingUp, Award, Eye } from "lucide-react"

export default function Ranking() {
  const [sortBy, setSortBy] = useState("score")
  const [filterStatus, setFilterStatus] = useState("all")

  const candidates = [
    {
      id: 1,
      rank: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      score: 92,
      matchRate: 95,
      experience: "5+ years",
      keySkills: ["React", "Node.js", "AWS", "Leadership"],
      status: "Selected",
      interviewStatus: "Completed",
      appliedDate: "2025-01-15"
    },
    {
      id: 2,
      rank: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      score: 88,
      matchRate: 91,
      experience: "4 years",
      keySkills: ["Python", "React", "Docker", "Microservices"],
      status: "Selected",
      interviewStatus: "Completed",
      appliedDate: "2025-01-14"
    },
    {
      id: 3,
      rank: 3,
      name: "Lisa Anderson",
      email: "lisa.anderson@email.com",
      score: 85,
      matchRate: 88,
      experience: "6 years",
      keySkills: ["Node.js", "PostgreSQL", "AWS", "CI/CD"],
      status: "Shortlisted",
      interviewStatus: "Scheduled",
      appliedDate: "2025-01-16"
    },
    {
      id: 4,
      rank: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      score: 82,
      matchRate: 85,
      experience: "3 years",
      keySkills: ["React", "TypeScript", "GraphQL"],
      status: "Shortlisted",
      interviewStatus: "Pending",
      appliedDate: "2025-01-17"
    },
    {
      id: 5,
      rank: 5,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@email.com",
      score: 79,
      matchRate: 82,
      experience: "4 years",
      keySkills: ["Vue.js", "Python", "MongoDB"],
      status: "Pending",
      interviewStatus: "Not Scheduled",
      appliedDate: "2025-01-18"
    },
    {
      id: 6,
      rank: 6,
      name: "Robert Taylor",
      email: "robert.taylor@email.com",
      score: 76,
      matchRate: 78,
      experience: "2 years",
      keySkills: ["React", "Node.js", "MySQL"],
      status: "Pending",
      interviewStatus: "Not Scheduled",
      appliedDate: "2025-01-19"
    },
    {
      id: 7,
      rank: 7,
      name: "Jessica Williams",
      email: "jessica.williams@email.com",
      score: 65,
      matchRate: 68,
      experience: "2 years",
      keySkills: ["JavaScript", "HTML", "CSS"],
      status: "Rejected",
      interviewStatus: "Not Required",
      appliedDate: "2025-01-20"
    },
    {
      id: 8,
      rank: 8,
      name: "James Wilson",
      email: "james.wilson@email.com",
      score: 58,
      matchRate: 61,
      experience: "1 year",
      keySkills: ["React", "JavaScript"],
      status: "Rejected",
      interviewStatus: "Not Required",
      appliedDate: "2025-01-21"
    }
  ]

  // Filter by status
  const filteredCandidates = candidates.filter((c) => {
    if (filterStatus === "all") return true
    if (filterStatus === "selected") return c.status === "Selected"
    if (filterStatus === "shortlisted") return c.status === "Shortlisted"
    if (filterStatus === "pending") return c.status === "Pending"
    if (filterStatus === "rejected") return c.status === "Rejected"
    return true
  })

  // Sort candidates
  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score
    if (sortBy === "match") return b.matchRate - a.matchRate
    if (sortBy === "date") return new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
    if (sortBy === "status") {
      const statusOrder = { "Selected": 1, "Shortlisted": 2, "Pending": 3, "Rejected": 4 }
      return statusOrder[a.status] - statusOrder[b.status]
    }
    return 0
  })

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-red-500"
  }

  const getStatusVariant = (status) => {
    if (status === "Selected") return "default"
    if (status === "Shortlisted") return "secondary"
    if (status === "Pending") return "outline"
    if (status === "Rejected") return "destructive"
    return "secondary"
  }

  const getInterviewStatusColor = (status) => {
    if (status === "Completed") return "text-green-500"
    if (status === "Scheduled") return "text-blue-500"
    if (status === "Pending") return "text-yellow-500"
    return "text-muted-foreground"
  }

  const getRankBadge = (rank) => {
    if (rank === 1) return <Award className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Award className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Award className="h-5 w-5 text-orange-600" />
    return <span className="text-muted-foreground font-semibold">#{rank}</span>
  }

  // Statistics
  const selectedCount = candidates.filter(c => c.status === "Selected").length
  const shortlistedCount = candidates.filter(c => c.status === "Shortlisted").length
  const pendingCount = candidates.filter(c => c.status === "Pending").length
  const rejectedCount = candidates.filter(c => c.status === "Rejected").length

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
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-foreground">Resume Rankings</h1>
            <p className="text-muted-foreground">AI-powered candidate ranking based on job requirements</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">Sort by Score</SelectItem>
                <SelectItem value="match">Sort by Match Rate</SelectItem>
                <SelectItem value="date">Sort by Date</SelectItem>
                <SelectItem value="status">Sort by Status</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="selected">Selected ({selectedCount})</SelectItem>
                <SelectItem value="shortlisted">Shortlisted ({shortlistedCount})</SelectItem>
                <SelectItem value="pending">Pending ({pendingCount})</SelectItem>
                <SelectItem value="rejected">Rejected ({rejectedCount})</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Candidate</CardTitle>
              <Award className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sortedCandidates[0]?.name}</div>
              <p className="text-xs text-muted-foreground">Score: {sortedCandidates[0]?.score}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(sortedCandidates.reduce((acc, c) => acc + c.score, 0) / sortedCandidates.length)}
              </div>
              <p className="text-xs text-muted-foreground">Across {sortedCandidates.length} candidates</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Performers</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {sortedCandidates.filter((c) => c.score >= 80).length}
              </div>
              <p className="text-xs text-muted-foreground">Score 80 or above</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Selected</CardTitle>
              <Award className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{selectedCount}</div>
              <p className="text-xs text-muted-foreground">Candidates hired</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {sortedCandidates.map((candidate, index) => (
            <Card key={candidate.id}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      {getRankBadge(index + 1)}
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground">{candidate.name}</h3>
                        <Badge variant={getStatusVariant(candidate.status)}>
                          {candidate.status}
                        </Badge>
                        <span className={`text-xs ${getInterviewStatusColor(candidate.interviewStatus)}`}>
                          Interview: {candidate.interviewStatus}
                        </span>
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">{candidate.email}</p>
                      <div className="flex flex-wrap gap-2">
                        {candidate.keySkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                    <div className="grid grid-cols-3 gap-4 lg:gap-6">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">AI Score</p>
                        <p className={`text-2xl font-bold ${getScoreColor(candidate.score)}`}>
                          {candidate.score}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Match</p>
                        <p className="text-2xl font-bold text-foreground">{candidate.matchRate}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Experience</p>
                        <p className="text-sm font-medium text-foreground">{candidate.experience}</p>
                      </div>
                    </div>

                    <Link to={`/candidates/${candidate.id}`}>
                      <Button variant="outline" className="w-full gap-2 lg:w-auto">
                        <Eye className="h-4 w-4" />
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedCandidates.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No candidates found with the selected filters</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}