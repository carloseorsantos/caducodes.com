import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";
import PostList from "../../_components/PostList";

type Params = Promise<{ tag: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const tag = decodeURIComponent((await params).tag);
  return { title: `Posts tagged “${tag}”` };
}

export default async function TagPage({ params }: { params: Params }) {
  const tag = decodeURIComponent((await params).tag);
  const posts = getAllPosts().filter((post) => post.tags.includes(tag));
  if (posts.length === 0) notFound();

  return (
    <main className="pb-24 pt-12 sm:pt-16">
      <Link href="/blog" className="text-sm text-muted transition-colors hover:text-fg">
        ← All posts
      </Link>
      <h1 className="mt-4 font-serif text-4xl font-bold capitalize tracking-tight">{tag}</h1>
      <p className="mt-2 text-muted">
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>
      <div className="mt-6">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
