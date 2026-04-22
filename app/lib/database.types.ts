export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          slug: string
          image: string
          tags: string[]
          title_en: string
          title_vi: string
          title_zh: string
          context_en: string
          context_vi: string
          context_zh: string
          problem_en: string
          problem_vi: string
          problem_zh: string
          solution_en: string
          solution_vi: string
          solution_zh: string
          result_en: string
          result_vi: string
          result_zh: string
          cta_en: string
          cta_vi: string
          cta_zh: string
          order_index: number
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          image: string
          tags: string[]
          title_en: string
          title_vi: string
          title_zh: string
          context_en: string
          context_vi: string
          context_zh: string
          problem_en: string
          problem_vi: string
          problem_zh: string
          solution_en: string
          solution_vi: string
          solution_zh: string
          result_en: string
          result_vi: string
          result_zh: string
          cta_en: string
          cta_vi: string
          cta_zh: string
          order_index?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          image?: string
          tags?: string[]
          title_en?: string
          title_vi?: string
          title_zh?: string
          context_en?: string
          context_vi?: string
          context_zh?: string
          problem_en?: string
          problem_vi?: string
          problem_zh?: string
          solution_en?: string
          solution_vi?: string
          solution_zh?: string
          result_en?: string
          result_vi?: string
          result_zh?: string
          cta_en?: string
          cta_vi?: string
          cta_zh?: string
          order_index?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      translations: {
        Row: {
          id: string
          key: string
          value_en: string
          value_vi: string
          value_zh: string
          category: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value_en: string
          value_vi: string
          value_zh: string
          category: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value_en?: string
          value_vi?: string
          value_zh?: string
          category?: string
          created_at?: string
          updated_at?: string
        }
      }
      experiences: {
        Row: {
          id: string
          company: string
          position_en: string
          position_vi: string
          position_zh: string
          description_en: string
          description_vi: string
          description_zh: string
          start_date: string
          end_date: string | null
          is_current: boolean
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company: string
          position_en: string
          position_vi: string
          position_zh: string
          description_en: string
          description_vi: string
          description_zh: string
          start_date: string
          end_date?: string | null
          is_current?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company?: string
          position_en?: string
          position_vi?: string
          position_zh?: string
          description_en?: string
          description_vi?: string
          description_zh?: string
          start_date?: string
          end_date?: string | null
          is_current?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          icon: string
          title_en: string
          title_vi: string
          title_zh: string
          description_en: string
          description_vi: string
          description_zh: string
          features_en: string[]
          features_vi: string[]
          features_zh: string[]
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          icon: string
          title_en: string
          title_vi: string
          title_zh: string
          description_en: string
          description_vi: string
          description_zh: string
          features_en: string[]
          features_vi: string[]
          features_zh: string[]
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          icon?: string
          title_en?: string
          title_vi?: string
          title_zh?: string
          description_en?: string
          description_vi?: string
          description_zh?: string
          features_en?: string[]
          features_vi?: string[]
          features_zh?: string[]
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      tech_skills: {
        Row: {
          id: string
          name: string
          category: string
          proficiency: number
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          proficiency: number
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          proficiency?: number
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          status: 'new' | 'read' | 'replied'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          status?: 'new' | 'read' | 'replied'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          status?: 'new' | 'read' | 'replied'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
