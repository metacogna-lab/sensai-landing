import FadeIn from '@/components/FadeIn';
import ContactBox from '@/components/ContactBox';

export default function Contact() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center px-4 md:px-8 py-8 md:py-16">
      
      <main className="flex flex-col items-center w-full text-center mt-4 mb-8 bg-paper p-8 md:p-16 rounded-sm shadow-xl border border-hairline relative">
        <FadeIn delay={0.2}>
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-[1.1] mb-8 tracking-tight italic text-ink">
            Enter the Void
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="text-ink font-medium text-base max-w-lg mx-auto leading-relaxed space-y-6 text-left mb-12">
            <p>
              The decision to wield the weapons available to you — AI, capital, leverage — is not to be taken lightly. It requires absolute clarity of intent.
            </p>
            <p>
              Before you proceed, clarify what you are optimizing for. Leave your information below, and state the decision currently weighing on your mind. We will guide you from there.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} className="w-full max-w-xl">
          <ContactBox />
        </FadeIn>
      </main>
    </div>
  );
}
