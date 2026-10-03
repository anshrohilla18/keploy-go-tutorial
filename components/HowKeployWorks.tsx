function Flow({
  title,
  steps,
  note,
}: {
  title: string;
  steps: string[];
  note: string;
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-sm font-semibold text-[var(--accent)]">
        {title}
      </p>
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--inline-code-bg)] px-3 py-2 text-center text-sm">
              {s}
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className="text-[var(--muted)]">
                <span className="hidden sm:inline">→</span>
                <span className="sm:hidden">↓</span>
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-[var(--muted)]">{note}</p>
    </div>
  );
}

export default function HowKeployWorks() {
  return (
    <div className="not-prose my-8 space-y-8 rounded-xl border border-[var(--border)] p-5">
      <Flow
        title="keploy record"
        steps={["Your curl request", "Keploy (watching)", "Your Go app", "MySQL"]}
        note="Keploy sits in the path of the traffic. Each API call becomes a test case, and each MySQL exchange is saved as a mock."
      />
      <Flow
        title="keploy test"
        steps={["Keploy replays a saved request", "Your Go app", "Saved MySQL mocks"]}
        note="The app answers the replayed request, Keploy compares the response to the recorded one, and the database side is served from the mocks."
      />
    </div>
  );
}