import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';

export default function GTFPPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const loadTally = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };

    if (typeof (window as any).Tally !== 'undefined') {
      loadTally();
    } else if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]') === null) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-navy-800/95 backdrop-blur-lg shadow-lg shadow-navy-800/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/header logo.png"
              alt="Teacheristic"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-lavender-600/30 px-5 py-2 text-sm font-semibold text-lavender-400 transition-all hover:border-lavender-600/50 hover:bg-lavender-700/10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-800 to-navy-950 py-8 sm:py-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c7ebb12_1px,transparent_1px),linear-gradient(to_bottom,#8c7ebb12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender-700/5 to-transparent"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lavender-600/30 bg-lavender-700/10 px-4 py-2 text-sm font-semibold text-lavender-500">
                <GraduationCap size={16} />
                Flagship Program
              </div>
              <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Global Teacher Foundation Program
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Transform into a classroom-ready teacher in 3 months
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-8 sm:py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-2 text-sm font-semibold text-lavender-900">
                <GraduationCap size={16} />
                Application Form
              </div>
              <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-navy-800">
                Apply to GTFP Today
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600">
                Take the first step toward your teaching career
              </p>
            </div>

            <div className="rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 sm:p-8 shadow-xl">
              <iframe
                data-tally-src="https://tally.so/embed/7Rb8LR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                loading="lazy"
                width="100%"
                height="1441"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="GTFP – Global Teacher Finishing Program Application."
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center">
          <Link to="/" className="mb-4 inline-block">
            <img
              src="/header logo.png"
              alt="Teacheristic"
              className="h-6 w-auto object-contain mx-auto"
            />
          </Link>
          <p className="text-sm">
            © {new Date().getFullYear()} Teacheristic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
