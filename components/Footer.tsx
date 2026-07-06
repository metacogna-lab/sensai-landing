import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-end z-10 mt-12 px-8 md:px-16 py-8 relative">
      <FadeIn delay={1.8} className="flex items-center gap-4">
        <div 
          className="w-10 h-10 bg-vermilion flex items-center justify-center text-paper font-display text-xl select-none shadow-sm"
          aria-label="Sensai Studio Seal"
        >
          <span className="-mt-1">印</span>
        </div>
      </FadeIn>
      <FadeIn delay={1.9} className="max-w-[200px] text-right text-[10px] text-ink font-bold opacity-70 leading-snug">
        Copyright sensai studio, from the void since NOW
      </FadeIn>
    </footer>
  );
}
