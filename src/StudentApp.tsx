import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, BookOpen, CheckCircle, Rocket, Target } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { StudentRegistrationForm } from '@/components/StudentRegistrationForm';

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "join", label: "Join" },
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
  onRegisterClick: () => void;
}

const JoinSection: React.FC<JoinSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="join" className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-800">
            Ready to Get Discovered?
          </h2>

          <button onClick={onRegisterClick} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Submit Your Profile
            <ArrowRight size={20} />
          </button>

          <p className="text-sm text-slate-600">
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

function StudentApp({ onSwitchToTeacher }: { onSwitchToTeacher: () => void }) {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRegistrationSuccess = () => {
    setShowRegistrationForm(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar onSwitchToTeacher={onSwitchToTeacher} />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <JoinSection onRegisterClick={() => setShowRegistrationForm(true)} />
      </main>
      <Footer />

      {showRegistrationForm && (
        <StudentRegistrationForm
          onClose={() => setShowRegistrationForm(false)}
          onSuccess={handleRegistrationSuccess}
        />
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center gap-3">
            <CheckCircle size={24} />
            <div>
              <div className="font-bold">Registration Successful!</div>
              <div className="text-sm">
                Thank you for joining! We'll be in touch with personalized guidance soon.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentApp;
