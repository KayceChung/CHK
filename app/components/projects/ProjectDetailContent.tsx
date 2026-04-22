import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ExternalLink, Info, AlertCircle, Lightbulb, TrendingUp, Target, Users, Award } from 'lucide-react';

export default function ProjectDetailContent({ project }: { project: any }) {
  const { language } = useLanguage();
  const content = project.content[language as keyof typeof project.content];

  // Parse content into structured format with better grouping
  const parseContent = (text: string) => {
    const sections = text.split('\n\n'); // Split by double newline
    const structured: Array<{ type: string; content: string | string[] }> = [];

    for (const section of sections) {
      const lines = section.split('\n').map(l => l.trim()).filter(l => l);
      
      // Check if this section has bullets
      const bullets = lines.filter(l => l.startsWith('•'));
      const nonBullets = lines.filter(l => !l.startsWith('•'));
      
      // Add non-bullet lines as paragraphs
      nonBullets.forEach(line => {
        if (line) {
          structured.push({ type: 'paragraph', content: line });
        }
      });
      
      // Add bullets as a group
      if (bullets.length > 0) {
        structured.push({ 
          type: 'bullets', 
          content: bullets.map(b => b.substring(1).trim()) 
        });
      }
    }
    
    return structured;
  };

  // Extract key metrics from result text
  const extractMetrics = (text: string): Array<{ label: string; value: string; icon: any }> => {
    const metrics: Array<{ label: string; value: string; icon: any }> = [];
    const percentMatch = text.match(/\+?(\d+)%/g);
    if (percentMatch) {
      percentMatch.forEach((match, idx) => {
        const number = match.replace('+', '');
        if (idx === 0) metrics.push({ label: language === 'en' ? 'Clients' : language === 'vi' ? 'Khách hàng' : '客户', value: number, icon: Users });
        if (idx === 1) metrics.push({ label: language === 'en' ? 'Conversion' : language === 'vi' ? 'Chuyển đổi' : '转化率', value: number, icon: Target });
      });
    }
    return metrics;
  };

  const metrics = extractMetrics(content.result);
  const liveUrl = content.result.match(/https?:\/\/[^\s]+/)?.[0];
  const liveLabelRegex = /(?:View live|Xem trực tiếp|在线查看)\s*:\s*https?:\/\/[^\s]+/gi;
  const cleanedResult = content.result.replace(liveLabelRegex, '').trim();

  const handleOpenLive = () => {
    if (!liveUrl) return;

    const message =
      language === 'vi'
        ? 'Bạn sắp rời portfolio để mở ứng dụng live. Tiếp tục?'
        : language === 'zh'
          ? '您将离开作品集并打开在线应用，是否继续？'
          : 'You are about to leave this portfolio and open the live app. Continue?';

    if (window.confirm(message)) {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };
  
  const contextParsed = parseContent(content.context);
  const problemParsed = parseContent(content.problem);
  const solutionParsed = parseContent(content.solution);
  const resultParsed = parseContent(cleanedResult);

  return (
    <article className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
      {/* Header Section with Hero Image */}
      <header className="mb-16">
        {project.image && (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
            <img 
              src={project.image} 
              alt={`${content.title} project banner`}
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {content.title}
        </h1>

        {/* Key Metrics */}
        {(metrics.length > 0 || liveUrl) && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-md border border-cyan-100 hover:shadow-lg transition-shadow">
                  <Icon className="size-8 text-cyan-600 mb-2" />
                  <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{metric.label}</div>
                </div>
              );
            })}
            {liveUrl && (
              <button
                type="button"
                onClick={handleOpenLive}
                className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all group col-span-2 md:col-span-1 text-left"
              >
                <ExternalLink className="size-8 text-white mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-white">
                  {language === 'vi' ? 'Mở ứng dụng live' : language === 'zh' ? '打开在线应用' : 'Open Live App'}
                </div>
                <div className="text-sm text-white/90">
                  {language === 'vi' ? 'Có bước xác nhận trước khi rời trang' : language === 'zh' ? '离开当前页面前会先确认' : 'Confirmation shown before leaving page'}
                </div>
              </button>
            )}
          </div>
        )}
      </header>

      {/* Content Grid */}
      <div className="grid gap-8">
        {/* Context */}
        <section className="group hover:scale-[1.02] transition-transform">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Info className="size-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Context</h2>
            </div>
            <div className="text-slate-700 leading-relaxed">
              {contextParsed.map((item: any, idx: number) => {
                if (item.type === 'paragraph') {
                  return <p key={idx} className="mb-4 text-base leading-7">{item.content}</p>;
                } else if (item.type === 'bullets') {
                  return (
                    <ul key={idx} className="mb-4 space-y-2 ml-4">
                      {(item.content as string[]).map((bullet: string, bidx: number) => (
                        <li key={bidx} className="flex gap-3 items-start">
                          <span className="text-blue-500 font-bold text-lg mt-0.5">•</span>
                          <span className="flex-1 leading-7">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="group hover:scale-[1.02] transition-transform">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-md border-l-4 border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500 rounded-lg">
                <AlertCircle className="size-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Problem</h2>
            </div>
            <div className="text-slate-700 leading-relaxed">
              {problemParsed.map((item: any, idx: number) => {
                if (item.type === 'paragraph') {
                  return <p key={idx} className="mb-4 text-base leading-7">{item.content}</p>;
                } else if (item.type === 'bullets') {
                  return (
                    <ul key={idx} className="mb-4 space-y-2 ml-4">
                      {(item.content as string[]).map((bullet: string, bidx: number) => (
                        <li key={bidx} className="flex gap-3 items-start">
                          <span className="text-red-500 font-bold text-lg mt-0.5">•</span>
                          <span className="flex-1 leading-7">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="group hover:scale-[1.02] transition-transform">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500 rounded-lg">
                <Lightbulb className="size-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Solution</h2>
            </div>
            <div className="text-slate-700 leading-relaxed">
              {solutionParsed.map((item: any, idx: number) => {
                if (item.type === 'paragraph') {
                  return <p key={idx} className="mb-4 text-base leading-7">{item.content}</p>;
                } else if (item.type === 'bullets') {
                  return (
                    <ul key={idx} className="mb-4 space-y-2 ml-4">
                      {(item.content as string[]).map((bullet: string, bidx: number) => (
                        <li key={bidx} className="flex gap-3 items-start">
                          <span className="text-green-500 font-bold text-lg mt-0.5">•</span>
                          <span className="flex-1 leading-7">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="group hover:scale-[1.02] transition-transform">
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500 rounded-lg">
                <TrendingUp className="size-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Result</h2>
            </div>
            <div className="text-slate-700 leading-relaxed">
              {resultParsed.map((item: any, idx: number) => {
                if (item.type === 'paragraph') {
                  return <p key={idx} className="mb-4 text-base leading-7">{item.content}</p>;
                } else if (item.type === 'bullets') {
                  return (
                    <ul key={idx} className="mb-4 space-y-2 ml-4">
                      {(item.content as string[]).map((bullet: string, bidx: number) => (
                        <li key={bidx} className="flex gap-3 items-start">
                          <span className="text-purple-500 font-bold text-lg mt-0.5">•</span>
                          <span className="flex-1 leading-7">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-4">
          <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 p-8 rounded-2xl shadow-xl text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10">
              <Award className="size-12 mx-auto mb-4 opacity-90" />
              <p className="text-xl font-semibold leading-relaxed max-w-2xl mx-auto">
                {content.cta.split('\n')[0]}
              </p>
              {content.cta.split('\n').slice(1).map((line: string, idx: number) => (
                <p key={idx} className="text-white/90 mt-2">{line}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
