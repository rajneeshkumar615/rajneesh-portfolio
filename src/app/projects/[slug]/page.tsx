import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Radio, Server, Database, Layers } from "lucide-react";
import {
  projects, projectDetails, projectDeployment,
  projectSystems, architectureGallery,
} from "@/data/profile";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { SvgDiagram } from "@/components/ui/svg-diagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  return { title: project ? `${project.name} — Case Study` : "Project not found" };
}

function LayerIcon({ layer }: { layer: string }) {
  const cls = "mt-0.5 shrink-0 text-accent";
  if (layer === "Frontend") return <ArrowUpRight size={14} className={cls} />;
  if (layer === "API")      return <Server       size={14} className={cls} />;
  if (layer === "Database") return <Database     size={14} className={cls} />;
  if (layer === "CI/CD")    return <Layers       size={14} className={cls} />;
  return <Radio size={14} className={cls} />;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  const detail  = projectDetails[slug];
  if (!project || !detail) notFound();

  const deploy      = projectDeployment[slug];
  const systems     = projectSystems[slug] ?? [];
  const archDiagram = architectureGallery.find((d) =>
    d.id.startsWith(slug === "staynest" ? "staynest" : "zarrin")
  );
  const jwtDiagram  = architectureGallery.find((d) => d.id === "jwt-flow");

  const screenshotSlots = (project.screenshots ?? []).map((label) => ({ label, aspect: "wide" as const }));

  return (
    <main>
      <Navbar />

      <article className="border-b border-border py-20">
        <div className="container max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={13} /> Back to projects
          </Link>

          {/* ── Header ── */}
          <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="mono-label text-xs text-accent">{project.year}</span>
              <h1 className="mt-2 text-4xl font-medium tracking-tight sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {deploy && (
                <a
                  href={deploy.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ background: "hsl(var(--signal)/0.07)" }}
                  className="inline-flex items-center gap-2 rounded-md border border-signal/40 px-3.5 py-2 text-sm text-signal hover:bg-signal/15"
                >
                  <Radio size={13} className="animate-pulse" /> Live app
                </a>
              )}
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm transition-colors hover:bg-muted"
              >
                <Github size={14} /> Repository
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          {/* ── Overview ── */}
          <section className="mt-16">
            <h2 className="mono-label text-[10px] text-muted-foreground">Overview</h2>
            <p className="mt-3 text-base leading-[1.75]">{detail.overview}</p>
          </section>

          {/* ── Screens ── */}
          {screenshotSlots.length > 0 && (
            <section className="mt-16">
              <h2 className="mono-label text-[10px] text-muted-foreground">Screens</h2>
              <div className="mt-4">
                <ScreenshotGallery slots={screenshotSlots} />
              </div>
            </section>
          )}

          {/* ── Engineering Systems ── */}
          {systems.length > 0 && (
            <section className="mt-16">
              <h2 className="mono-label text-[10px] text-muted-foreground">Engineering systems</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {systems.map((sys) => (
                  <div key={sys.name} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-sm font-medium">{sys.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {sys.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Architecture diagram ── */}
          {archDiagram && (
            <section className="mt-16">
              <h2 className="mono-label text-[10px] text-muted-foreground">Architecture diagram</h2>
              <div className="mt-4 flex justify-center rounded-xl border border-border bg-card p-8">
                <SvgDiagram spec={archDiagram} />
              </div>
            </section>
          )}

          {/* ── API Design ── */}
          <section className="mt-16">
            <h2 className="mono-label text-[10px] text-muted-foreground">API design</h2>
            <ul className="mt-4 space-y-3">
              {detail.apiDesign.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Deployment ── */}
          {deploy && (
            <section className="mt-16">
              <h2 className="mono-label text-[10px] text-muted-foreground">Deployment</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {deploy.hostingInfrastructure.map((h) => (
                  <div
                    key={h.layer}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <LayerIcon layer={h.layer} />
                    <div>
                      <span className="mono-label block text-[10px] text-muted-foreground">
                        {h.layer}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed">{h.provider}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="mt-4 space-y-2">
                {deploy.environmentSetup.map((e) => (
                  <li key={e} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {e}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Challenges ── */}
          <section className="mt-16">
            <h2 className="mono-label text-[10px] text-muted-foreground">Challenges & solutions</h2>
            <div className="mt-4 space-y-4">
              {detail.challenges.map((c, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-5">
                  <p className="text-sm font-medium">{c.problem}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── JWT diagram (for projects using JWT) ── */}
          {jwtDiagram && project.id === "zarrin-blogs" && (
            <section className="mt-16">
              <h2 className="mono-label text-[10px] text-muted-foreground">Auth flow</h2>
              <div className="mt-4 flex justify-center rounded-xl border border-border bg-card p-8">
                <SvgDiagram spec={jwtDiagram} />
              </div>
            </section>
          )}

          {/* ── Performance ── */}
          <section className="mt-16">
            <h2 className="mono-label text-[10px] text-muted-foreground">Performance optimizations</h2>
            <ul className="mt-4 space-y-3">
              {detail.performance.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Lessons ── */}
          <section className="mt-16">
            <h2 className="mono-label text-[10px] text-muted-foreground">Lessons learned</h2>
            <ul className="mt-4 space-y-3">
              {detail.lessons.map((l) => (
                <li key={l} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  {l}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <Contact />
    </main>
  );
}
