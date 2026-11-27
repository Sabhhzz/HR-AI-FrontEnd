import { useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, Save, Mail } from "lucide-react"

const mockCandidateData = {
  "1": {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    score: 92,
    status: "Shortlisted",
    strengths: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React and Node.js",
      "Previous experience at Fortune 500 companies",
      "Excellent problem-solving skills",
    ],
    weaknesses: ["Limited experience with cloud infrastructure", "No mention of agile methodologies"],
    recommendation: "Shortlist",
    appliedDate: "2025-01-15",
  },
  "2": {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    score: 88,
    status: "Shortlisted",
    strengths: [
      "Strong background in data structures and algorithms",
      "Experience with microservices architecture",
      "Team leadership experience",
    ],
    weaknesses: ["Limited frontend experience", "Resume could be more concise"],
    recommendation: "Shortlist",
    appliedDate: "2025-01-14",
  },
    "3": {
    id: 3, name: "Emily Rodriguez", email: "emily.rodriguez@email.com", score: 76, status: "Shortlisted",
    strengths: ["Solid Vue.js and Python experience", "Good database fundamentals"],
    weaknesses: ["Limited cloud experience", "Short tenure at previous roles"],
    recommendation: "Shortlist", appliedDate: "2025-01-18",
  },
  "4": {
    id: 4, name: "David Kim", email: "david.kim@email.com", score: 85, status: "Shortlisted",
    strengths: ["Strong React and TypeScript skills", "Experience with GraphQL APIs"],
    weaknesses: ["Limited backend experience"],
    recommendation: "Shortlist", appliedDate: "2025-01-17",
  },
  "5": {
    id: 5, name: "Jessica Williams", email: "jessica.williams@email.com", score: 65, status: "Rejected",
    strengths: ["Good HTML/CSS fundamentals"],
    weaknesses: ["Limited professional experience", "Few skills match the role"],
    recommendation: "Reject", appliedDate: "2025-01-20",
  },
  "6": {
    id: 6, name: "James Wilson", email: "james.wilson@email.com", score: 58, status: "Rejected",
    strengths: ["Familiar with React basics"],
    weaknesses: ["Under 1 year of experience", "No backend or cloud exposure"],
    recommendation: "Reject", appliedDate: "2025-01-21",
  },
  "7": {
    id: 7, name: "Lisa Anderson", email: "lisa.anderson@email.com", score: 82, status: "Pending",
    strengths: ["6 years of backend experience", "Strong PostgreSQL and CI/CD background"],
    weaknesses: ["Limited frontend experience"],
    recommendation: "Shortlist", appliedDate: "2025-01-16",
  },
  "8": {
    id: 8, name: "Robert Taylor", email: "robert.taylor@email.com", score: 79, status: "Pending",
    strengths: ["Full-stack JavaScript experience", "Comfortable with MySQL"],
    weaknesses: ["Only 2 years of experience"],
    recommendation: "Shortlist", appliedDate: "2025-01-19",
  },
}

export default function CandidateDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const candidate = Object.hasOwn(mockCandidateData, id) ? mockCandidateData[id] : null

  const [interviewScore, setInterviewScore] = useState("")
  const [interviewFeedback, setInterviewFeedback] = useState("")
  const [finalStatus, setFinalStatus] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  const handleUpdateResult = () => {
  if (isSaving) return // block double clicks

  if (!interviewScore || !interviewFeedback.trim() || !finalStatus) {
    alert("Please fill in all interview fields")
    return
  }

  const score = Number(interviewScore)
  if (!Number.isFinite(score) || score < 0 || score > 100) {
    alert("Interview score must be a number between 0 and 100")
    return
  }

  setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      alert(`Interview result updated! Email will be automatically sent to ${candidate.name}`)
      navigate("/automation")
    }, 1500)
  }

  const getRecommendationIcon = (recommendation) => {
    if (recommendation === "Shortlist") {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />
    }
    return <XCircle className="h-5 w-5 text-red-500" />
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-red-500"
  }
  if (!candidate) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <h1 className="text-3xl font-bold text-foreground">Candidate not found</h1>
      <p className="text-muted-foreground">No candidate exists with ID {id}.</p>
      <Link to="/candidates">
        <Button>Back to Candidates</Button>
      </Link>
    </div>
  )
}
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/candidates" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">HR</span>
              </div>
              <span className="text-lg font-semibold text-foreground">AI Recruit</span>
            </Link>
            <Link to="/candidates">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Candidates
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">{candidate.name}</h1>
              <p className="text-muted-foreground">{candidate.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-base">
                Applied: {new Date(candidate.appliedDate).toLocaleDateString()}
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>AI Resume Analysis</CardTitle>
                <CardDescription>Automated screening results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Resume Score</p>
                    <p className={`text-4xl font-bold ${getScoreColor(candidate.score)}`}>{candidate.score}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getRecommendationIcon(candidate.recommendation)}
                    <div>
                      <p className="text-sm text-muted-foreground">AI Recommendation</p>
                      <p className="text-lg font-semibold text-foreground">{candidate.recommendation}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <h3 className="text-lg font-semibold text-foreground">Strengths</h3>
                  </div>
                  <ul className="space-y-2">
                    {candidate.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    <h3 className="text-lg font-semibold text-foreground">Areas for Consideration</h3>
                  </div>
                  <ul className="space-y-2">
                    {candidate.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500" />
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interview Results</CardTitle>
                <CardDescription>Enter interview outcome and feedback</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="interview-score">Interview Score (0-100)</Label>
                  <Input
                    id="interview-score"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="85"
                    value={interviewScore}
                    onChange={(e) => setInterviewScore(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interview-feedback">Interview Feedback</Label>
                  <Textarea
                    id="interview-feedback"
                    maxLength={2000}
                    placeholder="Candidate demonstrated strong technical skills and good cultural fit. Excelled in system design questions..."
                    value={interviewFeedback}
                    onChange={(e) => setInterviewFeedback(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="final-status">Final Status</Label>
                  <Select value={finalStatus} onValueChange={setFinalStatus}>
                    <SelectTrigger id="final-status">
                      <SelectValue placeholder="Select final decision" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="selected">Selected</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Email will be automatically sent to the candidate after saving
                  </p>
                </div>

                <Button onClick={handleUpdateResult} disabled={isSaving} className="w-full gap-2" size="lg">
                  {isSaving ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Update Interview Result
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-1 text-sm text-muted-foreground">Current Status</p>
                  <Badge variant="default" className="text-base">
                    {candidate.status}
                  </Badge>
                </div>
                <div>
                  <p className="mb-1 text-sm text-muted-foreground">Resume Score</p>
                  <p className={`text-2xl font-bold ${getScoreColor(candidate.score)}`}>{candidate.score}</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-muted-foreground">Email Address</p>
                  <p className="text-sm text-foreground">{candidate.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Conduct Interview</p>
                    <p className="text-xs text-muted-foreground">Schedule and complete candidate interview</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Enter Feedback</p>
                    <p className="text-xs text-muted-foreground">Record interview score and notes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Make Decision</p>
                    <p className="text-xs text-muted-foreground">Select final status (Selected/Rejected)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Automated Email</p>
                    <p className="text-xs text-muted-foreground">System sends notification automatically</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}