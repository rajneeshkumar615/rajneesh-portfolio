"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Book, Users, ExternalLink } from "lucide-react";
import { github, profile } from "@/data/profile";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string | null;
};

type GhRepo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
};

// The two featured repos we know about
const PINNED_REPOS = ["Zarrin-Blogs", "StayNest"];

export function GithubStats() {
  const [user, setUser] = React.useState<GhUser | null>(null);
  const [repos, setRepos] = React.useState<GhRepo[]>([]);
  const [status, setStatus] = React.useState<"loading" | "ok" | "error">("loading");

  React.useEffect(() => {
    const base = `https://api.github.com/users/${github.username}`;
    Promise.all([
      fetch(base).then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch(`${base}/repos?per_page=100&sort=updated`).then((r) =>
        r.ok ? r.json() : Promise.reject()
      ),
    ])
      .then(([u, r]: [GhUser, GhRepo[]]) => {
        setUser(u);
        // Prioritise pinned repos, then sort by stars
        const pinned = PINNED_REPOS.map((name) => r.find((repo) => repo.name === name)).filter(
          Boolean
        ) as GhRepo[];
        const rest = r
          .filter((repo) => !PINNED_REPOS.includes(repo.name))
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4 - pinned.length);
        setRepos([...pinned, ...rest].slice(0, 4));
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
  }, []);

  const userStats = [
    { label: "Public repos",  value: user?.public_repos, icon: Book },
    { label: "Followers",     value: user?.followers,    icon: Users },
    { label: "Following",     value: user?.following,    icon: GitFork },
  ];

  return (
    <div className="flex h-full flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted">
            <Github size={15} />
          </div>
          <div>
            <div className="text-sm font-medium">GitHub</div>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] text-muted-foreground transition-colors hover:text-accent"
            >
              @{github.username}
            </a>
          </div>
        </div>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Profile <ExternalLink size={11} />
        </a>
      </div>

      {/* Error fallback */}
      {status === "error" && (
        <p className="text-xs text-muted-foreground">
          Live stats unavailable — visit{" "}
          <a href={profile.links.github} className="text-accent hover:underline" target="_blank" rel="noreferrer">
            github.com/{github.username}
          </a>
        </p>
      )}

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {userStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg border border-border bg-background px-3 py-3"
          >
            <s.icon size={12} className="text-muted-foreground" />
            <div className="mt-2 font-mono text-lg font-semibold">
              {status === "loading" ? (
                <span className="inline-block h-5 w-6 animate-pulse rounded bg-muted" />
              ) : (
                s.value ?? "—"
              )}
            </div>
            <div className="mt-0.5 text-[10px] text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Featured repos */}
      {repos.length > 0 && (
        <div>
          <h4 className="mono-label mb-3 text-[10px] text-muted-foreground">Featured repos</h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="group rounded-lg border border-border bg-background p-3 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-1">
                  <span className="text-xs font-medium leading-snug group-hover:text-accent">
                    {repo.name}
                  </span>
                  <ExternalLink size={11} className="mt-0.5 shrink-0 text-muted-foreground/60" />
                </div>
                {repo.description && (
                  <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                    {repo.description}
                  </p>
                )}
                <div className="mt-2 flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                    <Star size={10} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                    <GitFork size={10} /> {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
