import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionCard } from "@/components/ui/section-card";
import { ProjectCard } from "@/components/ui/project-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ScrollText, 
  Book, 
  GraduationCap, 
  Newspaper, 
  Rss, 
  MessageCircle, 
  BookOpen, 
  Users, 
  Languages,
  Scale,
  Type,
  Calculator,
  Landmark,
  Gavel,
  Music,
  Atom,
  Calendar,
  User
} from "lucide-react";
import type { NewsItem, Project } from "@shared/schema";

const communitySections = [
  {
    title: "Манифест неовсеединства",
    description: "На пути к обществу развития. Манифест философии неовсеединства.",
    href: "/manifest",
    icon: <ScrollText className="w-6 h-6 text-primary" />,
    linkText: "Ознакомиться"
  },
  {
    title: "Интегральный кодекс",
    description: "Философская система синтеза, соединяющая принципы универсальности и строгости.",
    href: "/codex",
    icon: <Book className="w-6 h-6 text-primary" />,
    linkText: "Читать полностью"
  },
  {
    title: "Институт ИИН",
    description: "Синтез научного знания для познания единой реальности.",
    href: "/institute",
    icon: <GraduationCap className="w-6 h-6 text-primary" />
  },
  {
    title: "Журнал",
    description: "Научное периодическое издание по интегральной философии.",
    href: "/journal",
    icon: <Newspaper className="w-6 h-6 text-primary" />,
    linkText: "Все выпуски"
  },
  {
    title: "Новости",
    description: "Актуальные события и новости интегрального сообщества.",
    href: "/news",
    icon: <Rss className="w-6 h-6 text-primary" />,
    linkText: "Читать новости"
  },
  {
    title: "Форум",
    description: "Площадка для общения участников сообщества.",
    href: "/forum",
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    linkText: "Перейти к форуму"
  },
  {
    title: "Библиотека",
    description: "Собрание трудов по интегральной философии и смежным дисциплинам.",
    href: "/library",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    linkText: "Открыть библиотеку"
  },
  {
    title: "Дискуссии",
    description: "Открытые обсуждения актуальных философских вопросов.",
    href: "/forum",
    icon: <Users className="w-6 h-6 text-primary" />,
    linkText: "Присоединиться"
  },
  {
    title: "Словарь",
    description: "Терминологический словарь интегральной философии.",
    href: "/dictionary",
    icon: <Languages className="w-6 h-6 text-primary" />,
    linkText: "Изучать термины"
  }
];

const instituteDisciplines = [
  { name: "Этика", icon: <Scale className="w-6 h-6 text-primary" />, description: "Моральные принципы и философская этика" },
  { name: "Филология", icon: <Type className="w-6 h-6 text-primary" />, description: "Язык, литература и текстология" },
  { name: "Математика", icon: <Calculator className="w-6 h-6 text-primary" />, description: "Математические основы философии" },
  { name: "История", icon: <Landmark className="w-6 h-6 text-primary" />, description: "Исторические исследования и анализ" },
  { name: "Право", icon: <Gavel className="w-6 h-6 text-primary" />, description: "Правовые основы и юриспруденция" },
  { name: "Музыкальная лаборатория", icon: <Music className="w-6 h-6 text-primary" />, description: "Исследования музыки и звука" },
  { name: "Физическая лаборатория", icon: <Atom className="w-6 h-6 text-primary" />, description: "Физические исследования и эксперименты" },
  { name: "Школа", icon: <GraduationCap className="w-6 h-6 text-primary" />, description: "Образовательные программы" },
];

export default function Home() {
  const { getLocalizedContent } = useLocalizedContent();
  const { t } = useLanguage();
  
  const { data: news, isLoading: newsLoading } = useQuery<NewsItem[]>({
    queryKey: ["/api/news"],
  });

  const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="font-inter bg-white text-secondary">
      {/* Hero Section */}
      <HeroSection 
        title={t('home.hero.title')} 
        subtitle={t('home.hero.subtitle')}
      >
        <Button asChild className="bg-accent hover:bg-emerald-600 text-white" data-testid="button-manifest">
          <Link href="/manifest">{t('home.hero.manifestButton')}</Link>
        </Button>
        <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" data-testid="button-codex">
          <Link href="/codex">{t('home.hero.codexButton')}</Link>
        </Button>
        <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" data-testid="button-institute">
          <Link href="/institute">{t('home.hero.instituteButton')}</Link>
        </Button>
      </HeroSection>

      {/* Community Sections */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-community-sections-title">
            {t('home.community.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communitySections.map((section) => (
              <SectionCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Institute Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-institute-title">
              {t('home.institute.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-institute-description">
              {t('home.institute.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instituteDisciplines.map((discipline) => (
              <div 
                key={discipline.name} 
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:from-primary/5 hover:to-primary/10 transition-all border"
                data-testid={`card-discipline-${discipline.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center mb-4">
                  {discipline.icon}
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-${discipline.name.toLowerCase().replace(/\s+/g, '-')}-name`}>
                  {discipline.name}
                </h3>
                <p className="text-sm text-gray-600" data-testid={`text-${discipline.name.toLowerCase().replace(/\s+/g, '-')}-description`}>
                  {discipline.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-projects-title">
              {t('home.projects.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-projects-description">
              {t('home.projects.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsLoading ? (
              Array.from({ length: 6 }, (_, i) => (
                <Card key={i} className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <Skeleton className="w-16 h-16 rounded-xl" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              projects?.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={getLocalizedContent(project.title)}
                  description={getLocalizedContent(project.description)}
                  href={`/projects#${project.id}`}
                  icon={project.icon || "infinity"}
                  gradient={project.gradient || "from-primary to-blue-600"}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Community Activity */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* News Section */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold" data-testid="text-news-title">{t('home.news.title')}</h2>
                <Button asChild variant="link" className="text-accent hover:text-emerald-700" data-testid="link-all-news">
                  <Link href="/news">{t('common.allNews')}</Link>
                </Button>
              </div>
              <div className="space-y-6">
                {newsLoading ? (
                  Array.from({ length: 3 }, (_, i) => (
                    <article key={i} className="border-b border-gray-100 pb-6">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-2" />
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </article>
                  ))
                ) : (
                  news?.slice(0, 3).map((item) => (
                    <article key={item.id} className="border-b border-gray-100 pb-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer transition-colors" data-testid={`text-news-${item.id}-title`}>
                            {getLocalizedContent(item.title)}
                          </h3>
                          <p className="text-gray-600 mb-2" data-testid={`text-news-${item.id}-excerpt`}>
                            {getLocalizedContent(item.excerpt || { ru: '', en: '', cn: '' })}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span data-testid={`text-news-${item.id}-date`}>
                              {new Date(item.createdAt).toLocaleDateString('ru-RU')}
                            </span>
                            <User className="w-4 h-4 ml-4 mr-2" />
                            <span data-testid={`text-news-${item.id}-author`}>{item.author}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            {/* Forum Activity Placeholder */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold" data-testid="text-forum-title">{t('home.forum.title')}</h2>
                <Button asChild variant="link" className="text-accent hover:text-emerald-700" data-testid="link-forum">
                  <Link href="/forum">{t('common.allForum')}</Link>
                </Button>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6" data-testid="card-forum-placeholder">
                  <p className="text-gray-600 text-center">
                    Форум будет интегрирован с внешней системой. 
                    <br />
                    Активные дискуссии будут отображаться здесь.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
