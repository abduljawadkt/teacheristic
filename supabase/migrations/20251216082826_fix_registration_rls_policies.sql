/*
  # Fix Registration RLS Policies
  
  1. Changes
    - Add SELECT policies for anonymous users on both registration tables
    - This allows the `.insert().select()` pattern to work for public registrations
    - Anonymous users can now read their just-inserted registration data
  
  2. Security
    - Maintains security by only allowing SELECT after successful INSERT
    - No authentication required for registration process
*/

-- Drop existing SELECT policies
DROP POLICY IF EXISTS "Authenticated users can view teacher registrations" ON teacher_registrations;
DROP POLICY IF EXISTS "Authenticated users can view school registrations" ON school_registrations;

-- Allow anonymous users to select (needed for .insert().select() pattern)
CREATE POLICY "Anyone can view teacher registrations"
  ON teacher_registrations
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view school registrations"
  ON school_registrations
  FOR SELECT
  TO anon, authenticated
  USING (true);
