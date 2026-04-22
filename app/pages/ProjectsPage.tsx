import React from "react";
import projectCtdImage from '../assets/project-ctd.png';
import projectRachelImage from '../assets/project-rachel.png';

export default function ProjectsPage() {
  // Dữ liệu mẫu dự án
  const projects = [
    {
      id: 1,
      title: "CTD Resume Platform",
      description: "Nền tảng tạo CV hiện đại, giúp ứng viên xây dựng hồ sơ chuyên nghiệp, xem trước trực tiếp và xuất PDF dễ dàng.",
      image: projectCtdImage,
      category: "Web Application",
      tags: ["React", "PDF Export", "UI/UX", "Resume Builder"],
      slug: "ctd-resume-platform"
    },
    {
      id: 2,
      title: "Rachel Nguyen Resume Site",
      description: "Personal branding website for Rachel Nguyen, including portfolio, blog, and contact form.",
      image: projectRachelImage,
      category: "Branding",
      tags: ["Next.js", "Portfolio", "Contact Form"],
      slug: "rachel-nguyen-resume"
    }
  ];

  // Lọc và filter
  const filters = ["React", "PDF Export", "UI/UX", "Resume Builder", "Next.js", "Portfolio", "Contact Form"];
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  
  const handleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  // Hiển thị tất cả dự án khi không chọn filter
  const filteredProjects =
    selectedFilters.length === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedFilters.includes(tag))
        );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="bg-white rounded-2xl shadow-md p-6 w-full md:w-64 min-w-[220px]">
          <h3 className="font-semibold mb-4">Lọc theo giải pháp / công nghệ</h3>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-150 ${
                  selectedFilters.includes(filter)
                    ? 'bg-blue-600 text-white border-blue-600 shadow'
                    : 'bg-gray-50 text-blue-600 border-blue-200 hover:bg-blue-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </aside>

        {/* Projects Grid */}
        <main className="flex-1">
          <p className="text-gray-600 mb-6">{filteredProjects.length} dự án</p>
          <div className="grid grid-cols-1 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-blue-100 shadow-lg overflow-hidden bg-white flex flex-col transition-all duration-200 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1"
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 rounded-lg px-3 py-1 text-xs font-semibold text-blue-700 shadow">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-bold text-xl mb-2 group-hover:text-blue-700 transition">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}