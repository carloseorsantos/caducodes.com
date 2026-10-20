"use client";

import { useState } from "react";

export default function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (insecure context, denied permission); nothing to do.
    }
  };

  const shareOnX = `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=caducodes`;
  const shareOnLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex gap-4 text-sm text-muted">
      <a href={shareOnX} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
        Share on X
      </a>
      <a href={shareOnLinkedIn} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
        LinkedIn
      </a>
      <button type="button" onClick={copy} className="transition-colors hover:text-fg">
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
