import type { CSSProperties } from "react";

// Temporary "under construction" page. The full portfolio lives in
// app/_portfolio/Portfolio.tsx (the underscore keeps it out of routing);
// to bring it back, render <Portfolio /> here again.

const X_URL = "https://x.com/caducodes";

const links = [
  { label: "GitHub", href: "https://github.com/carloseorsantos" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carloseorsantos/" },
  { label: "X", href: X_URL },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[620px] flex-col px-6 pb-16 pt-20 text-[15px] leading-7 sm:pt-32">
      <header className="enter" style={{ "--i": 0 } as CSSProperties}>
        <h1 className="font-medium">Carlos Santos</h1>
        <p className="text-muted">Software Engineer & macOS Developer</p>
      </header>

      <div className="enter mt-10 space-y-4" style={{ "--i": 1 } as CSSProperties}>
        <p className="flex items-center gap-2 text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-subtle opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-muted" />
          </span>
          Under construction
        </p>
        <p>
          This site is being rebuilt and will be back soon. In the meantime, you can find me on{" "}
          <a href={X_URL} target="_blank" rel="noopener noreferrer" className="link">
            X (@caducodes)
          </a>
          .
        </p>
      </div>

      <footer
        className="enter mt-auto flex gap-4 pt-20 text-sm text-subtle"
        style={{ "--i": 2 } as CSSProperties}
      >
        <span>@caducodes</span>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-fg"
            {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {link.label}
          </a>
        ))}
      </footer>
    </main>
  );
}
