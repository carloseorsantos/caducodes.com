import Link from "next/link";
import Image from "next/image";
import { formatDate, type PostMeta } from "@/lib/posts";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="py-10 text-muted">No posts yet.</p>;
  }

  return (
    <ul className="divide-y divide-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group flex gap-6 py-8">
            <div className="min-w-0 flex-1">
              <h2 className="font-serif text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                {post.title}
              </h2>
              {post.subtitle && (
                <p className="mt-1 line-clamp-2 text-muted">{post.subtitle}</p>
              )}
              <p className="mt-3 text-sm text-subtle">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} min
                read
                {post.tags[0] && <> · {post.tags[0]}</>}
              </p>
            </div>
            {post.cover && (
              <div className="relative mt-1 h-20 w-20 shrink-0 overflow-hidden rounded sm:h-28 sm:w-40">
                <Image
                  src={post.cover}
                  alt={post.coverAlt ?? ""}
                  fill
                  sizes="160px"
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
