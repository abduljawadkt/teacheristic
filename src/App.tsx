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
  { id: "teachers", label: "Career Mapping" },
  { id: "schools", label: "Hire Teachers" },
  { id: "programs", label: "Programs" },
  { id: "internships", label: "Internships" },
  { id: "stories", label: "Success Stories" },
  { id: "about", label: "About" },
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

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <HeroGeometric
        badge="Career Mapping for Teachers"
        title1="Building a complete"
        title2="career mapping ecosystem"
        description="Teacheristic trains fresh graduates, maps their careers from foundation to GCC opportunities, and connects schools across India & GCC with classroom-ready teachers."
      />
    </section>
  );
};

interface TwoColumnEcosystemProps {
  onTeacherClick: () => void;
  onSchoolClick: () => void;
}

const TwoColumnEcosystem: React.FC<TwoColumnEcosystemProps> = ({ onTeacherClick, onSchoolClick }) => {
  return (
    <section id="ecosystem" className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-12 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-2 text-sm font-semibold text-lavender-900">
            <Users size={16} />
            The Teacheristic Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            One platform. Two journeys. A shared goal.
          </h2>
          <p className="text-lg text-slate-600">
            Connecting future-ready teachers with schools across India & GCC through intensive training, internships, and AI-powered hiring.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-lavender-400 bg-gradient-to-br from-lavender-100 to-white p-6 sm:p-8 shadow-xl transition-all hover:shadow-2xl hover:border-lavender-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-400/30 to-transparent rounded-full blur-3xl -z-0"></div>
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-700 to-lavender-800 px-4 py-2 text-sm font-bold text-white shadow-lg">
                <GraduationCap size={18} />
                For Teachers
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-bold text-navy-800">
                Career mapping from student to global educator
              </h3>
              <p className="text-slate-700 text-base mb-6">
                Achieve professional and financial growth in teaching.
              </p>
              <button onClick={onTeacherClick} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lavender-700 to-lavender-800 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Start Your Journey
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-navy-400 bg-gradient-to-br from-navy-100 to-white p-6 sm:p-8 shadow-xl transition-all hover:shadow-2xl hover:border-navy-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-navy-400/30 to-transparent rounded-full blur-3xl -z-0"></div>
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm font-bold text-white shadow-lg">
                <Building2 size={18} />
                For Schools
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-bold text-navy-800">
                Hire trained, culture-ready teachers with AI matching
              </h3>
              <p className="text-slate-700 text-base mb-6">
                Find and hire skill-verified teachers from Teacheristic.
              </p>
              <button onClick={onSchoolClick} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-navy-900 hover:shadow-xl hover:scale-105">
                Partner With Us
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-6 w-full">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-2}
          className="bg-gradient-to-r from-lavender-700 to-lavender-800 text-white py-4 text-3xl sm:text-4xl md:text-5xl"
        >
          Career Mapping • Foundation to GCC • Teacher Excellence • AI-Powered Hiring
        </MarqueeAnimation>
        <MarqueeAnimation
          direction="right"
          baseVelocity={-2}
          className="bg-navy-800 text-white py-4 text-3xl sm:text-4xl md:text-5xl"
        >
          India & GCC Schools • Classroom-Ready Teachers • Professional Growth • Global Opportunities
        </MarqueeAnimation>
      </div>
    </section>
  );
};

interface TeacherJourneySectionProps {
  onTeacherClick: () => void;
}

const TeacherJourneySection: React.FC<TeacherJourneySectionProps> = ({ onTeacherClick }) => {
  const steps = [
    {
      icon: BookOpen,
      title: "Foundation Program",
      subtitle: "4-month hybrid training",
      body: "Comprehensive pedagogy, classroom management, language, tech, and AI tools for modern teaching.",
      color: "from-lavender-600 to-lavender-700"
    },
    {
      icon: GraduationCap,
      title: "Internship",
      subtitle: "Real classrooms, real mentoring",
      body: "Guided internships in partner schools to build confidence and professional teaching habits.",
      color: "from-lavender-700 to-lavender-800"
    },
    {
      icon: Building2,
      title: "Indian Experience",
      subtitle: "Professional grounding",
      body: "Work in Indian schools to refine practice, understand culture, and grow as an educator.",
      color: "from-navy-700 to-navy-800"
    },
    {
      icon: Globe,
      title: "GCC Career Path",
      subtitle: "Global opportunities",
      body: "Placement support, interview prep, and orientation for prestigious GCC schools.",
      color: "from-navy-800 to-navy-900"
    },
  ];

  return (
    <section id="teachers" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-2 text-sm font-semibold text-lavender-900">
              <Rocket size={16} />
              Career Mapping for Teachers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
              A mapped journey, not a random career
            </h2>
            <p className="text-lg text-slate-600">
              From your first foundation course to long-term progression into GCC roles, we help you design a clear, aspirational career path.
            </p>
          </div>
          <button onClick={onTeacherClick} className="inline-flex items-center gap-2 self-start rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Start My Career Map
            <ArrowRight size={18} />
          </button>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {steps.map((step, idx) => (
            <li key={idx} className="min-h-[20rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-slate-200 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-slate-100 bg-white p-6 shadow-sm">
                  <div className="relative flex flex-1 flex-col justify-between gap-4">
                    <div className={`w-fit rounded-lg border-[0.75px] border-slate-200 bg-gradient-to-br ${step.color} p-3 shadow-lg`}>
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-lavender-800 uppercase tracking-wider">
                        Step {idx + 1}
                      </div>
                      <h3 className="text-xl leading-tight font-bold font-sans tracking-tight text-navy-800">
                        {step.title}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.subtitle}
                      </p>
                      <p className="font-sans text-sm leading-relaxed text-slate-600">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

interface SchoolSectionProps {
  onSchoolClick: () => void;
}

const SchoolSection: React.FC<SchoolSectionProps> = ({ onSchoolClick }) => {
  return (
    <section id="schools" className="relative bg-white py-6 sm:py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900">
          <EtheralShadow
            color="rgba(59, 130, 246, 0.4)"
            animation={{ scale: 100, speed: 70 }}
            noise={{ opacity: 1, scale: 1.5 }}
            sizing="fill"
          />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-medium text-white">
                  <Building2 size={14} />
                  For Schools
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.1]">
                  Hire the right teachers with AI-powered matching
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Access our curated database of trained, verified teachers across India & GCC, with intelligent matching for your specific needs.
                </p>
              </div>
              <button
                onClick={onSchoolClick}
                className="inline-flex items-center gap-2 self-start rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl lg:self-start flex-shrink-0"
              >
                Become a Partner
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 transition-all hover:bg-black/30 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 flex-shrink-0">
                    <Search className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1">
                      AI-Powered Matching
                    </h3>
                    <p className="text-slate-300 text-xs leading-snug">
                      Access candidates suited for CBSE, ICSE, and international schools with intelligent recommendations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 transition-all hover:bg-black/30 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1">
                      Pre-trained & Classroom-Ready Teachers
                    </h3>
                    <p className="text-slate-300 text-xs leading-snug">
                      Every teacher has completed our mapped training, internships, and real classroom evaluations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 transition-all hover:bg-black/30 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/20 flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1">
                      Lower Hiring Risk
                    </h3>
                    <p className="text-slate-300 text-xs leading-snug">
                      We focus on culture fit, classroom readiness, and long-term growth potential to reduce teacher churn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 transition-all hover:bg-black/30 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 flex-shrink-0">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1">
                      India & GCC Expertise
                    </h3>
                    <p className="text-slate-300 text-xs leading-snug">
                      Access verified teacher profiles from across India and GCC countries with cultural readiness training.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-4 transition-all hover:bg-black/30 hover:border-white/20 lg:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/20 flex-shrink-0">
                    <Target className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1">
                      Custom In-House Programs
                    </h3>
                    <p className="text-slate-300 text-xs leading-snug">
                      Design faculty development programs and long-term hiring pipelines tailored to your school's unique culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      tag: "FLAGSHIP",
      name: "Global Teacher Foundation Program (GTFP)",
      desc: "A comprehensive 3-month program designed to equip aspiring teachers with essential pedagogical skills, classroom management techniques, and international teaching standards.",
      audience: "Fresh graduates & aspiring educators",
      icons: [BookOpen, Users, Sparkles],
      bgColor: "from-blue-50 to-blue-100/50"
    },
    {
      tag: "UPSKILLING",
      name: "AI Classroom Mastery",
      desc: "Master cutting-edge AI tools and technologies for modern teaching. Learn to integrate artificial intelligence into lesson planning, student assessment, and classroom engagement.",
      audience: "Teachers embracing educational technology",
      icons: [Sparkles, Rocket, TrendingUp],
      bgColor: "from-purple-50 to-purple-100/50"
    },
    {
      tag: "PROFESSIONAL",
      name: "International School Leadership Program (ISLP)",
      desc: "A focused 2-month program developing leadership competencies, strategic thinking, and management skills for educators aspiring to lead in international school environments.",
      audience: "Experienced teachers seeking leadership roles",
      icons: [Star, Globe, Building2],
      bgColor: "from-green-50 to-green-100/50"
    },
    {
      tag: "LANGUAGE",
      name: "English Proficiency for Teachers (EPT)",
      desc: "Enhance your English language proficiency with specialized training for educators. Develop confident communication skills essential for teaching in international schools.",
      audience: "Teachers improving language competency",
      icons: [GraduationCap, Target, CheckCircle],
      bgColor: "from-amber-50 to-amber-100/50"
    },
  ];

  return (
    <section id="programs" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-16 space-y-5">
          <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            FOR TEACHERS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-3xl">
            Core programs that anchor the ecosystem
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Take these programs individually or combine them into a complete career mapping journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program) => {
            const [Icon1, Icon2, Icon3] = program.icons;
            return (
              <div
                key={program.name}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 transition-all hover:shadow-xl"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {program.desc}
                  </p>
                </div>

                <div className={`relative rounded-xl bg-gradient-to-br ${program.bgColor} p-8 min-h-[240px] flex items-center justify-center`}>
                  <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
                    <div className="flex flex-col items-center gap-4">
                      <div className="rounded-2xl bg-white shadow-lg p-6 w-full aspect-square flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform">
                        <Icon1 className="w-10 h-10 text-slate-700" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="rounded-2xl bg-white shadow-lg p-6 w-full aspect-square flex items-center justify-center transform rotate-2 group-hover:rotate-0 transition-transform">
                        <Icon2 className="w-10 h-10 text-slate-700" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="rounded-2xl bg-white shadow-lg p-6 w-full aspect-square flex items-center justify-center transform -rotate-1 group-hover:rotate-0 transition-transform">
                        <Icon3 className="w-10 h-10 text-slate-700" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                  <Users size={16} />
                  {program.audience}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const InternshipsSection: React.FC = () => {
  return (
    <section id="internships" className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-2 text-sm font-semibold text-lavender-900">
              <GraduationCap size={16} />
              Internships & Work Experience
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
              Internships bridge training and real classrooms
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Before moving into full-time roles or GCC schools, teachers gain hands-on experience through structured internships in India-based partner schools, focusing on classroom management, lesson execution, and professional development.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={20} className="text-lavender-800" />
                <span>1-2 months duration</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={20} className="text-lavender-800" />
                <span>Mentored teaching</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={20} className="text-lavender-800" />
                <span>Portfolio building</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl border-2 border-lavender-400 bg-gradient-to-br from-lavender-100 to-white p-6 sm:p-8 shadow-xl">
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-navy-800">
              Internship Highlights
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Duration", value: "1-2 months configurable" },
                { label: "Location", value: "Partner schools in India" },
                { label: "Support", value: "Mentoring & feedback loops" },
                { label: "Output", value: "Portfolio & reflections" },
                { label: "Pathway", value: "Indian or GCC roles" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lavender-800 text-xs font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const StoriesSection: React.FC = () => {
  const stories = [
    {
      title: "What is Career Mapping for Teachers?",
      excerpt: "An explainer on how a mapped journey from foundation to GCC roles can transform a teacher's career path.",
      category: "Guide"
    },
    {
      title: "From Internship to GCC Classroom",
      excerpt: "A pathway showing how internships, Indian experience, and mentoring prepare teachers for international schools.",
      category: "Case Study"
    },
    {
      title: "AI Matchmaking for Better Hiring",
      excerpt: "How intelligent teacher recruitment and matching helps schools reduce hiring risk and improve outcomes.",
      category: "Technology"
    },
  ];

  return (
    <section id="stories" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-12 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-2 text-sm font-semibold text-lavender-900">
            <Star size={16} />
            Success Stories & Insights
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            Stories from teachers & schools growing with us
          </h2>
          <p className="text-lg text-slate-600">
            Real journeys, measurable outcomes, and transformative career growth through the Teacheristic ecosystem.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-lg transition-all hover:shadow-2xl hover:scale-105"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lavender-400/30 to-transparent rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center rounded-full bg-navy-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {story.category}
                </div>
                <h3 className="mb-3 text-lg font-bold text-navy-800">
                  {story.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {story.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-800 transition-all hover:gap-3">
                  Read more
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterStat: React.FC<{ value: number; suffix: string; label: string }> = ({ value, suffix, label }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all hover:shadow-md">
      <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid gap-10 md:gap-12 lg:gap-16 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div className="space-y-8">
            <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              About Teacheristic
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] max-w-2xl">
              A teacher-first ecosystem built from India for India & GCC
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">
              Founded with a vision to transform teacher careers, Teacheristic connects academic training, real-world internships, and international placements under one comprehensive platform, part of Progress Education.
            </p>

            <div className="grid gap-4 grid-cols-2 pt-4">
              <CounterStat value={500} suffix="+" label="Teachers Trained" />
              <CounterStat value={50} suffix="+" label="Partner Schools" />
              <CounterStat value={95} suffix="%" label="Placement Rate" />
              <CounterStat value={10} suffix="+" label="GCC Countries" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 shadow-sm">
            <h3 className="mb-5 sm:mb-6 text-lg sm:text-xl font-bold text-slate-900">
              Our Mission & Vision
            </h3>
            <ul className="space-y-4">
              {[
                "Origin story rooted in India's educational heritage",
                "Focus on women, fresh graduates, and teacher employability",
                "Building bridges between Indian and GCC school systems",
                "Long-term vision of a comprehensive teacher growth ecosystem"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
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
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-800 to-navy-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c7ebb12_1px,transparent_1px),linear-gradient(to_bottom,#8c7ebb12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender-700/5 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 max-w-2xl space-y-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lavender-600/30 bg-lavender-700/10 px-4 py-2 text-sm font-semibold text-lavender-500">
            <Sparkles size={16} />
            Join the Ecosystem
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to transform your teaching career or school hiring?
          </h2>
          <p className="text-lg text-slate-300">
            Connect with the Teacheristic ecosystem today and start your journey toward excellence.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-lavender-600/30 bg-gradient-to-br from-navy-900/90 to-navy-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all hover:border-lavender-600/50 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-700/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-700 shadow-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                For Teachers
              </h3>
              <p className="mb-6 text-slate-300">
                Start your mapped journey with our foundation program, internships, and global placement support.
              </p>
              <button onClick={onTeacherClick} className="w-full rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Register as a Teacher
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-lavender-600/30 bg-gradient-to-br from-navy-900/90 to-navy-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all hover:border-lavender-600/50 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-700/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 shadow-lg">
                <Building2 size={24} className="text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                For Schools
              </h3>
              <p className="mb-6 text-slate-300">
                Partner with us to access our curated database, AI-powered matching, and custom training programs.
              </p>
              <button onClick={onSchoolClick} className="w-full rounded-lg border-2 border-lavender-600/30 bg-navy-900/50 px-6 py-3 font-semibold text-lavender-400 transition-all hover:border-lavender-600/50 hover:bg-navy-900/70 hover:scale-105">
                Register as a School
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
              <li><a href="#teachers" className="hover:text-lavender-600 transition-colors">Career Mapping</a></li>
              <li><a href="#schools" className="hover:text-lavender-600 transition-colors">Hire Teachers</a></li>
              <li><a href="#programs" className="hover:text-lavender-600 transition-colors">Programs</a></li>
              <li><a href="#internships" className="hover:text-lavender-600 transition-colors">Internships</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-white">
              Resources
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#stories" className="hover:text-lavender-600 transition-colors">Success Stories</a></li>
              <li><a href="#about" className="hover:text-lavender-600 transition-colors">About Us</a></li>
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
        <HeroSection />
        <TwoColumnEcosystem onTeacherClick={() => setShowTeacherForm(true)} onSchoolClick={() => setShowSchoolForm(true)} />
        <TeacherJourneySection onTeacherClick={() => setShowTeacherForm(true)} />
        <SchoolSection onSchoolClick={() => setShowSchoolForm(true)} />
        <ProgramsSection />
        <InternshipsSection />
        <StoriesSection />
        <AboutSection />
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
