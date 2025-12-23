import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Users, Globe, Sparkles, CheckCircle, GraduationCap, Award, Rocket, Star, Target, TrendingUp, Brain, Trophy } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { GradientDots } from '@/components/ui/gradient-dots';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
import { EtheralShadow } from '@/components/ui/etheral-shadow';

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Why Join" },
  { id: "benefits", label: "What You Get" },
  { id: "opportunities", label: "Opportunities" },
  { id: "process", label: "How It Works" },
];

interface NavBarProps {
  onSwitchToTeacher: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSwitchToTeacher }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-800/95 backdrop-blur-lg shadow-lg shadow-navy-800/50' : 'bg-navy-800/90 backdrop-blur'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <a href="#hero" className="flex items-center flex-shrink-0">
          <img
            src="/header logo.png"
            alt="Teacheristic"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-200 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-lg px-4 py-2 transition-all hover:bg-blue-700/20 hover:text-blue-400"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={onSwitchToTeacher} className="rounded-lg border-2 border-blue-600/30 px-5 py-2 text-sm font-semibold text-blue-400 transition-all hover:border-blue-600/50 hover:bg-blue-700/10">
            For Teachers
          </button>
          <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-700/30 transition-all hover:shadow-xl hover:shadow-blue-700/40 hover:scale-105">
            Contact
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-blue-600/30 text-blue-400 lg:hidden hover:bg-blue-700/10 transition-all"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-600/20 bg-navy-800/95 backdrop-blur-lg">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-blue-700/20 hover:text-blue-400 transition-all"
              >
                {section.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-blue-600/20">
              <button onClick={() => { onSwitchToTeacher(); setIsMobileMenuOpen(false); }} className="rounded-lg border-2 border-blue-600/30 px-4 py-3 text-sm font-semibold text-blue-400">
                For Teachers
              </button>
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg">
                Contact
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <HeroGeometric
        badge="Student Talent Intelligence Database"
        title1="The Future Is Looking for Leaders."
        title2="Are You Ready to Be Discovered?"
        description="Universities, employers, and educational institutions worldwide are seeking talented, future-ready students. Join our intelligence database to unlock your potential."
      />
    </section>
  );
};

const RealisationSection: React.FC = () => {
  return (
    <section id="about" className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-4 py-2 text-sm font-semibold text-blue-900">
            <Target size={16} />
            The Reality
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            Most Students Are Talented.
            <br />
            <span className="text-blue-700">But Not Opportunity-Positioned.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Every year, thousands of scholarships, internships, leadership programs, and global opportunities open across India and worldwide.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              { icon: TrendingUp, text: "Don't get noticed" },
              { icon: Target, text: "Unclear about what's required" },
              { icon: Globe, text: "Not professionally visible" },
              { icon: Rocket, text: "Miss growth pathways" }
            ].map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-3 shadow-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200">
            <p className="text-xl font-bold text-navy-800">
              Not because they lack talent—
              <br />
              <span className="text-blue-700">but because their potential is undocumented.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeacheristicRoleSection: React.FC = () => {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-4 py-2 text-sm font-semibold text-blue-900">
            <Sparkles size={16} />
            Our Mission
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            This Is Where Teacheristic Comes In
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Teacheristic works at the intersection of education, leadership, and career development.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mt-12 text-left">
            {[
              { icon: Users, title: "Understand Beyond Grades", desc: "We look at your complete profile, not just academic scores." },
              { icon: Target, title: "Identify Potential", desc: "Discover your skills, leadership abilities, and readiness for opportunities." },
              { icon: TrendingUp, title: "Guide Your Path", desc: "Receive personalized guidance toward stronger opportunity alignment." },
              { icon: Globe, title: "Build Your Future", desc: "Become part of a future-ready talent pool for universities and institutions." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-3 shadow-lg flex-shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 rounded-2xl bg-navy-900 text-white">
            <p className="text-xl font-semibold">
              We don't judge potential.
              <br />
              <span className="text-blue-400">We help unlock and showcase it.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-12 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-4 py-2 text-sm font-semibold text-blue-900">
            <Star size={16} />
            What You Get
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            What Happens After You Join
          </h2>
          <p className="text-lg text-slate-600">
            Join our database and unlock access to career guidance, opportunities, and a supportive ecosystem.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Brain,
              title: "Profile Review",
              desc: "Your profile is reviewed through our intelligence layer to identify your strengths."
            },
            {
              icon: Target,
              title: "Career Insights",
              desc: "Receive personalized career-oriented insights via email and WhatsApp."
            },
            {
              icon: BookOpen,
              title: "Exclusive Content",
              desc: "Access to exclusive videos, sessions, and growth guidance materials."
            },
            {
              icon: Rocket,
              title: "Priority Access",
              desc: "Priority access to programs, competitions, and leadership pathways."
            },
            {
              icon: Users,
              title: "Student Ecosystem",
              desc: "Become part of a structured, growing student ecosystem."
            },
            {
              icon: CheckCircle,
              title: "Secure & Confidential",
              desc: "Your data is used only for career development and Teacheristic initiatives."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:scale-105">
              <div className="mb-4">
                <div className="inline-flex rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-3 shadow-lg">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpportunitiesSection: React.FC = () => {
  return (
    <section id="opportunities" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-4 py-2 text-sm font-semibold text-blue-900">
              <Trophy size={16} />
              Who Should Join
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
              Who Should Join This Initiative?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              This initiative is designed for ambitious students who are serious about unlocking their potential and accessing global opportunities.
            </p>

            <div className="space-y-4">
              {[
                "High school students (Grades 9-12)",
                "College and university students",
                "Students with leadership experience",
                "Students interested in global opportunities",
                "Aspiring changemakers and future leaders"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-700 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
              <p className="text-lg font-bold text-navy-800">
                If you're serious about unlocking your potential,
                <br />
                <span className="text-blue-700">this is for you.</span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-blue-400 bg-gradient-to-br from-blue-100 to-white p-8 shadow-xl">
            <h3 className="mb-6 text-xl font-bold text-navy-800">
              What Information We Collect
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Full Name", icon: "📝" },
                { label: "Location", icon: "📍" },
                { label: "Current School/College", icon: "🏫" },
                { label: "Grade/Year of Study", icon: "📚" },
                { label: "Academic Interests", icon: "💡" },
                { label: "Achievements & Skills", icon: "🏆" },
                { label: "Phone Number", icon: "📱" },
                { label: "Email Address", icon: "✉️" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-slate-900">{item.label}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-blue-900 text-white text-sm">
              This helps us understand where you are now, so we can guide you where you can go next.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-4 py-2 text-sm font-semibold text-blue-900">
            <Rocket size={16} />
            Built for Your Future
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            Built for the Future of Student Success
          </h2>
          <p className="text-lg text-slate-600">
            Teacheristic is building a long-term ecosystem for student growth and success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Brain, label: "Student skill development" },
            { icon: Trophy, label: "Leadership cultivation" },
            { icon: Target, label: "Opportunity mapping" },
            { icon: Globe, label: "University-student alignment" },
            { icon: TrendingUp, label: "Future career pipelines" }
          ].map((item, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-4 shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-medium text-slate-700">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-bold text-navy-800 mb-8">
            The Student Talent Intelligence Database is the first step.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Submit Your Profile Now
            <ArrowRight size={20} />
          </button>
          <p className="mt-4 text-sm text-slate-600">
            Free | Confidential | No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <a href="#hero" className="inline-flex items-center mb-4">
            <img
              src="/header logo.png"
              alt="Teacheristic"
              className="h-6 w-auto object-contain"
            />
          </a>
          <p className="text-sm max-w-xl mx-auto">
            Your information is secure and will only be used for Teacheristic's talent development initiatives.
            We respect your ambition, effort, and potential.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-blue-600/20 pt-8 text-sm md:flex-row">
          <span>© {new Date().getFullYear()} Teacheristic. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function StudentApp({ onSwitchToTeacher }: { onSwitchToTeacher: () => void }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar onSwitchToTeacher={onSwitchToTeacher} />
      <main>
        <HeroSection />
        <RealisationSection />
        <TeacheristicRoleSection />
        <BenefitsSection />
        <OpportunitiesSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}

export default StudentApp;
