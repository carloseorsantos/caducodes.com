import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

// Posts are Markdown files in content/posts. The file name is the slug:
// content/posts/hello-world.md -> /blog/hello-world
const POSTS_DIR = path.join(process.cwd(), "content/posts");

const WORDS_PER_MINUTE = 230;

export interface PostMeta {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  tags: string[];
  cover?: string;
  coverAlt?: string;
  readingTime: number;
}

export interface Post extends PostMeta {
  html: string;
}

interface Frontmatter {
  title: string;
  subtitle?: string;
  date: string | Date;
  tags?: string[];
  cover?: string;
  coverAlt?: string;
  draft?: boolean;
}

function readPostFile(slug: string) {
  const file = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  const fm = data as Frontmatter;

  if (!fm.title || !fm.date) {
    throw new Error(`Post "${slug}" is missing a title or date in its frontmatter.`);
  }

  const words = content.trim().split(/\s+/).length;
  const meta: PostMeta = {
    slug,
    title: fm.title,
    subtitle: fm.subtitle,
    // gray-matter parses unquoted YAML dates into Date objects
    date: fm.date instanceof Date ? fm.date.toISOString().slice(0, 10) : String(fm.date),
    tags: (fm.tags ?? []).map((tag) => tag.toLowerCase()),
    cover: fm.cover,
    coverAlt: fm.coverAlt,
    readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
  };

  return { meta, content, draft: fm.draft === true };
}

function postSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

// Drafts show up in `next dev` but are left out of production builds.
const showDrafts = process.env.NODE_ENV !== "production";

export function getAllPosts(): PostMeta[] {
  return postSlugs()
    .map(readPostFile)
    .filter((post) => showDrafts || !post.draft)
    .map((post) => post.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!postSlugs().includes(slug)) return null;
  const { meta, content, draft } = readPostFile(slug);
  if (draft && !showDrafts) return null;

  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: { light: "github-light", dark: "github-dark-dimmed" },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(content);

  return { ...meta, html: String(html) };
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
