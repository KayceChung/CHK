import { useState, useEffect } from 'react';
import { supabase, handleSupabaseError, handleSupabaseSuccess } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Project = Database['public']['Tables']['projects']['Row'];
type Translation = Database['public']['Tables']['translations']['Row'];
type Experience = Database['public']['Tables']['experiences']['Row'];
type Service = Database['public']['Tables']['services']['Row'];
type TechSkill = Database['public']['Tables']['tech_skills']['Row'];
type ContactSubmission = Database['public']['Tables']['contact_submissions']['Insert'];

// =============================================
// HOOK: useProjects
// Purpose: Fetch all published projects
// =============================================

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error: fetchError } = await supabase
          .from('projects')
          .select('*')
          .eq('is_published', true)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setProjects(data || []);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching projects:', err);
        setError(err.message || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}

// =============================================
// HOOK: useProject
// Purpose: Fetch a single project by slug
// =============================================

export function useProject(slug: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data, error: fetchError } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();

        if (fetchError) throw fetchError;

        setProject(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching project:', err);
        setError(err.message || 'Failed to load project');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  return { project, loading, error };
}

// =============================================
// HOOK: useTranslations
// Purpose: Fetch all translations
// =============================================

export function useTranslations() {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTranslations() {
      try {
        const { data, error: fetchError } = await supabase
          .from('translations')
          .select('*');

        if (fetchError) throw fetchError;

        setTranslations(data || []);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching translations:', err);
        setError(err.message || 'Failed to load translations');
      } finally {
        setLoading(false);
      }
    }

    fetchTranslations();
  }, []);

  return { translations, loading, error };
}

// =============================================
// HOOK: useExperiences
// Purpose: Fetch all experiences
// =============================================

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const { data, error: fetchError } = await supabase
          .from('experiences')
          .select('*')
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setExperiences(data || []);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching experiences:', err);
        setError(err.message || 'Failed to load experiences');
      } finally {
        setLoading(false);
      }
    }

    fetchExperiences();
  }, []);

  return { experiences, loading, error };
}

// =============================================
// HOOK: useServices
// Purpose: Fetch all services
// =============================================

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const { data, error: fetchError } = await supabase
          .from('services')
          .select('*')
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setServices(data || []);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching services:', err);
        setError(err.message || 'Failed to load services');
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, loading, error };
}

// =============================================
// HOOK: useTechSkills
// Purpose: Fetch all tech skills
// =============================================

export function useTechSkills() {
  const [skills, setSkills] = useState<TechSkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error: fetchError } = await supabase
          .from('tech_skills')
          .select('*')
          .order('category, order_index', { ascending: true });

        if (fetchError) throw fetchError;

        setSkills(data || []);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching tech skills:', err);
        setError(err.message || 'Failed to load tech skills');
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  return { skills, loading, error };
}

// =============================================
// FUNCTION: submitContactForm
// Purpose: Submit contact form to Supabase
// =============================================

export async function submitContactForm(data: ContactSubmission) {
  try {
    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert([data]);

    if (insertError) throw insertError;

    return handleSupabaseSuccess({ message: 'Contact form submitted successfully!' });
  } catch (err: any) {
    return handleSupabaseError(err, 'Contact form submission');
  }
}

// =============================================
// UTILITY: Transform project data for frontend
// Purpose: Convert database row to frontend format
// =============================================

export function transformProjectForLanguage(project: Project, language: 'en' | 'vi' | 'zh') {
  return {
    slug: project.slug,
    image: project.image,
    tags: project.tags,
    content: {
      en: {
        title: project.title_en,
        context: project.context_en,
        problem: project.problem_en,
        solution: project.solution_en,
        result: project.result_en,
        cta: project.cta_en,
      },
      vi: {
        title: project.title_vi,
        context: project.context_vi,
        problem: project.problem_vi,
        solution: project.solution_vi,
        result: project.result_vi,
        cta: project.cta_vi,
      },
      zh: {
        title: project.title_zh,
        context: project.context_zh,
        problem: project.problem_zh,
        solution: project.solution_zh,
        result: project.result_zh,
        cta: project.cta_zh,
      },
    },
  };
}

// =============================================
// UTILITY: Build translation map
// Purpose: Convert translations array to key-value map
// =============================================

export function buildTranslationMap(translations: Translation[]) {
  const map: Record<string, { en: string; vi: string; zh: string }> = {};

  translations.forEach((t) => {
    map[t.key] = {
      en: t.value_en,
      vi: t.value_vi,
      zh: t.value_zh,
    };
  });

  return map;
}
