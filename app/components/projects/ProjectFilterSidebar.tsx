import React from 'react';

interface Props {
  tags: string[];
  activeTags: string[];
  onChange: (tag: string) => void;
}

export default function ProjectFilterSidebar({ tags, activeTags, onChange }: Props) {
  return (
    <aside
      className="w-64 min-w-[220px] max-w-[300px] p-5 bg-slate-50 border border-slate-200 rounded-xl shadow-sm mr-8 flex flex-col gap-3 sticky top-24 h-fit"
      style={{ zIndex: 10 }}
    >
      <div>
        <h2 className="text-base font-bold text-slate-900 mb-1 tracking-tight">Filter by Solution / Technology</h2>
        <p className="text-xs text-slate-500 mb-3">Select one or more technologies</p>
      </div>
      <div className="flex flex-col gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-all
              ${activeTags.includes(tag)
                ? 'bg-cyan-600 text-white border-cyan-600 shadow'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-cyan-50 hover:border-cyan-400'}`}
            style={{ minHeight: 32, minWidth: 0 }}
            onClick={() => onChange(tag)}
          >
            <span className={`inline-block w-4 h-4 rounded border flex-shrink-0
              ${activeTags.includes(tag) ? 'bg-white border-cyan-600 ring-2 ring-cyan-500' : 'bg-white border-slate-300'}`}
              style={{ boxShadow: activeTags.includes(tag) ? '0 0 0 2px #0891b2' : undefined }}
            />
            {tag}
          </button>
        ))}
      </div>
    </aside>
  );
}
