import { useState, useEffect } from 'react';
import { useSessionStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';
import projectsData from '../data/projects';
import ProjectFilterSidebar from '../components/projects/ProjectFilterSidebar';
import ProjectList from '../components/projects/ProjectList';

export default function Projects() {
  // Use sessionStorage to persist filters during the session
  const [activeTags, setActiveTags] = useSessionStorage<string[]>(
    STORAGE_KEYS.PROJECTS_FILTERS,
    []
  );
  
  const allTags = Array.from(new Set(projectsData.flatMap((p: any) => p.tags)));
  const filtered = activeTags.length
    ? projectsData.filter((p: any) => activeTags.every(tag => p.tags.includes(tag)))
    : projectsData;

  return (
    <div className="flex pt-24 min-h-[70vh] bg-gradient-to-br from-slate-50 to-white">
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
      <main className="flex-1 p-12">
        <div className="mb-6 text-gray-500 text-lg font-medium">{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</div>
        <ProjectList projects={filtered} />
      </main>
    </div>
  );
}
