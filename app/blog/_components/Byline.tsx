import Image from "next/image";
import { formatDate } from "@/lib/posts";

export const AUTHOR = {
  name: "Carlos Santos",
  handle: "@caducodes",
  avatar: "https://github.com/carloseorsantos.png",
  bio: "Software Engineer & macOS Developer. I build native macOS utilities in Swift and enterprise web platforms at CI&T.",
  url: "https://x.com/caducodes",
};

export default function Byline({ date, readingTime }: { date: string; readingTime: number }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Image
        src={AUTHOR.avatar}
        alt={AUTHOR.name}
        width={44}
        height={44}
        className="rounded-full"
      />
      <div>
        <p className="font-medium">{AUTHOR.name}</p>
        <p className="text-muted">
          {readingTime} min read · <time dateTime={date}>{formatDate(date)}</time>
        </p>
      </div>
    </div>
  );
}
