import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap, Users, Mail, BarChart3, Brain, Sparkles, Shield, Clock, TrendingUp } from "lucide-react"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
                <span className="text-sm font-bold text-primary-foreground">HR</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                AI Recruit
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/upload">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Upload Resume
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25">
                  HR Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">AI-Powered HR Automation Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                Automate Resume Screening
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Using AI
              </span>
            </h1>

            {/* Subheading */}
            <p className="mb-10 mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Transform your hiring process with intelligent automation. Screen resumes, shortlist candidates, and manage post-interview communication—while keeping final decisions human-driven.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/dashboard">
                <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 text-base px-8 h-12">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/upload">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 text-base px-8 h-12">
                  Upload Resume
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">98%</div>
                <div className="mt-1 text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">10x</div>
                <div className="mt-1 text-sm text-muted-foreground">Faster</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">24/7</div>
                <div className="mt-1 text-sm text-muted-foreground">Automated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Intelligent HR Automation
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade tools designed for modern HR teams
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                  <Brain className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  AI Resume Screening
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automatically analyze and score resumes against job descriptions using advanced AI algorithms
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Smart Shortlisting
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set custom cutoff scores and let AI recommend the best candidates for your roles
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Automated Communication
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Streamline post-interview emails with automated selection and rejection notifications
                </p>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Real-time Analytics
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track screening metrics, shortlist rates, and communication status in one dashboard
                </p>
              </div>
            </div>

            {/* Feature Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Human-in-the-Loop
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI provides recommendations, but final hiring decisions always remain with your HR team
                </p>
              </div>
            </div>

            {/* Feature Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/10">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  Candidate Portal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simple upload interface for candidates to submit resumes and track application status
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Save Time</h3>
              <p className="text-muted-foreground">Reduce screening time from hours to minutes with AI automation</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Improve Quality</h3>
              <p className="text-muted-foreground">Find better matches with data-driven candidate evaluation</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Stay Compliant</h3>
              <p className="text-muted-foreground">Maintain consistent, unbiased screening processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-card-foreground sm:text-4xl">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join leading companies using AI to streamline their recruitment workflow
              </p>
              <Link to="/dashboard">
                <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 text-base px-8 h-12">
                  Access HR Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 AI Recruit. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
