import Image from "next/image";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
          <Link href="/" className="group relative flex items-center gap-4 rounded-xl bg-white/50 px-3 py-2 transition hover:bg-white">
            <Image
              src="/logo.png"
              alt="LomaHipe logo"
              width={180}
              height={180}
              className="
                h-12 sm:h-16 w-auto object-contain
                transition-all duration-500 ease-out
                group-hover:animate-flag
                group-hover:brightness-110
                group-hover:contrast-110
                relative z-10
              "
              priority
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
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the LomaHipe website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Use License</h2>
            <p className="mt-3">
              Permission is granted to temporarily download one copy of the materials (information or software) on LomaHipe's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Disclaimer</h2>
            <p className="mt-3">
              The materials on LomaHipe's website are provided on an 'as is' basis. LomaHipe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Limitations</h2>
            <p className="mt-3">
              In no event shall LomaHipe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LomaHipe's website.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
