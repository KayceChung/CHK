import { useSessionStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';
import projectsData from '../data/projects';
import { useProjects, transformProjectForLanguage } from '../hooks/useSupabaseData';
import ProjectFilterSidebar from '../components/projects/ProjectFilterSidebar';
import ProjectList from '../components/projects/ProjectList';
import { useLanguage } from '../contexts/LanguageContext';

const FORCE_STATIC_IMAGE_SLUGS = new Set([
  'chung-tieu-dinh-portfolio',
  'constructtrack-construction-progress-platform',
]);

export default function Projects() {
  const { language } = useLanguage();
  const { projects: supabaseProjects } = useProjects();

  // Use sessionStorage to persist filters during the session
  const [activeTags, setActiveTags] = useSessionStorage<string[]>(
    STORAGE_KEYS.PROJECTS_FILTERS,
    []
  );

  const projects = (() => {
    if (!supabaseProjects.length) {
      return projectsData;
    }

    const mergedProjects = new Map(
      projectsData.map((project: any) => [project.slug, project])
    );

    supabaseProjects
      .map(transformProjectForLanguage)
      .forEach((project) => {
        const staticProject = mergedProjects.get(project.slug);

        if (FORCE_STATIC_IMAGE_SLUGS.has(project.slug) && staticProject?.image) {
          mergedProjects.set(project.slug, {
            ...project,
            image: staticProject.image,
            gallery: staticProject.gallery ?? (project as any).gallery,
          });
          return;
        }

        mergedProjects.set(project.slug, project);
      });

    return Array.from(mergedProjects.values());
  })();
  
  const allTags = Array.from(new Set(projects.flatMap((p: any) => p.tags)));
  const filtered = activeTags.length
    ? projects.filter((p: any) => activeTags.every(tag => p.tags.includes(tag)))
    : projects;

  const ui = {
    en: {
      title: 'Featured Case Studies',
      subtitle: 'A curated selection of systems I designed and shipped, from operations workflow tools to full product platforms.',
      count: `${filtered.length} project${filtered.length !== 1 ? 's' : ''} found`,
      clear: 'Clear filters',
    },
    vi: {
      title: 'Dự Án Nổi Bật',
      subtitle: 'Tuyển chọn các hệ thống tôi đã thiết kế và triển khai, từ công cụ vận hành đến nền tảng sản phẩm hoàn chỉnh.',
      count: `Tìm thấy ${filtered.length} dự án`,
      clear: 'Xóa bộ lọc',
    },
    zh: {
      title: '精选项目案例',
      subtitle: '展示我已设计并交付的代表性系统，从运营流程工具到完整产品平台。',
      count: `共 ${filtered.length} 个项目`,
      clear: '清除筛选',
    },
  }[language as 'en' | 'vi' | 'zh'];

  return (
    <div className="flex pt-24 min-h-[70vh] bg-[linear-gradient(120deg,#f8fafc_0%,#f1f5f9_45%,#ecfeff_100%)]">
      <ProjectFilterSidebar
        tags={allTags}
        activeTags={activeTags}
        onChange={tag => {
          setActiveTags((prevTags: string[]) =>
            prevTags.includes(tag) 
              ? prevTags.filter((t: string) => t !== tag) 
              : [...prevTags, tag]
          );
        }}
      />
      <main className="flex-1 p-6 lg:p-10 xl:p-12">
        <section className="mb-8 rounded-3xl border border-slate-200 bg-white/85 backdrop-blur-sm p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">{ui.title}</h1>
          <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed">{ui.subtitle}</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
              {ui.count}
            </span>
            {activeTags.length > 0 && (
              <button
                type="button"
                onClick={() => setActiveTags([])}
                className="inline-flex items-center rounded-full bg-cyan-50 border border-cyan-200 px-3 py-1 text-sm font-semibold text-cyan-700 hover:bg-cyan-100 transition"
              >
                {ui.clear}
              </button>
            )}
          </div>
        </section>
        <ProjectList projects={filtered} />
      </main>
    </div>
  );
}
