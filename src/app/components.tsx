"use client";

import { useState } from "react";

/* ─────────────── NAVBAR ─────────────── */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold gradient-text">
          OC
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Om_Chavan_Resume.pdf"
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted hover:text-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Om_Chavan_Resume.pdf"
              target="_blank"
              className="text-sm px-4 py-2 rounded-lg bg-accent text-white text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─────────────── HERO ─────────────── */
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p className="text-accent text-sm font-mono mb-4 fade-up fade-up-delay-1">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 fade-up fade-up-delay-2">
          Om <span className="gradient-text">Chavan</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-light font-light mb-6 fade-up fade-up-delay-3">
          AI Full Stack Developer
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed fade-up fade-up-delay-4">
          I build enterprise-grade GRC and compliance platforms using React,
          Next.js, Python, and FastAPI. Specializing in AI-assisted development
          and governance technology.
        </p>
        <div className="flex items-center justify-center gap-4 fade-up fade-up-delay-5">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border hover:border-accent/50 text-sm font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT ─────────────── */
export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="About Me" />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-muted-light leading-relaxed mb-4">
              I&apos;m an AI Full Stack Developer at Glimmora International with
              1.5+ years of experience building enterprise applications in the
              governance, risk, and compliance space.
            </p>
            <p className="text-muted-light leading-relaxed mb-4">
              I started my career building a GRC and TPRM platform on Mendix —
              handling risk assessment workflows, third-party vendor onboarding,
              audit tracking, and compliance systems. Within a year, I
              progressed from trainee to core contributor.
            </p>
            <p className="text-muted-light leading-relaxed">
              In 2026, I transitioned to AI-assisted full-stack development,
              building production-ready applications with React, Next.js,
              Python, and FastAPI. I integrate LLMs into compliance workflows
              for smarter automation and decision support.
            </p>
          </div>
          <div className="space-y-4">
            <InfoCard icon="briefcase" label="Current Role" value="AI Full Stack Developer" />
            <InfoCard icon="building" label="Company" value="Glimmora International" />
            <InfoCard icon="map" label="Location" value="Nashik, India (Remote)" />
            <InfoCard icon="graduation" label="Education" value="BCA — SPPU, 2024" />
            <InfoCard icon="globe" label="Languages" value="English, Hindi, Marathi" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  const icons: Record<string, React.ReactNode> = {
    briefcase: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
    ),
    building: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" /></svg>
    ),
    map: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    graduation: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /></svg>
    ),
    globe: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    ),
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border glow transition-all">
      <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center text-accent shrink-0">
        {icons[icon]}
      </div>
      <div>
        <p className="text-xs text-muted">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

/* ─────────────── SKILLS ─────────────── */
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "REST APIs", "Node.js", "PostgreSQL", "SQL"],
  },
  {
    title: "AI & Low-Code",
    skills: ["Anthropic Claude", "Prompt Engineering", "AI-Assisted Dev", "Mendix (Web & Mobile)"],
  },
  {
    title: "Domain & Other",
    skills: ["GRC", "TPRM", "Risk Management", "Compliance", "RBAC", "Workflow Automation", "Git", "CI/CD"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Technical Skills" />
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-card border border-border glow transition-all"
            >
              <h3 className="text-sm font-semibold text-accent mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent-dim text-muted-light border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── EXPERIENCE ─────────────── */
const experiences = [
  {
    role: "AI Full Stack Developer",
    company: "Glimmora International",
    period: "Jan 2026 – Present",
    type: "Remote",
    points: [
      "Developing and deploying AI-enabled full-stack web applications using React, Next.js, Python, and FastAPI",
      "Integrating LLMs into governance, risk, and compliance workflows for process automation",
      "Designing secure REST APIs with role-based access control (RBAC) for enterprise clients",
      "Building scalable backend services with PostgreSQL and end-to-end deployment",
    ],
  },
  {
    role: "Mendix Developer",
    company: "Glimmora International",
    period: "Oct 2024 – Jan 2026",
    type: "Full-time",
    points: [
      "Core contributor to an enterprise GRC and TPRM platform built on Mendix",
      "Implemented workflows for risk assessment, vendor onboarding, audit tracking, and compliance",
      "Designed RBAC and secure data segregation across multi-tenant environments",
      "Built reporting dashboards, risk registers, and automated approval chains",
      "Progressed from trainee to core developer within one year",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Experience" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-background hidden md:block" />

                <div className="p-6 rounded-xl bg-card border border-border glow transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold">{exp.role}</h3>
                    <span className="text-xs text-muted font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent mb-4">
                    {exp.company}{" "}
                    <span className="text-muted">· {exp.type}</span>
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-light leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1 shrink-0">&#8250;</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROJECTS ─────────────── */
const projects = [
  {
    title: "Enterprise GRC & TPRM Platform",
    description:
      "Comprehensive governance, risk, and compliance platform supporting third-party risk management for enterprise clients. Features audit workflows, risk scoring, vendor assessments, and multi-level approval chains with secure role-based data access.",
    tags: ["Mendix", "GRC", "TPRM", "RBAC", "Compliance"],
  },
  {
    title: "AI-Powered Web Applications",
    description:
      "Multiple full-stack applications built with AI-assisted development methodology. Integrated LLM capabilities for intelligent workflow automation and data-driven decision support tools across governance and compliance domains.",
    tags: ["React", "Next.js", "FastAPI", "Python", "Claude AI"],
  },
  {
    title: "Compliance Workflow Automation",
    description:
      "Automated compliance tracking system with notification engines, approval chains, and real-time monitoring dashboards. Reduced manual compliance processes through intelligent workflow orchestration.",
    tags: ["Workflow Automation", "PostgreSQL", "REST APIs", "Dashboards"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl bg-card border border-border glow transition-all hover:border-accent/30 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-base font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-light leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-accent-dim text-accent border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CONTACT ─────────────── */
export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle label="Get In Touch" center />
        <p className="text-muted-light mb-10 leading-relaxed">
          I&apos;m open to remote opportunities in full-stack development, GRC
          technology, and AI-assisted development. Whether you have a project in
          mind or just want to connect — feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:omjc44@gmail.com"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors text-center"
          >
            omjc44@gmail.com
          </a>
          <a
            href="tel:+918766822825"
            className="w-full sm:w-auto px-8 py-3 rounded-lg border border-border hover:border-accent/50 text-sm font-medium transition-colors text-center"
          >
            +91 8766822825
          </a>
        </div>

        {/* Footer */}
        <div className="pt-10 border-t border-border">
          <p className="text-xs text-muted">
            &copy; 2026 Om Chavan. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SHARED ─────────────── */
function SectionTitle({ label, center }: { label: string; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-2xl font-bold mb-2">{label}</h2>
      <div
        className={`w-12 h-1 rounded-full bg-accent ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
