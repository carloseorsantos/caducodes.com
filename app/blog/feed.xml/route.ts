import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://caducodes.com";

export const dynamic = "force-static";

function escape(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = getAllPosts()
    .map(
      (post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      ${post.subtitle ? `<description>${escape(post.subtitle)}</description>` : ""}
${post.tags.map((tag) => `      <category>${escape(tag)}</category>`).join("\n")}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Carlos Santos — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Writing about macOS development, Swift, and full-stack engineering.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
