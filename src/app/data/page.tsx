import type { Metadata } from "next";
import { RAFFLE_DATA, grandTotals, yearlyTotals, usd } from "@/lib/data";
import { YearlyChart } from "@/components/YearlyChart";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Data — 50/50 For All",
  description: "California Major League Sports 50/50 raffle data, 2016-2024.",
};

export default function DataPage() {
  const totals = grandTotals();
  const years = yearlyTotals();
  const sorted = [...RAFFLE_DATA].sort((a, b) => b.year - a.year || b.grossReceipts - a.grossReceipts);

  return (
    <div>
      <section className="relative overflow-hidden grain">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(50% 50% at 50% 0%, rgba(127,176,105,0.08), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              California Bureau of Gambling Control &middot; 320.6 filings
            </p>
            <h1 className="font-display text-5xl sm:text-7xl tracking-tight leading-[0.95]">
              Every filing.<br />Every dollar.
            </h1>
            <p className="mt-6 text-lg text-cream/70 max-w-2xl">
              Every Major League sports 50/50 raffle report filed with the state,
              2016&ndash;2024. Source: CA AG Bureau of Gambling Control.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid sm:grid-cols-3 gap-4">
              <div className="bg-ink-2/60 border border-white/10 rounded-xl p-6">
                <div className="text-xs uppercase tracking-widest text-cream/50 mb-2">Gross receipts</div>
                <div className="font-display text-4xl tabular-nums">
                  $<AnimatedCounter to={Math.round(totals.gross / 1_000_000)} />M
                </div>
              </div>
              <div className="bg-ink-2/60 border border-white/10 rounded-xl p-6">
                <div className="text-xs uppercase tracking-widest text-cream/50 mb-2">To charity</div>
                <div className="font-display text-4xl tabular-nums text-field">
                  $<AnimatedCounter to={Math.round(totals.charity / 1_000_000)} />M
                </div>
              </div>
              <div className="bg-ink-2/60 border border-white/10 rounded-xl p-6">
                <div className="text-xs uppercase tracking-widest text-cream/50 mb-2">Filings</div>
                <div className="font-display text-4xl tabular-nums">
                  <AnimatedCounter to={RAFFLE_DATA.length} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight text-ink mb-8">By year</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <YearlyChart />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm text-ink">
                <thead>
                  <tr className="border-b-2 border-ink/20 text-left uppercase tracking-widest text-xs text-ink/60">
                    <th className="py-3 pr-4">Year</th>
                    <th className="py-3 pr-4">Orgs</th>
                    <th className="py-3 pr-4 text-right">Gross receipts</th>
                    <th className="py-3 pr-4 text-right">To charity</th>
                  </tr>
                </thead>
                <tbody>
                  {years.map((y) => (
                    <tr key={y.year} className="border-b border-ink/10 hover:bg-ink/5 transition">
                      <td className="py-3 pr-4 font-display text-lg">{y.year}</td>
                      <td className="py-3 pr-4 tabular-nums">{y.orgs}</td>
                      <td className="py-3 pr-4 text-right tabular-nums">{usd(y.gross)}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-field-dark font-medium">{usd(y.charity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight text-ink mt-20 mb-8">All filings</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-ink">
                <thead>
                  <tr className="border-b-2 border-ink/20 text-left uppercase tracking-widest text-xs text-ink/60">
                    <th className="py-3 pr-4">Year</th>
                    <th className="py-3 pr-4">Organization</th>
                    <th className="py-3 pr-4 text-right">Raffles</th>
                    <th className="py-3 pr-4 text-right">Gross</th>
                    <th className="py-3 pr-4 text-right">To charity</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((r, i) => (
                    <tr key={`${r.year}-${r.organization}-${i}`} className="border-b border-ink/10 hover:bg-ink/5 transition">
                      <td className="py-3 pr-4 tabular-nums">{r.year}</td>
                      <td className="py-3 pr-4">{r.organization}</td>
                      <td className="py-3 pr-4 text-right tabular-nums">{r.numRaffles ?? "—"}</td>
                      <td className="py-3 pr-4 text-right tabular-nums">{usd(r.grossReceipts)}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-field-dark">{usd(r.toCharity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
