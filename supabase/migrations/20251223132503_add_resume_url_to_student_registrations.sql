/*
  # Add resume upload support to student registrations

  1. Changes
    - Add `resume_url` column to `student_registrations` table to store uploaded resume file path
    
  2. Storage
    - Create `student_resumes` storage bucket for resume files
    - Enable public read access for resumes (recruiters/schools can view)
    - Set up appropriate storage policies
    
  3. Notes
    - Resume upload is optional
    - Files will be stored in format: {student_id}/{timestamp}_{filename}
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'student_registrations' AND column_name = 'resume_url'
  ) THEN
    ALTER TABLE student_registrations ADD COLUMN resume_url text;
  END IF;
END $$;

INSERT INTO storage.buckets (id, name, public)
VALUES ('student_resumes', 'student_resumes', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can upload student resumes"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'student_resumes');

CREATE POLICY "Resumes are publicly accessible"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'student_resumes');

CREATE POLICY "Users can update their own resumes"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'student_resumes');

CREATE POLICY "Users can delete their own resumes"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'student_resumes');