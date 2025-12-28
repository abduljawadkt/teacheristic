import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, CheckCircle, Rocket, Target, Loader2 } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { supabase } from '@/lib/supabase';

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "join", label: "Join" },
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
              className="rounded-lg px-4 py-2 transition-all hover:bg-blue-700/20 hover:text-blue-400"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
        description="Join our intelligence database to unlock global opportunities."
      />
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            Most Students Are Talented.
            <br />
            <span className="text-blue-700">But Not Opportunity-Positioned.</span>
          </h2>
          <p className="text-lg text-slate-600">
            We help unlock and showcase your potential to universities and institutions worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-12 max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            What You Get
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Target, title: "Career Insights" },
            { icon: BookOpen, title: "Exclusive Content" },
            { icon: Rocket, title: "Priority Access" }
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-3 shadow-lg">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface JoinSectionProps {
  onSuccess: () => void;
}

const JoinSection: React.FC<JoinSectionProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
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
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800 mb-4">
            Ready to Get Discovered?
          </h2>
          <p className="text-slate-600">
            Submit your profile to unlock exclusive opportunities
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
          {error && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="location" className="mb-2 block text-sm font-medium text-slate-700">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="City, State"
                />
              </div>

              <div>
                <label htmlFor="schoolCollege" className="mb-2 block text-sm font-medium text-slate-700">
                  School/College *
                </label>
                <input
                  type="text"
                  id="schoolCollege"
                  name="schoolCollege"
                  required
                  value={formData.schoolCollege}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Institution name"
                />
              </div>

              <div>
                <label htmlFor="gradeYear" className="mb-2 block text-sm font-medium text-slate-700">
                  Grade/Year *
                </label>
                <input
                  type="text"
                  id="gradeYear"
                  name="gradeYear"
                  required
                  value={formData.gradeYear}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="e.g., Grade 11"
                />
              </div>
            </div>

            <div>
              <label htmlFor="academicInterests" className="mb-2 block text-sm font-medium text-slate-700">
                Academic Interests *
              </label>
              <textarea
                id="academicInterests"
                name="academicInterests"
                required
                value={formData.academicInterests}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="What subjects or fields are you passionate about?"
              />
            </div>

            <div>
              <label htmlFor="achievementsSkills" className="mb-2 block text-sm font-medium text-slate-700">
                Achievements & Skills *
              </label>
              <textarea
                id="achievementsSkills"
                name="achievementsSkills"
                required
                value={formData.achievementsSkills}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Share your achievements, awards, and special skills"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
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

function StudentApp() {
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
        <BenefitsSection />
        <JoinSection onSuccess={handleRegistrationSuccess} />
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

export default StudentApp;
