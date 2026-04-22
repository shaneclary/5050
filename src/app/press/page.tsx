import type { Metadata } from "next";
import Link from "next/link";
import { grandTotals, usd } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Press — 50/50 For All",
  description: "Press kit, key statistics, and contact information for 50/50 For All.",
};

export default function PressPage() {
  const totals = grandTotals();

  return (
    <div>
      <section className="relative overflow-hidden grain">
        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">For journalists &amp; policy staff</p>
            <h1 className="font-display text-5xl sm:text-7xl tracking-tight leading-[0.95]">Press kit</h1>
            <p className="mt-6 text-lg text-cream/70 max-w-2xl">
              Key statistics, source documents, methodology, and contact for journalists,
              researchers, and legislative staff covering the 50/50 For All effort.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-16">
          <Reveal>
            <section>
              <h2 className="font-display text-3xl sm:text-4xl mb-6 text-ink">Headline numbers</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { v: usd(totals.gross), l: "Pro sports 50/50 gross receipts, 2016–2024" },
                  { v: usd(totals.charity), l: "To charitable purposes", accent: true },
                  { v: "23 yrs", l: "Since last aggregate data published for 320.5 nonprofit program" },
                  { v: "~200,000", l: "California nonprofits covered by the 90% rule" },
                ].map((s) => (
                  <div key={s.l} className="bg-white border border-ink/10 rounded-xl p-6">
                    <div className={`font-display text-3xl sm:text-4xl ${s.accent ? "text-field-dark" : "text-ink"}`}>{s.v}</div>
                    <div className="text-sm text-ink/60 mt-2">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section>
              <h2 className="font-display text-3xl sm:text-4xl mb-6 text-ink">Key sources</h2>
              <ul className="space-y-4 text-ink/85">
                {[
                  { name: "SB 650 (2023)", desc: "Sen. Dodd's bill making the 50/50 sports raffle program permanent.", href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB650", label: "Bill text" },
                  { name: "Penal Code 320.5", desc: "The 90% nonprofit raffle rule.", href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=320.5&lawCode=PEN", label: "Statute" },
                  { name: "Penal Code 320.6", desc: "The 50% pro sports raffle rule.", href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=320.6&lawCode=PEN", label: "Statute" },
                  { name: "CA Bureau of Gambling Control", desc: "Annual Major League Sports Raffle reports — source for all figures on this site.", href: "https://oag.ca.gov/gambling/sportsraffle", label: "BGC page" },
                  { name: "CA AG Nonprofit Raffle Program", desc: "Where 320.5 data would live if it were compiled.", href: "https://oag.ca.gov/charities/raffles", label: "AG page" },
                ].map((s) => (
                  <li key={s.name} className="border-b border-ink/10 pb-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-medium text-ink">{s.name}</span>
                      <a href={s.href} target="_blank" rel="noopener" className="text-sm underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark">
                        {s.label} &rarr;
                      </a>
                    </div>
                    <p className="text-sm text-ink/60 mt-1">{s.desc}</p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="font-display text-3xl sm:text-4xl mb-6 text-ink">Methodology</h2>
              <p className="text-ink/80 leading-relaxed">
                Sports raffle figures are compiled from individual 50/50 raffle reports filed
                with the California Bureau of Gambling Control by pro sports nonprofit
                foundations, covering fiscal years 2016 through 2024. The IRS 990 gaming
                revenue sample draws from ProPublica Nonprofit Explorer, targeting 302
                California nonprofit categories most likely to conduct gaming activities (VFW,
                American Legion, Knights of Columbus, Rotary, Lions, PTAs, booster clubs)
                across 2011–2024.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.15}>
            <section className="bg-ink rounded-2xl p-8 sm:p-10 text-cream">
              <h2 className="font-display text-3xl sm:text-4xl mb-4">Contact</h2>
              <p className="text-cream/80 leading-relaxed mb-6">
                For press inquiries, fact checks, or to request raw data.
              </p>
              <a href="mailto:press@5050forall.com" className="inline-block bg-gold text-ink px-6 py-3 rounded-md font-medium hover:bg-gold-dark hover:text-cream transition">
                press@5050forall.com
              </a>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section>
              <h2 className="font-display text-3xl sm:text-4xl mb-4 text-ink">Related</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/letter" className="border border-ink/20 px-4 py-2 rounded-md hover:border-ink/60 transition text-ink">Open letter to Sen. Dodd</Link>
                <Link href="/data" className="border border-ink/20 px-4 py-2 rounded-md hover:border-ink/60 transition text-ink">Full data</Link>
                <Link href="/about" className="border border-ink/20 px-4 py-2 rounded-md hover:border-ink/60 transition text-ink">About the effort</Link>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
