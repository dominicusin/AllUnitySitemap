import { useQuery } from "@tanstack/react-query";
import { HeroSection } from "@/components/ui/hero-section";
import { ProjectCard } from "@/components/ui/project-card";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div>
      <HeroSection 
        title="Проекты сообщества" 
        subtitle="Философские инициативы и исследовательские направления интегрального сообщества"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-projects-overview-title">
              Основные направления
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="text-projects-overview-description">
              Интегральное сообщество развивает несколько ключевых проектов, направленных на 
              синтез знаний, разработку новых методологий и практическое применение 
              интегральных принципов в различных областях человеческой деятельности.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {isLoading ? (
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
            ) : projects && projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  href={`#${project.id}`}
                  icon={project.icon || "infinity"}
                  gradient={project.gradient || "from-primary to-blue-600"}
                  linkText="Изучить проект"
                />
              ))
            ) : (
              <div className="col-span-2">
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-600" data-testid="text-no-projects">
                      Проекты в настоящее время находятся в разработке.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Project Sections */}
      {projects && projects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {projects.map((project) => (
                <div key={project.id} id={project.id} className="scroll-mt-20">
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold mb-6" data-testid={`text-project-${project.id}-title`}>
                        {project.title}
                      </h2>
                      <div className="prose prose-lg max-w-none" data-testid={`text-project-${project.id}-content`}>
                        {project.content ? (
                          project.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p className="text-gray-600">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Future Projects */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-future-projects-title">
              Планируемые проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-future-projects-description">
              Направления развития интегральной философии в ближайшем будущем
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-future-project-1-title">
                  Интегральная экология
                </h3>
                <p className="text-gray-600" data-testid="text-future-project-1-description">
                  Целостный подход к экологическим проблемам и устойчивому развитию
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-future-project-2-title">
                  Интегральная экономика
                </h3>
                <p className="text-gray-600" data-testid="text-future-project-2-description">
                  Новые экономические модели на основе принципов интегрального подхода
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-future-project-3-title">
                  Цифровая философия
                </h3>
                <p className="text-gray-600" data-testid="text-future-project-3-description">
                  Философские аспекты цифровой трансформации общества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
