export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 lg:px-5 lg:pt-3 xl:px-16 xl:pt-6">
      {/* عنوان */}
      <div className="w-full animate-pulse space-y-4">
        <div className=" h-10 w-64 rounded-lg bg-muted" />
        <div className=" h-6 w-32 rounded-lg bg-muted" />

        {/* کارت‌های پروژه */}
        <div
          className="
            grid grid-cols-1 gap-5 pt-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
                overflow-hidden rounded-2xl
                border border-border bg-card
              "
            >
              {/* تصویر */}
              <div className="aspect-16/10 w-full bg-muted" />

              {/* متن */}
              <div className="space-y-4 p-5">
                <div className="h-5 w-2/3 rounded bg-muted" />

                <div className="h-4 w-full rounded bg-muted" />

                <div className="h-4 w-4/5 rounded bg-muted" />

                <div className="flex gap-2">
                  <div className="h-7 w-16 rounded-lg bg-muted" />
                  <div className="h-7 w-20 rounded-lg bg-muted" />
                  <div className="h-7 w-16 rounded-lg bg-muted" />
                </div>

                <div className="border-t border-border pt-4">
                  <div className="h-9 w-28 rounded-xl bg-muted" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
