import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { HeroSection } from "@/components/ui/hero-section";
import type { Article } from "@shared/schema";

export default function Codex() {
  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles/category/codex"],
  });

  const codexArticle = articles?.[0];

  return (
    <div>
      <HeroSection 
        title="Интегральный кодекс" 
        subtitle="Философская система синтеза, соединяющая принципы универсальности и строгости"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <Card>
              <CardContent className="p-8">
                <Skeleton className="h-8 w-3/4 mb-6" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ) : codexArticle ? (
            <Card>
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold mb-6" data-testid="text-codex-title">
                  {codexArticle.title}
                </h1>
                <div className="prose prose-lg max-w-none" data-testid="text-codex-content">
                  {codexArticle.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600" data-testid="text-codex-author">
                    Автор: {codexArticle.author}
                  </p>
                  <p className="text-sm text-gray-600" data-testid="text-codex-date">
                    Дата: {new Date(codexArticle.createdAt).toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600" data-testid="text-codex-not-found">
                  Кодекс в настоящее время не доступен.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
