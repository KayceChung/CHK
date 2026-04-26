import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ExternalLink, Info, AlertCircle, Lightbulb, TrendingUp, Target, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectDetailContent({ project }: { project: any }) {
  const { language } = useLanguage();
  const content = project.content[language as keyof typeof project.content];
  const [activeSlide, setActiveSlide] = useState(0);

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
  const galleryItems = useMemo(
    () => (Array.isArray(project.gallery) ? project.gallery : []),
    [project.gallery]
  );

  useEffect(() => {
    setActiveSlide(0);
  }, [project.slug, galleryItems.length]);

  const goToSlide = (index: number) => {
    if (!galleryItems.length) return;
    const nextIndex = (index + galleryItems.length) % galleryItems.length;
    setActiveSlide(nextIndex);
  };

  const goToPrevSlide = () => goToSlide(activeSlide - 1);
  const goToNextSlide = () => goToSlide(activeSlide + 1);

  const sectionTitle = {
    context: language === 'vi' ? 'Bối cảnh' : language === 'zh' ? '背景' : 'Context',
    problem: language === 'vi' ? 'Vấn đề' : language === 'zh' ? '问题' : 'Problem',
    solution: language === 'vi' ? 'Giải pháp' : language === 'zh' ? '方案' : 'Solution',
    result: language === 'vi' ? 'Kết quả' : language === 'zh' ? '成果' : 'Result',
    overview: language === 'vi' ? 'Tổng quan sản phẩm' : language === 'zh' ? '产品概览' : 'Product Overview',
  };

  return (
    <article className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
      {/* Header Section with Hero Image */}
      <header className="mb-16">
        {project.image && (
          <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>{sectionTitle.overview}</span>
              <span>{project.tags.length} tags</span>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(160deg,#f8fafc_0%,#ecfeff_100%)] p-3">
              <img 
                src={project.image} 
                alt={`${content.title} project banner`}
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[430px] rounded-xl border border-slate-200 object-cover object-top shadow-sm"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Product Screenshots Gallery */}
        {galleryItems.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              {language === 'vi' ? 'Hình ảnh sản phẩm' : language === 'zh' ? '产品界面截图' : 'Product Screens'}
            </h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(160deg,#f8fafc_0%,#ecfeff_100%)]">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {galleryItems.map((item: { src: string; alt: string }, index: number) => (
                    <figure key={`${item.src}-${index}`} className="min-w-full p-3 sm:p-4">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-72 sm:h-[420px] w-full rounded-lg border border-slate-200 bg-white object-contain object-top"
                      />
                      <figcaption className="pt-3 text-sm text-slate-600 leading-relaxed">
                        {item.alt}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                {galleryItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goToPrevSlide}
                      aria-label={language === 'vi' ? 'Ảnh trước' : language === 'zh' ? '上一张' : 'Previous image'}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-2 text-slate-700 shadow hover:bg-white"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={goToNextSlide}
                      aria-label={language === 'vi' ? 'Ảnh tiếp theo' : language === 'zh' ? '下一张' : 'Next image'}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/90 p-2 text-slate-700 shadow hover:bg-white"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </>
                )}
              </div>

              {galleryItems.length > 1 && (
                <>
                  <div className="mt-4 flex justify-center gap-2">
                    {galleryItems.map((_: unknown, index: number) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`${language === 'vi' ? 'Đi đến ảnh' : language === 'zh' ? '跳转到图片' : 'Go to image'} ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeSlide ? 'w-7 bg-cyan-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {galleryItems.map((item: { src: string; alt: string }, index: number) => (
                      <button
                        key={`${item.src}-thumb-${index}`}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`overflow-hidden rounded-lg border bg-white p-1.5 text-left transition ${
                          index === activeSlide
                            ? 'border-cyan-500 ring-2 ring-cyan-200'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                          className="h-20 w-full rounded-md object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
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
        <section>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-sky-100 rounded-lg border border-sky-200">
                <Info className="size-6 text-sky-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{sectionTitle.context}</h2>
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
                          <span className="text-sky-500 font-bold text-lg mt-0.5">•</span>
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
        <section>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-100 rounded-lg border border-rose-200">
                <AlertCircle className="size-6 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{sectionTitle.problem}</h2>
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
                          <span className="text-rose-500 font-bold text-lg mt-0.5">•</span>
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
        <section>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg border border-emerald-200">
                <Lightbulb className="size-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{sectionTitle.solution}</h2>
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
                          <span className="text-emerald-500 font-bold text-lg mt-0.5">•</span>
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
        <section>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-violet-100 rounded-lg border border-violet-200">
                <TrendingUp className="size-6 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{sectionTitle.result}</h2>
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
                          <span className="text-violet-500 font-bold text-lg mt-0.5">•</span>
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
          <div className="bg-[linear-gradient(140deg,#0891b2_0%,#2563eb_100%)] p-8 rounded-2xl shadow-xl text-center text-white relative overflow-hidden">
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
