import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "50/50 For All — One rule, every California charity",
  description:
    "California allows pro sports teams to run 50/50 raffles that have raised $48M+ for charity. Every other nonprofit is stuck under a 90% rule that killed the program. It is time to extend what works.",
  openGraph: {
    title: "50/50 For All",
    description: "If it's good enough for the Dodgers, it's good enough for the food bank.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-ink/80 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-lg font-display font-semibold tracking-tight">
                50<span className="text-gold">/</span>50 For All
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-8 text-sm">
              <Link href="/data" className="text-cream/70 hover:text-cream transition">Data</Link>
              <Link href="/letter" className="text-cream/70 hover:text-cream transition">Letter</Link>
              <Link href="/press" className="text-cream/70 hover:text-cream transition">Press</Link>
              <Link href="/about" className="text-cream/70 hover:text-cream transition">About</Link>
              <Link
                href="/#act"
                className="bg-gold text-ink px-4 py-2 rounded-md font-medium hover:bg-gold-dark hover:text-cream transition"
              >
                Take action
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/5 mt-32">
          <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-display text-lg mb-2">
                50<span className="text-gold">/</span>50 For All
              </div>
              <p className="text-cream/50 leading-relaxed max-w-sm">
                An awareness effort to extend California&rsquo;s 50/50 raffle framework from
                pro sports teams to every nonprofit in the state.
              </p>
            </div>
            <div>
              <div className="text-cream/40 uppercase tracking-widest text-xs mb-3">Learn</div>
              <ul className="space-y-2">
                <li><Link href="/data" className="text-cream/70 hover:text-cream">The data</Link></li>
                <li><Link href="/letter" className="text-cream/70 hover:text-cream">Open letter to Sen. Dodd</Link></li>
                <li><Link href="/about" className="text-cream/70 hover:text-cream">About the effort</Link></li>
                <li><Link href="/press" className="text-cream/70 hover:text-cream">Press kit</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-cream/40 uppercase tracking-widest text-xs mb-3">Transparency</div>
              <p className="text-cream/60 leading-relaxed">
                Not a 501(c)(3). Not a PAC. Not accepting donations. An individual California
                resident sharing research about a public policy question.
              </p>
            </div>
          </div>
          <div className="border-t border-white/5 py-6">
            <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/40">
              <div>&copy; 2026 Shane Clary. Awareness project.</div>
              <div className="flex gap-4">
                <a href="https://github.com/shaneclary/5050" target="_blank" rel="noopener" className="hover:text-cream">Source on GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
