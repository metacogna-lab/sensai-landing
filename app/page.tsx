import Enso from '@/components/Enso';
import FadeIn from '@/components/FadeIn';
import ContactBox from '@/components/ContactBox';

export default function SensaiLanding() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center px-4 md:px-8 py-8 md:py-16">
      
      {/* Main Hero Composition */}
      <main className="flex flex-col items-center w-full text-center mt-4 mb-8 bg-paper p-8 md:p-16 rounded-sm shadow-xl border border-hairline relative">
        {/* Hero / Enso */}
        <div className="mb-8">
          <Enso />
        </div>

        {/* Promise */}
        <FadeIn delay={1.2} className="flex flex-col items-center mt-4">
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-tight mb-4 tracking-tight text-ink">
            Sensai Studio
          </h1>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ink font-semibold italic mb-10 opacity-90">
            Symmetrical Intelligenge Augmentation in Action.
          </p>
        </FadeIn>

        {/* Supporting sentence */}
        <FadeIn delay={1.4}>
          <p className="text-ink font-bold text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-12">
            Understand your own decisions — how you read risk and allocate capital at the speed of thought.
          </p>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn delay={1.6} className="w-full max-w-xl">
          <ContactBox />
        </FadeIn>
      </main>
    </div>
  );
}
