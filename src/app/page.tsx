import Image from "next/image";

const navItems = [
  { name: "What We Do", href: "#what-we-do" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const capabilities = [
  {
    title: "Data Platforms",
    body:
      "Designing scalable platforms to ingest, structure, and manage complex health data across systems and sources.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Health Intelligence",
    body:
      "Converting raw health data into trusted intelligence that supports insight, decision-making, and discovery.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Applied Analytics & AI",
    body:
      "Applying analytics and AI responsibly to solve complex challenges in health, research, and data-driven environments.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:py-6">
          <div className="flex items-center gap-4 rounded-2xl bg-white px-3 py-2 text-lg font-semibold tracking-tight text-slate-900 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="LomaHipe logo"
                width={120}
                height={120}
                className="h-10 w-auto object-contain sm:h-14"
                priority
              />
            </div>
          </div>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-5 text-sm font-medium text-slate-600 sm:text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    className="transition-colors hover:text-sky-700 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="relative isolate overflow-hidden bg-slate-900 text-white"
          aria-labelledby="hero-title"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(4, 120, 196, 0.55), rgba(13, 148, 136, 0.5)), url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/80" aria-hidden />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:py-28 lg:py-32">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal-100 ring-1 ring-white/20">
                Health Intelligence at Scale
              </p>
              <div className="space-y-6">
                <h1
                  id="hero-title"
                  className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                >
                  Intelligence for Health, Data, and Discovery
                </h1>
                <p className="max-w-2xl text-lg text-slate-200 sm:text-xl leading-relaxed">
                  Building data-driven platforms that turn complex health information into trusted intelligence.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get Started
                  </a>
                  <a
                    href="#what-we-do"
                    className="inline-flex items-center justify-center rounded-full bg-slate-800/50 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Learn more <span aria-hidden="true" className="ml-2">→</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Data platforms built for interoperability</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Evidence-grade analytics and AI</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              {["Health systems", "Research organizations", "Data-driven teams"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg bg-white/10 px-4 py-3 ring-1 ring-white/15"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="what-we-do"
          className="mx-auto max-w-6xl px-6 py-16 sm:py-20"
          aria-labelledby="what-we-do-title"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2
                id="what-we-do-title"
                className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                What We Do
              </h2>
              <p className="max-w-2xl text-base text-slate-600">
                LomaHipe partners with health leaders to build resilient data foundations and intelligence capabilities that stand up to regulatory, scientific, and operational rigor.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="relative overflow-hidden bg-slate-50 border-y border-slate-200"
          aria-labelledby="about-title"
        >
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#64748b 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:py-20">
            <div className="space-y-3">
              <h2
                id="about-title"
                className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                About LomaHipe
              </h2>
              <p className="max-w-3xl text-base text-slate-600">
                LomaHipe is a health intelligence company focused on building institutional-grade data platforms and analytics. We align clinical rigor, data stewardship, and modern engineering to help organizations trust the intelligence that powers critical decisions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-900 text-white p-8 shadow-lg ring-1 ring-slate-900/5">
                <h3 className="text-lg font-bold tracking-tight">Mission</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Advance the responsible use of health data by connecting robust platforms, transparent analytics, and teams who care about outcomes.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-bold tracking-tight text-slate-900">Values</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>Integrity in how data is sourced, governed, and communicated.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>Evidence-driven collaboration with clinicians, researchers, and operators.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>Pragmatic innovation that is measurable, reliable, and secure.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-bold tracking-tight text-slate-900">Approach</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  We embed with teams to design architectures, deliver analytics, and build capabilities that endure beyond individual projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-16 sm:py-20"
          aria-labelledby="contact-title"
        >
          <div className="max-w-2xl space-y-3">
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Contact
            </h2>
            <p className="text-base text-slate-600">
              Tell us about your data, analytics, or platform goals. We will respond with a thoughtful, practical next step.
            </p>
          </div>
          <form className="mt-10 grid gap-6 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-semibold text-slate-900" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-semibold text-slate-900" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-900" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
                placeholder="What would you like to discuss?"
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between pt-2">
              <p className="text-xs text-slate-500">No spam. We will only use your details to reply.</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Send message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-600">
          <span>&copy; {new Date().getFullYear()} LomaHipe. All rights reserved.</span>
          <div className="hidden gap-4 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-slate-900 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
