
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05090f] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <header className="flex items-center justify-between border-b border-white/10 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 font-bold text-cyan-300">
              ?
            </div>
            <span className="text-sm font-bold tracking-[0.18em]">
              THE QUESTION
            </span>
          </div>

          <span className="text-xs text-slate-400">
            AI ASKING HUMANS
          </span>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-24 text-center">
          <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_80px_rgba(34,211,238,0.15)]">
            <span className="text-7xl font-light text-cyan-300">
              ?
            </span>
          </div>

          <p className="mb-5 text-xs font-semibold tracking-[0.4em] text-cyan-400">
            QUESTION EVERYTHING RESPONSIBLY
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
            THE <span className="text-cyan-400">QUESTION</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            ప్రశ్న. అన్వేషణ.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Every question begins a journey.
            A space to ask, think, explore, and discover
            perspectives together.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/ask"
              className="rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Answer Today&apos;s Question
            </Link>

            <a
              href="#mission"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-cyan-400"
            >
              Explore with AI
            </a>
          </div>

          {/* Community Voices Button */}
          <Link
            href="/answers"
            className="mt-5 inline-block rounded-xl border border-cyan-400/40 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Explore Community Voices
          </Link>

          <p className="mt-8 text-sm text-slate-500">
            Your identity is private. Your voice matters.
          </p>
        </section>

        <section
          id="mission"
          className="grid gap-5 border-t border-white/10 py-14 md:grid-cols-3"
        >
          {[
            {
              title: "ASK",
              text: "Share questions, ideas, and experiences.",
            },
            {
              title: "THINK",
              text: "Explore different perspectives with curiosity.",
            },
            {
              title: "DISCOVER",
              text: "Search for understanding and meaningful solutions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-lg font-bold text-cyan-300">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
          © 2026 THE QUESTION · ప్రశ్న. అన్వేషణ.
        </footer>
      </div>
    </main>
  );
}
