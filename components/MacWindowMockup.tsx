import React from "react";
import { cn } from "@/lib/utils";

interface MacWindowMockupProps {
  title?: string;
  badge?: string;
  className?: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
}

export function MacWindowMockup({
  title,
  badge,
  className,
  children,
  headerRight,
}: MacWindowMockupProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden border border-white/[0.1] bg-[#121214] shadow-window backdrop-blur-2xl transition-all duration-300",
        className
      )}
    >
      {/* macOS Sequoia Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.08] bg-[#1a1a1e]/90 select-none">
        {/* macOS Traffic Lights (12px) */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]/40 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1fa733]/40 inline-block shadow-sm" />
        </div>

        {/* Window Title */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#a1a1a6] tracking-tight">
          {title && <span className="truncate max-w-[220px] sm:max-w-none">{title}</span>}
          {badge && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-white/[0.08] text-zinc-300 border border-white/[0.06]">
              {badge}
            </span>
          )}
        </div>

        {/* Right Action Icons or Status */}
        <div className="flex items-center gap-1.5 text-xs text-[#86868b]">
          {headerRight || <span className="w-12" />}
        </div>
      </div>

      {/* Window Body */}
      <div className="relative bg-[#0d0d0f]">{children}</div>
    </div>
  );
}
