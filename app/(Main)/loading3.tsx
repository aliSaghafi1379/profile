export default function Loading() {
  return (
    <div className="py-1 px-3 lg:px-10 lg:pt-8 xl:px-20 xl:pt-16 flex flex-col items-center">
      {/* Profile section */}
      <div className="flex w-full flex-col md:block">
        {/* Profile image skeleton */}
        <div className="flex justify-center md:float-right">
          <div className="relative size-52 animate-pulse md:size-64">
            <div className="absolute inset-2 rounded-full border border-border bg-card p-2">
              <div className="h-full w-full rounded-full bg-muted" />
            </div>
          </div>
        </div>

        {/* Profile info skeleton */}
        <div className="flex w-full flex-col items-center gap-4 md:items-start">
          {/* Name */}
          <div className="h-11 w-56 animate-pulse rounded-lg bg-muted sm:h-14 sm:w-72 md:h-16 md:w-80" />

          {/* Job */}
          <div className="h-7 w-44 animate-pulse rounded-lg bg-muted sm:h-8 sm:w-52" />

          {/* Bio */}
          <div className="mt-2 w-full space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-[96%] animate-pulse rounded bg-muted" />
            <div className="h-4 w-[90%] animate-pulse rounded bg-muted" />
            <div className="h-4 w-[75%] animate-pulse rounded bg-muted" />
          </div>
        </div>
      </div>

      {/* Info cards skeleton */}
      <section className="grid w-full grid-cols-1 gap-4 pt-10 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex w-full animate-pulse items-center gap-4 rounded-2xl border border-border bg-card p-4"
          >
            <div className="size-14 shrink-0 rounded-full bg-muted" />

            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div className="h-5 w-28 rounded bg-muted" />
              <div className="h-4 w-40 rounded bg-muted" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
