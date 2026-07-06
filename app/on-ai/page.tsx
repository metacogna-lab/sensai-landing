import Enso from '@/components/Enso';
import FadeIn from '@/components/FadeIn';

export default function OnAI() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center px-4 md:px-8 py-8 md:py-16">
      
      <main className="flex flex-col items-center w-full text-center mt-4 mb-8 bg-paper p-8 md:p-16 rounded-sm shadow-xl border border-hairline relative">
        <div className="mb-12">
          <Enso />
        </div>

        <FadeIn delay={0.4}>
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-[1.1] mb-8 tracking-tight italic text-ink">
            Tools of the Warrior
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="text-ink font-medium text-base max-w-lg mx-auto leading-relaxed space-y-6 text-left">
            <p>
              The sword does not make the warrior; it only extends their reach. In the modern arena, artificial intelligence — large language models and agentic engineering — are the new steel.
            </p>
            <p>
              These tools offer exponential leverage, but they are not a substitute for clarity. An LLM is a force multiplier for the mind. When wielded by a distracted or confused operator, it multiplies noise. But when held by a master — someone who has cultivated their own clarity of thought — the gains become profound.
            </p>
            <p>
              Agentic engineering allows us to codify intent into action. It is the practice of delegating execution while retaining strategic command. It requires a deep understanding of one&apos;s own cognitive models to effectively translate them into autonomous systems.
            </p>
            <p className="italic text-center pt-4">
              Clear thinking is the prerequisite. AI is simply the extension.
            </p>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
