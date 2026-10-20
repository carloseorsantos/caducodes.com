import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border py-4 text-sm">
      <Link href="/" className="font-medium transition-colors hover:text-muted">
        Carlos Santos
      </Link>
      <nav className="flex gap-4 text-muted">
        <Link href="/blog" className="transition-colors hover:text-fg">
          Blog
        </Link>
        <a href="/blog/feed.xml" className="transition-colors hover:text-fg">
          RSS
        </a>
      </nav>
    </header>
  );
}
