import type { Metadata } from "next";
import BlogHeader from "./_components/BlogHeader";

export const metadata: Metadata = {
  title: {
    default: "Blog — Carlos Santos (@caducodes)",
    template: "%s — Carlos Santos",
  },
  description: "Writing about macOS development, Swift, and full-stack engineering.",
  alternates: {
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[728px] px-6">
      <BlogHeader />
      {children}
    </div>
  );
}
