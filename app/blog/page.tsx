import type { CSSProperties } from "react";
import { getAllPosts, getAllTags } from "@/lib/posts";
import PostList from "./_components/PostList";
import TagPill from "./_components/TagPill";

export default function BlogIndex() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="pb-24 pt-12 sm:pt-16">
      <header className="enter" style={{ "--i": 0 } as CSSProperties}>
        <h1 className="font-serif text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-muted">
          Notes on macOS development, Swift, and building things for the web.
        </p>
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map(({ tag }) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </header>

      <div className="enter mt-6" style={{ "--i": 1 } as CSSProperties}>
        <PostList posts={posts} />
      </div>
    </main>
  );
}
