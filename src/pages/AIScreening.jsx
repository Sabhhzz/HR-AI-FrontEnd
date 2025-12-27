import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, X, Zap, FileText, TrendingUp } from "lucide-react"

export default function AIScreening() {
  const [keywords, setKeywords] = useState([])
  const [currentKeyword, setCurrentKeyword] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [minExperience, setMinExperience] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState(null)

  const addKeyword = () => {
    if (currentKeyword.trim() && !keywords.includes(currentKeyword.trim())) {
      setKeywords([...keywords, currentKeyword.trim()])
      setCurrentKeyword("")
    }
  }

  const removeKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword))
  }

  const handleRunScreening = () => {
    if (!jobDescription || keywords.length === 0) {
      alert("Please add job description and at least one keyword")
      return
    }

    setIsProcessing(true)
    
    setTimeout(() => {
      const mockResults = {
        totalResumes: 248,
        screened: 248,
        shortlisted: 64,
        avgScore: 72,
        topKeywords: keywords.slice(0, 5),
        processingTime: "2.3s"
      }
      setResults(mockResults)
      setIsProcessing(false)
    }, 2500)
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
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">AI Resume Screening Engine</h1>
          <p className="text-muted-foreground">Configure keywords and criteria for intelligent resume analysis</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Job Requirements</CardTitle>
                <CardDescription>Define the role and required qualifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="job-desc">Job Description</Label>
                  <Textarea
                    id="job-desc"
                    placeholder="E.g., We are looking for a Senior Full Stack Developer with expertise in React, Node.js, and cloud technologies..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="min-exp">Minimum Years of Experience</Label>
                  <Input
                    id="min-exp"
                    type="number"
                    placeholder="3"
                    value={minExperience}
                    onChange={(e) => setMinExperience(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keywords & Skills</CardTitle>
                <CardDescription>Add keywords that AI should look for in resumes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="e.g., React, Python, Leadership"
                    value={currentKeyword}
                    onChange={(e) => setCurrentKeyword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                  />
                  <Button onClick={addKeyword} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>

                {keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <Badge key={keyword} variant="secondary" className="gap-2 px-3 py-1">
                        {keyword}
                        <X
                          className="h-3 w-3 cursor-pointer hover:text-destructive"
                          onClick={() => removeKeyword(keyword)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}

                {keywords.length === 0 && (
                  <div className="rounded-lg border border-dashed border-border bg-muted/50 p-8 text-center">
                    <p className="text-sm text-muted-foreground">No keywords added yet. Add skills and technologies to screen for.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Button
              onClick={handleRunScreening}
              disabled={isProcessing || !jobDescription || keywords.length === 0}
              className="w-full gap-2"
              size="lg"
            >
              {isProcessing ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  Processing Resumes...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4" />
                  Run AI Screening
                </>
              )}
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Keyword Matching</p>
                    <p className="text-xs text-muted-foreground">AI scans resumes for specified keywords and skills</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Experience Analysis</p>
                    <p className="text-xs text-muted-foreground">Evaluates years of experience and relevance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Score Calculation</p>
                    <p className="text-xs text-muted-foreground">Generates 0-100 score based on match quality</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Auto-Shortlisting</p>
                    <p className="text-xs text-muted-foreground">Top candidates automatically shortlisted</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {results && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Screening Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Resumes</p>
                    <p className="text-2xl font-bold text-foreground">{results.totalResumes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Shortlisted</p>
                    <p className="text-2xl font-bold text-green-500">{results.shortlisted}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                    <p className="text-2xl font-bold text-foreground">{results.avgScore}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Processing Time</p>
                    <p className="text-lg font-semibold text-foreground">{results.processingTime}</p>
                  </div>
                  <Link to="/candidates">
                    <Button className="w-full gap-2">
                      <FileText className="h-4 w-4" />
                      View Candidates
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}