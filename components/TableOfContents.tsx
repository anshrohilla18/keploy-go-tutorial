const items: [string, string][] = [
  ["What you'll build", "what-youll-build"],
  ["Before you start", "before-you-start"],
  ["How Keploy works", "how-keploy-works"],
  ["Step 1: App and database", "step-1-get-the-app-and-its-database"],
  ["Step 2: Install Keploy", "step-2-install-keploy"],
  ["Step 3: Record", "step-3-record-test-cases"],
  ["Step 4: Replay", "step-4-replay-the-tests"],
  ["Step 5: What was saved", "step-5-look-at-what-keploy-saved"],
  ["Step 6: No database", "step-6-run-the-tests-without-a-database"],
  ["Troubleshooting", "troubleshooting"],
  ["What I learned", "what-i-learned"],
  ["Next steps", "next-steps"],
];

export default function TableOfContents() {
  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <nav className="sticky top-24 text-sm" aria-label="On this page">
        <p className="mb-3 font-semibold">On this page</p>
        <ul className="space-y-2 border-l border-[var(--border)]">
          {items.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="-ml-px block border-l border-transparent pl-4 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--fg)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}