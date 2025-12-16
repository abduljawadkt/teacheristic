import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TeacherRegistration {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  qualification: string;
  experience_years: number;
  subjects: string[];
  preferred_location?: string;
  currently_employed: boolean;
  interested_in_gcc: boolean;
  resume_url?: string;
  created_at?: string;
}

export interface SchoolRegistration {
  id?: string;
  school_name: string;
  school_type: string;
  contact_person: string;
  email: string;
  phone: string;
  location: string;
  city: string;
  state: string;
  board?: string;
  total_students?: number;
  hiring_needs?: string;
  positions_needed: number;
  created_at?: string;
}

export const registerTeacher = async (data: TeacherRegistration) => {
  const { data: result, error } = await supabase
    .from('teacher_registrations')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
};

export const registerSchool = async (data: SchoolRegistration) => {
  const { data: result, error } = await supabase
    .from('school_registrations')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
};
