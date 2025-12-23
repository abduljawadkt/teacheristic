import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, Users, Globe, Sparkles, CheckCircle, GraduationCap, Building2, Rocket, Star, UserCheck, Search, Target, TrendingUp, Mail, Award, Loader2, User, MapPin, School, Phone, Upload, FileText, Check } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { GradientDots } from '@/components/ui/gradient-dots';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';
import { EtheralShadow } from '@/components/ui/etheral-shadow';
import { Feature } from '@/components/ui/feature-with-advantages';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "value", label: "What You Get" },
  { id: "qualification", label: "Who Should Join" },
  { id: "register", label: "Register Now" },
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

  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200' : 'bg-white/90 backdrop-blur border-b border-slate-200/50'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <a href="#hero" className="flex items-center flex-shrink-0">
          <img
            src="/header logo.png"
            alt="Teacheristic"
            className="h-6 sm:h-7 w-auto object-contain"
            style={{ filter: 'invert(1) brightness(0.9)' }}
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
          <button onClick={scrollToRegister} className="rounded-lg bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#469ad4]/30 transition-all hover:shadow-xl hover:shadow-[#31bbdb]/40 hover:scale-105">
            Register Now
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
              <button onClick={scrollToRegister} className="rounded-lg bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] px-4 py-3 text-sm font-semibold text-white shadow-lg">
                Register Now
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
          Student Talent Intelligence Database
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          The Future Is Looking for Leaders.
          <br />
          <span className="bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] bg-clip-text text-transparent">
            Are You Ready to Be Discovered?
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join our intelligence database to unlock global opportunities, career guidance, and connect with leading institutions worldwide.
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
    <section id="about" className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge className="bg-gradient-to-r from-[#469ad4] to-[#31bbdb] text-white border-0">
              The Initiative
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-slate-900">
              Most Students Are Talented. But Not Opportunity-Positioned.
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-slate-600">
              Teacheristic is building a Student Talent Intelligence Database to help students become visible, validated, and aligned for global academic opportunities.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Global Reach</p>
                  <p className="text-slate-600 text-sm">
                    Connect with institutions worldwide through our extensive network.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Validated Profiles</p>
                  <p className="text-slate-600 text-sm">
                    Professional profile reviews that stand out to universities and institutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Career Intelligence</p>
                  <p className="text-slate-600 text-sm">
                    Intelligence-driven guidance and opportunity discovery platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Priority Access</p>
                  <p className="text-slate-600 text-sm">
                    Exclusive opportunities tailored to your academic and career goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Structured Ecosystem</p>
                  <p className="text-slate-600 text-sm">
                    Your profile becomes part of a growing, structured education ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Data Privacy</p>
                  <p className="text-slate-600 text-sm">
                    Your data is used only for career development and Teacheristic initiatives.
                  </p>
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
  return (
    <section id="value" className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge className="bg-gradient-to-r from-[#469ad4] to-[#31bbdb] text-white border-0">
              Value Without Overpromising
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-slate-900">
              What Happens After You Join
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-slate-600">
              Once you submit your profile, here's what you can expect from our platform.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">ATS & Human Intelligence Review</p>
                  <p className="text-slate-600 text-sm">
                    Your resume is reviewed through an ATS and human intelligence layer.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Career-Oriented Insights</p>
                  <p className="text-slate-600 text-sm">
                    You receive career-oriented insights via email and WhatsApp.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Exclusive Content Access</p>
                  <p className="text-slate-600 text-sm">
                    You get access to exclusive videos, sessions, and career guidance.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Priority Access to Programs</p>
                  <p className="text-slate-600 text-sm">
                    You may receive priority access to programs, audits, or leadership pathways.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Part of Growing Ecosystem</p>
                  <p className="text-slate-600 text-sm">
                    Your profile becomes part of a structured, growing education ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Data Privacy & Purpose</p>
                  <p className="text-slate-600 text-sm">
                    Your data is used only for career development and Teacheristic initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QualificationSection: React.FC = () => {
  return (
    <section id="qualification" className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge className="bg-gradient-to-r from-[#469ad4] to-[#31bbdb] text-white border-0">
              Who Should Join
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-slate-900">
              Who Should Join This Initiative?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-slate-600">
              If you're serious about your academic and career growth, this is for you.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">High School Students</p>
                  <p className="text-slate-600 text-sm">
                    Students preparing for college admissions and looking for guidance on academic pathways.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Undergraduates</p>
                  <p className="text-slate-600 text-sm">
                    College students seeking career insights, internships, and global opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Academic Achievers</p>
                  <p className="text-slate-600 text-sm">
                    Students with strong academic records looking to showcase their achievements.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Aspiring Global Scholars</p>
                  <p className="text-slate-600 text-sm">
                    Students interested in study abroad programs and international educational opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Future Leaders</p>
                  <p className="text-slate-600 text-sm">
                    Students with leadership potential seeking mentorship and career development.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Opportunity-Ready Students</p>
                  <p className="text-slate-600 text-sm">
                    Students who want to get visible, validated, and aligned for global opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RegisterSection: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    schoolCollege: '',
    gradeYear: '',
    academicInterests: '',
    achievementsSkills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        setError('Please upload a PDF or Word document');
        return;
      }

      if (file.size > maxSize) {
        setError('File size must be less than 5MB');
        return;
      }

      setResumeFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let resumeUrl = null;

      if (resumeFile) {
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${formData.email}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('student_resumes')
          .upload(filePath, resumeFile, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from('student_resumes')
          .getPublicUrl(filePath);

        resumeUrl = urlData.publicUrl;
      }

      const { error: insertError } = await supabase
        .from('student_registrations')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            school_college: formData.schoolCollege,
            grade_year: formData.gradeYear,
            academic_interests: formData.academicInterests,
            achievements_skills: formData.achievementsSkills,
            resume_url: resumeUrl,
          },
        ]);

      if (insertError) throw insertError;

      onSuccess();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        schoolCollege: '',
        gradeYear: '',
        academicInterests: '',
        achievementsSkills: '',
      });
      setResumeFile(null);
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-br from-[#469ad4]/5 via-[#31bbdb]/5 to-[#87ca92]/5 py-20 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#469ad412_1px,transparent_1px),linear-gradient(to_bottom,#469ad412_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#87ca92]/5 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Ready to <span className="bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] bg-clip-text text-transparent">Get Discovered?</span>
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Submit your profile to unlock exclusive opportunities and career guidance
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8">
          {error && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <User size={16} className="text-[#469ad4]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Mail size={16} className="text-[#469ad4]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Phone size={16} className="text-[#469ad4]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="location" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <MapPin size={16} className="text-[#469ad4]" />
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                  placeholder="City, State"
                />
              </div>

              <div>
                <label htmlFor="schoolCollege" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <School size={16} className="text-[#469ad4]" />
                  School/College *
                </label>
                <input
                  type="text"
                  id="schoolCollege"
                  name="schoolCollege"
                  required
                  value={formData.schoolCollege}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                  placeholder="Institution name"
                />
              </div>

              <div>
                <label htmlFor="gradeYear" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <GraduationCap size={16} className="text-[#469ad4]" />
                  Grade/Year *
                </label>
                <input
                  type="text"
                  id="gradeYear"
                  name="gradeYear"
                  required
                  value={formData.gradeYear}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                  placeholder="e.g., Grade 11"
                />
              </div>
            </div>

            <div>
              <label htmlFor="academicInterests" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <BookOpen size={16} className="text-[#469ad4]" />
                Academic Interests *
              </label>
              <textarea
                id="academicInterests"
                name="academicInterests"
                required
                value={formData.academicInterests}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                placeholder="What subjects or fields are you passionate about?"
              />
            </div>

            <div>
              <label htmlFor="achievementsSkills" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Award size={16} className="text-[#469ad4]" />
                Achievements & Skills *
              </label>
              <textarea
                id="achievementsSkills"
                name="achievementsSkills"
                required
                value={formData.achievementsSkills}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-[#469ad4] focus:outline-none focus:ring-2 focus:ring-[#469ad4]/20"
                placeholder="Share your achievements, awards, and special skills"
              />
            </div>

            <div>
              <label htmlFor="resume" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Upload size={16} className="text-[#469ad4]" />
                Upload Resume (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-dashed border-slate-300 px-4 py-6 text-slate-600 transition-all hover:border-[#469ad4] hover:bg-[#469ad4]/5 cursor-pointer"
                >
                  {resumeFile ? (
                    <>
                      <FileText size={20} className="text-[#469ad4]" />
                      <span className="text-sm font-medium text-[#469ad4]">{resumeFile.name}</span>
                      <span className="text-xs text-slate-500">({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                    </>
                  ) : (
                    <>
                      <Upload size={20} className="text-slate-400" />
                      <span className="text-sm">Click to upload or drag and drop</span>
                    </>
                  )}
                </label>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Supported formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>

            <div className="rounded-lg bg-[#469ad4]/5 border border-[#469ad4]/20 p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                This information helps us understand your profile and guide you toward the right opportunities. Your data is secure and confidential, used only for Teacheristic's talent development initiatives.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-[#469ad4] via-[#31bbdb] to-[#87ca92] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Your Profile
                  <ArrowRight size={20} />
                </>
              )}
            </button>

            <p className="text-xs text-center text-slate-600">
              Free | Confidential | No obligation
            </p>
          </form>
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
                style={{ filter: 'invert(1) brightness(0.9)' }}
              />
            </a>
            <p className="text-sm">
              A career-mapping ecosystem connecting students with global opportunities.
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
              For Students
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#register" className="hover:text-[#469ad4] transition-colors">Student Registration</a></li>
              <li><a href="#value" className="hover:text-[#469ad4] transition-colors">Career Intelligence</a></li>
              <li><a href="#value" className="hover:text-[#469ad4] transition-colors">Exclusive Content</a></li>
              <li><a href="#qualification" className="hover:text-[#469ad4] transition-colors">Eligibility</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold text-slate-900">
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>India</li>
              <li>Global Partnerships</li>
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRegistrationSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <Feature />
        <ValueSection />
        <QualificationSection />
        <RegisterSection onSuccess={handleRegistrationSuccess} />
      </main>
      <Footer />

      {showSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl">
          <div className="flex items-center gap-3">
            <CheckCircle size={24} />
            <div>
              <div className="font-bold">Registration Successful!</div>
              <div className="text-sm">
                Thank you for joining! We'll be in touch soon.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
