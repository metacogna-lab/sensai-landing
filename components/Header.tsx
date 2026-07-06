import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Header() {
  return (
    <header className="w-full bg-header py-6 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 z-10 border-b border-hairline relative shadow-sm">
      <FadeIn delay={0.1}>
        <h1 className="flex flex-col items-center md:items-start gap-1 text-ink">
          <span style={{ fontFamily: "var(--font-dancing-script), cursive", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1, textTransform: "none", letterSpacing: "normal" }}>Sensai Studio</span>
          <span className="text-xs md:text-sm opacity-60 font-medium tracking-[0.3em]">先生</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <nav className="flex gap-6">
          <Link href="/" className="font-mono text-sm font-black tracking-[0.1em] text-ink uppercase hover:text-slate transition-colors">
            Home
          </Link>
          <Link href="/philosophy" className="font-mono text-sm font-black tracking-[0.1em] text-ink uppercase hover:text-slate transition-colors">
            Philosophy
          </Link>
          <Link href="/on-ai" className="font-mono text-sm font-black tracking-[0.1em] text-ink uppercase hover:text-slate transition-colors">
            On AI
          </Link>
        </nav>
      </FadeIn>
    </header>
  );
}
