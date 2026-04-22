# SUPABASE QUICK REFERENCE - CHK PORTFOLIO

## 🚀 Bắt Đầu Nhanh (5 Phút)

### Bước 1: Lấy Supabase Key

1. Vào https://supabase.com/dashboard
2. Chọn project của bạn
3. **Settings** → **API** → Copy **anon/public key**

### Bước 2: Cấu Hình

Mở file `.env` và paste key:

```env
VITE_SUPABASE_URL=https://zuqwohycmkynlknobwuv.supabase.co
VITE_SUPABASE_ANON_KEY=paste_key_here
```

### Bước 3: Chạy Migrations

1. Vào **Supabase Dashboard** → **SQL Editor**
2. Copy toàn bộ `supabase/migrations/001_initial_schema.sql` → Paste → **Run**
3. Copy toàn bộ `supabase/migrations/002_seed_data.sql` → Paste → **Run**

### Bước 4: Verify

Vào **Table Editor** - phải thấy 6 tables với data

### Bước 5: Test

```bash
npm run dev
# Mở http://localhost:5173
# Check console không có lỗi
```

---

## 📊 Database Tables

| Table | Rows | Purpose |
|-------|------|---------|
| `projects` | 2 | Case study projects |
| `translations` | 50+ | UI text translations |
| `services` | 3 | Service offerings |
| `experiences` | 3 | Work experiences |
| `tech_skills` | 15 | Technical skills |
| `contact_submissions` | 0 | Contact form data |

---

## 🔧 Sử Dụng Hooks

### Fetch Projects

```tsx
import { useProjects } from '../hooks/useSupabaseData';

function Projects() {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
```

### Fetch Single Project

```tsx
import { useProject } from '../hooks/useSupabaseData';

function ProjectDetail({ slug }: { slug: string }) {
  const { project, loading, error } = useProject(slug);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Not found</div>;

  return <div>{project.title_en}</div>;
}
```

### Submit Contact Form

```tsx
import { submitContactForm } from '../hooks/useSupabaseData';
import { toast } from 'sonner';

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

---

## 🛠️ Admin Functions (Browser Console)

### Get Database Stats

```js
import * as admin from './lib/supabaseAdmin';
await admin.getDatabaseStats();
// Returns: { projects: 2, translations: 50, ... }
```

### Export Backup

```js
await admin.exportAllData();
// Downloads JSON file with all data
```

### Add New Project

```js
await admin.addProject({
  slug: 'new-project',
  image: 'https://example.com/image.jpg',
  tags: ['Tag1', 'Tag2'],
  title_en: 'English Title',
  title_vi: 'Tiêu Đề',
  title_zh: '中文标题',
  context_en: 'Context...',
  context_vi: 'Bối cảnh...',
  context_zh: '背景...',
  problem_en: 'Problem...',
  problem_vi: 'Vấn đề...',
  problem_zh: '问题...',
  solution_en: 'Solution...',
  solution_vi: 'Giải pháp...',
  solution_zh: '解决方案...',
  result_en: 'Result...',
  result_vi: 'Kết quả...',
  result_zh: '结果...',
  cta_en: 'CTA...',
  cta_vi: 'Hành động...',
  cta_zh: '行动号召...',
  order_index: 3,
  is_published: true,
});
```

### Toggle Project Publish

```js
await admin.toggleProjectPublish('project-slug');
// Toggles is_published true ↔ false
```

### Get Contact Submissions

```js
const { data } = await admin.getContactSubmissions('new');
// Get all 'new' submissions
```

---

## 📝 Transform Data for Frontend

Projects từ Supabase có format khác với code hiện tại. Cần transform:

```tsx
import { transformProjectForLanguage } from '../hooks/useSupabaseData';
import { useLanguage } from '../contexts/LanguageContext';

const { projects } = useProjects();
const { language } = useLanguage();

// Transform to match existing code structure
const transformedProjects = projects.map(p => 
  transformProjectForLanguage(p, language)
);

// Now use transformedProjects in components
// Format matches existing projects.ts structure
```

---

## 🚨 Troubleshooting

### "Failed to load projects"

1. Check `.env` có `VITE_SUPABASE_ANON_KEY`
2. Restart dev server: `npm run dev`
3. Check Supabase Dashboard → Table Editor có data
4. Check browser console error details

### "VITE_SUPABASE_ANON_KEY not set" warning

1. Copy anon key từ Supabase Dashboard
2. Paste vào `.env` file
3. Restart dev server

### Empty/no data

1. Run migrations: `001_initial_schema.sql`
2. Run seed data: `002_seed_data.sql`
3. Verify trong Table Editor

---

## 📚 Files Reference

| File | Purpose |
|------|---------|
| `SUPABASE_GUIDE.md` | Full documentation (4,000+ lines) |
| `SUPABASE_INTEGRATION_COMPLETE.md` | Completion report |
| `app/lib/supabase.ts` | Supabase client |
| `app/lib/database.types.ts` | TypeScript types |
| `app/hooks/useSupabaseData.ts` | Data hooks |
| `app/lib/supabaseAdmin.ts` | Admin functions |
| `supabase/migrations/*.sql` | Database setup |
| `.env` | Environment variables |

---

## 🔒 Security Notes

- ✅ Public có thể: Đọc published data, submit contact form
- ❌ Public KHÔNG thể: Edit/delete data, view submissions
- 🔐 Admin cần: Authentication (chưa setup)

---

## ✅ Checklist

### Setup
- [ ] Get Supabase anon key
- [ ] Add to `.env` file
- [ ] Run `001_initial_schema.sql`
- [ ] Run `002_seed_data.sql`
- [ ] Verify tables có data

### Component Migration
- [ ] Update `Projects.tsx` → Use `useProjects()`
- [ ] Update `ProjectDetail.tsx` → Use `useProject(slug)`
- [ ] Update `Contact.tsx` → Use `submitContactForm()`
- [ ] Update `Services.tsx` → Use `useServices()`
- [ ] Update `Experience.tsx` → Use `useExperiences()`
- [ ] Update `TechStack.tsx` → Use `useTechSkills()`

### Testing
- [ ] All pages load
- [ ] Projects filter works
- [ ] Language switching works
- [ ] Contact form submits
- [ ] No console errors

### Deployment
- [ ] Add env vars to production
- [ ] Build: `npm run build`
- [ ] Deploy: `npm run deploy`
- [ ] Test live site

---

**Quick Help**: Read `SUPABASE_GUIDE.md` for detailed instructions

**Database URL**: https://zuqwohycmkynlknobwuv.supabase.co

**Status**: ✅ Infrastructure complete, ready for component migration
