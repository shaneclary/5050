import type { Metadata } from "next";
import Link from "next/link";
import { grandTotals, usd } from "@/lib/data";

export const metadata: Metadata = {
  title: "Press — 50/50 For All",
  description: "Press kit, key statistics, and contact information for 50/50 For All.",
};

export default function PressPage() {
  const totals = grandTotals();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl mb-3">Press</h1>
      <p className="text-ink/70 text-lg mb-12">
        Key statistics, source documents, and contact information for journalists, researchers,
        and policy staff.
      </p>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-5">The headline numbers</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white border border-ink/10 rounded-lg p-5">
            <div className="text-3xl font-serif">{usd(totals.gross)}</div>
            <div className="text-sm text-ink/60 mt-1">
              Pro sports 50/50 gross receipts, 2016&ndash;2024
            </div>
          </div>
          <div className="bg-white border border-ink/10 rounded-lg p-5">
            <div className="text-3xl font-serif text-field-dark">{usd(totals.charity)}</div>
            <div className="text-sm text-ink/60 mt-1">To charitable purposes</div>
          </div>
          <div className="bg-white border border-ink/10 rounded-lg p-5">
            <div className="text-3xl font-serif">23 yrs</div>
            <div className="text-sm text-ink/60 mt-1">
              Since last aggregate data published for 320.5 nonprofit program
            </div>
          </div>
          <div className="bg-white border border-ink/10 rounded-lg p-5">
            <div className="text-3xl font-serif">~200,000</div>
            <div className="text-sm text-ink/60 mt-1">
              California nonprofits covered by the 90% rule
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-5">Key sources</h2>
        <ul className="space-y-4 text-ink/85">
          <li>
            <span className="font-medium">SB 650 (2023)</span> — Senator Dodd&rsquo;s bill making the
            50/50 sports raffle program permanent.{" "}
            <a
              href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB650"
              className="underline decoration-field-dark underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              Bill text
            </a>
          </li>
          <li>
            <span className="font-medium">Penal Code 320.5</span> — The 90% nonprofit raffle rule.{" "}
            <a
              href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=320.5&lawCode=PEN"
              className="underline decoration-field-dark underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              Statute
            </a>
          </li>
          <li>
            <span className="font-medium">Penal Code 320.6</span> — The 50% pro sports raffle rule.{" "}
            <a
              href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=320.6&lawCode=PEN"
              className="underline decoration-field-dark underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              Statute
            </a>
          </li>
          <li>
            <span className="font-medium">CA Bureau of Gambling Control</span> — Annual Major League
            Sports Raffle reports (source for all figures on this site).{" "}
            <a
              href="https://oag.ca.gov/gambling/sportsraffle"
              className="underline decoration-field-dark underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              BGC page
            </a>
          </li>
          <li>
            <span className="font-medium">CA AG Nonprofit Raffle Program</span> — Where 320.5 data{" "}
            <em>would</em> live if it were compiled.{" "}
            <a
              href="https://oag.ca.gov/charities/raffles"
              className="underline decoration-field-dark underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              AG page
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-5">Methodology</h2>
        <p className="text-ink/85 leading-relaxed">
          Sports raffle figures are compiled from individual 50/50 raffle reports filed with
          the California Bureau of Gambling Control by pro sports nonprofit foundations,
          covering fiscal years 2016 through 2024. The IRS 990 gaming revenue sample draws
          from ProPublica Nonprofit Explorer, targeting 302 California nonprofit categories
          most likely to conduct gaming activities (VFW, American Legion, Knights of Columbus,
          Rotary, Lions, PTAs, booster clubs) across 2011&ndash;2024.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-5">Contact</h2>
        <p className="text-ink/85 leading-relaxed mb-4">
          For press inquiries, fact checks, or to request raw data, reach out by email.
        </p>
        <p className="text-ink/85">
          <a
            href="mailto:press@5050forall.com"
            className="underline decoration-field-dark underline-offset-4"
          >
            press@5050forall.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl mb-5">Related reading</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/letter" className="border border-ink/20 px-4 py-2 rounded-lg hover:border-ink">
            Open letter to Sen. Dodd
          </Link>
          <Link href="/data" className="border border-ink/20 px-4 py-2 rounded-lg hover:border-ink">
            Full data
          </Link>
          <Link href="/about" className="border border-ink/20 px-4 py-2 rounded-lg hover:border-ink">
            About the effort
          </Link>
        </div>
      </section>
    </article>
  );
}
