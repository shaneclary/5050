import type { Metadata } from "next";
import { RAFFLE_DATA, grandTotals, yearlyTotals, usd } from "@/lib/data";
import { YearlyChart } from "@/components/YearlyChart";

export const metadata: Metadata = {
  title: "Data — 50/50 For All",
  description: "California Major League Sports 50/50 raffle data, 2016-2024.",
};

export default function DataPage() {
  const totals = grandTotals();
  const years = yearlyTotals();
  const sorted = [...RAFFLE_DATA].sort((a, b) => b.year - a.year || b.grossReceipts - a.grossReceipts);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-field-dark mb-2">
          California Bureau of Gambling Control, 320.6 filings
        </p>
        <h1 className="font-serif text-4xl mb-3">The 50/50 Data</h1>
        <p className="text-ink/70 text-lg">
          Every major league sports 50/50 raffle report filed with the state, 2016&ndash;2024.
          Source: CA AG Bureau of Gambling Control.
        </p>
      </div>

      <section className="grid sm:grid-cols-3 gap-4 mb-12">
        <div className="bg-white border border-ink/10 rounded-lg p-5">
          <div className="text-xs uppercase tracking-widest text-ink/60 mb-1">Gross receipts</div>
          <div className="text-3xl font-serif">{usd(totals.gross)}</div>
        </div>
        <div className="bg-white border border-ink/10 rounded-lg p-5">
          <div className="text-xs uppercase tracking-widest text-ink/60 mb-1">To charity</div>
          <div className="text-3xl font-serif text-field-dark">{usd(totals.charity)}</div>
        </div>
        <div className="bg-white border border-ink/10 rounded-lg p-5">
          <div className="text-xs uppercase tracking-widest text-ink/60 mb-1">Filings</div>
          <div className="text-3xl font-serif">{RAFFLE_DATA.length}</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">By year</h2>
        <YearlyChart />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/15 text-left">
                <th className="py-2 pr-4">Year</th>
                <th className="py-2 pr-4">Orgs</th>
                <th className="py-2 pr-4 text-right">Gross receipts</th>
                <th className="py-2 pr-4 text-right">To charity</th>
              </tr>
            </thead>
            <tbody>
              {years.map((y) => (
                <tr key={y.year} className="border-b border-ink/8">
                  <td className="py-2 pr-4 font-medium">{y.year}</td>
                  <td className="py-2 pr-4">{y.orgs}</td>
                  <td className="py-2 pr-4 text-right tabular-nums">{usd(y.gross)}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-field-dark">{usd(y.charity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl mb-4">All filings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/15 text-left">
                <th className="py-2 pr-4">Year</th>
                <th className="py-2 pr-4">Organization</th>
                <th className="py-2 pr-4 text-right">Raffles</th>
                <th className="py-2 pr-4 text-right">Gross</th>
                <th className="py-2 pr-4 text-right">To charity</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((r, i) => (
                <tr key={`${r.year}-${r.organization}-${i}`} className="border-b border-ink/8">
                  <td className="py-2 pr-4 tabular-nums">{r.year}</td>
                  <td className="py-2 pr-4">{r.organization}</td>
                  <td className="py-2 pr-4 text-right tabular-nums">{r.numRaffles ?? "—"}</td>
                  <td className="py-2 pr-4 text-right tabular-nums">{usd(r.grossReceipts)}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-field-dark">{usd(r.toCharity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
