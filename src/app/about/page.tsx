import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — 50/50 For All",
  description: "What 50/50 For All is, what it isn't, and who's behind it.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl mb-8">About</h1>

      <section className="space-y-5 text-lg leading-relaxed text-ink/85">
        <h2 className="font-serif text-2xl pt-4">The premise</h2>
        <p>
          California has two charitable raffle programs on its books. Penal Code 320.6, passed
          in 2015 and made permanent by SB 650 in 2023, lets pro sports teams run 50/50
          raffles. Since 2016 that program has moved $48M+ to charity, tracked and published
          every year. Penal Code 320.5, on the books since 2001, requires all other nonprofits
          to return 90% of raffle proceeds to charity. No aggregate data has been published
          since 2003.
        </p>
        <p>
          A sample of IRS 990 filings suggests the 90% program raises roughly $93K per year
          across the entire state, excluding one outlier bingo hall. For a program covering
          around 200,000 California nonprofits, that is a dead program.
        </p>

        <h2 className="font-serif text-2xl pt-6">The ask</h2>
        <p>
          Extend 320.6&rsquo;s framework to all California nonprofits. One rule. Same 50/50
          split, same oversight, same transparency. If the Dodgers can run it, the food bank
          can run it.
        </p>

        <h2 className="font-serif text-2xl pt-6">Who&rsquo;s behind this</h2>
        <p>
          Shane Clary. An individual resident of California with no stake in any sports
          franchise or nonprofit covered by either raffle program. This is an awareness effort,
          not an organization.
        </p>

        <h2 className="font-serif text-2xl pt-6">What this is not</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Not a registered 501(c)(3) or 501(c)(4).</li>
          <li>Not a PAC.</li>
          <li>Not accepting donations.</li>
          <li>Not affiliated with Senator Dodd, his staff, or any legislator.</li>
          <li>Not affiliated with any sports team, league, or charitable foundation.</li>
        </ul>

        <h2 className="font-serif text-2xl pt-6">Open to partnership</h2>
        <p>
          If you run a California 501(c)(3) that would benefit from a workable raffle rule and
          want to take this campaign further, get in touch through the{" "}
          <Link href="/press" className="underline decoration-field-dark underline-offset-4">
            press page
          </Link>
          .
        </p>

        <h2 className="font-serif text-2xl pt-6">FAQ</h2>

        <div className="pt-2">
          <h3 className="font-serif text-xl mb-2">Why does the 90% rule actually block raffles?</h3>
          <p>
            Because nonprofits have real costs. Printing tickets, running software, paying
            someone to count receipts, ticketing platforms, POS fees. If 90% of every dollar
            must go to charity, the remaining 10% has to cover all of it. For any raffle big
            enough to matter, the math doesn&rsquo;t work. Smaller events get run at a loss or
            not at all.
          </p>
        </div>

        <div className="pt-4">
          <h3 className="font-serif text-xl mb-2">Why not just raise it to 70% or 80%?</h3>
          <p>
            That would be an improvement. But the argument for 50/50 is symmetry. The same
            rule that made professional sports raffles successful is the one that should apply
            to every other nonprofit. Splitting the difference creates a two-tier system based
            on whether your charity is attached to a stadium.
          </p>
        </div>

        <div className="pt-4">
          <h3 className="font-serif text-xl mb-2">What about fraud?</h3>
          <p>
            The same oversight framework that keeps the Bureau of Gambling Control watching
            pro sports raffles would apply here. Modern raffle platforms can log every
            transaction, number every ticket, and produce the compliance reports California
            already requires of 320.6 operators.
          </p>
        </div>

        <div className="pt-4">
          <h3 className="font-serif text-xl mb-2">Is the 90% rule literally unused?</h3>
          <p>
            No, some organizations still run compliant raffles, typically small ones where the
            prize is donated and the overhead is volunteer labor. But as a revenue engine for
            the California nonprofit sector, the program is effectively shut down.
          </p>
        </div>
      </section>
    </article>
  );
}
