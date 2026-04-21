import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letter to Senator Dodd — 50/50 For All",
  description: "A letter to retired California State Senator Bill Dodd on extending SB 650's 50/50 raffle framework to all California charities.",
};

export default function LetterPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-field-dark">Open letter</p>
        <h1 className="font-serif text-4xl mt-3">To the Honorable Bill Dodd</h1>
        <p className="mt-2 text-ink/60">April 20, 2026</p>
      </div>

      <div className="space-y-6 text-lg leading-[1.8] font-serif text-ink/90">
        <p>Dear Senator,</p>

        <p>
          A man retires and the mail thins out. I&rsquo;m sending one the other way.
        </p>

        <p>
          In October 2023 you carried SB 650 across the finish line. When the Governor signed
          it, the fifty-fifty raffle for Major League sports stopped being an experiment and
          became permanent law. A quiet piece of work, the kind of fix that keeps a thing
          alive after the people who started it have moved on. The Giants Community Fund has
          served more than a hundred and fifty thousand kids on the strength of those
          proceeds. That math began on your desk.
        </p>

        <p>
          The other raffle program, the one for the small nonprofits, is the reverse picture.
          It has a ninety-percent-to-charity rule that sounds generous until you try to run
          one. You can&rsquo;t pay the printer. You can&rsquo;t pay the software. You
          can&rsquo;t pay a person to count the tickets, not if ninety cents is already
          spoken for. The program died the slow way, the way a field goes back to brush when
          nobody&rsquo;s working it. The state hasn&rsquo;t counted a receipt on it since
          2003. Two hundred thousand California nonprofits, and a rule that stops them at the
          gate.
        </p>

        <p>
          The fix isn&rsquo;t complicated, and it&rsquo;s already sitting on your shelf. Take
          the fifty-fifty frame you made permanent for the sports teams and hand it to the
          rest. Same split. Same oversight. Same transparency. If it&rsquo;s good enough for
          the Dodgers, it&rsquo;s good enough for the food bank. They just got a workable
          rule, and it&rsquo;s time the rest had one too.
        </p>

        <p>
          The technology has caught up to the idea. When the old ninety-percent law was
          written, tracking a raffle meant a shoebox and a paper ledger, and the worry was
          money going missing on the way to the cause. That worry was reasonable then.
          It&rsquo;s not reasonable now. Every ticket can be numbered, every dollar traced
          from buyer to beneficiary in real time, on a phone, for pennies. The accounting
          problem that justified the old rule has been solved by engineers who never heard of
          it.
        </p>

        <p>
          I&rsquo;m writing to ask for your help. The effort is called 50/50 For All: one
          rule, every California charity, nothing fancy. Lend it your name. Lend it your
          voice. Give me a few introductions to the people who worked with you on SB 650. Your
          colleagues still in the building will read a letter from you differently than they
          will read one from me.
        </p>

        <p>
          A legacy isn&rsquo;t the bill you passed. It&rsquo;s the bill that came next because
          yours worked. You built the door; I&rsquo;m trying to widen it.
        </p>

        <p>
          Retirement has its own rhythms, and I don&rsquo;t want to intrude on them. If this
          finds you at the right time, I&rsquo;d be grateful for a conversation.
        </p>

        <p className="pt-4">
          With respect and with thanks,
          <br />
          <span className="font-sans text-base text-ink">Shane Clary</span>
        </p>
      </div>
    </article>
  );
}
