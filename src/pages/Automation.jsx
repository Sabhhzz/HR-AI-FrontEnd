import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle2, Clock, Mail, Send } from "lucide-react"

const emailAutomationData = [
  {
    id: 1,
    candidateName: "Michael Chen",
    email: "michael.chen@email.com",
    messageType: "Selection",
    status: "Sent",
    timestamp: "2025-01-20 14:32:00",
    interviewScore: 88,
  },
  {
    id: 2,
    candidateName: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    messageType: "Selection",
    status: "Sent",
    timestamp: "2025-01-20 11:15:00",
    interviewScore: 85,
  },
  {
    id: 3,
    candidateName: "David Kim",
    email: "david.kim@email.com",
    messageType: "Rejection",
    status: "Sent",
    timestamp: "2025-01-19 16:45:00",
    interviewScore: 65,
  },
  {
    id: 4,
    candidateName: "Jessica Williams",
    email: "jessica.williams@email.com",
    messageType: "Rejection",
    status: "Sent",
    timestamp: "2025-01-19 15:20:00",
    interviewScore: 58,
  },
  {
    id: 5,
    candidateName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    messageType: "Selection",
    status: "Pending",
    timestamp: "-",
    interviewScore: 92,
  },
  {
    id: 6,
    candidateName: "James Wilson",
    email: "james.wilson@email.com",
    messageType: "Rejection",
    status: "Pending",
    timestamp: "-",
    interviewScore: 55,
  },
]

export default function Automation() {
  const sentEmails = emailAutomationData.filter((item) => item.status === "Sent")
  const pendingEmails = emailAutomationData.filter((item) => item.status === "Pending")

  const getMessageTypeColor = (type) => {
    return type === "Selection" ? "default" : "destructive"
  }

  const getStatusIcon = (status) => {
    if (status === "Sent") {
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    }
    return <Clock className="h-4 w-4 text-yellow-500" />
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
          <h1 className="mb-2 text-3xl font-bold text-foreground">Post-Interview Automation</h1>
          <p className="text-muted-foreground">Track automated email communication with candidates</p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Emails</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{emailAutomationData.length}</div>
              <p className="text-xs text-muted-foreground">All automated communications</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
              <Send className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{sentEmails.length}</div>
              <p className="text-xs text-muted-foreground">Successfully delivered</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">{pendingEmails.length}</div>
              <p className="text-xs text-muted-foreground">Awaiting interview result</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Email Communication Status</CardTitle>
            <CardDescription>Automated post-interview notifications sent to candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emailAutomationData.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="font-medium text-foreground">{item.candidateName}</h3>
                      <Badge variant={getMessageTypeColor(item.messageType)}>{item.messageType}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.email}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Interview Score: <span className="font-semibold">{item.interviewScore}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="mb-1 flex items-center gap-2">
                        {getStatusIcon(item.status)}
                        <span className="text-sm font-medium">{item.status}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>How Automation Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <div className="flex-1">
                <p className="mb-1 font-medium text-foreground">HR Updates Interview Result</p>
                <p className="text-sm text-muted-foreground">
                  After conducting an interview, HR team enters the interview score, feedback, and final decision
                  (Selected/Rejected) in the candidate detail page.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <div className="flex-1">
                <p className="mb-1 font-medium text-foreground">Automatic Email Trigger</p>
                <p className="text-sm text-muted-foreground">
                  The system automatically generates and sends a professional email to the candidate based on the final
                  status—either a selection offer or a respectful rejection notice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <div className="flex-1">
                <p className="mb-1 font-medium text-foreground">Status Tracking</p>
                <p className="text-sm text-muted-foreground">
                  All email communications are logged in this dashboard with timestamps, allowing HR to track which
                  candidates have been notified and when.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-primary/50 bg-primary/5 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-1 font-medium text-foreground">Human-in-the-Loop Design</p>
                  <p className="text-sm text-muted-foreground">
                    While emails are sent automatically, final hiring decisions are always made by your HR team. AI only
                    provides recommendations—the human decision is what triggers the communication.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}