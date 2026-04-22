import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — 50/50 For All",
  description: "What 50/50 For All is, what it isn't, and who's behind it.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden grain">
        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About</p>
            <h1 className="font-display text-5xl sm:text-7xl tracking-tight leading-[0.95]">
              One rule.<br />Every California charity.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-3xl px-6 py-20 space-y-12">
          {[
            {
              heading: "The premise",
              body: (
                <>
                  <p>
                    California has two charitable raffle programs. Penal Code 320.6, passed
                    in 2015 and made permanent by SB 650 in 2023, lets pro sports teams run
                    50/50 raffles. Since 2016 it has moved $48M+ to charity, tracked and
                    published every year.
                  </p>
                  <p>
                    Penal Code 320.5, on the books since 2001, requires all other nonprofits
                    to return 90% of raffle proceeds to charity. No aggregate data has been
                    published since 2003. A sample of IRS 990 filings suggests the program
                    raises roughly $93K per year across the entire state. For 200,000
                    California nonprofits, that is a dead program.
                  </p>
                </>
              ),
            },
            {
              heading: "The ask",
              body: (
                <p>
                  Extend 320.6&rsquo;s framework to all California nonprofits. One rule. Same
                  50/50 split, same oversight, same transparency. If the Dodgers can run it,
                  the food bank can run it.
                </p>
              ),
            },
            {
              heading: "Who's behind this",
              body: (
                <p>
                  Shane Clary. An individual California resident with no stake in any sports
                  franchise or nonprofit covered by either raffle program. This is an
                  awareness effort, not an organization.
                </p>
              ),
            },
            {
              heading: "What this is not",
              body: (
                <ul className="list-disc pl-6 space-y-2 marker:text-gold-dark">
                  <li>Not a registered 501(c)(3) or 501(c)(4).</li>
                  <li>Not a PAC.</li>
                  <li>Not accepting donations.</li>
                  <li>Not affiliated with Senator Dodd, his staff, or any legislator.</li>
                  <li>Not affiliated with any sports team, league, or charitable foundation.</li>
                </ul>
              ),
            },
            {
              heading: "Open to partnership",
              body: (
                <p>
                  If you run a California 501(c)(3) that would benefit from a workable raffle
                  rule and want to take this further, get in touch via the{" "}
                  <Link href="/press" className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark">
                    press page
                  </Link>.
                </p>
              ),
            },
          ].map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.05}>
              <section>
                <h2 className="font-display text-3xl sm:text-4xl mb-4 text-ink">{s.heading}</h2>
                <div className="space-y-4 text-lg leading-relaxed text-ink/80">{s.body}</div>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section className="pt-8 border-t border-ink/10">
              <h2 className="font-display text-3xl sm:text-4xl mb-8 text-ink">FAQ</h2>
              <div className="space-y-8">
                {[
                  {
                    q: "Why does the 90% rule actually block raffles?",
                    a: "Because nonprofits have real costs. Printing tickets, running software, paying someone to count receipts, ticketing platforms, POS fees. If 90% of every dollar must go to charity, the remaining 10% has to cover all of it. For any raffle big enough to matter, the math doesn't work. Smaller events get run at a loss or not at all.",
                  },
                  {
                    q: "Why not just raise it to 70% or 80%?",
                    a: "That would be an improvement. But the argument for 50/50 is symmetry. The same rule that made professional sports raffles successful is the one that should apply to every other nonprofit. Splitting the difference creates a two-tier system based on whether your charity is attached to a stadium.",
                  },
                  {
                    q: "What about fraud?",
                    a: "The same oversight framework that keeps the Bureau of Gambling Control watching pro sports raffles would apply here. Modern raffle platforms can log every transaction, number every ticket, and produce the compliance reports California already requires of 320.6 operators.",
                  },
                  {
                    q: "Is the 90% rule literally unused?",
                    a: "No, some organizations still run compliant raffles, typically small ones where the prize is donated and the overhead is volunteer labor. But as a revenue engine for the California nonprofit sector, the program is effectively shut down.",
                  },
                ].map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-display text-xl text-ink mb-2">{faq.q}</h3>
                    <p className="text-ink/75 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
