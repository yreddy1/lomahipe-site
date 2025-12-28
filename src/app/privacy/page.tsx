import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Introduction</h2>
            <p className="mt-3">
              LomaHipe ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Information We Collect</h2>
            <p className="mt-3">
              We collect information that you provide directly to us, such as when you fill out a contact form, request information, or communicate with us. This may include your name, email address, and the content of your message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-3">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Contact Us</h2>
            <p className="mt-3">
              To ask questions or comment about this privacy policy and our privacy practices, contact us via the form on our homepage.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
