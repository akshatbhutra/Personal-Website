import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex items-center justify-between pt-10 pb-4">
      <Link href="/" className="font-mono text-sm text-ink hover:text-accent transition-colors">
        AB
      </Link>
      <nav className="flex gap-6 font-mono text-sm">
        <Link href="/projects" className="link-underline text-ink">
          projects
        </Link>
        <Link href="/blog" className="link-underline text-ink">
          blog
        </Link>
      </nav>
    </header>
  );
}
