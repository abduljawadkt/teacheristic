import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Globe, Users, BookOpen, CheckCircle, Clock, Target } from 'lucide-react';

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
        <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-800 to-navy-950 py-16 sm:py-20 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c7ebb12_1px,transparent_1px),linear-gradient(to_bottom,#8c7ebb12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender-700/5 to-transparent"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lavender-600/30 bg-lavender-700/10 px-4 py-2 text-sm font-semibold text-lavender-500">
                <GraduationCap size={16} />
                Flagship Program
              </div>
              <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Global Teacher Foundation Program
              </h1>
              <p className="mb-8 text-lg sm:text-xl text-slate-300 leading-relaxed">
                A comprehensive 3-month program designed to transform aspiring educators into classroom-ready teachers with essential pedagogical skills, classroom management techniques, and international teaching standards.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-navy-800">
                Program Highlights
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Everything you need to kickstart your teaching career
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 transition-all hover:shadow-xl hover:border-blue-400">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy-800">
                  Comprehensive Curriculum
                </h3>
                <p className="text-slate-600">
                  Pedagogy, classroom management, lesson planning, and modern teaching methodologies
                </p>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-green-50 to-white p-6 transition-all hover:shadow-xl hover:border-green-400">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-700 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy-800">
                  Hands-On Training
                </h3>
                <p className="text-slate-600">
                  Real classroom practice, mentorship, and practical teaching experience
                </p>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-purple-50 to-white p-6 transition-all hover:shadow-xl hover:border-purple-400">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy-800">
                  AI & Tech Integration
                </h3>
                <p className="text-slate-600">
                  Modern educational technology, AI tools for teachers, and digital classroom skills
                </p>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-amber-50 to-white p-6 transition-all hover:shadow-xl hover:border-amber-400">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy-800">
                  Flexible Learning
                </h3>
                <p className="text-slate-600">
                  Hybrid format combining online modules with in-person workshops and practice sessions
                </p>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-teal-50 to-white p-6 transition-all hover:shadow-xl hover:border-teal-400">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy-800">
                  Certification
                </h3>
                <p className="text-slate-600">
                  Recognized certification upon completion, valued by schools across India & GCC
                </p>
              </div>

              <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-lavender-50 to-white p-6 transition-all hover:shadow-xl hover:border-lavender-400">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-700 shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy-800">
                  Career Support
                </h3>
                <p className="text-slate-600">
                  Internship placement, job connections, and ongoing career guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-navy-800">
                Who Should Apply?
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="space-y-4">
                {[
                  "Fresh graduates with a passion for teaching",
                  "Career changers looking to enter the education field",
                  "Aspiring educators seeking professional training",
                  "Teachers looking to upgrade their skills and credentials",
                  "Anyone committed to making a difference in students' lives"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4 transition-all hover:shadow-md">
                    <CheckCircle size={24} className="mt-0.5 flex-shrink-0 text-green-600" />
                    <span className="text-slate-700 text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16 md:py-20 border-t border-slate-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-2 text-sm font-semibold text-lavender-900">
                <GraduationCap size={16} />
                Application Form
              </div>
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-navy-800">
                Apply to GTFP Today
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Take the first step toward your teaching career. Fill out the application form below to get started.
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

        <section className="bg-gradient-to-br from-navy-950 via-navy-800 to-navy-950 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-white">
              Questions About the Program?
            </h2>
            <p className="mb-8 text-lg text-slate-300">
              Our team is here to help you understand if GTFP is the right fit for your teaching journey.
            </p>
            <a
              href="mailto:hello@teacheristic.com"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </a>
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
