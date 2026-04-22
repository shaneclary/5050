import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Letter to Senator Dodd — 50/50 For All",
  description: "An open letter to retired California State Senator Bill Dodd asking him to help extend SB 650's 50/50 raffle framework to all California charities.",
};

export default function LetterPage() {
  return (
    <div>
      <section className="relative overflow-hidden grain">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(50% 50% at 50% 0%, rgba(232,168,85,0.1), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Open letter</p>
            <h1 className="font-display text-5xl sm:text-7xl tracking-tight leading-[0.95]">
              To the Honorable<br />Bill Dodd
            </h1>
            <p className="mt-6 text-cream/50">California State Senator (ret.) &middot; April 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <article className="space-y-7 text-lg sm:text-xl leading-[1.8] font-display text-ink/85">
            <p>Dear Senator Dodd,</p>

            <p>
              Retirement usually means fewer letters and no more obligation to respond. I
              hope you afford this one with your attention nonetheless.
            </p>

            <p>
              In 2023, you carried SB 650 to the finish line and secured permanent
              authorization for 50/50 raffles in Major League sports. It was a practical
              piece of legislation with real impact. The Giants Community Fund alone has
              directed those proceeds toward programs that have served more than 150,000
              children as a result of your efforts.
            </p>

            <p>
              The broader charitable raffle system in California tells the opposite story.
              For small nonprofits, the 90 percent-to-charity rule appears generous on paper
              but is unworkable in practice. A raffle cannot run itself. There are printing
              costs, software costs, staffing costs, compliance costs, and basic
              administrative costs. When nearly every dollar is already committed before the
              first ticket is sold, the program becomes unmanageable. That is exactly what
              happened. The state has not reported receipts under that framework since 2003.
              More than 200,000 California nonprofits remain boxed out by a rule that leaves
              them no viable path to participate. Meanwhile, Omaze is raking in millions for
              charity across the pond.
            </p>

            <p>
              The solution is straightforward. Extend the same workable 50/50 framework now
              used by Major League sports teams to the rest of California&rsquo;s charitable
              sector. Keep the same oversight. Keep the same reporting. Keep the same
              transparency. If that structure is sound for the Dodgers, it is sound for a
              food bank, a youth organization, or a local community foundation.
            </p>

            <p>
              The case for reform is even stronger now than it was twenty years ago. When the
              old 90 percent rule was written, lawmakers were dealing with a real concern:
              weak tracking, poor controls, and cash handling that made abuse easier. That
              concern made sense at the time. It does not carry the same force today.
              Tickets can now be serialized, payments can be tracked digitally, and funds can
              be monitored in real time from purchase to distribution. The accountability
              problem that once justified a rigid rule has largely been solved.
            </p>

            <p>
              I am writing to ask for your help. The effort is called{" "}
              <span className="text-gold-dark">&ldquo;50/50 For All&rdquo;</span> &mdash; or
              even, with your permission,{" "}
              <span className="text-gold-dark">&ldquo;Dodd&rsquo;s 50/50 For All&rdquo;</span>
              : one workable rule for every California charity. I would be grateful for your
              guidance, your voice, and any introductions you would be willing to make to
              those who worked with you on SB 650. A recommendation from you would carry real
              weight with the people still in the building.
            </p>

            <p>
              Your earlier work proved the model. This is the natural next step. I have no
              financial incentive behind this proposal.
            </p>

            <p>
              If this reaches you at the right moment, I would be grateful for the chance to
              speak.
            </p>

            <p className="pt-4">
              With respect and thanks,
              <br />
              <span className="font-sans text-base text-ink">Shane Clary</span>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
