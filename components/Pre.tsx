"use client";

import { useRef, useState, type ComponentProps } from "react";

export default function Pre(props: ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = ref.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <div className="relative">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-200 hover:bg-white/20"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre ref={ref} {...props} />
    </div>
  );
}