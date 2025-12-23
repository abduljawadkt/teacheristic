import React, { useState } from 'react';
import { X, Loader2, User, MapPin, School, BookOpen, Award, Phone, Mail, GraduationCap, Upload, FileText } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface StudentRegistrationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const StudentRegistrationForm: React.FC<StudentRegistrationFormProps> = ({
  onClose,
  onSuccess,
}) => {
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
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <h2 className="text-2xl font-bold text-navy-800">Student Registration</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 rounded-lg bg-blue-50 border border-blue-200 p-4">
            <p className="text-sm text-slate-700">
              Join our Student Talent Intelligence Database to unlock exclusive opportunities, career guidance, and connect with global institutions.
            </p>
          </div>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <User size={16} className="text-blue-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Mail size={16} className="text-blue-600" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Phone size={16} className="text-blue-600" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="location" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <MapPin size={16} className="text-blue-600" />
                  Location (City, State) *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Mumbai, Maharashtra"
                />
              </div>

              <div>
                <label htmlFor="schoolCollege" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <School size={16} className="text-blue-600" />
                  Current School/College *
                </label>
                <input
                  type="text"
                  id="schoolCollege"
                  name="schoolCollege"
                  required
                  value={formData.schoolCollege}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Name of your institution"
                />
              </div>

              <div>
                <label htmlFor="gradeYear" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                  <GraduationCap size={16} className="text-blue-600" />
                  Grade/Year of Study *
                </label>
                <input
                  type="text"
                  id="gradeYear"
                  name="gradeYear"
                  required
                  value={formData.gradeYear}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="e.g., Grade 11 or Year 2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="academicInterests" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <BookOpen size={16} className="text-blue-600" />
                Academic Interests *
              </label>
              <textarea
                id="academicInterests"
                name="academicInterests"
                required
                value={formData.academicInterests}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="What subjects or fields are you passionate about? (e.g., Computer Science, Biology, Creative Writing)"
              />
            </div>

            <div>
              <label htmlFor="achievementsSkills" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Award size={16} className="text-blue-600" />
                Achievements & Skills *
              </label>
              <textarea
                id="achievementsSkills"
                name="achievementsSkills"
                required
                value={formData.achievementsSkills}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Share your achievements, awards, competitions, leadership roles, extracurricular activities, and special skills"
              />
            </div>

            <div>
              <label htmlFor="resume" className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Upload size={16} className="text-blue-600" />
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
                  className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-dashed border-slate-300 px-4 py-6 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
                >
                  {resumeFile ? (
                    <>
                      <FileText size={20} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">{resumeFile.name}</span>
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

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                This information helps us understand your profile and guide you toward the right opportunities. Your data is secure and confidential, used only for Teacheristic's talent development initiatives.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-lg border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
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
    </div>
  );
};
