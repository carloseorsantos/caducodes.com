import type { CSSProperties, ReactNode } from "react";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";

const EMAIL = "carloseorsantos@gmail.com";

const links = [
  { label: "GitHub", href: "https://github.com/carloseorsantos" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carloseorsantos/" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="link"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

function Section({ title, index, children }: { title: string; index: number; children: ReactNode }) {
  return (
    <section className="enter mt-16" style={{ "--i": index } as CSSProperties}>
      <h2 className="mb-4 text-muted">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[620px] px-6 pb-24 pt-20 text-[15px] leading-7 sm:pt-32">
      <header className="enter" style={{ "--i": 0 } as CSSProperties}>
        <h1 className="font-medium">Carlos Santos</h1>
        <p className="text-muted">Software Engineer & macOS Developer</p>
      </header>

      <div className="enter mt-10 space-y-4" style={{ "--i": 1 } as CSSProperties}>
        <p>
          I build native macOS utilities in Swift and SwiftUI, going all the way down to Mach
          Kernel APIs and low-level system events when an app needs to feel instant. Everything
          I ship there is free and{" "}
          <TextLink href="https://github.com/carloseorsantos">open source</TextLink>.
        </p>
        <p>
          During the day I&apos;m a full-stack engineer at{" "}
          <TextLink href="https://www.ciandt.com/">CI&amp;T</TextLink>, building
          enterprise web platforms with Next.js, TypeScript and Java / Spring Boot. I live in
          Campinas, Brazil.
        </p>
      </div>

      <Section title="Projects" index={2}>
        <ul className="-mx-3">
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.liveUrl ?? project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-hover sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="shrink-0 font-medium">{project.title}</span>
                <span className="text-muted sm:truncate">{project.tagline}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Experience" index={3}>
        <ul className="space-y-5">
          {experiences.map((item) => (
            <li key={item.company}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium">
                  {item.companyUrl ? (
                    <TextLink href={item.companyUrl}>{item.company}</TextLink>
                  ) : (
                    item.company
                  )}
                </span>
                <span className="shrink-0 text-sm tabular-nums text-subtle">{item.period}</span>
              </div>
              <p className="text-muted">{item.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Stack" index={4}>
        <dl className="space-y-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <dt>{category.title}</dt>
              <dd className="text-muted">
                {category.skills.map((skill) => skill.name).join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Contact" index={5}>
        <p>
          Open to native macOS work, full-stack engineering and technical consulting. Reach me at{" "}
          <TextLink href={`mailto:${EMAIL}`}>{EMAIL}</TextLink> or find me on{" "}
          <TextLink href="https://github.com/carloseorsantos">GitHub</TextLink> and{" "}
          <TextLink href="https://www.linkedin.com/in/carloseorsantos/">LinkedIn</TextLink>.
        </p>
      </Section>

      <footer
        className="enter mt-20 flex gap-4 text-sm text-subtle"
        style={{ "--i": 6 } as CSSProperties}
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
