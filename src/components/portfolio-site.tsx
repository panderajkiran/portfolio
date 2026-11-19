import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  certificates,
  educationHistory,
  projects,
  skillGroups,
  technologies,
  workExperience,
} from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "h-14 rounded-full border border-border bg-background/90 shadow-soft backdrop-blur-xl" : "h-16"
        }`}
      >
        <a href="#home" aria-label="Pande Raj Kiran, home" className="group flex items-center gap-3 font-semibold transition-colors hover:text-accent">
          <span className="grid size-9 place-items-center rounded-full bg-foreground text-xs text-background transition-colors group-hover:bg-accent group-hover:text-accent-foreground">PK</span>
          <span className="hidden sm:inline">Pande Raj Kiran</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button asChild variant="hero" size="pill">
            <a href="#contact" className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              Let&apos;s talk <ArrowUpRight />
            </a>
          </Button>
        </div>
        <Button
          type="button"
          variant="quiet"
          size="icon"
          className="rounded-full md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-card p-5 shadow-soft md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-lg transition-colors hover:bg-secondary hover:text-accent"
              >
                {item.label}<ArrowDownRight className="size-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement;
      const isNav = Boolean(target.closest("nav, header"));
      setActive(!isNav && Boolean(target.closest("a, button")));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border transition-[width,height,transform] duration-150 lg:grid ${
        active
          ? "size-8 place-items-center border-accent bg-accent/15 backdrop-blur-sm"
          : "size-3 border-foreground bg-background/80 backdrop-blur-sm"
      }`}
      style={{ transform: `translate3d(${position.x - (active ? 16 : 6)}px, ${position.y - (active ? 16 : 6)}px, 0)` }}
    />
  );
}

function SectionIntro({ label, title }: { label: string; title: string }) {
  return (
    <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-[0.34fr_1fr]">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
        <span className="size-1.5 rounded-full bg-accent" />
        {label}
      </p>
      <h2 className="max-w-4xl font-display text-5xl leading-none md:text-7xl">{title}</h2>
    </div>
  );
}

function HeroPortrait() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -(y * 6), y: x * 6, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <div
      className="relative mx-auto flex w-full max-w-md items-end justify-center select-none [perspective:1000px] md:max-w-[28rem] lg:max-w-[30rem]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Tilt Wrapper */}
      <div
        className="relative flex h-full w-full items-end justify-center transition-transform duration-300 ease-out [transform-style:preserve-3d]"
        style={{
          transform: tilt.active
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : "rotateX(0deg) rotateY(0deg)",
        }}
      >
        {/* Ambient warm glow behind the arch */}
        <div className="pointer-events-none absolute -top-12 left-1/2 size-80 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />

        {/* Outer Architectural Arch Frame (restored behind the circle) */}
        <div className="relative mx-auto flex h-full min-h-[22rem] w-full items-end justify-center overflow-hidden rounded-t-full border border-border bg-background/50 px-6 pt-12 shadow-soft backdrop-blur-sm sm:min-h-[26rem] md:min-h-[32rem] lg:min-h-[35rem]">
          {/* Inner Circle Frame with warm accent glow and 3D rim */}
          <div className="absolute inset-x-8 top-12 aspect-square rounded-full border-2 border-accent/35 bg-gradient-to-b from-accent/20 via-accent/5 to-transparent shadow-[0_12px_40px_oklch(0.72_0.16_58_/_0.18)]">
            <div className="absolute inset-3 rounded-full border border-accent/15" />
          </div>

          {/* Portrait: Large, clear, contrasted, coming out of the circle */}
          <div className="relative z-10 flex h-full w-full items-end justify-center">
            <img
              src="/portrait.png"
              alt="Pande Raj Kiran"
              className="relative z-10 max-h-[27rem] w-auto max-w-[115%] object-contain object-bottom filter contrast-[1.04] brightness-[1.01] drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] drop-shadow-[0_2px_14px_oklch(0.72_0.16_58_/_0.3)] transition-transform duration-500 hover:scale-[1.03] sm:max-h-[30rem] md:max-h-[34rem] lg:max-h-[37rem]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="page-shell pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-hero px-5 pb-5 pt-8 md:min-h-[39rem] md:px-10 md:pt-10 lg:px-14">
        {/* Soft background ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-[28rem] rounded-full bg-accent/10 blur-[100px]" />
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative z-10 flex flex-col md:min-h-[34rem]">
            <p className="reveal-up flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </p>
            <h1 className="editorial-title reveal-up mt-12 max-w-3xl text-6xl sm:text-7xl md:mt-20 md:text-8xl lg:text-[6.4rem]" style={{ animationDelay: "100ms" }}>
              Building digital <span className="italic text-accent">experiences.</span>
            </h1>
            <p className="reveal-up mt-7 max-w-xl text-base leading-7 text-muted-foreground md:text-lg" style={{ animationDelay: "180ms" }}>
              Full-stack developer and UI/UX enthusiast focused on building clean, useful, and engaging digital products.
            </p>
            <div className="reveal-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <Button asChild variant="accent" size="pill" className="font-semibold shadow-soft">
                <a href="#projects">View projects <ArrowDownRight /></a>
              </Button>
              <Button asChild variant="quiet" size="pill">
                <a href="#contact">Let&apos;s talk</a>
              </Button>
            </div>
          </div>
          <div className="reveal-up relative md:self-end" style={{ animationDelay: "200ms" }}>
            <HeroPortrait />
          </div>
        </div>
        <a
          href="#contact"
          className="group relative z-20 mt-4 block rounded-2xl bg-foreground p-5 text-background shadow-soft transition-transform duration-300 hover:-translate-y-1 md:absolute md:bottom-8 md:right-8 md:w-72"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase text-background/60">Select project</p>
              <p className="mt-2 text-lg font-semibold">Available for projects</p>
            </div>
            <span className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <p className="mt-8 max-w-52 text-sm leading-6 text-background/65">Share a few details, and I&apos;ll get back with a clear direction.</p>
        </a>
      </div>
      <div className="grid gap-4 border-b border-border py-6 text-sm sm:grid-cols-3">
        <div className="flex items-center gap-2.5">
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="font-semibold">Full-stack</span>
          <span className="text-muted-foreground">development</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="font-semibold">UI/UX</span>
          <span className="text-muted-foreground">focused</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="font-semibold">B.Tech</span>
          <span className="text-muted-foreground">Data Science</span>
        </div>
      </div>
    </section>
  );
}

function TechStrip() {
  const repeated = [...technologies, ...technologies];
  return (
    <section aria-label="Technologies" className="overflow-hidden border-b border-border py-7">
      <div className="marquee-track flex w-max items-center">
        {repeated.map((technology, index) => (
          <span key={`${technology}-${index}`} className="flex items-center gap-8 pr-8 text-sm font-semibold uppercase text-muted-foreground md:gap-12 md:pr-12">
            {technology}<span className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}

function AboutAndSkills() {
  return (
    <>
      <section id="about" className="page-shell py-24 md:py-36">
        <SectionIntro label="About me" title="Developer who cares about how things feel, not just how they work." />
        <div className="mt-14 grid gap-10 md:grid-cols-[0.34fr_1fr]">
          <p className="text-sm text-muted-foreground">Based in India</p>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-xl leading-9">I&apos;m a B.Tech Data Science student and developer interested in full-stack development, UI/UX, and building practical digital products.</p>
            <div className="space-y-5 text-sm leading-7 text-muted-foreground">
              <p>My work sits between engineering and interface design—turning useful ideas into clear, thoughtful experiences.</p>
              <p className="border-l-2 border-accent pl-4">Education, current focus, interests, and career goals can be refined when you share the details.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="toolkit" className="bg-foreground py-24 text-background md:py-32">
        <div className="page-shell">
          <div className="grid gap-6 border-t border-background/20 pt-6 md:grid-cols-[0.34fr_1fr]">
            <p className="text-xs font-semibold uppercase text-background/55">Toolkit</p>
            <h2 className="max-w-3xl font-display text-5xl leading-none md:text-7xl">Tools I use to move from idea to interface.</h2>
          </div>
          <div className="mt-16 divide-y divide-background/15 border-y border-background/15">
            {skillGroups.map((group, groupIndex) => (
              <div key={group.title} className="grid gap-5 py-7 md:grid-cols-[0.34fr_1fr]">
                <p className="flex items-center gap-3 text-sm text-background/55"><span>0{groupIndex + 1}</span>{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="group flex items-center gap-0 rounded-full border border-background/20 px-4 py-2 text-sm transition-all hover:border-accent hover:text-accent">
                      {skill}<Code2 className="size-0 opacity-0 transition-all group-hover:ml-2 group-hover:size-3.5 group-hover:opacity-100" />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectVisual({
  title,
  tone,
  image,
}: {
  title: string;
  tone: "amber" | "ink" | "mist";
  image?: string;
}) {
  const toneClass =
    tone === "amber"
      ? "bg-project-amber text-foreground"
      : tone === "ink"
      ? "bg-project-ink text-background"
      : "bg-project-mist text-foreground";

  return (
    <div
      className={`relative grid min-h-72 place-items-center overflow-hidden rounded-2xl ${toneClass} md:min-h-[27rem]`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[1.03] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
            }}
          />
          {/* Light, delicate ambient overlay so the image stays bright and vibrant */}
          {tone === "amber" ? (
            <div className="absolute inset-0 bg-project-amber/15 mix-blend-multiply pointer-events-none" />
          ) : tone === "mist" ? (
            <div className="absolute inset-0 bg-black/[0.04] pointer-events-none" />
          ) : (
            <div className="absolute inset-0 bg-black/[0.08] pointer-events-none" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute inset-7 rounded-xl border border-white/25 pointer-events-none" />
          <div className="absolute left-10 top-10 size-20 rounded-full border border-white/30 pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-7 rounded-xl border border-current opacity-20 pointer-events-none" />
          <div className="absolute left-10 top-10 size-20 rounded-full border border-current opacity-30 pointer-events-none" />
        </>
      )}

      {/* Floating Preview Card: elevated with high-contrast backdrop blur so text is 100% readable over bright backgrounds */}
      <div className="relative z-10 w-4/5 rounded-xl border border-border/80 bg-background/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-500 group-hover:scale-[1.02] md:p-6">
        <div className="mb-8 flex items-center justify-between">
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">PROJECT PREVIEW</span>
        </div>
        <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">{title}</p>
        <div className="mt-8 h-1.5 w-2/3 rounded-full bg-secondary" />
        <div className="mt-2.5 h-1.5 w-1/2 rounded-full bg-secondary/70" />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="page-shell py-24 md:py-36">
      <SectionIntro label="Selected work" title="Things I've built." />
      <div className="mt-16 grid gap-7 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.slug} className={`group ${index === 0 ? "md:col-span-2" : ""}`}>
            <Link to="/projects/$slug" params={{ slug: project.slug }} className="block">
              <ProjectVisual title={project.title} tone={project.tone} image={project.image} />
              <div className="grid gap-4 py-6 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs uppercase text-muted-foreground">{project.index} / {project.category}</p>
                  <h3 className="mt-2 font-display text-4xl md:text-5xl">{project.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{project.description}</p>
                </div>
                <span className="grid size-12 place-items-center self-start rounded-full border border-border transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-foreground group-hover:text-background"><ArrowUpRight /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceAndArticles() {
  return (
    <section id="experience" className="bg-card py-24 md:py-32">
      <div className="page-shell grid gap-16 lg:grid-cols-2">
        {/* Left Column: Professional Experience & Practice */}
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Experience & Practice
          </p>
          <h2 className="mt-5 font-display text-5xl leading-none md:text-6xl">The path so far.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Working at the intersection of full-stack engineering and interface design — turning real ideas into thoughtful digital products.
          </p>

          {/* Work Experience */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/75">Work Experience</p>
            <div className="mt-4 border-t border-border">
              {workExperience.map((exp) => (
                <div key={exp.role} className="border-b border-border py-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-semibold uppercase text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {exp.company} <span className="text-muted-foreground font-normal">• {exp.location}</span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates & Achievements */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/75">
                Certificates & Achievements
              </p>
              <span className="text-[11px] text-muted-foreground">Credentials</span>
            </div>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {certificates.map((item) =>
                item.link ? (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-xl border border-border bg-background/50 p-3 sm:p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-background/80"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{item.issuer}</span>
                      <ArrowUpRight className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                    <h4 className="mt-1 text-[13px] font-semibold text-foreground transition-colors group-hover:text-accent">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">{item.description}</p>
                  </a>
                ) : (
                  <div key={item.title} className="rounded-xl border border-dashed border-border/80 bg-background/30 p-3 sm:p-3.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.issuer}</span>
                    <h4 className="mt-1 text-[13px] font-semibold text-foreground/75">{item.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground/75 line-clamp-2">{item.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Academic Journey & Education */}
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Academic Journey
          </p>
          <h2 className="mt-5 font-display text-5xl leading-none md:text-6xl">Education.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A consistent academic path from school to engineering college — built on discipline, curiosity, and a drive to excel.
          </p>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {educationHistory.map((edu) => (
              <div key={edu.degree} className="py-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{edu.degree}</h3>
                    {edu.status && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
                        Pursuing
                      </span>
                    )}
                  </div>
                  <span className="rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                    {edu.score}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <p className="font-medium text-foreground/80">{edu.institution}</p>
                  <span>{edu.period} • {edu.location}</span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{edu.description}</p>

                {edu.details && (
                  <ul className="mt-3 space-y-1.5">
                    {edu.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-[11px] text-muted-foreground/85">
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="page-shell py-8 md:py-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-16 md:px-14 md:py-24">
        <p className="text-xs font-semibold uppercase">Start a conversation</p>
        <h2 className="mt-10 max-w-4xl font-display text-6xl leading-[0.9] md:text-8xl">Have an idea?<br /><span className="italic">Let&apos;s build it.</span></h2>
        <p className="mt-8 max-w-xl leading-7 text-foreground/70">I&apos;m always interested in learning, collaborating, and building useful digital products.</p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild variant="hero" size="pill" className="font-semibold shadow-soft">
            <a href="mailto:kiranpande630@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="size-4" />
              kiranpande630@gmail.com
            </a>
          </Button>
          <Button
            asChild
            variant="quiet"
            size="round"
            className="[&_svg]:size-5 shadow-soft transition-all duration-200 hover:scale-105 hover:border-foreground/40"
          >
            <a
              href="https://www.linkedin.com/in/panderajkiran/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="quiet"
            size="round"
            className="[&_svg]:size-5 shadow-soft transition-all duration-200 hover:scale-105 hover:border-foreground/40"
          >
            <a
              href="https://github.com/panderajkiran"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="page-shell pb-8 pt-12">
      <div className="flex flex-col gap-6 border-t border-border pt-7 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold">Pande Raj Kiran</p>
          <p className="mt-1 text-muted-foreground">Full-stack developer & UI/UX enthusiast</p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href="mailto:kiranpande630@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-3" /> kiranpande630@gmail.com
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.linkedin.com/in/panderajkiran/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-3.5" />
            </a>
            <a
              href="https://github.com/panderajkiran"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-3.5" />
            </a>
          </div>
        </div>
        <div className="text-left text-muted-foreground sm:text-right">
          <p>© 2026 Pande Raj Kiran</p>
          <p className="mt-1">Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
}

export function PortfolioSite() {
  return (
    <main className="overflow-hidden">
      <CustomCursor />
      <Navigation />
      <Hero />
      <TechStrip />
      <AboutAndSkills />
      <Projects />
      <ExperienceAndArticles />
      <Contact />
      <Footer />
    </main>
  );
}

export function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;
  const nextIndex = (projects.indexOf(project) + 1) % projects.length;
  const next = projects[nextIndex];
  if (!next) return null;

  return (
    <main>
      <div className="page-shell py-6"><Link to="/" className="group inline-flex items-center gap-3 text-sm font-semibold transition-colors hover:text-accent"><span className="grid size-9 place-items-center rounded-full bg-foreground text-xs text-background transition-colors group-hover:bg-accent group-hover:text-accent-foreground">PK</span> Back home</Link></div>
      <article className="page-shell pb-16 pt-16 md:pb-28 md:pt-24">
        <p className="text-xs font-semibold uppercase text-muted-foreground">{project.index} / {project.category}</p>
        <h1 className="mt-7 max-w-5xl font-display text-6xl leading-[0.9] md:text-9xl">{project.title}</h1>
        <div className="mt-12"><ProjectVisual title={project.title} tone={project.tone} image={project.image} /></div>
        <div className="mt-16 grid gap-10 border-t border-border pt-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-muted-foreground">Overview</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground shadow-sm transition-transform hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div><p className="text-2xl leading-9">{project.description}</p><Button asChild variant="hero" size="pill" className="mt-8"><a href={project.liveUrl} target="_blank" rel="noreferrer">View live project <ExternalLink /></a></Button></div>
        </div>
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div><p className="text-xs font-semibold uppercase text-muted-foreground">The solution</p><h2 className="mt-5 font-display text-5xl">Built around practical use.</h2><p className="mt-6 leading-7 text-muted-foreground">The current case study uses only confirmed project information. Problem framing, design decisions, challenges, and results can be added once you provide them.</p></div>
          <div className="border-t border-border">{project.features.map((feature) => <div key={feature} className="flex items-center gap-3 border-b border-border py-5"><Check className="size-4 text-accent" /><span>{feature}</span></div>)}</div>
        </div>
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="group mt-24 flex items-end justify-between border-t border-border pt-8"><div><p className="text-xs uppercase text-muted-foreground">Next project</p><p className="mt-3 font-display text-4xl md:text-6xl">{next.title}</p></div><ArrowUpRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
      </article>
    </main>
  );
}