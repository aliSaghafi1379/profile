export default function Loading() {
  return (
    <main className="min-w-0 px-4 py-6 sm:px-6 sm:py-8">
      <div className="animate-pulse space-y-4">
        <div className=" h-10 w-64 rounded-lg bg-muted" />
        <div className=" h-6 w-32 rounded-lg bg-muted" />

        <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-40 rounded-2xl border border-border bg-card"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
