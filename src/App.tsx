import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Users, Globe, Sparkles, CheckCircle, GraduationCap, Building2, Rocket, Star, UserCheck, Search, Target, TrendingUp } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { GradientDots } from '@/components/ui/gradient-dots';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

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

const TwoColumnEcosystem: React.FC = () => {
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
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lavender-700 to-lavender-800 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
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
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-navy-900 hover:shadow-xl hover:scale-105">
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

const CareerMappingSection: React.FC = () => {
  const careerContent = [
    {
      title: "Foundation Program",
      description:
        "Begin with comprehensive 4-month hybrid training in pedagogy, classroom management, language proficiency, technology integration, and AI tools. Build a strong foundation for modern teaching excellence.",
      content: (
        <div className="h-full w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
            className="h-full w-full object-cover"
            alt="Teacher training and professional development"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-8">
            <div className="text-white space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/40 backdrop-blur-md border border-blue-400/50 px-3 py-1 text-xs font-bold">
                FOR TEACHERS
              </div>
              <div className="font-bold text-2xl drop-shadow-lg">Professional Training</div>
              <div className="text-sm opacity-95 max-w-sm leading-relaxed drop-shadow-md">Comprehensive pedagogy, classroom management & modern teaching tools</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Kerala Internship Program",
      description:
        "Gain hands-on experience through guided internships in Kerala partner schools. Work with real students under expert mentorship to build confidence, refine your teaching style, and develop professional habits that last a lifetime.",
      content: (
        <div className="h-full w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
            className="h-full w-full object-cover"
            alt="Teachers working in classrooms with students"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-8">
            <div className="text-white space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/40 backdrop-blur-md border border-blue-400/50 px-3 py-1 text-xs font-bold">
                FOR TEACHERS
              </div>
              <div className="font-bold text-2xl drop-shadow-lg">Mentored Internships</div>
              <div className="text-sm opacity-95 max-w-sm leading-relaxed drop-shadow-md">Practice teaching with expert guidance in real Kerala classrooms</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Indian School Experience",
      description:
        "Work in Indian schools to refine your teaching practice, understand diverse educational cultures, and grow as an educator. Build a strong professional portfolio while gaining the experience needed for international opportunities.",
      content: (
        <div className="h-full w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
            className="h-full w-full object-cover"
            alt="Teacher teaching in Indian classroom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-8">
            <div className="text-white space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/40 backdrop-blur-md border border-blue-400/50 px-3 py-1 text-xs font-bold">
                FOR TEACHERS
              </div>
              <div className="font-bold text-2xl drop-shadow-lg">Professional Growth</div>
              <div className="text-sm opacity-95 max-w-sm leading-relaxed drop-shadow-md">Build experience and portfolio in diverse Indian school environments</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "GCC Career Opportunities",
      description:
        "Progress to prestigious GCC schools with our comprehensive placement support, interview preparation, and cultural orientation. We help you make the leap to international teaching roles with confidence.",
      content: (
        <div className="h-full w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
            className="h-full w-full object-cover"
            alt="International teaching opportunities"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-8">
            <div className="text-white space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/40 backdrop-blur-md border border-blue-400/50 px-3 py-1 text-xs font-bold">
                FOR TEACHERS
              </div>
              <div className="font-bold text-2xl drop-shadow-lg">GCC Placements</div>
              <div className="text-sm opacity-95 max-w-sm leading-relaxed drop-shadow-md">International teaching careers in prestigious Gulf schools</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI-Powered Teacher Matching",
      description:
        "Access our curated database of trained, verified teachers with intelligent AI matching. Find classroom-ready educators who fit your school's culture, curriculum needs, and long-term vision with unprecedented accuracy.",
      content: (
        <div className="h-full w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
            className="h-full w-full object-cover"
            alt="School administration and hiring"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-gray-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-8">
            <div className="text-white space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-500/40 backdrop-blur-md border border-slate-400/50 px-3 py-1 text-xs font-bold">
                FOR SCHOOLS
              </div>
              <div className="font-bold text-2xl drop-shadow-lg">Smart Matching</div>
              <div className="text-sm opacity-95 max-w-sm leading-relaxed drop-shadow-md">AI-powered system to find the perfect teacher fit for your institution</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Verified Teacher Network",
      description:
        "Every teacher in our network has completed intensive training, internships, and real classroom evaluations. We focus on culture fit and long-term growth potential to dramatically reduce teacher turnover and hiring challenges.",
      content: (
        <div className="h-full w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
            className="h-full w-full object-cover"
            alt="Verified teachers and quality education"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-gray-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-8">
            <div className="text-white space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-500/40 backdrop-blur-md border border-slate-400/50 px-3 py-1 text-xs font-bold">
                FOR SCHOOLS
              </div>
              <div className="font-bold text-2xl drop-shadow-lg">Verified Excellence</div>
              <div className="text-sm opacity-95 max-w-sm leading-relaxed drop-shadow-md">Classroom-ready teachers with proven capabilities and training</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="teachers" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c7ebb08_1px,transparent_1px),linear-gradient(to_bottom,#8c7ebb08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-600 to-lavender-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
              <Rocket size={16} />
              Career Mapping for Teachers & Schools
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800 leading-tight">
              A mapped journey, not a random career
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              From your first foundation course to long-term progression into GCC roles, we help you design a clear, aspirational career path. Schools gain access to trained, verified teachers through intelligent matching.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 self-start rounded-xl bg-gradient-to-r from-lavender-600 to-lavender-700 px-8 py-4 font-bold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 border border-lavender-500/50">
            Start My Career Map
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28">
        <div className="mx-auto max-w-[90rem]">
          <StickyScroll content={careerContent} />
        </div>
      </div>
    </section>
  );
};

const SchoolSection: React.FC = () => {
  const features = [
    {
      Icon: Search,
      name: "AI-Powered Matching",
      description: "Access candidates suited for CBSE, ICSE, and international schools with intelligent recommendations based on your specific requirements.",
      accentColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconBg: "from-blue-600/20 to-cyan-600/20",
      className: "lg:col-span-1 lg:row-span-2",
    },
    {
      Icon: UserCheck,
      name: "Pre-trained & Classroom-Ready Teachers",
      description: "Every teacher has completed our mapped training, internships, and real classroom evaluations before joining your school.",
      accentColor: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconBg: "from-emerald-600/20 to-teal-600/20",
      className: "lg:col-span-1 lg:row-span-3",
    },
    {
      Icon: TrendingUp,
      name: "Lower Hiring Risk",
      description: "We focus on culture fit, classroom readiness, and long-term growth potential to dramatically reduce teacher churn.",
      accentColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconBg: "from-amber-600/20 to-orange-600/20",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      Icon: Target,
      name: "Custom In-House Programs",
      description: "Design faculty development programs and long-term hiring pipelines tailored to your school's unique culture and needs.",
      accentColor: "from-violet-500/20 to-purple-500/20",
      borderColor: "border-violet-500/30",
      iconBg: "from-violet-600/20 to-purple-600/20",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      Icon: Globe,
      name: "India & GCC Expertise",
      description: "Access verified teacher profiles from across India and GCC countries, with cultural readiness training for international placements.",
      accentColor: "from-sky-500/20 to-indigo-500/20",
      borderColor: "border-sky-500/30",
      iconBg: "from-sky-600/20 to-indigo-600/20",
      className: "lg:col-span-1 lg:row-span-2",
    },
  ];

  return (
    <section id="schools" className="relative overflow-hidden bg-slate-950">
      <GradientDots
        dotSize={2}
        spacing={20}
        duration={40}
        colorCycleDuration={8}
        backgroundColor="#020617"
        className="opacity-60"
      />

      <div className="relative rounded-t-[4rem] bg-gradient-to-b from-slate-900/60 to-slate-950/60 border-t-4 border-slate-700/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200 shadow-lg">
                <Building2 size={16} />
                For Schools
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Hire the right teachers with AI-powered matching
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Access our curated database of trained, verified teachers across India & GCC, with intelligent matching for your specific needs.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 lg:self-center border border-blue-500/50">
              Become a Partner
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 border ${feature.borderColor} hover:border-opacity-60 shadow-2xl ${feature.className}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${feature.accentColor} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                <div className="relative space-y-4 z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.iconBg} backdrop-blur-sm border ${feature.borderColor} shadow-lg`}>
                    <feature.Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
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
      name: "4-Month Teacher Foundation Program",
      desc: "Learn from international experts in our 10-12 month training programs to stand out in diverse environments.",
      audience: "Fresh graduates & early-career teachers",
      icons: [BookOpen, Users, Sparkles],
      bgColor: "from-blue-50 to-blue-100/50"
    },
    {
      tag: "INTERNSHIP",
      name: "Kerala School Internship Track",
      desc: "Upgrade your skills with short, self-paced courses designed to strengthen your expertise.",
      audience: "Foundation program graduates",
      icons: [GraduationCap, Target, CheckCircle],
      bgColor: "from-purple-50 to-purple-100/50"
    },
    {
      tag: "UPSKILLING",
      name: "AI & Tech for Teachers",
      desc: "Get access and apply to exclusive job opportunities at leading international schools.",
      audience: "Practicing teachers seeking modern tools",
      icons: [Sparkles, Rocket, TrendingUp],
      bgColor: "from-green-50 to-green-100/50"
    },
    {
      tag: "PROFESSIONAL",
      name: "Career Readiness & Portfolio Lab",
      desc: "Explore 150+ free resources, including webinars, masterclasses, and AI-powered teaching tools.",
      audience: "Teachers preparing for new roles",
      icons: [Star, Globe, Building2],
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
              Kerala internships bridge training and real classrooms
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Before moving into full-time roles or GCC schools, teachers gain hands-on experience through structured internships in Kerala-based partner schools, focusing on classroom management, lesson execution, and professional development.
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
                { label: "Location", value: "Partner schools in Kerala" },
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

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.3fr,1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-2 text-sm font-semibold text-lavender-900">
              <Building2 size={16} />
              About Teacheristic
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
              A teacher-first ecosystem built from Kerala for India & GCC
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Founded with a vision to transform teacher careers, Teacheristic connects academic training, real-world internships, and international placements under one comprehensive platform, part of Progress Education.
            </p>
            <div className="grid gap-3 sm:gap-4 grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-lavender-800">500+</div>
                <div className="text-sm text-slate-600">Teachers Trained</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-navy-800">50+</div>
                <div className="text-sm text-slate-600">Partner Schools</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-lavender-800">95%</div>
                <div className="text-sm text-slate-600">Placement Rate</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl sm:text-3xl font-bold text-navy-800">10+</div>
                <div className="text-sm text-slate-600">GCC Countries</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-navy-800">
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
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-lavender-800" />
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
              <button className="w-full rounded-lg bg-gradient-to-r from-lavender-600 to-lavender-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
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
              <button className="w-full rounded-lg border-2 border-lavender-600/30 bg-navy-900/50 px-6 py-3 font-semibold text-lavender-400 transition-all hover:border-lavender-600/50 hover:bg-navy-900/70 hover:scale-105">
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
              <li>Kerala, India</li>
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
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <HeroSection />
        <TwoColumnEcosystem />
        <CareerMappingSection />
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
