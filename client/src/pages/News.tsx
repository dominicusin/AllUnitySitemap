import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { HeroSection } from "@/components/ui/hero-section";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { NewsItem } from "@shared/schema";

export default function News() {
  const { data: news, isLoading } = useQuery<NewsItem[]>({
    queryKey: ["/api/news"],
  });

  return (
    <div>
      <HeroSection 
        title="Новости сообщества" 
        subtitle="Актуальные события и новости интегрального сообщества"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="space-y-8">
              {Array.from({ length: 5 }, (_, i) => (
                <Card key={i}>
                  <CardContent className="p-8">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : news && news.length > 0 ? (
            <div className="space-y-8">
              {news.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <article>
                      <h2 className="text-2xl font-bold mb-4 hover:text-primary cursor-pointer transition-colors" data-testid={`text-news-${item.id}-title`}>
                        {item.title}
                      </h2>
                      
                      {item.excerpt && (
                        <p className="text-lg text-gray-600 mb-4" data-testid={`text-news-${item.id}-excerpt`}>
                          {item.excerpt}
                        </p>
                      )}
                      
                      <div className="prose prose-lg max-w-none mb-6" data-testid={`text-news-${item.id}-content`}>
                        {item.content.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span data-testid={`text-news-${item.id}-date`}>
                              {new Date(item.createdAt).toLocaleDateString('ru-RU', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span data-testid={`text-news-${item.id}-author`}>{item.author}</span>
                          </div>
                        </div>
                        
                        <button className="text-accent hover:text-emerald-700 font-medium inline-flex items-center transition-colors" data-testid={`button-read-more-${item.id}`}>
                          Читать полностью <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600" data-testid="text-no-news">
                  В настоящее время новости отсутствуют.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
