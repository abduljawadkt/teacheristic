import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Users, Globe, Sparkles, CheckCircle, GraduationCap, Building2, Rocket, Star, UserCheck, Search, Target, TrendingUp } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { GradientDots } from '@/components/ui/gradient-dots';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
import { TeacherRegistrationForm } from '@/components/TeacherRegistrationForm';
import { SchoolRegistrationForm } from '@/components/SchoolRegistrationForm';
import { EtheralShadow } from '@/components/ui/etheral-shadow';

const sections = [
  { id: "hero", label: "Home" },
  { id: "teachers", label: "For Teachers" },
  { id: "schools", label: "For Schools" },
  { id: "programs", label: "Programs" },
  { id: "readiness", label: "Readiness System" },
  { id: "micro-courses", label: "Micro-Courses" },
  { id: "stories", label: "Stories & Insights" },
];

const NavBar: React.FC = () => {
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
              className="rounded-lg px-4 py-2 transition-all hover:bg-lavender-700/20 hover:text-lavender-500"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-lg border-2 border-lavender-600/30 px-5 py-2 text-sm font-semibold text-lavender-400 transition-all hover:border-lavender-600/50 hover:bg-lavender-700/10">
            Login
          </button>
          <button className="rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-lavender-700/30 transition-all hover:shadow-xl hover:shadow-lavender-700/40 hover:scale-105">
            Contact
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-lavender-600/30 text-lavender-400 lg:hidden hover:bg-lavender-700/10 transition-all"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-lavender-600/20 bg-navy-800/95 backdrop-blur-lg">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-lavender-700/20 hover:text-lavender-500 transition-all"
              >
                {section.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-lavender-600/20">
              <button className="rounded-lg border-2 border-lavender-600/30 px-4 py-3 text-sm font-semibold text-lavender-400">
                Login
              </button>
              <button className="rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-4 py-3 text-sm font-semibold text-white shadow-lg">
                Contact
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

interface HeroSectionProps {
  onTeacherClick: () => void;
  onSchoolClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onTeacherClick, onSchoolClick }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-white to-slate-50 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy-800 leading-[1.1]">
            Where Global-Ready Teachers and Future-Ready Schools Meet.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-medium">
            Training. Growth. Intelligent Matching.
          </p>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            A complete career mapping ecosystem where teachers grow, schools hire better, and learning improves everywhere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={onTeacherClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              I'm a Teacher
              <ArrowRight size={20} />
            </button>
            <button
              onClick={onSchoolClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-800 bg-navy-800 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-navy-900 hover:border-navy-900 hover:scale-105"
            >
              I'm a School
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-600 pt-4">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-lavender-700" />
              <span>Global growth</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-lavender-700" />
              <span>Verified readiness</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-lavender-700" />
              <span>Smarter opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ForTeachersSectionProps {
  onTeacherClick: () => void;
}

const ForTeachersSection: React.FC<ForTeachersSectionProps> = ({ onTeacherClick }) => {
  return (
    <section id="teachers" className="border-b border-slate-100 bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-800">
            Your Teaching Career Deserves Clarity.
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              If your teaching career feels uncertain or stuck, you're not alone.
            </p>
            <p>
              We help you build confidence, learn modern skills, and follow a mapped path to global opportunities — step by step, with guidance at every stage.
            </p>
          </div>
          <button
            onClick={onTeacherClick}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Start My Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

interface ForSchoolsSectionProps {
  onSchoolClick: () => void;
}

const ForSchoolsSection: React.FC<ForSchoolsSectionProps> = ({ onSchoolClick }) => {
  return (
    <section id="schools" className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-800">
            Hire Teachers Who Are Truly Ready.
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Finding skilled, dependable teachers shouldn't be difficult.
            </p>
            <p>
              We prepare and assess educators through a structured readiness system — giving you candidates who are confident, trained, and aligned with your school's values.
            </p>
          </div>
          <button
            onClick={onSchoolClick}
            className="inline-flex items-center gap-2 rounded-lg bg-navy-800 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-navy-900 hover:shadow-xl hover:scale-105"
          >
            Partner With Teacheristic
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      name: "Global Teacher Foundation Program (GTFP)",
      impact: "Become a confident, creative, global-ready educator.",
      icon: GraduationCap,
      color: "from-lavender-600 to-lavender-700"
    },
    {
      name: "AI Classroom Mastery",
      impact: "Teach smarter with modern AI-powered tools.",
      icon: Sparkles,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "International School Leadership Program (ISLP)",
      impact: "Grow into leadership roles beyond borders.",
      icon: Building2,
      color: "from-navy-600 to-navy-700"
    },
    {
      name: "English Proficiency for Teachers (EPT)",
      impact: "Communicate clearly and professionally in global classrooms.",
      icon: Globe,
      color: "from-teal-600 to-teal-700"
    },
  ];

  return (
    <section id="programs" className="border-b border-slate-100 bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-800">
            Our Global Programs
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center mb-4`}>
                <program.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">
                {program.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {program.impact}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 rounded-lg border-2 border-lavender-700 px-6 py-3 text-sm font-semibold text-lavender-700 transition-all hover:bg-lavender-50">
            View All Programs
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const TeacherReadinessSection: React.FC = () => {
  const readinessCards = [
    {
      name: "Professional Readiness Lab",
      description: "Build your portfolio, demo lesson, and teaching identity.",
      icon: Target,
      color: "from-lavender-600 to-lavender-700"
    },
    {
      name: "Creative Classroom Skills",
      description: "Learn modern, engaging teaching approaches.",
      icon: Sparkles,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Teacher Levels (A/B/C/D)",
      description: "A clear, transparent measure of readiness and capability.",
      icon: TrendingUp,
      color: "from-teal-600 to-teal-700"
    },
    {
      name: "Intelligent Matching",
      description: "Schools find teachers who fit — not just apply.",
      icon: Search,
      color: "from-navy-600 to-navy-700"
    },
  ];

  return (
    <section id="readiness" className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-800">
            A System That Builds and Reveals True Readiness.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {readinessCards.map((card) => (
            <div
              key={card.name}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-xl hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">
                {card.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 rounded-lg border-2 border-lavender-700 px-6 py-3 text-sm font-semibold text-lavender-700 transition-all hover:bg-lavender-50">
            See How It Works
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const MicroCoursesSection: React.FC = () => {
  const skills = [
    "Story-based teaching",
    "Creative lesson design",
    "Student engagement",
    "Classroom management",
    "Digital teaching essentials",
    "Assessment techniques"
  ];

  return (
    <section id="micro-courses" className="border-b border-slate-100 bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-800">
            Skills That Make You Stand Out
          </h2>
          <p className="text-lg text-slate-600">
            In just minutes, learn:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:shadow-lg hover:border-lavender-300"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lavender-100 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-lavender-700" />
              </div>
              <span className="text-sm font-medium text-slate-800">{skill}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Browse Micro Courses
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const StoriesSection: React.FC = () => {
  return (
    <section id="stories" className="border-b border-slate-100 bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-800">
            Growth That Speaks for Itself.
          </h2>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 max-w-5xl mx-auto mb-16">
          <div className="rounded-xl border-2 border-lavender-300 bg-gradient-to-br from-lavender-50 to-white p-8">
            <div className="mb-4">
              <Star className="w-8 h-8 text-lavender-700" />
            </div>
            <p className="text-lg text-slate-700 italic mb-4">
              "Teacheristic helped me understand my strengths and gave me a clear path to grow."
            </p>
            <div className="text-sm font-semibold text-slate-600">— Teacher</div>
          </div>

          <div className="rounded-xl border-2 border-navy-300 bg-gradient-to-br from-navy-50 to-white p-8">
            <div className="mb-4">
              <Building2 className="w-8 h-8 text-navy-700" />
            </div>
            <p className="text-lg text-slate-700 italic mb-4">
              "Every teacher we met was prepared, confident, and ready for the classroom."
            </p>
            <div className="text-sm font-semibold text-slate-600">— School</div>
          </div>
        </div>

        <div className="mb-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-800 mb-8">
            Insights & Articles
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <div className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-lavender-300">
            <h4 className="text-base font-bold text-navy-800 mb-2">
              The Future of Teaching Careers
            </h4>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-700 transition-all hover:gap-3 mt-2">
              Read more
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-lavender-300">
            <h4 className="text-base font-bold text-navy-800 mb-2">
              Smarter Matching for Schools
            </h4>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-700 transition-all hover:gap-3 mt-2">
              Read more
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-lavender-300">
            <h4 className="text-base font-bold text-navy-800 mb-2">
              Creative Teaching for Today
            </h4>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-700 transition-all hover:gap-3 mt-2">
              Read more
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CTASectionProps {
  onTeacherClick: () => void;
  onSchoolClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onTeacherClick, onSchoolClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-800 to-navy-950 py-20 sm:py-24 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c7ebb12_1px,transparent_1px),linear-gradient(to_bottom,#8c7ebb12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender-700/5 to-transparent"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border-2 border-lavender-600/30 bg-gradient-to-br from-navy-900/90 to-navy-950/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl transition-all hover:border-lavender-600/50 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-700/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-700 shadow-lg">
                <GraduationCap size={28} className="text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Teachers
              </h3>
              <p className="mb-6 text-lg text-slate-300">
                Start your journey toward global opportunities.
              </p>
              <button
                onClick={onTeacherClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Become a Global Teacher
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border-2 border-lavender-600/30 bg-gradient-to-br from-navy-900/90 to-navy-950/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl transition-all hover:border-lavender-600/50 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-700/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 shadow-lg">
                <Building2 size={28} className="text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Schools
              </h3>
              <p className="mb-6 text-lg text-slate-300">
                Build a reliable, classroom-ready teacher pipeline.
              </p>
              <button
                onClick={onSchoolClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-lavender-600/50 bg-navy-900/50 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-navy-900/70 hover:border-lavender-600/70 hover:scale-105"
              >
                Partner With Teacheristic
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <a href="#hero" className="flex items-center">
              <img
                src="/header logo.png"
                alt="Teacheristic"
                className="h-6 w-auto object-contain"
              />
            </a>
            <p className="text-sm">
              A career-mapping ecosystem connecting teachers and schools across India & GCC.
            </p>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-white">
              Platform
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#teachers" className="hover:text-lavender-600 transition-colors">For Teachers</a></li>
              <li><a href="#schools" className="hover:text-lavender-600 transition-colors">For Schools</a></li>
              <li><a href="#programs" className="hover:text-lavender-600 transition-colors">Programs</a></li>
              <li><a href="#readiness" className="hover:text-lavender-600 transition-colors">Readiness System</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-white">
              Resources
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#micro-courses" className="hover:text-lavender-600 transition-colors">Micro-Courses</a></li>
              <li><a href="#stories" className="hover:text-lavender-600 transition-colors">Stories & Insights</a></li>
              <li><a href="#" className="hover:text-lavender-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-lavender-600 transition-colors">AI Tools</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-white">
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>India</li>
              <li>GCC Partnerships</li>
              <li><a href="mailto:hello@teacheristic.com" className="hover:text-lavender-600 transition-colors">hello@teacheristic.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-lavender-600/20 pt-8 text-sm md:flex-row">
          <span>© {new Date().getFullYear()} Teacheristic. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lavender-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-lavender-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [showSchoolForm, setShowSchoolForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>(null);

  const handleTeacherSuccess = () => {
    setShowTeacherForm(false);
    setShowSuccessMessage('teacher');
    setTimeout(() => setShowSuccessMessage(null), 5000);
  };

  const handleSchoolSuccess = () => {
    setShowSchoolForm(false);
    setShowSuccessMessage('school');
    setTimeout(() => setShowSuccessMessage(null), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <HeroSection onTeacherClick={() => setShowTeacherForm(true)} onSchoolClick={() => setShowSchoolForm(true)} />
        <ForTeachersSection onTeacherClick={() => setShowTeacherForm(true)} />
        <ForSchoolsSection onSchoolClick={() => setShowSchoolForm(true)} />
        <ProgramsSection />
        <TeacherReadinessSection />
        <MicroCoursesSection />
        <StoriesSection />
        <CTASection onTeacherClick={() => setShowTeacherForm(true)} onSchoolClick={() => setShowSchoolForm(true)} />
      </main>
      <Footer />

      {showTeacherForm && (
        <TeacherRegistrationForm
          onClose={() => setShowTeacherForm(false)}
          onSuccess={handleTeacherSuccess}
        />
      )}

      {showSchoolForm && (
        <SchoolRegistrationForm
          onClose={() => setShowSchoolForm(false)}
          onSuccess={handleSchoolSuccess}
        />
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center gap-3">
            <CheckCircle size={24} />
            <div>
              <div className="font-bold">Registration Successful!</div>
              <div className="text-sm">
                {showSuccessMessage === 'teacher'
                  ? 'Thank you for registering. We will contact you soon!'
                  : 'Thank you for your interest. Our team will reach out shortly!'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
