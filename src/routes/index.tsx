import { createFileRoute } from "@tanstack/react-router";
import { LangProvider, useLang } from "@/lib/lang-context";
import { ParticleNetwork } from "@/components/particle-network";
import { useReveal } from "@/lib/use-reveal";
import { timelineItems } from "@/lib/i18n";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FlaskConical,
  Cpu,
  Bot,
  ExternalLink,
  BookOpen,
  GraduationCap,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Igor Bione — Profissional de Dados Full Stack" },
      { name: "description", content: "Portfolio de Igor Bione: cientista de dados, biólogo, PhD em Ecologia & Evolução. Engenharia de dados, ML e IA aplicada." },
    ],
  }),
  component: () => (
    <LangProvider>
      <Portfolio />
    </LangProvider>
  ),
});

function Portfolio() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Teaching />
      <Writing />
      <Papers />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav() {
  const { t, lang, setLang } = useLang();
  const items = [
    ["about", t("nav_about")],
    ["projects", t("nav_projects")],
    ["teaching", t("nav_teaching")],
    ["writing", t("nav_writing")],
    ["papers", t("nav_papers")],
    ["contact", t("nav_contact")],
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          igor<span className="text-accent">.</span>bione
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {items.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-muted-foreground hover:text-foreground transition-colors mono"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 mono text-xs">
          {(["pt", "en", "es"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 py-1 rounded transition-colors ${
                lang === l ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={`Switch to ${l.toUpperCase()}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <ParticleNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />
      </div>
      <div className="container-x relative py-28 md:py-40">
        <p className="section-label mb-6">// PORTFOLIO · 2026</p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
          Igor Bione
        </h1>
        <p className="mt-4 mono text-sm md:text-base text-accent">{t("hero_role")}</p>
        <p className="mt-8 text-xl md:text-2xl max-w-2xl font-display font-medium">
          {t("hero_tagline")}
        </p>
        <p className="mt-4 text-base md:text-lg max-w-2xl text-muted-foreground">
          {t("hero_sub")}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            {t("cta_projects")} <ArrowRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md font-medium hover:border-accent hover:text-accent transition"
          >
            {t("cta_contact")}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  const { t, lang } = useLang();
  return (
    <section id="about" className="container-x py-24 md:py-32">
      <SectionHeader label={t("about_label")} title={t("about_title")} />

      <div className="reveal grid md:grid-cols-12 gap-10 mt-12">
        <p className="md:col-span-7 text-lg leading-relaxed text-foreground/90">
          {t("about_intro")}
        </p>
        <aside className="md:col-span-5 md:col-start-8">
          <blockquote className="border-l-2 border-accent pl-5 text-muted-foreground italic leading-relaxed space-y-4">
            <p>{t("about_quote_1")}</p>
            <p>{t("about_quote_2")}</p>
          </blockquote>
        </aside>
      </div>

      {/* Highlight cards */}
      <div className="grid md:grid-cols-3 gap-5 mt-20">
        <HighlightCard icon={<FlaskConical className="size-5" />} title={t("card1_title")} body={t("card1_body")} />
        <HighlightCard icon={<Cpu className="size-5" />} title={t("card2_title")} body={t("card2_body")} />
        <HighlightCard icon={<Bot className="size-5" />} title={t("card3_title")} body={t("card3_body")} />
      </div>

      {/* Timeline */}
      <div className="mt-24">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-10">{t("timeline_title")}</h3>
        <ol className="relative border-l border-border ml-2">
          {timelineItems.map((it, i) => (
            <li key={i} className="reveal pl-6 pb-8 relative">
              <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="mono text-xs text-secondary">{it.year}</div>
              <div className="mt-1 text-foreground/90">{it[lang]}</div>
            </li>
          ))}
        </ol>
      </div>

      {/* Skills */}
      <div className="mt-24">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8">{t("skills_title")}</h3>
        <div className="space-y-5">
          <SkillRow label={t("sk_lang")} items={["Python", "SQL", "R", "PySpark"]} />
          <SkillRow label={t("sk_ml")} items={["Scikit-learn", "TensorFlow", "PyTorch", "LSTM", "NLP", "Recsys"]} />
          <SkillRow label={t("sk_ai")} items={["LangChain", "N8N", "MLOps"]} />
          <SkillRow label={t("sk_bi")} items={["Power BI", "Tableau", "Qlik"]} />
          <SkillRow label={t("sk_idiomas")} items={[t("idiomas_value")]} />
        </div>
      </div>

      {/* Certs */}
      <div className="mt-24">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8">{t("certs_title")}</h3>
        <div className="grid md:grid-cols-3 gap-5">
          <CertCard
            color="#FF3621"
            mono="DB"
            title="Azure Databricks Platform Architect"
            issuer="Databricks Academy"
            issued="December 2025"
            expires="December 2026"
            id="169469677"
            statusLabel={t("cert_status_active")}
            statusKind="active"
          />
          <CertCard
            color="#FF3621"
            mono="DB"
            title="Databricks Fundamentals"
            issuer="Databricks Academy"
            issued="October 2025"
            expires="October 2026"
            id="164550126"
            statusLabel={t("cert_status_active")}
            statusKind="active"
          />
          <CertCard
            color="#4285F4"
            mono="G"
            title="Google Data Analytics Professional Certificate"
            issuer="Google Career Certificates"
            issued="September 2023"
            id="K3AQLTKTR2MC"
            statusLabel={t("cert_status_perm")}
            statusKind="perm"
          />
        </div>
      </div>

      {/* Closing */}
      <div className="mt-24 reveal">
        <p className="font-display italic text-2xl md:text-3xl leading-snug max-w-3xl">
          “{t("closing_line")}”
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-md font-medium hover:opacity-90 transition">
            {t("cta_projects")} <ArrowRight className="size-4" />
          </a>
          <a href="mailto:igordardenne@gmail.com" className="inline-flex items-center gap-2 border border-border px-4 py-2.5 rounded-md hover:border-accent hover:text-accent transition mono text-sm">
            <Mail className="size-4" /> igordardenne@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/igorbione/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-4 py-2.5 rounded-md hover:border-accent hover:text-accent transition mono text-sm">
            <Linkedin className="size-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="reveal group bg-surface border border-border rounded-lg p-6 transition hover:border-accent/60 hover:-translate-y-1">
      <div className="size-10 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-display text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="reveal grid md:grid-cols-12 gap-3 items-baseline border-b border-border pb-4">
      <div className="md:col-span-3 mono text-xs uppercase tracking-wider text-secondary">{label}</div>
      <div className="md:col-span-9 flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
    </div>
  );
}

function CertCard({
  color, mono, title, issuer, issued, expires, id, statusLabel, statusKind,
}: {
  color: string; mono: string; title: string; issuer: string;
  issued: string; expires?: string; id: string;
  statusLabel: string; statusKind: "active" | "perm";
}) {
  const { t } = useLang();
  return (
    <div
      className="reveal bg-surface-2 border border-border rounded-lg p-5 transition hover:-translate-y-1 hover:border-accent/60"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="size-11 rounded-md flex items-center justify-center font-display font-bold text-white"
          style={{ background: color }}
        >
          {mono}
        </div>
        <span className={`inline-flex items-center gap-1.5 mono text-[10px] px-2 py-1 rounded-full border ${
          statusKind === "active" ? "border-emerald-700/50 text-emerald-400" : "border-secondary/50 text-secondary"
        }`}>
          <span className={`size-1.5 rounded-full ${statusKind === "active" ? "bg-emerald-400" : "bg-secondary"}`} />
          {statusLabel}
        </span>
      </div>
      <h4 className="font-display font-semibold mt-4 leading-snug">{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{issuer}</p>
      <div className="mt-4 mono text-[11px] text-muted-foreground space-y-1">
        <div>{t("cert_issued")}: {issued}{expires ? ` · ${t("cert_expires")}: ${expires}` : ""}</div>
        <div>{t("cert_id")}: <span className="text-foreground">{id}</span></div>
      </div>
    </div>
  );
}

/* ---------------- PROJECTS ---------------- */

function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHeader label={t("projects_label")} title={t("projects_title")} />

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
            <BookOpen className="size-5 text-accent" /> {t("projects_ds")}
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <ProjectCard
              title="Viabilidade Transportadora"
              desc={t("p1_desc")}
              tags={["Python", "Analytics", "Freelance"]}
              href="https://github.com/igorbione/Projeto_Logistica_TT"
              gradient="linear-gradient(135deg, #4A9E8E, #1a3a36)"
              glyph="LT"
            />
            <ProjectCard
              title="Libras — Visão Computacional"
              desc={t("p2_desc")}
              tags={["Python", "Computer Vision", "Deep Learning"]}
              href="https://github.com/igorbione/Projeto_Libras_Visao_Computacional"
              gradient="linear-gradient(135deg, #C9933A, #5a3f15)"
              glyph="CV"
            />
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
            <Bot className="size-5 text-accent" /> {t("projects_auto")}
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <ProjectCard
              title="Automação de Relatórios de uma pequena Transportadora"
              desc={t("p3_desc")}
              tags={["Python", "Automation", "RPA"]}
              href="https://github.com/igorbione/Automacao_Relatorio_iMile"
              gradient="linear-gradient(135deg, #2c5a72, #0e2230)"
              glyph="RPA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title, desc, tags, href, gradient, glyph,
}: { title: string; desc: string; tags: string[]; href: string; gradient: string; glyph: string }) {
  const { t } = useLang();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group bg-surface border border-border rounded-lg overflow-hidden transition hover:border-accent hover:-translate-y-1 flex flex-col"
    >
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{ background: gradient }}
        aria-hidden
      >
        <span className="font-display text-5xl font-bold text-white/90 tracking-tighter">{glyph}</span>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,.4), transparent 50%)" }} />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h4 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tg) => <span key={tg} className="tag">{tg}</span>)}
        </div>
        <div className="mt-auto pt-3 inline-flex items-center gap-2 mono text-xs text-accent">
          <Github className="size-4" /> {t("btn_github")} <ExternalLink className="size-3" />
        </div>
      </div>
    </a>
  );
}

/* ---------------- TEACHING ---------------- */

function Teaching() {
  const { t } = useLang();
  const courses = [
    {
      title: "Curso de Inverno 2019",
      desc: t("course1_desc"),
      year: "2019",
      href: "https://github.com/igorbione/Curso_de_inveRno_2019",
      glyph: "Ci",
      gradient: "linear-gradient(135deg, #1f4e44, #0e1f1c)",
    },
    {
      title: "Minicurso ENM — Machine Learning Aplicado à Ecologia",
      desc: t("course2_desc"),
      year: "2019",
      href: "https://github.com/igorbione/Minicurso_ENM",
      glyph: "ML",
      gradient: "linear-gradient(135deg, #7a5a1f, #2a1d0a)",
    },
  ];
  return (
    <section id="teaching" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHeader label={t("teaching_label")} title={t("teaching_title")} />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {courses.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group bg-surface border border-border rounded-lg overflow-hidden transition hover:border-accent hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-36 flex items-center justify-center" style={{ background: c.gradient }} aria-hidden>
                <GraduationCap className="size-10 text-white/80" />
                <span className="absolute bottom-3 right-4 mono text-xs text-white/70">{c.glyph}</span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">{c.title}</h4>
                  <span className="tag !text-secondary !border-secondary/40">{c.year}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-auto pt-2 inline-flex items-center gap-2 mono text-xs text-accent">
                  <Github className="size-4" /> {t("btn_github")} <ExternalLink className="size-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WRITING ---------------- */

function Writing() {
  const { t } = useLang();
  const posts = [
    {
      title: "Studio Ghibli, IA e a urgência por transparência",
      href: "https://www.linkedin.com/pulse/studio-ghibli-ia-e-urgência-por-transparência-igor-bione-ashkf/",
    },
    {
      title: "Como um biólogo foi virar cientista de dados",
      href: "https://www.linkedin.com/pulse/como-um-biólogo-foi-virar-cientista-de-dados-igor-bione-zgz2f/",
    },
  ];
  return (
    <section id="writing" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHeader label={t("writing_label")} title={t("writing_title")} />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {posts.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group bg-surface border border-border rounded-lg p-6 transition hover:border-accent hover:-translate-y-1 flex flex-col gap-4"
            >
              <span className="tag !text-[#0a66c2] !border-[#0a66c2]/40 self-start">LinkedIn</span>
              <h4 className="font-display text-xl font-semibold group-hover:text-accent transition-colors leading-snug">
                {p.title}
              </h4>
              <div className="mt-auto inline-flex items-center gap-2 mono text-xs text-accent">
                <Linkedin className="size-4" /> {t("btn_read_linkedin")} <ExternalLink className="size-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAPERS ---------------- */

function Papers() {
  const { t } = useLang();
  const papers = [
    {
      title: "Geographical distribution of Stryphnodendron adstringens Mart. Coville (Fabaceae): modeling effects of climate change on past, present and future",
      journal: "Brazilian Journal of Botany",
      publisher: "Springer",
      color: "#0a7d52",
      href: "https://link.springer.com/article/10.1007/s40415-019-00520-7",
    },
    {
      title: "Genetic diversity in Stryphnodendron adstringens (Mart.) Coville and its correlation with species richness of Stryphnodendron Mart. and related genera",
      journal: "Brazilian Journal of Botany",
      publisher: "Springer",
      color: "#0a7d52",
      href: "https://link.springer.com/article/10.1007/s40415-023-00943-3",
    },
    {
      title: "Niche conservatism and the differences in species richness across a biogeographical transition zone",
      journal: "Ecography",
      publisher: "Wiley",
      color: "#1f6feb",
      href: "https://nsojournals.onlinelibrary.wiley.com/doi/epdf/10.1111/ecog.04264",
    },
    {
      title: "Correlates of time to first citation in ecology and taxonomy",
      journal: "bioRxiv (Preprint)",
      publisher: "bioRxiv",
      color: "#b32d2d",
      href: "https://www.biorxiv.org/content/10.1101/2023.03.16.532892v1",
    },
  ];
  return (
    <section id="papers" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHeader label={t("papers_label")} title={t("papers_title")} />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {papers.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group bg-surface border border-border rounded-lg p-6 transition hover:border-accent hover:-translate-y-1 flex flex-col gap-4"
              style={{ borderLeft: `3px solid ${p.color}` }}
            >
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-muted-foreground" />
                <span className="mono text-xs px-2 py-1 rounded-full border" style={{ borderColor: `${p.color}66`, color: p.color }}>
                  {p.journal}
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                {p.title}
              </h4>
              <div className="mt-auto inline-flex items-center gap-2 mono text-xs text-accent">
                {t("btn_access_paper")} <ExternalLink className="size-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  const { t } = useLang();
  return (
    <footer id="contact" className="border-t border-border bg-surface/40">
      <div className="container-x py-20">
        <SectionHeader label={t("contact_label")} title={t("contact_title")} />
        <p className="mt-8 max-w-2xl text-muted-foreground text-lg">{t("contact_body")}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="mailto:igordardenne@gmail.com" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-medium hover:opacity-90 transition">
            <Mail className="size-4" /> igordardenne@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/igorbione/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md hover:border-accent hover:text-accent transition">
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a href="https://github.com/igorbione" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md hover:border-accent hover:text-accent transition">
            <Github className="size-4" /> GitHub
          </a>
        </div>
        <div className="mt-16 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs mono text-muted-foreground">
          <span>{t("footer_copy")}</span>
          <span>· built with care ·</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="reveal">
      <p className="section-label">// {label}</p>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}
