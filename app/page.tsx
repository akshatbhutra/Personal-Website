import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-ink font-mono text-sm font-medium mb-10"
      >
        AB
      </div>

      <h1 className="font-display font-medium text-4xl sm:text-5xl leading-tight tracking-tight mb-2">
        Akshat Bhutra
      </h1>

      <p className="font-mono text-sm text-accent mb-8 relative inline-block after:content-[''] after:inline-block after:w-[0.55em] after:h-[1.1em] after:bg-accent after:ml-1 after:align-text-bottom after:animate-pulse">
        software engineer
      </p>

      <p className="max-w-md mb-5">
        I build software that&apos;s meant to be used, not just shipped — mostly
        on the web, sometimes wherever a problem needs solving.
      </p>
      <p className="max-w-md text-muted mb-5">
        This site is a work in progress. More on my{" "}
        <Link href="/projects" className="link-underline text-ink">
          projects
        </Link>{" "}
        and{" "}
        <Link href="/blog" className="link-underline text-ink">
          writing
        </Link>{" "}
        soon.
      </p>

      <div className="border-l-2 border-line pl-4 my-10 text-sm text-muted">
        <strong className="text-ink font-medium">Currently</strong> — open to
        interesting problems and conversations.
      </div>

      <nav
        aria-label="Contact and profiles"
        className="flex flex-wrap gap-7 mt-12 pt-8 border-t border-line text-sm"
      >
        <a
          href="https://github.com/YOUR-USERNAME"
          target="_blank"
          rel="noopener"
          className="link-underline text-ink"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/YOUR-USERNAME"
          target="_blank"
          rel="noopener"
          className="link-underline text-ink"
        >
          LinkedIn
        </a>
        <a href="mailto:you@example.com" className="link-underline text-ink">
          Email
        </a>
      </nav>
    </div>
  );
}
