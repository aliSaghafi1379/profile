export default function Loading() {
  return (
    <main className="min-w-0 px-4 py-6 sm:px-6 sm:py-8">
      <div className="animate-pulse">
        {/* Title */}
        <div className="h-8 w-48 rounded-lg bg-muted" />
        <div className="mt-3 h-5 w-full max-w-2xl rounded-lg bg-muted" />

        {/* Contact cards */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-24 rounded-2xl border border-border bg-card"
            />
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 h-20 rounded-2xl border border-border bg-card" />
      </div>
    </main>
  );
}
