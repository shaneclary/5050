import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "50/50 For All — One rule, every California charity",
  description:
    "California allows pro sports teams to run 50/50 raffles that have raised $48M+ for charity. Every other nonprofit is stuck under a 90% rule that killed the program. It is time to extend what works.",
  openGraph: {
    title: "50/50 For All",
    description:
      "If it's good enough for the Dodgers, it's good enough for the food bank.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-ink/10">
          <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
            <Link href="/" className="font-serif text-xl tracking-tight">
              50/50 <span className="text-field-dark">For All</span>
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/data" className="hover:text-field-dark">Data</Link>
              <Link href="/letter" className="hover:text-field-dark">Letter</Link>
              <Link href="/press" className="hover:text-field-dark">Press</Link>
              <Link href="/about" className="hover:text-field-dark">About</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-ink/10 mt-24">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-ink/60 flex flex-col sm:flex-row gap-3 justify-between">
            <div>
              50/50 For All is an awareness effort by Shane Clary. Not a registered 501(c)(3).
              Not currently soliciting donations.
            </div>
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-ink">About</Link>
              <Link href="/press" className="hover:text-ink">Press</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
