/*
  # Create student registrations table

  1. New Tables
    - `student_registrations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users, nullable for non-authenticated registrations)
      - `full_name` (text, required)
      - `email` (text, required, unique)
      - `phone` (text, required)
      - `location` (text, required)
      - `school_college` (text, required)
      - `grade_year` (text, required)
      - `academic_interests` (text, required)
      - `achievements_skills` (text, required)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
  2. Security
    - Enable RLS on `student_registrations` table
    - Add policy for public insert (anyone can register)
    - Add policy for users to read their own data
*/

CREATE TABLE IF NOT EXISTS student_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text NOT NULL,
  location text NOT NULL,
  school_college text NOT NULL,
  grade_year text NOT NULL,
  academic_interests text NOT NULL,
  achievements_skills text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register as a student"
  ON student_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read their own student registration"
  ON student_registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own student registration"
  ON student_registrations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
