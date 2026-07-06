import Enso from '@/components/Enso';
import FadeIn from '@/components/FadeIn';

export default function Philosophy() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center px-4 md:px-8 py-8 md:py-16">
      
      <main className="flex flex-col items-center w-full text-center mt-4 mb-8 bg-paper p-8 md:p-16 rounded-sm shadow-xl border border-hairline relative">
        <div className="mb-12">
          <Enso />
        </div>

        <FadeIn delay={0.4}>
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-[1.1] mb-8 tracking-tight italic text-ink">
            Shunyata and the Enso
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="text-ink font-medium text-base max-w-lg mx-auto leading-relaxed space-y-6 text-left">
            <p>
              In the Buddhist tradition, <span className="italic">Shunyata</span> — often translated as &quot;emptiness&quot; or &quot;voidness&quot; — is not a state of lack. It is a state of total potential. It describes a reality free of rigid pre-conceptions, where action can emerge cleanly, without the friction of ego or fixed ideas.
            </p>
            <p>
              The Enso (円相), a circle drawn in a single brushstroke, is the physical embodiment of this idea. It is complete, yet open. It captures the moment of creation: unhesitating, unedited, and deeply present.
            </p>
            <p>
              For operators and decision-makers, high performance mirrors this process. The greatest risks are not uncalculated variables in the market, but the unseen distortions in our own thinking. When we clear the mind of noise — reaching a state akin to Shunyata — we do not become inactive. Instead, we become capable of making decisions with the speed and precision of a single brushstroke.
            </p>
            <p className="italic text-center pt-4">
              Precision in uncertainty. Action without friction.
            </p>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
