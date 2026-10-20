import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";
import Byline, { AUTHOR } from "../_components/Byline";
import ReadingProgress from "../_components/ReadingProgress";
import ShareLinks from "../_components/ShareLinks";
import TagPill from "../_components/TagPill";

const SITE_URL = "https://caducodes.com";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};

  const images = post.cover ? [{ url: post.cover, alt: post.coverAlt }] : undefined;
  return {
    title: post.title,
    description: post.subtitle,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.subtitle,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [AUTHOR.name],
      tags: post.tags,
      images,
    },
    twitter: {
      card: post.cover ? "summary_large_image" : "summary",
      title: post.title,
      description: post.subtitle,
      creator: AUTHOR.handle,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const morePosts = getAllPosts()
    .filter((other) => other.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <main className="pb-24 pt-12 sm:pt-16">
        <article>
          <header>
            <h1 className="font-serif text-[32px] font-bold leading-tight tracking-tight sm:text-[42px]">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="mt-3 text-xl leading-snug text-muted">{post.subtitle}</p>
            )}
            <div className="mt-8 flex flex-col gap-4 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between">
              <Byline date={post.date} readingTime={post.readingTime} />
              <ShareLinks url={url} title={post.title} />
            </div>
          </header>

          {post.cover && (
            <figure className="mt-10">
              <Image
                src={post.cover}
                alt={post.coverAlt ?? ""}
                width={1400}
                height={788}
                priority
                className="h-auto w-full rounded"
              />
              {post.coverAlt && (
                <figcaption className="mt-2 text-center text-sm text-muted">
                  {post.coverAlt}
                </figcaption>
              )}
            </figure>
          )}

          <div className="prose-post mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          )}
        </article>

        <aside className="mt-16 flex gap-4 border-t border-border pt-10">
          <Image
            src={AUTHOR.avatar}
            alt={AUTHOR.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full"
          />
          <div>
            <p className="text-sm text-muted">Written by</p>
            <p className="text-lg font-medium">{AUTHOR.name}</p>
            <p className="mt-1 text-muted">{AUTHOR.bio}</p>
            <a
              href={AUTHOR.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-full bg-fg px-4 py-1.5 text-sm text-bg transition-opacity hover:opacity-80"
            >
              Follow {AUTHOR.handle}
            </a>
          </div>
        </aside>

        {morePosts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-medium">More from {AUTHOR.name}</h2>
            <ul className="mt-4 divide-y divide-border">
              {morePosts.map((other) => (
                <li key={other.slug}>
                  <Link href={`/blog/${other.slug}`} className="block py-4 group">
                    <p className="font-serif text-lg font-bold group-hover:underline">{other.title}</p>
                    <p className="text-sm text-subtle">{other.readingTime} min read</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}
