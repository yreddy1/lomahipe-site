"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { name: "What We Build", href: "#what-we-do" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const capabilities = [
  {
    title: "Data Platforms",
    body:
      "Designing scalable, secure platforms to ingest, structure, and govern complex health data across systems and environments.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Health Intelligence",
    body:
      "Transforming raw data into trusted, evidence-grade intelligence that supports confident decisions, accountability, and measurable outcomes.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Research, Incubation & Delivery",
    body:
      "Researching new approaches, incubating emerging ideas and leaders, and delivering low-maintenance, high-performance solutions into live environments.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [isReactorActive, setIsReactorActive] = useState(false);
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (activeModal) {
      requestAnimationFrame(() => setModalVisible(true));
    } else {
      setModalVisible(false);
    }
  }, [activeModal]);

  useEffect(() => {
    if (!activeModal) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  const modalContent =
    activeModal === "privacy"
      ? {
          title: "Privacy Policy",
          paragraphs: [
            "We handle health-related and organizational data with rigor. Information shared with LomaHipe is used solely to deliver requested services, strengthen our platforms, and support our customer relationships.",
            "We do not sell personal data. Access is limited to authorized personnel under confidentiality obligations, enforced through least-privilege controls, logging, and periodic review.",
            "Data is encrypted in transit and at rest. When we work with protected health information, we align to applicable regulations and customer-specific governance, including breach notification protocols.",
            "You may request access, corrections, or deletion of your information by contacting privacy@lomahipe.com. We respond consistent with contractual and regulatory requirements.",
          ],
        }
      : activeModal === "terms"
        ? {
            title: "Terms of Service",
            paragraphs: [
              "By using LomaHipe offerings, you agree to comply with applicable laws, policies, and the governing agreement for your engagement.",
              "Our platforms, models, and documentation are provided for your internal use. Reverse engineering, sublicensing, or resale are prohibited unless explicitly permitted by law or contract.",
              "LomaHipe does not provide medical advice. Outputs require professional validation, and you remain responsible for clinical, operational, and compliance decisions.",
              "To discuss tailored provisions for regulated workflows, service-level needs, or data-handling requirements, contact legal@lomahipe.com.",
            ],
          }
        : null;

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900 transition-all duration-700 ${isReactorActive ? "brightness-110 contrast-125" : ""}`}>
      {/* Fusion Overlay */}
      <div 
        className={`pointer-events-none fixed inset-0 z-[100] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-blue-500/10 to-transparent transition-opacity duration-700 ${isReactorActive ? "opacity-100" : "opacity-0"}`} 
        style={{ mixBlendMode: "overlay" }}
      />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
          <div 
            className="group relative flex items-center cursor-pointer"
            onMouseEnter={() => setIsReactorActive(true)}
            onMouseLeave={() => setIsReactorActive(false)}
          >
            <Image
              src="/logo.png"
              alt="LomaHipe logo"
              width={180}
              height={180}
              priority
              className="
                h-12 sm:h-16 w-auto object-contain
                transition-all duration-500 ease-out
                group-hover:animate-flag
                group-hover:brightness-110
                group-hover:contrast-110
                relative z-10
              "
            />

            {/* subtle glow */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute inset-0
                rounded-xl
                opacity-0
                blur-lg
                bg-gradient-to-r from-sky-400/30 via-teal-400/30 to-sky-400/30
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />
          </div>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 sm:text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    className="transition-colors hover:text-slate-900 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
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
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-slate-900 text-white">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(4,120,196,0.55), rgba(13,148,136,0.5)), url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-teal-100 ring-1 ring-inset ring-white/20 backdrop-blur-sm">
                Health Intelligence for Real-World Systems
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-sm">
                Intelligence that powers decisive action and measurable outcomes
              </h1>

              <p className="max-w-2xl text-lg text-slate-100 sm:text-xl leading-relaxed drop-shadow-sm">
                Researching, incubating, and delivering low-maintenance, high-performance technology so teams can turn complex health information into decisions they trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-200">
              {[
                "Healthcare & public health",
                "Schools & child development centers",
                "Community & mission-driven organizations",
              ].map((label) => (
                <div key={label} className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/20">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="what-we-do" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What We Build and Steward</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              LomaHipe works with organizations that serve and protect people—building resilient data foundations, evidence-grade intelligence, and systems designed to endure.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-slate-300">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW WE WORK */}
        <section
          id="how-we-work"
          className="mx-auto max-w-6xl px-6 py-20 sm:py-24"
          aria-labelledby="how-we-work-title"
        >
          <div className="max-w-2xl">
            <h2
              id="how-we-work-title"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              How We Work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our approach is designed to respect real-world constraints while producing systems that
              are reliable, maintainable, and trusted over time.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-slate-300">
              <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky-600 transition-transform duration-300 group-hover:scale-105 origin-left">
                Step 1
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Understand the Environment
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                We begin by understanding operational realities, constraints, stakeholders, and risks—
                not just technical requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-slate-300">
              <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky-600 transition-transform duration-300 group-hover:scale-105 origin-left">
                Step 2
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Research & Prototype
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                We research, test, and validate approaches before scaling—ensuring solutions are grounded
                in evidence and practical feasibility.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-slate-300">
              <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky-600 transition-transform duration-300 group-hover:scale-105 origin-left">
                Step 3
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Deliver Systems That Endure
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                We deliver low-maintenance, high-performance systems designed to operate reliably
                beyond initial deployment.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-slate-200 bg-slate-50/50">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About LomaHipe</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                LomaHipe is a health intelligence company focused on research, incubation, and delivery of low-maintenance, high-performance systems. We align clinical rigor, data stewardship, and modern engineering so organizations can trust the intelligence behind critical decisions.
              </p>
            </div>

            {/* Mission / Values / Approach */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Mission */}
              <div className="group relative flex flex-col rounded-2xl bg-slate-900 p-8 text-white shadow-xl ring-1 ring-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-slate-700">
                <h3 className="text-lg font-bold tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left">Mission</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  Advance the responsible use of health data by delivering clear, trustworthy intelligence and systems that organizations can operate with confidence over the long term.
                </p>
              </div>

              {/* Values */}
              <div className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-slate-300">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-transform duration-300 group-hover:scale-105 origin-left">Values</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                  <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> Stewardship and integrity in how data is sourced, governed, and communicated.</li>
                  <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> Transparency through clear delivery, measurable outcomes, and dependable systems.</li>
                  <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> Pragmatic innovation that is secure, maintainable, and built to endure.</li>
                </ul>
              </div>

              {/* Approach */}
              <div className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-slate-300">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-transform duration-300 group-hover:scale-105 origin-left">Approach</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  We embed with teams to research, prototype, and deploy solutions—then harden them into repeatable systems that continue to perform well beyond initial delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact</h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your environment and goals. If there is strong alignment, we will follow up with a thoughtful, practical next step.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xgoeypne"
            method="POST"
            className="mt-12 grid gap-6 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 sm:grid-cols-2"
          >
            <input type="hidden" name="_subject" value="New Contact — LomaHipe" />

            <div className="sm:col-span-1">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                required
                className="w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 transition-all"
              />
            </div>

            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all"
              >
                Send message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-900">LomaHipe</span>
                </div>
                <p className="max-w-xs text-sm text-slate-500">
                  Building resilient data foundations and evidence-grade intelligence that customers rely on for confident decisions in health and research.
                </p>
              </div>
            
            <div className="flex flex-wrap gap-8 text-sm text-slate-600">
              <div className="flex flex-col gap-3">
                <span className="font-semibold text-slate-900">Company</span>
                <a href="#about" className="hover:text-sky-600">About</a>
                <a href="#what-we-do" className="hover:text-sky-600">Services</a>
                <a href="#how-we-work" className="hover:text-sky-600">How We Work</a>
                <a href="#contact" className="hover:text-sky-600">Contact</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold text-slate-900">Legal</span>
                <div className="flex items-center gap-2 text-slate-600">
                  <button
                    type="button"
                    onClick={() => setActiveModal("privacy")}
                    className="hover:text-sky-600 focus:outline-none focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  >
                    Privacy
                  </button>
                  <span aria-hidden className="text-slate-300">|</span>
                  <button
                    type="button"
                    onClick={() => setActiveModal("terms")}
                    className="hover:text-sky-600 focus:outline-none focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  >
                    Terms
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-slate-100 pt-8 text-center text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} LomaHipe. All rights reserved. LomaHipe is an operating company within The Cerna Group portfolio.</p>
          </div>
        </div>
      </footer>

      {activeModal && modalContent && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-10">
          <div
            className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-200 ${modalVisible ? "opacity-100" : "opacity-0"}`}
            onClick={() => setActiveModal(null)}
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${activeModal}-dialog-title`}
            className={`relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 transition-all duration-200 ease-out ${modalVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-1"}`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
              <h2 id={`${activeModal}-dialog-title`} className="text-xl font-semibold text-slate-900">
                {modalContent.title}
              </h2>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                aria-label="Close dialog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.22 5.22a.75.75 0 011.06 0L10 8.94l3.72-3.72a.75.75 0 111.06 1.06L11.06 10l3.72 3.72a.75.75 0 11-1.06 1.06L10 11.06l-3.72 3.72a.75.75 0 11-1.06-1.06L8.94 10 5.22 6.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-700">
              {modalContent.paragraphs.map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-3" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
