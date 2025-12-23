import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, BookOpen, Users, Globe, Sparkles, CheckCircle, GraduationCap, Building2, Rocket, Star, UserCheck, Search, Target, TrendingUp } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { GradientDots } from '@/components/ui/gradient-dots';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
import { TeacherRegistrationForm } from '@/components/TeacherRegistrationForm';
import { SchoolRegistrationForm } from '@/components/SchoolRegistrationForm';
import { LoginForm } from '@/components/LoginForm';
import { EtheralShadow } from '@/components/ui/etheral-shadow';

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "value", label: "What You Get" },
  { id: "qualification", label: "Who Should Join" },
  { id: "register", label: "Register Now" },
];

interface NavBarProps {
  onLoginClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onLoginClick }) => {
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200' : 'bg-white/90 backdrop-blur border-b border-slate-200/50'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <a href="#hero" className="flex items-center flex-shrink-0">
          <img
            src="/header logo.png"
            alt="Teacheristic"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-lg px-4 py-2 transition-all hover:bg-[#469ad4]/10 hover:text-[#469ad4]"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/students" className="rounded-lg border-2 border-[#31bbdb]/30 px-5 py-2 text-sm font-semibold text-[#31bbdb] transition-all hover:border-[#31bbdb]/50 hover:bg-[#31bbdb]/10">
            For Students
          </Link>
          <button onClick={onLoginClick} className="rounded-lg border-2 border-[#469ad4]/30 px-5 py-2 text-sm font-semibold text-[#469ad4] transition-all hover:border-[#469ad4]/50 hover:bg-[#469ad4]/10">
            Login
          </button>
          <button className="rounded-lg bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#469ad4]/30 transition-all hover:shadow-xl hover:shadow-[#31bbdb]/40 hover:scale-105">
            Contact
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#469ad4]/30 text-[#469ad4] lg:hidden hover:bg-[#469ad4]/10 transition-all"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#469ad4]/10 hover:text-[#469ad4] transition-all"
              >
                {section.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-200">
              <Link to="/students" onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg border-2 border-[#31bbdb]/30 px-4 py-3 text-sm font-semibold text-[#31bbdb] text-center">
                For Students
              </Link>
              <button onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }} className="rounded-lg border-2 border-[#469ad4]/30 px-4 py-3 text-sm font-semibold text-[#469ad4]">
                Login
              </button>
              <button className="rounded-lg bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] px-4 py-3 text-sm font-semibold text-white shadow-lg">
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
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#469ad4]/10 via-[#31bbdb]/10 to-[#87ca92]/10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#469ad412_1px,transparent_1px),linear-gradient(to_bottom,#469ad412_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#87ca92]/5 to-transparent"></div>

      <GradientDots className="absolute top-0 left-0 w-full h-full opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#469ad4]/30 bg-[#469ad4]/10 px-5 py-2.5 text-sm font-semibold text-[#469ad4] mb-8 backdrop-blur-sm">
          <Globe size={16} />
          Teacher Talent Intelligence Database
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          The World Is Hiring Teachers.
          <br />
          <span className="bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] bg-clip-text text-transparent">
            Are You Career-Ready to Be Selected?
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join a strategic career intelligence initiative that makes you visible, validated, and aligned for emerging teaching opportunities worldwide.
        </p>

        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-[#469ad4]/30 transition-all hover:shadow-xl hover:shadow-[#31bbdb]/40 hover:scale-105"
        >
          Know More
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#469ad4]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#469ad4]/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#469ad4]/10 px-4 py-2 text-sm font-semibold text-[#469ad4]">
                <Target size={16} />
                The Initiative
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Global and GCC schools are actively looking for qualified, future-ready teachers and leaders
              </h2>
            </div>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Teacheristic is building a <strong className="text-slate-900">Teacher Talent Intelligence Database</strong> to help educators become visible, validated, and career-aligned for emerging opportunities.
              </p>
            </div>

            <div className="relative rounded-2xl bg-gradient-to-br from-[#87ca92]/10 to-[#a5d7b5]/10 border-2 border-[#87ca92]/30 p-6 sm:p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#87ca92]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="relative space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#87ca92] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    This is not a job application
                  </h3>
                </div>
                <p className="text-slate-700 text-base leading-relaxed font-medium">
                  This is a <strong>career intelligence & readiness initiative</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-[#469ad4]/10 to-[#469ad4]/5 p-6 shadow-lg border border-[#469ad4]/10 transform hover:scale-105 transition-transform">
                  <Globe className="w-12 h-12 text-[#469ad4] mb-3" />
                  <h4 className="font-bold text-slate-900 mb-2">Global Reach</h4>
                  <p className="text-sm text-slate-600">Connect with schools worldwide</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-[#31bbdb]/10 to-[#31bbdb]/5 p-6 shadow-lg border border-[#31bbdb]/10 transform hover:scale-105 transition-transform">
                  <UserCheck className="w-12 h-12 text-[#31bbdb] mb-3" />
                  <h4 className="font-bold text-slate-900 mb-2">Validated Profiles</h4>
                  <p className="text-sm text-slate-600">ATS-reviewed resumes and profiles</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl bg-gradient-to-br from-[#87ca92]/10 to-[#87ca92]/5 p-6 shadow-lg border border-[#87ca92]/10 transform hover:scale-105 transition-transform">
                  <TrendingUp className="w-12 h-12 text-[#87ca92] mb-3" />
                  <h4 className="font-bold text-slate-900 mb-2">Career Growth</h4>
                  <p className="text-sm text-slate-600">Intelligence-driven guidance</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-[#a5d7b5]/10 to-[#a5d7b5]/5 p-6 shadow-lg border border-[#a5d7b5]/10 transform hover:scale-105 transition-transform">
                  <Rocket className="w-12 h-12 text-[#87ca92] mb-3" />
                  <h4 className="font-bold text-slate-900 mb-2">Priority Access</h4>
                  <p className="text-sm text-slate-600">Exclusive opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueSection: React.FC = () => {
  const benefits = [
    {
      icon: Search,
      title: "ATS & Human Intelligence Review",
      description: "Your resume is reviewed through an ATS & human intelligence layer",
    },
    {
      icon: Mail,
      title: "Career-Oriented Insights",
      description: "You receive career-oriented insights via email / WhatsApp",
    },
    {
      icon: BookOpen,
      title: "Exclusive Content Access",
      description: "You get access to exclusive videos, sessions, and career guidance",
    },
    {
      icon: Star,
      title: "Priority Access to Programs",
      description: "You may receive priority access to programs, audits, or leadership pathways",
    },
    {
      icon: Users,
      title: "Part of Growing Ecosystem",
      description: "Your profile becomes part of a structured, growing teacher ecosystem",
    },
    {
      icon: CheckCircle,
      title: "Data Privacy & Purpose",
      description: "Your data is used only for career development, guidance, and Teacheristic initiatives",
    },
  ];

  return (
    <section id="value" className="relative bg-gradient-to-b from-slate-50/50 to-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#31bbdb]/10 px-4 py-2 text-sm font-semibold text-[#31bbdb]">
            <Sparkles size={16} />
            Value Without Overpromising
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            What Happens After You Join
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Once you submit your profile, here's what you can expect
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:border-[#469ad4]/30"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#469ad4]/10 to-transparent rounded-full blur-3xl opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center shadow-lg">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#469ad4]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#469ad4]">{idx + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualificationSection: React.FC = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Currently Working Teachers",
      description: "Teachers of all subjects across primary, secondary, and higher secondary levels",
    },
    {
      icon: Award,
      title: "Senior & Experienced Educators",
      description: "Experienced teachers with proven track records in their respective fields",
    },
    {
      icon: Building2,
      title: "School Leadership",
      description: "Principals, vice principals, academic coordinators, and department heads",
    },
    {
      icon: BookOpen,
      title: "Qualified Non-Working Teachers",
      description: "Qualified teachers not currently working but seeking opportunities",
    },
    {
      icon: Globe,
      title: "Aspiring Leaders",
      description: "Teachers aspiring for leadership roles or international teaching positions",
    },
  ];

  return (
    <section id="qualification" className="relative bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#87ca92]/10 px-4 py-2 text-sm font-semibold text-[#87ca92]">
            <UserCheck size={16} />
            Qualification Section
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Who Should Join This Initiative?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            If you're serious about career growth in education, this is for you
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {qualifications.map((qual, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:border-[#87ca92]/30"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#87ca92]/10 to-transparent rounded-full blur-3xl opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#87ca92] to-[#a5d7b5] flex items-center justify-center shadow-lg">
                  <qual.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {qual.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {qual.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-[#87ca92]/10 to-[#a5d7b5]/10 border-2 border-[#87ca92]/30 p-8 sm:p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-[#87ca92]" />
            <h3 className="text-2xl font-bold text-slate-900">
              This is for you
            </h3>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Whether you're actively teaching, in a leadership role, or seeking your next opportunity—if career growth in education matters to you, this intelligence database will help you get visible, validated, and career-ready.
          </p>
        </div>
      </div>
    </section>
  );
};

interface RegisterSectionProps {
  onTeacherClick: () => void;
  onSchoolClick: () => void;
}

const RegisterSection: React.FC<RegisterSectionProps> = ({ onTeacherClick, onSchoolClick }) => {
  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-br from-[#469ad4]/5 via-[#31bbdb]/5 to-[#87ca92]/5 py-20 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#469ad412_1px,transparent_1px),linear-gradient(to_bottom,#469ad412_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#87ca92]/5 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Take the First Step Toward a <span className="bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] bg-clip-text text-transparent">Stronger Teaching Career</span>
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Join the Teacher Talent Intelligence Database today and become visible to opportunities worldwide
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-[#469ad4]/20 bg-white p-8 sm:p-10 shadow-2xl transition-all hover:border-[#469ad4]/40 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#469ad4]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="relative space-y-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#469ad4] to-[#31bbdb] shadow-lg">
                <GraduationCap size={28} className="text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  For Teachers
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Register your profile and become part of an intelligence-driven career ecosystem designed for educators like you
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Get your resume ATS-reviewed",
                  "Receive career insights & guidance",
                  "Access exclusive opportunities",
                  "Build your validated teacher profile",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={18} className="text-[#87ca92] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onTeacherClick}
                className="group w-full rounded-xl bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Register as a Teacher
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border-2 border-[#31bbdb]/20 bg-white p-8 sm:p-10 shadow-2xl transition-all hover:border-[#31bbdb]/40 hover:scale-105">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#31bbdb]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="relative space-y-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#31bbdb] shadow-lg">
                <Building2 size={28} className="text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  For Schools
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Partner with us to access verified, career-ready teachers through intelligent matching
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Access validated teacher profiles",
                  "AI-powered candidate matching",
                  "Reduce hiring risk & time",
                  "Connect with qualified educators",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={18} className="text-[#469ad4] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onSchoolClick}
                className="group w-full rounded-xl border-2 border-[#31bbdb] bg-white px-8 py-4 text-lg font-semibold text-[#31bbdb] transition-all hover:bg-[#31bbdb] hover:text-white hover:scale-105 flex items-center justify-center gap-2"
              >
                Register as a School
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
    <footer className="bg-gradient-to-br from-slate-50 to-white border-t border-slate-200 text-slate-600">
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
            <div className="mb-4 text-sm font-bold text-slate-900">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-[#469ad4] transition-colors">About Initiative</a></li>
              <li><a href="#value" className="hover:text-[#469ad4] transition-colors">What You Get</a></li>
              <li><a href="#qualification" className="hover:text-[#469ad4] transition-colors">Who Should Join</a></li>
              <li><a href="#register" className="hover:text-[#469ad4] transition-colors">Register Now</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-slate-900">
              For Educators
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#register" className="hover:text-[#469ad4] transition-colors">Teacher Registration</a></li>
              <li><a href="#register" className="hover:text-[#469ad4] transition-colors">School Partnership</a></li>
              <li><Link to="/students" className="hover:text-[#469ad4] transition-colors">Student Database</Link></li>
              <li><a href="#value" className="hover:text-[#469ad4] transition-colors">Career Intelligence</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-slate-900">
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>India</li>
              <li>GCC Partnerships</li>
              <li><a href="mailto:hello@teacheristic.com" className="hover:text-[#469ad4] transition-colors">hello@teacheristic.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm md:flex-row">
          <span>© {new Date().getFullYear()} Teacheristic. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#469ad4] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#469ad4] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [showSchoolForm, setShowSchoolForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
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
      <NavBar onLoginClick={() => setShowLoginForm(true)} />
      <main>
        <HeroSection />
        <AboutSection />
        <ValueSection />
        <QualificationSection />
        <RegisterSection onTeacherClick={() => setShowTeacherForm(true)} onSchoolClick={() => setShowSchoolForm(true)} />
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

      {showLoginForm && (
        <LoginForm onClose={() => setShowLoginForm(false)} />
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
