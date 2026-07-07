import type {Metadata} from 'next';
import {Noto_Serif_JP, Inter, JetBrains_Mono, Dancing_Script} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NeuralBackground from '@/components/ui/flow-field-background';
import EnsoLoader from '@/components/EnsoLoader';
import Link from 'next/link';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sensai Studio',
  description: 'High Performance AI Excellence. We combine Zen philosophy with modern technology to build focused, high-performance applications.',
  openGraph: { title: 'Sensai Studio', description: 'High Performance AI Excellence. We combine Zen philosophy with modern technology to build focused, high-performance applications.', url: 'https://sensaistudio.com', siteName: 'Sensai Studio', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Sensai Studio', description: 'High Performance AI Excellence. We combine Zen philosophy with modern technology to build focused, high-performance applications.' },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${notoSerifJP.variable} ${inter.variable} ${jetbrainsMono.variable} ${dancingScript.variable}`}>
      <body suppressHydrationWarning className="font-body antialiased min-h-screen text-ink flex flex-col selection:bg-wash selection:text-ink relative">
        <EnsoLoader />
        <NeuralBackground />
        <Header />
        
        {/* Decorative Hairline Grain Elements */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-32 bg-hairline hidden md:block pointer-events-none z-0"></div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-32 bg-hairline hidden md:block pointer-events-none z-0"></div>

        <div className="fixed right-0 top-1/2 -translate-y-1/2 translate-x-2 hover:translate-x-0 transition-transform duration-300 z-50 hidden md:flex">
          <Link 
            href="/contact"
            className="bg-ink text-paper py-6 px-2 rounded-l-2xl shadow-xl flex items-center justify-center group cursor-pointer"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            aria-label="Contact Page"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 group-hover:opacity-100 transition-opacity">
              Enter the Void
            </span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col items-center z-10 w-full">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
