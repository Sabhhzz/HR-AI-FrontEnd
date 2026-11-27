import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ShaderBackground from "@/components/ui/shader-background"
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  Mail,
  BarChart3,
  Brain,
  Sparkles,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Resume Screening",
    desc: "Automatically analyze and score resumes against job descriptions using advanced AI algorithms",
  },
  {
    icon: Users,
    title: "Smart Shortlisting",
    desc: "Set custom cutoff scores and let AI recommend the best candidates for your roles",
  },
  {
    icon: Mail,
    title: "Automated Communication",
    desc: "Streamline post-interview emails with automated selection and rejection notifications",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Track screening metrics, shortlist rates, and communication status in one dashboard",
  },
  {
    icon: CheckCircle2,
    title: "Human-in-the-Loop",
    desc: "AI provides recommendations, but final hiring decisions always remain with your HR team",
  },
  {
    icon: Zap,
    title: "Candidate Portal",
    desc: "Simple upload interface for candidates to submit resumes and track application status",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    desc: "Reduce screening time from hours to minutes with AI automation",
  },
  {
    icon: TrendingUp,
    title: "Improve Quality",
    desc: "Find better matches with data-driven candidate evaluation",
  },
  {
    icon: Shield,
    title: "Stay Consistent",
    desc: "Apply the same screening criteria to every candidate",
  },
]

const stats = [
  { value: "98%", label: "Accuracy" },
  { value: "10x", label: "Faster" },
  { value: "24/7", label: "Automated" },
]

// --- Scroll-fade tuning ---
const BASE_OVERLAY = 0.3 // darkness at the very top (hero)
const END_OVERLAY = 0.8 // darkness after scrolling (1 = pure black)
const FADE_DISTANCE = 0.9 // viewport-heights to scroll before reaching END_OVERLAY

export default function Landing() {
  const overlayRef = useRef(null)

  // Black page background (covers overscroll areas), restored when leaving the page
  useEffect(() => {
    const prev = document.body.style.backgroundColor
    document.body.style.backgroundColor = "#000"
    return () => {
      document.body.style.backgroundColor = prev
    }
  }, [])

  // Scroll-linked fade: updates the overlay via ref, throttled with rAF
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const range = window.innerHeight * FADE_DISTANCE
      const p = Math.min(Math.max(window.scrollY / range, 0), 1)
      const eased = p * p * (3 - 2 * p) // smoothstep

      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(
          BASE_OVERLAY + (END_OVERLAY - BASE_OVERLAY) * eased
        )
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Animated shader background */}
      <ShaderBackground />

      {/* Black overlay: BASE_OVERLAY at the top -> END_OVERLAY after the hero */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 -z-10 bg-black"
        style={{ opacity: BASE_OVERLAY }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-background/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/30">
                <span className="text-sm font-bold text-primary-foreground">HR</span>
              </div>
              <span className="text-xl font-bold text-white">AI Recruit</span>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/upload">
                <Button variant="ghost" className="text-white/70 hover:bg-white/10 hover:text-white">
                  Upload Resume
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-white text-black hover:bg-white/90">HR Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-violet-300" />
              <span className="font-medium text-white">AI-Powered HR Automation Platform</span>
            </div>

            <h1 className="mb-6 text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Automate Resume Screening
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                Using AI
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              Transform your hiring process with intelligent automation. Screen resumes, shortlist
              candidates, and manage post-interview communication—while keeping final decisions
              human-driven.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/login">
                <Button
                  size="lg"
                  className="group h-12 bg-white px-8 text-base text-black shadow-xl shadow-white/10 hover:bg-white/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/upload">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-white/20 bg-white/5 px-8 text-base text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
                >
                  Upload Resume
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-sm text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Intelligent HR Automation
            </h2>
            <p className="text-lg text-white/70">Enterprise-grade tools designed for modern HR teams</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 ring-1 ring-primary/20">
                    <Icon className="h-7 w-7 text-violet-300" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                  <p className="leading-relaxed text-white/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md">
                  <Icon className="h-8 w-8 text-violet-300" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                <p className="text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-white/10 bg-card/50 p-12 text-center backdrop-blur-md">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Streamline your recruitment workflow with AI-assisted screening
            </p>
            <Link to="/login">
              <Button
                size="lg"
                className="group h-12 bg-white px-8 text-base text-black shadow-xl shadow-white/10 hover:bg-white/90"
              >
                HR Login
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background/40 px-4 py-10 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© 2025 AI Recruit. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Contact"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}