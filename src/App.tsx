import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Users, Globe, Sparkles, CheckCircle, GraduationCap, Building2, Rocket, Star, UserCheck, Search, Target, TrendingUp } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/95 backdrop-blur-lg shadow-lg shadow-navy-900/50' : 'bg-navy-900/90 backdrop-blur'}`}>
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
              className="rounded-lg px-4 py-2 transition-all hover:bg-lavender-500/20 hover:text-lavender-300"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-lg border-2 border-lavender-400/30 px-5 py-2 text-sm font-semibold text-lavender-200 transition-all hover:border-lavender-400/50 hover:bg-lavender-500/10">
            Login
          </button>
          <button className="rounded-lg bg-gradient-to-r from-lavender-400 to-lavender-500 px-5 py-2 text-sm font-semibold text-navy-900 shadow-lg shadow-lavender-500/30 transition-all hover:shadow-xl hover:shadow-lavender-500/40 hover:scale-105">
            Contact
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-lavender-400/30 text-lavender-200 lg:hidden hover:bg-lavender-500/10 transition-all"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-lavender-400/20 bg-navy-900/95 backdrop-blur-lg">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-lavender-500/20 hover:text-lavender-300 transition-all"
              >
                {section.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-lavender-400/20">
              <button className="rounded-lg border-2 border-lavender-400/30 px-4 py-3 text-sm font-semibold text-lavender-200">
                Login
              </button>
              <button className="rounded-lg bg-gradient-to-r from-lavender-400 to-lavender-500 px-4 py-3 text-sm font-semibold text-navy-900 shadow-lg">
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

const TwoColumnEcosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-12 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-2 text-sm font-semibold text-lavender-700">
            <Users size={16} />
            The Teacheristic Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
            One platform. Two journeys. A shared goal.
          </h2>
          <p className="text-lg text-slate-600">
            Connecting future-ready teachers with schools across India & GCC through intensive training, internships, and AI-powered hiring.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-lavender-200 bg-gradient-to-br from-lavender-50 to-white p-6 sm:p-8 shadow-xl transition-all hover:shadow-2xl hover:border-lavender-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-200/30 to-transparent rounded-full blur-3xl -z-0"></div>
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                <GraduationCap size={18} />
                For Teachers
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-bold text-navy-900">
                Career mapping from student to global educator
              </h3>
              <ul className="space-y-3 text-slate-700">
                {[
                  "4-month hybrid foundation program with live + self-paced modules",
                  "Structured internships in Kerala schools to build classroom experience",
                  "Continued support to secure roles in Indian & GCC schools",
                  "Ongoing upskilling through micro-courses & AI-assisted learning tools"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-lavender-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lavender-500 to-lavender-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Start Your Journey
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-navy-200 bg-gradient-to-br from-navy-50 to-white p-6 sm:p-8 shadow-xl transition-all hover:shadow-2xl hover:border-navy-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-navy-200/30 to-transparent rounded-full blur-3xl -z-0"></div>
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-700 px-4 py-2 text-sm font-bold text-white shadow-lg">
                <Building2 size={18} />
                For Schools
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-bold text-navy-900">
                Hire trained, culture-ready teachers with AI matching
              </h3>
              <ul className="space-y-3 text-slate-700">
                {[
                  "Access verified teacher profiles from India & GCC with AI-powered matchmaking",
                  "Filter by subject, board, language, and experience level",
                  "Option to add in-house training projects for your existing faculty",
                  "Save time, reduce churn, and improve classroom readiness"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-navy-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-navy-800 hover:shadow-xl hover:scale-105">
                Partner With Us
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeacherJourneySection: React.FC = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Foundation Program",
      subtitle: "4-month hybrid training",
      body: "Comprehensive pedagogy, classroom management, language, tech, and AI tools for modern teaching.",
      color: "from-lavender-400 to-lavender-500"
    },
    {
      icon: GraduationCap,
      title: "Kerala Internship",
      subtitle: "Real classrooms, real mentoring",
      body: "Guided internships in partner schools to build confidence and professional teaching habits.",
      color: "from-lavender-500 to-lavender-600"
    },
    {
      icon: Building2,
      title: "Indian Experience",
      subtitle: "Professional grounding",
      body: "Work in Indian schools to refine practice, understand culture, and grow as an educator.",
      color: "from-navy-600 to-navy-700"
    },
    {
      icon: Globe,
      title: "GCC Career Path",
      subtitle: "Global opportunities",
      body: "Placement support, interview prep, and orientation for prestigious GCC schools.",
      color: "from-navy-700 to-navy-800"
    },
  ];

  return (
    <section id="teachers" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-2 text-sm font-semibold text-lavender-700">
              <Rocket size={16} />
              Career Mapping for Teachers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
              A mapped journey, not a random career
            </h2>
            <p className="text-lg text-slate-600">
              From your first foundation course to long-term progression into GCC roles, we help you design a clear, aspirational career path.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 self-start rounded-lg bg-gradient-to-r from-lavender-400 to-lavender-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
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
                      <div className="text-xs font-bold text-lavender-600 uppercase tracking-wider">
                        Step {idx + 1}
                      </div>
                      <h3 className="text-xl leading-tight font-bold font-sans tracking-tight text-navy-900">
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

const SchoolSection: React.FC = () => {
  const features = [
    {
      Icon: UserCheck,
      name: "Pre-trained & Classroom-Ready Teachers",
      description: "Every teacher has completed our mapped training, internships, and real classroom evaluations before joining your school.",
      href: "#",
      cta: "Learn more",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-100 via-navy-50 to-white opacity-50" />
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Search,
      name: "AI-Powered Matching",
      description: "Access candidates suited for CBSE, ICSE, and international schools with intelligent recommendations based on your specific requirements.",
      href: "#",
      cta: "Explore",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white opacity-50" />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Target,
      name: "Custom In-House Programs",
      description: "Design faculty development programs and long-term hiring pipelines tailored to your school's unique culture and needs.",
      href: "#",
      cta: "Get Started",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white opacity-50" />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: TrendingUp,
      name: "Lower Hiring Risk",
      description: "We focus on culture fit, classroom readiness, and long-term growth potential to dramatically reduce teacher churn.",
      href: "#",
      cta: "See Results",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-white opacity-50" />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Globe,
      name: "India & GCC Expertise",
      description: "Access verified teacher profiles from across India and GCC countries, with cultural readiness training for international placements.",
      href: "#",
      cta: "View Database",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-white opacity-50" />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <section id="schools" className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-100 border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-700">
              <Building2 size={16} />
              For Schools
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              Hire the right teachers with AI-powered matching
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Access our curated database of trained, verified teachers across India & GCC, with intelligent matching for your specific needs.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 self-start rounded-xl bg-navy-700 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-navy-800 hover:shadow-2xl hover:scale-105 lg:self-center">
            Become a Partner
            <ArrowRight size={20} />
          </button>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      tag: "Flagship",
      name: "4-Month Teacher Foundation Program",
      desc: "Hybrid learning with live sessions, self-paced modules, and practical tasks covering pedagogy, tech, and AI tools.",
      audience: "Fresh graduates & early-career teachers",
      color: "emerald"
    },
    {
      tag: "Internship",
      name: "Kerala School Internship Track",
      desc: "Guided teaching internships in partner schools with observation, mentoring, and real-time feedback.",
      audience: "Foundation program graduates",
      color: "blue"
    },
    {
      tag: "Upskilling",
      name: "AI & Tech for Teachers",
      desc: "Short modules on AI tools, digital classrooms, and tech-enabled pedagogy for modern educators.",
      audience: "Practicing teachers seeking modern tools",
      color: "purple"
    },
    {
      tag: "Professional",
      name: "Career Readiness & Portfolio Lab",
      desc: "CV, resume, LinkedIn, demo lessons, and interview coaching for Indian & GCC opportunities.",
      audience: "Teachers preparing for new roles",
      color: "orange"
    },
  ];

  const colorClasses: Record<string, any> = {
    emerald: { bg: "bg-lavender-600", border: "border-lavender-200", text: "text-lavender-700", gradient: "from-lavender-400 to-lavender-500" },
    blue: { bg: "bg-navy-700", border: "border-navy-200", text: "text-navy-700", gradient: "from-navy-600 to-navy-700" },
    purple: { bg: "bg-lavender-600", border: "border-lavender-200", text: "text-lavender-700", gradient: "from-lavender-500 to-lavender-600" },
    orange: { bg: "bg-navy-700", border: "border-navy-200", text: "text-navy-700", gradient: "from-navy-700 to-navy-800" }
  };

  return (
    <section id="programs" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="mb-12 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-2 text-sm font-semibold text-lavender-700">
            <BookOpen size={16} />
            Programs & Projects
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
            Core programs that anchor the ecosystem
          </h2>
          <p className="text-lg text-slate-600">
            Take these programs individually or combine them into a complete career mapping journey.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {programs.map((program) => {
            const colors = colorClasses[program.color];
            return (
              <div
                key={program.name}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border-2 ${colors.border} bg-white p-6 sm:p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-full blur-3xl transition-opacity group-hover:opacity-10`}></div>
                <div className="relative">
                  <div className={`mb-4 inline-flex items-center rounded-full ${colors.bg} px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg`}>
                    {program.tag}
                  </div>
                  <h3 className="mb-3 text-lg sm:text-xl font-bold text-slate-900">
                    {program.name}
                  </h3>
                  <p className="mb-4 leading-relaxed text-slate-600">
                    {program.desc}
                  </p>
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text}`}>
                    <Users size={16} />
                    {program.audience}
                  </div>
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
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-2 text-sm font-semibold text-lavender-700">
              <GraduationCap size={16} />
              Internships & Work Experience
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
              Kerala internships bridge training and real classrooms
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Before moving into full-time roles or GCC schools, teachers gain hands-on experience through structured internships in Kerala-based partner schools, focusing on classroom management, lesson execution, and professional development.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={20} className="text-lavender-600" />
                <span>1-2 months duration</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={20} className="text-lavender-600" />
                <span>Mentored teaching</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={20} className="text-lavender-600" />
                <span>Portfolio building</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl border-2 border-lavender-200 bg-gradient-to-br from-lavender-50 to-white p-6 sm:p-8 shadow-xl">
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-navy-900">
              Internship Highlights
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Duration", value: "1-2 months configurable" },
                { label: "Location", value: "Partner schools in Kerala" },
                { label: "Support", value: "Mentoring & feedback loops" },
                { label: "Output", value: "Portfolio & reflections" },
                { label: "Pathway", value: "Indian or GCC roles" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lavender-600 text-xs font-bold text-white">
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
      title: "From Kerala Internship to GCC Classroom",
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
          <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-2 text-sm font-semibold text-lavender-700">
            <Star size={16} />
            Success Stories & Insights
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lavender-200/30 to-transparent rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center rounded-full bg-navy-800 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {story.category}
                </div>
                <h3 className="mb-3 text-lg font-bold text-navy-900">
                  {story.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {story.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-lavender-600 transition-all hover:gap-3">
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

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.3fr,1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-2 text-sm font-semibold text-lavender-700">
              <Building2 size={16} />
              About Teacheristic
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
              A teacher-first ecosystem built from Kerala for India & GCC
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Founded with a vision to transform teacher careers, Teacheristic connects academic training, real-world internships, and international placements under one comprehensive platform, part of Progress Education.
            </p>
            <div className="grid gap-3 sm:gap-4 grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-lavender-600">500+</div>
                <div className="text-sm text-slate-600">Teachers Trained</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-navy-700">50+</div>
                <div className="text-sm text-slate-600">Partner Schools</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-lavender-600">95%</div>
                <div className="text-sm text-slate-600">Placement Rate</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-navy-700">10+</div>
                <div className="text-sm text-slate-600">GCC Countries</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-navy-900">
              Our Mission & Vision
            </h3>
            <ul className="space-y-4">
              {[
                "Origin story rooted in Kerala's educational heritage",
                "Focus on women, fresh graduates, and teacher employability",
                "Building bridges between Indian and GCC school systems",
                "Long-term vision of a comprehensive teacher growth ecosystem"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-lavender-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b69fa12_1px,transparent_1px),linear-gradient(to_bottom,#8b69fa12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender-500/5 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 max-w-2xl space-y-4 text-center mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-lavender-400/30 bg-lavender-500/10 px-4 py-2 text-sm font-semibold text-lavender-300">
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
          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-lavender-400/30 bg-gradient-to-br from-navy-800/90 to-navy-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all hover:border-lavender-400/50 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-500 shadow-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                For Teachers
              </h3>
              <p className="mb-6 text-slate-300">
                Start your mapped journey with our foundation program, internships, and global placement support.
              </p>
              <button className="w-full rounded-lg bg-gradient-to-r from-lavender-400 to-lavender-500 px-6 py-3 font-semibold text-navy-900 shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Register as a Teacher
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-lavender-400/30 bg-gradient-to-br from-navy-800/90 to-navy-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all hover:border-lavender-400/50 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lavender-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 shadow-lg">
                <Building2 size={24} className="text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                For Schools
              </h3>
              <p className="mb-6 text-slate-300">
                Partner with us to access our curated database, AI-powered matching, and custom training programs.
              </p>
              <button className="w-full rounded-lg border-2 border-lavender-400/30 bg-navy-800/50 px-6 py-3 font-semibold text-lavender-200 transition-all hover:border-lavender-400/50 hover:bg-navy-800/70 hover:scale-105">
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
              <li><a href="#teachers" className="hover:text-lavender-400 transition-colors">Career Mapping</a></li>
              <li><a href="#schools" className="hover:text-lavender-400 transition-colors">Hire Teachers</a></li>
              <li><a href="#programs" className="hover:text-lavender-400 transition-colors">Programs</a></li>
              <li><a href="#internships" className="hover:text-lavender-400 transition-colors">Internships</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-white">
              Resources
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#stories" className="hover:text-lavender-400 transition-colors">Success Stories</a></li>
              <li><a href="#about" className="hover:text-lavender-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-lavender-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-lavender-400 transition-colors">AI Tools</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-white">
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>Kerala, India</li>
              <li>GCC Partnerships</li>
              <li><a href="mailto:hello@teacheristic.com" className="hover:text-lavender-400 transition-colors">hello@teacheristic.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-lavender-400/20 pt-8 text-sm md:flex-row">
          <span>© {new Date().getFullYear()} Teacheristic. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lavender-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-lavender-400 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <HeroSection />
        <TwoColumnEcosystem />
        <TeacherJourneySection />
        <SchoolSection />
        <ProgramsSection />
        <InternshipsSection />
        <StoriesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
