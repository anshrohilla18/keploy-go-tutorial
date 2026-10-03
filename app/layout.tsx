import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Test Your Go API with Keploy",
  description:
    "A beginner-friendly walkthrough of recording and replaying API tests for a Go app with Keploy.",
};

// Runs before first paint so dark mode doesn't flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
            <span className="font-semibold">Go + Keploy Tutorial</span>
            <ThemeToggle />
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-5 py-12">
                 <div className="mx-auto flex max-w-6xl justify-center gap-12 px-5 py-12">
          <main className="min-w-0 flex-1 lg:max-w-3xl">
            <article className="prose prose-stone max-w-none dark:prose-invert">
              {children}
            </article>
          </main>
          <TableOfContents />
        </div>
        </main>
      </body>
    </html>
  );
}