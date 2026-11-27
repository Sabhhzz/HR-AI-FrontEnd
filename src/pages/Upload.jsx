import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload as UploadIcon, CheckCircle2, ArrowLeft } from "lucide-react"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx"]
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

export default function Upload() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSubmitting) return // block double submits

    if (!formData.resume) {
      setError("Please select a resume to upload.")
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setSubmitted(true)
    }, 500)
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const ext = file.name.split(".").pop().toLowerCase()
    const badType =
      !ALLOWED_EXTENSIONS.includes(ext) || (file.type && !ALLOWED_TYPES.includes(file.type))

    if (badType) {
      setError("Please upload a PDF or Word document (.pdf, .doc, .docx).")
      setFormData({ ...formData, resume: null })
      e.target.value = ""
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("File is too large. Maximum size is 5 MB.")
      setFormData({ ...formData, resume: null })
      e.target.value = ""
      return
    }

    setError("")
    setFormData({ ...formData, resume: file })
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-card-foreground">Resume Submitted Successfully!</h2>
              <p className="mb-6 text-muted-foreground">
                Thank you for applying. Our HR team will review your application and get back to you soon.
              </p>
              <Link to="/">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">HR</span>
              </div>
              <span className="text-lg font-semibold text-foreground">AI Recruit</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-lg">
          <CardContent className="pt-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Submit Your Resume</h2>
              <p className="text-sm text-muted-foreground">
                Upload your resume and our AI will automatically screen it for relevant positions
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  maxLength={254}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume (PDF or DOCX, max 5 MB)</Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="cursor-pointer"
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
                {formData.resume && (
                  <p className="text-sm text-muted-foreground">Selected: {formData.resume.name}</p>
                )}
              </div>

              <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                <UploadIcon className="h-4 w-4" />
                {isSubmitting ? "Submitting..." : "Submit Resume"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Demo only: files are not uploaded or stored anywhere.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}