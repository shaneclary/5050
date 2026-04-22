import Link from "next/link";
import { grandTotals, yearlyTotals } from "@/lib/data";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  const totals = grandTotals();
  const years = yearlyTotals();
  const peakYear = years.reduce((a, b) => (b.charity > a.charity ? b : a));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(232,168,85,0.12), transparent 70%), radial-gradient(40% 40% at 80% 100%, rgba(127,176,105,0.08), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
              California &middot; Penal Code 320.5 &amp; 320.6
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
              If it&rsquo;s good enough for the <span className="text-gold">Dodgers</span>,
              <br className="hidden sm:block" /> it&rsquo;s good enough for the{" "}
              <span className="text-field">food bank</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-cream/75 max-w-2xl">
              California runs two charitable raffle programs. One moves millions. One is dead.
              The difference is a single number — and we already know how to fix it.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/data"
                className="bg-gold text-ink px-6 py-3 rounded-md font-medium hover:bg-gold-dark hover:text-cream transition"
              >
                See the data
              </Link>
              <Link
                href="/letter"
                className="border border-cream/20 px-6 py-3 rounded-md hover:border-cream/60 transition"
              >
                Read the letter
              </Link>
              <Link
                href="#act"
                className="border border-cream/20 px-6 py-3 rounded-md hover:border-cream/60 transition"
              >
                Share the argument
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Ticker */}
        <div className="relative border-y border-white/5 bg-ink-2/60 overflow-hidden">
          <div className="flex ticker-track whitespace-nowrap py-4 text-sm text-cream/50">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 pr-12">
                <span><span className="text-gold">$96M</span> raised by pro sports 50/50 since 2016</span>
                <span className="text-cream/20">&bull;</span>
                <span><span className="text-field">$48M</span> delivered to charity</span>
                <span className="text-cream/20">&bull;</span>
                <span><span className="text-alarm">23 years</span> since CA published nonprofit raffle data</span>
                <span className="text-cream/20">&bull;</span>
                <span><span className="text-alarm">200,000</span> nonprofits stuck under the 90% rule</span>
                <span className="text-cream/20">&bull;</span>
                <span><span className="text-gold">~20 sports teams</span> allowed to run 50/50</span>
                <span className="text-cream/20">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG NUMBER */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Since 2016</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Pro sports teams have delivered
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-20">
              <div className="font-display text-[clamp(4rem,18vw,14rem)] leading-none tracking-tighter text-field tabular-nums">
                $<AnimatedCounter to={Math.round(totals.charity / 1_000_000)} />M
              </div>
              <div className="max-w-sm pb-6 text-cream/80 text-lg leading-relaxed">
                to California charities — out of{" "}
                <span className="text-cream font-medium tabular-nums">
                  $<AnimatedCounter to={Math.round(totals.gross / 1_000_000)} />M
                </span>{" "}
                in raffle receipts, every dollar reported and published annually.
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 text-sm text-cream/50">
              Peak year: {peakYear.year} &mdash; ${Math.round(peakYear.charity / 1_000_000 * 10) / 10}M to charity from {peakYear.orgs} nonprofit foundations.
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPLIT COMPARISON */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-dark mb-3">Two programs, two outcomes</div>
            <h2 className="font-display text-4xl sm:text-6xl tracking-tight max-w-4xl">
              Same state. Same oversight agencies. Completely different results.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 border border-ink/10 h-full overflow-hidden">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-field-dark mb-6 font-medium">
                  <span className="w-2 h-2 rounded-full bg-field inline-block" />
                  Penal Code 320.6 &middot; Sports teams
                </div>
                <h3 className="font-display text-3xl sm:text-4xl mb-4">Alive and running.</h3>
                <p className="text-ink/70 leading-relaxed mb-8">
                  Around twenty pro sports nonprofits can run 50/50 raffles. Half to the
                  winner, half to charity. Every dollar reported, every year published.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-ink/10">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">Gross receipts</div>
                    <div className="font-display text-2xl sm:text-3xl tabular-nums">
                      $<AnimatedCounter to={Math.round(totals.gross / 1_000_000)} />M
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">To charity</div>
                    <div className="font-display text-2xl sm:text-3xl tabular-nums text-field-dark">
                      $<AnimatedCounter to={Math.round(totals.charity / 1_000_000)} />M
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">Filings</div>
                    <div className="font-display text-2xl sm:text-3xl tabular-nums">
                      <AnimatedCounter to={years.reduce((a, y) => a + y.orgs, 0)} />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">Transparency</div>
                    <div className="font-display text-2xl sm:text-3xl">Annual</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 border border-ink/10 h-full overflow-hidden">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-alarm mb-6 font-medium">
                  <span className="w-2 h-2 rounded-full bg-alarm inline-block" />
                  Penal Code 320.5 &middot; Every other nonprofit
                </div>
                <h3 className="font-display text-3xl sm:text-4xl mb-4">Effectively shut down.</h3>
                <p className="text-ink/70 leading-relaxed mb-8">
                  200,000 California nonprofits face a 90% rule that leaves nothing to pay the
                  printer, the software, or the person counting tickets. So the program died
                  the slow way.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-ink/10">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">Last aggregate report</div>
                    <div className="font-display text-2xl sm:text-3xl tabular-nums">2003</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">Years dark</div>
                    <div className="font-display text-2xl sm:text-3xl tabular-nums text-alarm">
                      <AnimatedCounter to={23} />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">IRS 990 sample, annual gaming</div>
                    <div className="font-display text-2xl sm:text-3xl tabular-nums">~$93K*</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mb-1">Transparency</div>
                    <div className="font-display text-2xl sm:text-3xl text-alarm">None</div>
                  </div>
                </div>
                <p className="mt-6 text-xs text-ink/50">
                  *From a sample of 302 CA nonprofits most likely to conduct gaming, excluding one outlier bingo hall.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE ARGUMENT */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">The argument</div>
            <h2 className="font-display text-4xl sm:text-6xl tracking-tight leading-[1.05]">
              The fix is already on the shelf.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-10 text-lg sm:text-xl leading-[1.75] text-cream/85">
            <Reveal delay={0.1}>
              <p>
                In October 2023, Governor Newsom signed SB 650, authored by Senator Bill Dodd.
                The bill made the 50/50 sports raffle program permanent. The Giants Community
                Fund alone has served more than <span className="text-gold">150,000 kids</span> on
                the strength of those proceeds.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Take the framework made permanent for the sports teams and hand it to the rest.
                Same split. Same oversight. Same transparency.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                When the 90% rule was written, tracking a raffle meant a shoebox and a paper
                ledger. The worry was money going missing on the way to the cause. That worry
                was reasonable then. <span className="text-gold">It is not reasonable now.</span>{" "}
                Every ticket can be numbered, every dollar traced from buyer to beneficiary in
                real time, on a phone, for pennies.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="font-display text-3xl sm:text-4xl leading-[1.15] text-gold pt-4">
                A legacy isn&rsquo;t the bill you passed. It&rsquo;s the bill that came next
                because yours worked.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACTION CARDS */}
      <section id="act" className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-dark mb-3">Take part</div>
            <h2 className="font-display text-4xl sm:text-6xl tracking-tight max-w-3xl">
              This is a one-person effort. It won&rsquo;t stay that way if people see it.
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Read the letter",
                desc: "Open letter to Sen. Dodd asking him to back extending SB 650 to every California charity.",
                href: "/letter",
                accent: "gold",
              },
              {
                label: "Dig into the data",
                desc: "Every 50/50 filing from 2016 to 2024, broken down by year and organization.",
                href: "/data",
                accent: "field",
              },
              {
                label: "Send it to a journalist",
                desc: "A working press kit: headline numbers, source links, methodology.",
                href: "/press",
                accent: "gold",
              },
              {
                label: "Share the argument",
                desc: "If you know a legislator, a staffer, or a nonprofit leader — this link.",
                href: "/about",
                accent: "field",
              },
            ].map((card, i) => (
              <Reveal key={card.label} delay={0.05 * i}>
                <Link
                  href={card.href}
                  className="group block bg-white rounded-2xl p-8 border border-ink/10 h-full hover:border-ink/40 transition"
                >
                  <div
                    className={`w-10 h-10 rounded-full mb-6 flex items-center justify-center text-ink ${
                      card.accent === "gold" ? "bg-gold" : "bg-field"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="font-display text-2xl mb-2 group-hover:text-ink transition">{card.label}</div>
                  <p className="text-ink/60 text-sm leading-relaxed">{card.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
