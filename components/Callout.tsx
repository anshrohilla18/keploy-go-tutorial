import type { ReactNode } from "react";

const styles = {
  info: { label: "Note", cls: "border-sky-500 bg-sky-500/10" },
  tip: { label: "Tip", cls: "border-emerald-500 bg-emerald-500/10" },
  warning: { label: "Warning", cls: "border-amber-500 bg-amber-500/10" },
  why: { label: "Why this matters", cls: "border-orange-500 bg-orange-500/10" },
} as const;

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof styles;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[type];
  return (
    <aside className={`my-6 rounded-lg border-l-4 px-5 py-3 ${s.cls}`}>
      <p className="!my-1 text-xs font-bold uppercase tracking-wider">
        {title ?? s.label}
      </p>
      <div className="[&>p]:my-2">{children}</div>
    </aside>
  );
}