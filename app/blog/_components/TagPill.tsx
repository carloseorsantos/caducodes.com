import Link from "next/link";

export default function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/blog/tag/${encodeURIComponent(tag)}`}
      className="rounded-full bg-hover px-3 py-1 text-sm text-muted transition-colors hover:text-fg"
    >
      {tag}
    </Link>
  );
}
