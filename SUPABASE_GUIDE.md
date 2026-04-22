# SUPABASE INTEGRATION GUIDE - CHK PORTFOLIO

## 📋 Tổng Quan

Website portfolio của Chung Hiến Khang đã được chuyển đổi từ static data (hardcoded) sang dynamic data với **Supabase** - một PostgreSQL database platform hiện đại.

**Lợi ích của việc sử dụng Supabase:**
- ✅ **Quản lý dữ liệu dễ dàng**: Thay đổi content không cần deploy lại website
- ✅ **Real-time updates**: Data thay đổi ngay lập tức trên website
- ✅ **Scalability**: Dễ dàng mở rộng khi có thêm projects, experiences
- ✅ **Admin Dashboard**: Có thể xây dựng admin panel để manage content
- ✅ **Contact Form**: Lưu trữ submissions vào database
- ✅ **Type Safety**: TypeScript types cho tất cả database operations
- ✅ **Row Level Security**: Bảo mật data với RLS policies

---

## 🚀 Quick Start

### Bước 1: Lấy Supabase API Keys

1. Truy cập Supabase Dashboard: https://supabase.com/dashboard
2. Chọn project của bạn hoặc tạo mới
3. Vào **Settings** → **API**
4. Copy 2 values:
   - **Project URL**: `https://zuqwohycmkynlknobwuv.supabase.co`
   - **anon/public key**: (Key dài, bắt đầu với `eyJ...`)

### Bước 2: Cấu Hình Environment Variables

1. Mở file `.env` trong root directory
2. Thay thế `VITE_SUPABASE_ANON_KEY` bằng key thực của bạn:

```env
VITE_SUPABASE_URL=https://zuqwohycmkynlknobwuv.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your_actual_key_here
```

⚠️ **Quan trọng**: Không commit file `.env` lên Git!

### Bước 3: Chạy Database Migrations

#### Option A: Sử dụng Supabase SQL Editor (Recommended)

1. Vào **Supabase Dashboard** → **SQL Editor**
2. Tạo **New Query**
3. Copy toàn bộ nội dung file `supabase/migrations/001_initial_schema.sql`
4. Paste vào SQL Editor và click **Run**
5. Chờ hoàn tất (sẽ thấy success message)
6. Lặp lại với file `supabase/migrations/002_seed_data.sql`

#### Option B: Sử dụng Supabase CLI (Advanced)

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref zuqwohycmkynlknobwuv

# Run migrations
supabase db push
```

### Bước 4: Verify Database Setup

1. Vào **Supabase Dashboard** → **Table Editor**
2. Kiểm tra các tables đã được tạo:
   - ✅ `projects` (2 rows)
   - ✅ `translations` (50+ rows)
   - ✅ `services` (3 rows)
   - ✅ `experiences` (3 rows)
   - ✅ `tech_skills` (15 rows)
   - ✅ `contact_submissions` (0 rows)

### Bước 5: Test Kết Nối

```bash
# Start dev server
npm run dev

# Mở browser: http://localhost:5173
# Check console - không có lỗi Supabase
```

---

## 📊 Database Schema

### Tables Overview

| Table | Purpose | Row Count | Updated Via |
|-------|---------|-----------|-------------|
| **projects** | Case study projects | 2+ | Admin/Manual |
| **translations** | UI text translations | 50+ | Admin/Manual |
| **services** | Service offerings | 3 | Admin/Manual |
| **experiences** | Work experiences | 3+ | Admin/Manual |
| **tech_skills** | Technical skills | 15+ | Admin/Manual |
| **contact_submissions** | Contact form data | Dynamic | Auto (form) |

### Table: projects

**Purpose**: Lưu trữ tất cả project case studies với multi-language support

**Columns**:
- `id` (UUID): Primary key
- `slug` (TEXT): URL-friendly identifier (e.g., "real-time-data-collection-system")
- `image` (TEXT): Image URL
- `tags` (TEXT[]): Array of tags for filtering
- `title_en/vi/zh` (TEXT): Project title in 3 languages
- `context_en/vi/zh` (TEXT): Background context
- `problem_en/vi/zh` (TEXT): Problem statement
- `solution_en/vi/zh` (TEXT): Solution approach
- `result_en/vi/zh` (TEXT): Results and outcomes
- `cta_en/vi/zh` (TEXT): Call-to-action text
- `order_index` (INTEGER): Display order (lower = first)
- `is_published` (BOOLEAN): Publish status
- `created_at`, `updated_at` (TIMESTAMP): Auto-managed

**Example Query**:
```sql
-- Get all published projects
SELECT * FROM projects 
WHERE is_published = true 
ORDER BY order_index ASC;

-- Get project by slug
SELECT * FROM projects 
WHERE slug = 'real-time-data-collection-system' 
AND is_published = true;
```

### Table: translations

**Purpose**: Lưu trữ tất cả text translations cho UI (nav, hero, about, etc.)

**Columns**:
- `id` (UUID): Primary key
- `key` (TEXT): Translation key (e.g., "hero.title")
- `value_en/vi/zh` (TEXT): Translation values
- `category` (TEXT): Group (nav, hero, about, services, etc.)
- `created_at`, `updated_at` (TIMESTAMP)

**Example Query**:
```sql
-- Get all nav translations
SELECT * FROM translations WHERE category = 'nav';

-- Get specific translation
SELECT * FROM translations WHERE key = 'hero.title';
```

### Table: services

**Purpose**: Lưu trữ các service offerings với multi-language support

**Columns**:
- `id` (UUID): Primary key
- `icon` (TEXT): Lucide icon name (e.g., "Languages", "ShoppingCart")
- `title_en/vi/zh` (TEXT): Service title
- `description_en/vi/zh` (TEXT): Service description
- `features_en/vi/zh` (TEXT[]): Array of feature bullets
- `order_index` (INTEGER): Display order
- `created_at`, `updated_at` (TIMESTAMP)

### Table: experiences

**Purpose**: Lưu trữ work experiences

**Columns**:
- `id` (UUID): Primary key
- `company` (TEXT): Company name
- `position_en/vi/zh` (TEXT): Job title
- `description_en/vi/zh` (TEXT): Job description
- `start_date`, `end_date` (DATE): Employment period
- `is_current` (BOOLEAN): Currently working here
- `order_index` (INTEGER): Display order
- `created_at`, `updated_at` (TIMESTAMP)

### Table: tech_skills

**Purpose**: Lưu trữ technical skills và proficiency levels

**Columns**:
- `id` (UUID): Primary key
- `name` (TEXT): Skill name
- `category` (TEXT): Category (technical, tools, soft, languages)
- `proficiency` (INTEGER): 0-100 percentage
- `order_index` (INTEGER): Display order within category
- `created_at`, `updated_at` (TIMESTAMP)

### Table: contact_submissions

**Purpose**: Lưu trữ contact form submissions

**Columns**:
- `id` (UUID): Primary key
- `name` (TEXT): Sender name
- `email` (TEXT): Sender email
- `message` (TEXT): Message content
- `status` (TEXT): 'new' | 'read' | 'replied'
- `created_at`, `updated_at` (TIMESTAMP)

---

## 🔧 API Usage

### React Hooks

Tất cả data fetching được wrap trong custom hooks tại `app/hooks/useSupabaseData.ts`:

#### 1. useProjects()

Fetch all published projects:

```tsx
import { useProjects } from '../hooks/useSupabaseData';

function ProjectsPage() {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

#### 2. useProject(slug)

Fetch single project by slug:

```tsx
import { useProject } from '../hooks/useSupabaseData';

function ProjectDetail({ slug }: { slug: string }) {
  const { project, loading, error } = useProject(slug);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Project not found</div>;

  return <div>{project.title_en}</div>;
}
```

#### 3. useTranslations()

Fetch all translations:

```tsx
import { useTranslations, buildTranslationMap } from '../hooks/useSupabaseData';

function App() {
  const { translations, loading } = useTranslations();
  const translationMap = buildTranslationMap(translations);

  // Use translations
  const title = translationMap['hero.title']?.en;
}
```

#### 4. useExperiences()

```tsx
const { experiences, loading, error } = useExperiences();
```

#### 5. useServices()

```tsx
const { services, loading, error } = useServices();
```

#### 6. useTechSkills()

```tsx
const { skills, loading, error } = useTechSkills();
```

#### 7. submitContactForm()

Submit contact form:

```tsx
import { submitContactForm } from '../hooks/useSupabaseData';

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const result = await submitContactForm({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  });

  if (result.success) {
    toast.success('Message sent!');
  } else {
    toast.error(result.error);
  }
}
```

### Direct Supabase Client Usage

Nếu cần query phức tạp hơn:

```tsx
import { supabase } from '../lib/supabase';

// Fetch with filters
const { data, error } = await supabase
  .from('projects')
  .select('*')
  .in('tags', ['AppSheet', 'SQL'])
  .order('created_at', { ascending: false })
  .limit(5);

// Insert new row
const { data, error } = await supabase
  .from('projects')
  .insert([{ slug: 'new-project', title_en: 'New Project', ... }]);

// Update row
const { data, error } = await supabase
  .from('projects')
  .update({ is_published: false })
  .eq('slug', 'old-project');

// Delete row
const { data, error } = await supabase
  .from('projects')
  .delete()
  .eq('id', 'project-id');
```

---

## 🔄 Migrating Components

### Example: Migrate Projects Component

**Before (Static Data)**:
```tsx
import { projects } from '../data/projects';

function Projects() {
  const [filtered, setFiltered] = useState(projects);
  
  return (
    <div>
      {filtered.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
```

**After (Supabase)**:
```tsx
import { useProjects, transformProjectForLanguage } from '../hooks/useSupabaseData';
import { useLanguage } from '../contexts/LanguageContext';

function Projects() {
  const { projects, loading, error } = useProjects();
  const { language } = useLanguage();
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    if (projects.length > 0) {
      // Transform to frontend format
      const transformed = projects.map(p => 
        transformProjectForLanguage(p, language)
      );
      setFiltered(transformed);
    }
  }, [projects, language]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      {filtered.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
```

### Example: Migrate Contact Form

**Before**:
```tsx
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  // No backend, just console.log
  console.log('Form submitted:', formData);
}
```

**After**:
```tsx
import { submitContactForm } from '../hooks/useSupabaseData';
import { toast } from 'sonner';

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setIsSubmitting(true);

  const result = await submitContactForm({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  });

  setIsSubmitting(false);

  if (result.success) {
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } else {
    toast.error(result.error || 'Failed to send message');
  }
}
```

---

## 🛡️ Security (Row Level Security)

Supabase sử dụng **Row Level Security (RLS)** để bảo vệ data:

### Public Access (Anonymous Users)

✅ **CAN**:
- View published projects (`is_published = true`)
- View all translations
- View all services, experiences, tech skills
- Submit contact forms

❌ **CANNOT**:
- View unpublished projects
- Edit any data
- Delete any data
- View contact submissions

### Authenticated Users (Admin)

✅ **CAN**:
- View ALL projects (including unpublished)
- Create, update, delete projects
- Manage translations
- Manage services, experiences, skills
- View and manage contact submissions

### RLS Policies

Các policies đã được setup trong migration file:

```sql
-- Public can view published projects
CREATE POLICY "Public can view published projects"
    ON public.projects FOR SELECT
    USING (is_published = true);

-- Authenticated users can manage all projects
CREATE POLICY "Authenticated users can manage projects"
    ON public.projects
    USING (auth.role() = 'authenticated');

-- Anyone can submit contact form
CREATE POLICY "Anyone can submit contact form"
    ON public.contact_submissions FOR INSERT
    WITH CHECK (true);
```

---

## 📝 Managing Data

### Option 1: Supabase Dashboard (Easy)

**Best for**: Quick edits, non-technical users

**Steps**:
1. Vào **Supabase Dashboard** → **Table Editor**
2. Click vào table (e.g., `projects`)
3. Click **Insert row** hoặc edit existing row
4. Fill in fields
5. Save

**Pros**: ✅ Easy, visual, no code  
**Cons**: ❌ Manual, can't batch edit

### Option 2: SQL Editor (Advanced)

**Best for**: Batch operations, complex queries

**Steps**:
1. Vào **Supabase Dashboard** → **SQL Editor**
2. Write SQL query:

```sql
-- Add new project
INSERT INTO projects (slug, image, tags, title_en, ...) VALUES
('new-project', 'image-url', ARRAY['tag1', 'tag2'], 'Title', ...);

-- Update existing project
UPDATE projects 
SET title_en = 'Updated Title' 
WHERE slug = 'project-slug';

-- Bulk update
UPDATE projects 
SET is_published = true 
WHERE order_index < 5;
```

3. Click **Run**

**Pros**: ✅ Powerful, batch operations  
**Cons**: ❌ Requires SQL knowledge

### Option 3: Admin Panel (Future)

**Status**: Not implemented yet  
**Plan**: Build React admin panel with forms to manage all data

**Features**:
- ✅ Visual forms for adding/editing projects
- ✅ Rich text editor for descriptions
- ✅ Image upload integration
- ✅ Translations management
- ✅ Contact submissions inbox

**Implementation**: See `ADMIN_PANEL_GUIDE.md` (to be created)

---

## 🔍 Troubleshooting

### Issue 1: "Failed to load projects"

**Possible causes**:
- ❌ Missing or invalid `VITE_SUPABASE_ANON_KEY` in `.env`
- ❌ Wrong Supabase URL
- ❌ Migrations not run
- ❌ RLS policies blocking access

**Solutions**:
1. Check `.env` file has correct values
2. Restart dev server after changing `.env`
3. Verify migrations ran successfully in Supabase Dashboard
4. Check browser console for detailed error

### Issue 2: "VITE_SUPABASE_ANON_KEY is not set" warning

**Solution**:
1. Copy your anon key from Supabase Dashboard → Settings → API
2. Paste into `.env` file:
   ```env
   VITE_SUPABASE_ANON_KEY=your_key_here
   ```
3. Restart dev server

### Issue 3: Empty data / No projects showing

**Possible causes**:
- ❌ Seed data not inserted
- ❌ Projects marked as `is_published = false`

**Solutions**:
1. Run `002_seed_data.sql` migration
2. Check `projects` table in Supabase Dashboard
3. Verify `is_published = true` for projects

### Issue 4: TypeScript errors with database types

**Solution**:
```bash
# Regenerate types from Supabase (if needed)
npx supabase gen types typescript --project-id zuqwohycmkynlknobwuv > app/lib/database.types.ts
```

### Issue 5: Contact form not submitting

**Possible causes**:
- ❌ RLS policy blocking inserts
- ❌ Missing required fields

**Solutions**:
1. Check `contact_submissions` table has insert policy
2. Verify all required fields (name, email, message) are provided
3. Check browser console for error details

---

## 🎯 Best Practices

### 1. Always Use Hooks

❌ **Don't**:
```tsx
const { data } = await supabase.from('projects').select('*');
```

✅ **Do**:
```tsx
const { projects, loading, error } = useProjects();
```

**Why**: Hooks handle loading states, errors, and re-renders automatically.

### 2. Handle Loading & Error States

❌ **Don't**:
```tsx
const { projects } = useProjects();
return <div>{projects.map(...)}</div>; // Crashes if empty
```

✅ **Do**:
```tsx
const { projects, loading, error } = useProjects();

if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
if (projects.length === 0) return <EmptyState />;

return <div>{projects.map(...)}</div>;
```

### 3. Use TypeScript Types

✅ **Do**:
```tsx
import type { Database } from '../lib/database.types';

type Project = Database['public']['Tables']['projects']['Row'];

function ProjectCard({ project }: { project: Project }) {
  // ...
}
```

### 4. Transform Data for Frontend

Supabase stores multi-language content in separate columns. Transform to match existing code structure:

```tsx
import { transformProjectForLanguage } from '../hooks/useSupabaseData';

const transformed = projects.map(p => transformProjectForLanguage(p, language));
```

### 5. Optimize Queries

❌ **Don't** fetch all data if only need some:
```tsx
const { data } = await supabase.from('projects').select('*');
```

✅ **Do** select specific columns:
```tsx
const { data } = await supabase
  .from('projects')
  .select('slug, title_en, image')
  .limit(3);
```

---

## 📚 Resources

### Official Docs
- **Supabase Documentation**: https://supabase.com/docs
- **Supabase JS Client**: https://supabase.com/docs/reference/javascript
- **Row Level Security**: https://supabase.com/docs/guides/auth/row-level-security

### Project Files
- **Supabase Client**: `app/lib/supabase.ts`
- **Database Types**: `app/lib/database.types.ts`
- **Data Hooks**: `app/hooks/useSupabaseData.ts`
- **Migrations**: `supabase/migrations/*.sql`

### Community
- **Supabase Discord**: https://discord.supabase.com
- **GitHub Issues**: Report bugs specific to this project

---

## 🚀 Next Steps

After completing basic setup:

1. ✅ **Test all pages**: Verify data loads correctly
2. ✅ **Migrate components**: Update remaining components to use Supabase
3. ✅ **Add more data**: Add your real projects, experiences
4. ⏳ **Build admin panel**: Create UI for managing data
5. ⏳ **Set up authentication**: Protect admin operations
6. ⏳ **Add real-time updates**: Subscribe to data changes
7. ⏳ **Implement caching**: Use React Query for better performance

---

**Last Updated**: April 22, 2026  
**Status**: ✅ Ready to use  
**Database URL**: https://zuqwohycmkynlknobwuv.supabase.co
