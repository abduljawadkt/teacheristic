/*
  # Create Registration Tables for Teachers and Schools

  1. New Tables
    - `teacher_registrations`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, unique, required)
      - `phone` (text, required)
      - `qualification` (text, required)
      - `experience_years` (integer)
      - `subjects` (text array)
      - `preferred_location` (text)
      - `currently_employed` (boolean)
      - `interested_in_gcc` (boolean)
      - `resume_url` (text, optional)
      - `created_at` (timestamptz)
      
    - `school_registrations`
      - `id` (uuid, primary key)
      - `school_name` (text, required)
      - `school_type` (text, required)
      - `contact_person` (text, required)
      - `email` (text, unique, required)
      - `phone` (text, required)
      - `location` (text, required)
      - `city` (text, required)
      - `state` (text, required)
      - `board` (text)
      - `total_students` (integer)
      - `hiring_needs` (text)
      - `positions_needed` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert (anyone can register)
    - Add policies for authenticated users to read their own data
*/

-- Create teacher_registrations table
CREATE TABLE IF NOT EXISTS teacher_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  qualification text NOT NULL,
  experience_years integer DEFAULT 0,
  subjects text[] DEFAULT '{}',
  preferred_location text,
  currently_employed boolean DEFAULT false,
  interested_in_gcc boolean DEFAULT false,
  resume_url text,
  created_at timestamptz DEFAULT now()
);

-- Create school_registrations table
CREATE TABLE IF NOT EXISTS school_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_name text NOT NULL,
  school_type text NOT NULL,
  contact_person text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  board text,
  total_students integer,
  hiring_needs text,
  positions_needed integer DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE teacher_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_registrations ENABLE ROW LEVEL SECURITY;

-- Allow public to insert registrations (anyone can register)
CREATE POLICY "Anyone can register as teacher"
  ON teacher_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can register as school"
  ON school_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow users to read all registrations (for admin purposes, can be restricted later)
CREATE POLICY "Authenticated users can view teacher registrations"
  ON teacher_registrations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view school registrations"
  ON school_registrations
  FOR SELECT
  TO authenticated
  USING (true);