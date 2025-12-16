import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { registerTeacher } from '@/lib/supabase';

interface TeacherRegistrationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const TeacherRegistrationForm: React.FC<TeacherRegistrationFormProps> = ({ onClose, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    qualification: '',
    experience_years: '',
    subjects: [] as string[],
    preferred_location: '',
    currently_employed: false,
    interested_in_gcc: false,
  });

  const subjectOptions = [
    'Mathematics', 'Science', 'English', 'Social Studies', 'Physics', 'Chemistry',
    'Biology', 'Computer Science', 'Hindi', 'Physical Education', 'Arts', 'Music'
  ];

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await registerTeacher({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        qualification: formData.qualification,
        experience_years: parseInt(formData.experience_years) || 0,
        subjects: formData.subjects,
        preferred_location: formData.preferred_location || undefined,
        currently_employed: formData.currently_employed,
        interested_in_gcc: formData.interested_in_gcc,
      });

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-lavender-600 to-lavender-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">Teacher Registration</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lavender-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lavender-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lavender-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Highest Qualification *
              </label>
              <select
                required
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lavender-600 focus:border-transparent"
              >
                <option value="">Select qualification</option>
                <option value="B.Ed">B.Ed</option>
                <option value="M.Ed">M.Ed</option>
                <option value="B.A./B.Sc.">B.A./B.Sc.</option>
                <option value="M.A./M.Sc.">M.A./M.Sc.</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                min="0"
                value={formData.experience_years}
                onChange={(e) => setFormData({ ...formData, experience_years: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lavender-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Preferred Location
              </label>
              <input
                type="text"
                value={formData.preferred_location}
                onChange={(e) => setFormData({ ...formData, preferred_location: e.target.value })}
                placeholder="e.g., Mumbai, Delhi, GCC"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lavender-600 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Subjects You Can Teach
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {subjectOptions.map((subject) => (
                <button
                  key={subject}
                  type="button"
                  onClick={() => handleSubjectToggle(subject)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    formData.subjects.includes(subject)
                      ? 'bg-lavender-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.currently_employed}
                onChange={(e) => setFormData({ ...formData, currently_employed: e.target.checked })}
                className="w-5 h-5 text-lavender-600 border-slate-300 rounded focus:ring-lavender-600"
              />
              <span className="text-sm font-medium text-slate-700">
                I am currently employed as a teacher
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interested_in_gcc}
                onChange={(e) => setFormData({ ...formData, interested_in_gcc: e.target.checked })}
                className="w-5 h-5 text-lavender-600 border-slate-300 rounded focus:ring-lavender-600"
              />
              <span className="text-sm font-medium text-slate-700">
                I am interested in GCC opportunities
              </span>
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-lavender-600 to-lavender-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Registration'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
