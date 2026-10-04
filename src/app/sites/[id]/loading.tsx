export default function Loading() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="relative h-[680px] animate-pulse bg-stone-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-stone-800/50" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-10">
          <div className="h-12 w-36 rounded-xl bg-white/10" />

          <div className="max-w-4xl space-y-6">
            <div className="h-8 w-40 rounded-full bg-white/10" />
            <div className="h-16 w-3/4 rounded-2xl bg-white/10" />
            <div className="h-5 w-full max-w-2xl rounded bg-white/10" />
            <div className="h-5 w-2/3 max-w-xl rounded bg-white/10" />

            <div className="flex gap-4">
              <div className="h-12 w-32 rounded-xl bg-white/10" />
              <div className="h-12 w-32 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 h-10 w-64 rounded bg-stone-200" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-3xl bg-stone-200"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}