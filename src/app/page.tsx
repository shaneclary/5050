import Link from "next/link";
import { grandTotals, usd } from "@/lib/data";

export default function Home() {
  const totals = grandTotals();

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-field-dark mb-6">California, 2026</p>
        <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight">
          If it&rsquo;s good enough for the Dodgers,
          <br />
          it&rsquo;s good enough for the food bank.
        </h1>
        <p className="mt-8 text-xl leading-relaxed text-ink/80 max-w-3xl">
          California runs two charitable raffle programs. One is working. One is dead.
          The difference is a single number.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/data"
            className="bg-field text-white px-6 py-3 rounded-lg hover:bg-field-dark transition-colors"
          >
            See the data
          </Link>
          <Link
            href="/letter"
            className="border border-ink/20 px-6 py-3 rounded-lg hover:border-ink/50 transition-colors"
          >
            Read the letter to Senator Dodd
          </Link>
        </div>
      </section>

      <section className="bg-white border-y border-ink/10">
        <div className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-field-dark mb-3">
              Penal Code 320.6 — Pro Sports (50% rule)
            </div>
            <h2 className="font-serif text-3xl mb-4">The program that works</h2>
            <p className="text-ink/80 leading-relaxed mb-6">
              Around twenty pro sports nonprofits in California run 50/50 raffles. Half the
              pot to the winner, half to charity. Every dollar reported. Every year published.
            </p>
            <dl className="space-y-3">
              <div className="flex justify-between border-b border-ink/10 py-2">
                <dt className="text-ink/60">Gross receipts, 2016&ndash;2024</dt>
                <dd className="font-medium">{usd(totals.gross)}</dd>
              </div>
              <div className="flex justify-between border-b border-ink/10 py-2">
                <dt className="text-ink/60">To charitable purposes</dt>
                <dd className="font-medium text-field-dark">{usd(totals.charity)}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-ink/60">Transparency</dt>
                <dd className="font-medium">Published annually</dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-earth mb-3">
              Penal Code 320.5 — All Other Nonprofits (90% rule)
            </div>
            <h2 className="font-serif text-3xl mb-4">The program that died</h2>
            <p className="text-ink/80 leading-relaxed mb-6">
              Every other California nonprofit, around 200,000 of them, must give 90% of raffle
              receipts to charity. That sounds generous until you try to run one. You can&rsquo;t
              pay the printer. You can&rsquo;t pay the software. You can&rsquo;t pay a person
              to count the tickets.
            </p>
            <dl className="space-y-3">
              <div className="flex justify-between border-b border-ink/10 py-2">
                <dt className="text-ink/60">Last aggregate data published</dt>
                <dd className="font-medium">2003</dd>
              </div>
              <div className="flex justify-between border-b border-ink/10 py-2">
                <dt className="text-ink/60">Years without oversight</dt>
                <dd className="font-medium text-earth">23</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-ink/60">IRS 990 sample, gaming revenue per year</dt>
                <dd className="font-medium">~$93K across the state*</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-ink/50">
              *Excluding one bingo hall, from a sample of 302 CA nonprofits most likely to
              conduct gaming activities (2011&ndash;2024).
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif text-4xl mb-8">The argument</h2>
        <div className="space-y-6 text-lg leading-relaxed text-ink/85">
          <p>
            In October 2023, Governor Newsom signed SB 650, authored by Senator Bill Dodd. The
            bill made the 50/50 sports raffle program permanent. The Giants Community Fund
            alone has served more than 150,000 kids on the strength of those proceeds.
          </p>
          <p>
            The fix is already on the shelf. Take the framework made permanent for the sports
            teams and hand it to the rest. Same split. Same oversight. Same transparency.
          </p>
          <p>
            When the 90% rule was written, tracking a raffle meant a shoebox and a paper
            ledger. The worry was money going missing on the way to the cause. That worry was
            reasonable then. It is not reasonable now. Every ticket can be numbered, every
            dollar traced from buyer to beneficiary in real time, on a phone, for pennies. The
            accounting problem that justified the old rule has been solved by engineers who
            never heard of it.
          </p>
          <p className="font-serif text-2xl text-field-dark pt-4">
            A legacy isn&rsquo;t the bill you passed. It&rsquo;s the bill that came next
            because yours worked.
          </p>
        </div>
      </section>

      <section className="bg-field-light/30 border-y border-ink/10">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl mb-4">Share the awareness</h2>
          <p className="text-ink/80 mb-8 max-w-2xl mx-auto">
            This is a one-person effort to bring attention to a quiet policy failure. If you
            know a journalist, a nonprofit leader, or a legislative staffer who should see it,
            send them the link.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/letter" className="bg-field-dark text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Read the letter
            </Link>
            <Link href="/data" className="border border-ink/30 px-6 py-3 rounded-lg hover:border-ink transition">
              Dig into the data
            </Link>
            <Link href="/press" className="border border-ink/30 px-6 py-3 rounded-lg hover:border-ink transition">
              Press kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
