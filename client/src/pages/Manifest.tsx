import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { HeroSection } from "@/components/ui/hero-section";
import type { Article } from "@shared/schema";

export default function Manifest() {
  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles/category/manifest"],
  });

  const manifestArticle = articles?.[0];

  return (
    <div>
      <HeroSection 
        title="Манифест неовсеединства" 
        subtitle="На пути к обществу развития"
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
          ) : manifestArticle ? (
            <Card>
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold mb-6" data-testid="text-manifest-title">
                  {manifestArticle.title}
                </h1>
                <div className="prose prose-lg max-w-none" data-testid="text-manifest-content">
                  {manifestArticle.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600" data-testid="text-manifest-author">
                    Автор: {manifestArticle.author}
                  </p>
                  <p className="text-sm text-gray-600" data-testid="text-manifest-date">
                    Дата: {new Date(manifestArticle.createdAt).toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600" data-testid="text-manifest-not-found">
                  Манифест в настоящее время не доступен.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
