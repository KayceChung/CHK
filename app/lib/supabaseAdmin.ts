// SUPABASE ADMIN UTILITIES
// Purpose: Helper functions for managing Supabase data
// Usage: Import these functions in admin components or scripts

import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type ProjectInsert = Database['public']['Tables']['projects']['Insert'];
type TranslationInsert = Database['public']['Tables']['translations']['Insert'];
type ExperienceInsert = Database['public']['Tables']['experiences']['Insert'];
type ServiceInsert = Database['public']['Tables']['services']['Insert'];
type TechSkillInsert = Database['public']['Tables']['tech_skills']['Insert'];

// =============================================
// PROJECTS MANAGEMENT
// =============================================

/**
 * Add a new project to Supabase
 */
export async function addProject(project: ProjectInsert) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Project added:', data.slug);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to add project:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Update an existing project
 */
export async function updateProject(slug: string, updates: Partial<ProjectInsert>) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('slug', slug)
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Project updated:', slug);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to update project:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Delete a project
 */
export async function deleteProject(slug: string) {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('slug', slug);

    if (error) throw error;

    console.log('✅ Project deleted:', slug);
    return { success: true };
  } catch (error: any) {
    console.error('❌ Failed to delete project:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Toggle project publish status
 */
export async function toggleProjectPublish(slug: string) {
  try {
    // First, get current status
    const { data: project, error: fetchError } = await supabase
      .from('projects')
      .select('is_published')
      .eq('slug', slug)
      .single();

    if (fetchError) throw fetchError;

    // Toggle status
    const { data, error } = await supabase
      .from('projects')
      .update({ is_published: !project.is_published })
      .eq('slug', slug)
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Project publish toggled:', slug, '→', data.is_published);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to toggle publish:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Reorder projects
 */
export async function reorderProjects(slugs: string[]) {
  try {
    const updates = slugs.map((slug, index) => 
      supabase
        .from('projects')
        .update({ order_index: index })
        .eq('slug', slug)
    );

    await Promise.all(updates);

    console.log('✅ Projects reordered');
    return { success: true };
  } catch (error: any) {
    console.error('❌ Failed to reorder projects:', error.message);
    return { success: false, error: error.message };
  }
}

// =============================================
// TRANSLATIONS MANAGEMENT
// =============================================

/**
 * Add or update a translation
 */
export async function upsertTranslation(translation: TranslationInsert) {
  try {
    const { data, error } = await supabase
      .from('translations')
      .upsert([translation], { onConflict: 'key' })
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Translation saved:', translation.key);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to save translation:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Bulk import translations
 */
export async function bulkImportTranslations(translations: TranslationInsert[]) {
  try {
    const { data, error } = await supabase
      .from('translations')
      .upsert(translations, { onConflict: 'key' })
      .select();

    if (error) throw error;

    console.log(`✅ ${translations.length} translations imported`);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to import translations:', error.message);
    return { success: false, error: error.message };
  }
}

// =============================================
// EXPERIENCES MANAGEMENT
// =============================================

/**
 * Add new experience
 */
export async function addExperience(experience: ExperienceInsert) {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .insert([experience])
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Experience added:', experience.company);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to add experience:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Update experience
 */
export async function updateExperience(id: string, updates: Partial<ExperienceInsert>) {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Experience updated:', id);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to update experience:', error.message);
    return { success: false, error: error.message };
  }
}

// =============================================
// SERVICES MANAGEMENT
// =============================================

/**
 * Add new service
 */
export async function addService(service: ServiceInsert) {
  try {
    const { data, error } = await supabase
      .from('services')
      .insert([service])
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Service added:', service.title_en);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to add service:', error.message);
    return { success: false, error: error.message };
  }
}

// =============================================
// TECH SKILLS MANAGEMENT
// =============================================

/**
 * Add new tech skill
 */
export async function addTechSkill(skill: TechSkillInsert) {
  try {
    const { data, error } = await supabase
      .from('tech_skills')
      .insert([skill])
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Tech skill added:', skill.name);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to add tech skill:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Update tech skill proficiency
 */
export async function updateSkillProficiency(id: string, proficiency: number) {
  try {
    const { data, error } = await supabase
      .from('tech_skills')
      .update({ proficiency })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Skill proficiency updated:', id, '→', proficiency);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to update proficiency:', error.message);
    return { success: false, error: error.message };
  }
}

// =============================================
// CONTACT SUBMISSIONS MANAGEMENT
// =============================================

/**
 * Get all contact submissions (newest first)
 */
export async function getContactSubmissions(status?: 'new' | 'read' | 'replied') {
  try {
    let query = supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) throw error;

    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to get submissions:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Update submission status
 */
export async function updateSubmissionStatus(
  id: string,
  status: 'new' | 'read' | 'replied'
) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Submission status updated:', id, '→', status);
    return { success: true, data };
  } catch (error: any) {
    console.error('❌ Failed to update status:', error.message);
    return { success: false, error: error.message };
  }
}

// =============================================
// BULK DATA OPERATIONS
// =============================================

/**
 * Export all data as JSON (for backup)
 */
export async function exportAllData() {
  try {
    const [projects, translations, experiences, services, skills, submissions] =
      await Promise.all([
        supabase.from('projects').select('*'),
        supabase.from('translations').select('*'),
        supabase.from('experiences').select('*'),
        supabase.from('services').select('*'),
        supabase.from('tech_skills').select('*'),
        supabase.from('contact_submissions').select('*'),
      ]);

    const backup = {
      timestamp: new Date().toISOString(),
      projects: projects.data,
      translations: translations.data,
      experiences: experiences.data,
      services: services.data,
      tech_skills: skills.data,
      contact_submissions: submissions.data,
    };

    // Download as JSON file
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `supabase-backup-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log('✅ Data exported successfully');
    return { success: true };
  } catch (error: any) {
    console.error('❌ Failed to export data:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Get database statistics
 */
export async function getDatabaseStats() {
  try {
    const [projects, translations, experiences, services, skills, submissions] =
      await Promise.all([
        supabase.from('projects').select('id', { count: 'exact', head: true }),
        supabase.from('translations').select('id', { count: 'exact', head: true }),
        supabase.from('experiences').select('id', { count: 'exact', head: true }),
        supabase.from('services').select('id', { count: 'exact', head: true }),
        supabase.from('tech_skills').select('id', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('id', { count: 'exact', head: true }),
      ]);

    const stats = {
      projects: projects.count || 0,
      translations: translations.count || 0,
      experiences: experiences.count || 0,
      services: services.count || 0,
      tech_skills: skills.count || 0,
      contact_submissions: submissions.count || 0,
    };

    console.log('📊 Database Statistics:', stats);
    return { success: true, data: stats };
  } catch (error: any) {
    console.error('❌ Failed to get stats:', error.message);
    return { success: false, error: error.message };
  }
}

// =============================================
// EXAMPLE USAGE IN CONSOLE
// =============================================

/**
 * Example: Run in browser console to test admin functions
 * 
 * 1. Open browser DevTools console
 * 2. Import functions:
 *    import * as admin from './lib/supabaseAdmin';
 * 
 * 3. Run commands:
 *    await admin.getDatabaseStats();
 *    await admin.exportAllData();
 *    await admin.toggleProjectPublish('project-slug');
 */
