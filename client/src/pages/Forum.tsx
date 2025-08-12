import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Users, TrendingUp } from "lucide-react";

const forumCategories = [
  {
    name: "Общие вопросы",
    description: "Обсуждение основных принципов интегральной философии",
    topics: 156,
    posts: 1234,
    lastActivity: "2 часа назад"
  },
  {
    name: "Неовсеединство",
    description: "Развитие идей всеединства в современном контексте",
    topics: 89,
    posts: 756,
    lastActivity: "5 часов назад"
  },
  {
    name: "Методология",
    description: "Интегральные методы исследования и познания",
    topics: 67,
    posts: 445,
    lastActivity: "1 день назад"
  },
  {
    name: "Образование",
    description: "Интегральный подход в образовании и развитии",
    topics: 78,
    posts: 512,
    lastActivity: "3 часа назад"
  },
  {
    name: "Наука и технологии",
    description: "Интеграция научного знания и технологических решений",
    topics: 45,
    posts: 298,
    lastActivity: "6 часов назад"
  },
  {
    name: "Этика и общество",
    description: "Этические вопросы и социальные аспекты",
    topics: 92,
    posts: 634,
    lastActivity: "4 часа назад"
  }
];

const recentTopics = [
  {
    title: "Роль интуиции в интегральном познании",
    author: "Александр Белый",
    replies: 23,
    views: 156,
    lastPost: "1 час назад"
  },
  {
    title: "Практические аспекты внедрения интегрального подхода",
    author: "Мария Сидорова",
    replies: 18,
    views: 98,
    lastPost: "3 часа назад"
  },
  {
    title: "Синтез восточной и западной философии",
    author: "Дмитрий Козлов",
    replies: 31,
    views: 245,
    lastPost: "5 часов назад"
  },
  {
    title: "Интегральная медицина: теория и практика",
    author: "Елена Васильева",
    replies: 15,
    views: 87,
    lastPost: "1 день назад"
  }
];

export default function Forum() {
  return (
    <div>
      <HeroSection 
        title="Форум сообщества" 
        subtitle="Площадка для обсуждения идей интегральной философии и обмена опытом"
      />

      {/* Forum Notice */}
      <section className="py-8 bg-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <ExternalLink className="w-8 h-8 text-blue-600" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2" data-testid="text-forum-notice-title">
                    Основной форум на Flarum
                  </h3>
                  <p className="text-blue-700 mb-4" data-testid="text-forum-notice-description">
                    Активные дискуссии проходят на нашей платформе Flarum. 
                    Присоединяйтесь к сообществу для полноценного участия в обсуждениях.
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700" data-testid="button-visit-forum">
                    <a href="https://flarum.allunity.ru/public/" target="_blank" rel="noopener noreferrer">
                      Перейти к форуму <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-categories-title">
              Основные разделы форума
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-categories-description">
              Тематические разделы для обсуждения различных аспектов интегральной философии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2" data-testid={`text-category-${index}-name`}>
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4" data-testid={`text-category-${index}-description`}>
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span data-testid={`text-category-${index}-topics`}>
                            {category.topics} тем
                          </span>
                          <span data-testid={`text-category-${index}-posts`}>
                            {category.posts} сообщений
                          </span>
                        </div>
                        <span data-testid={`text-category-${index}-activity`}>
                          {category.lastActivity}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Topics */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8" data-testid="text-recent-topics-title">
                Последние обсуждения
              </h2>
              <div className="space-y-6">
                {recentTopics.map((topic, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer transition-colors" data-testid={`text-topic-${index}-title`}>
                        {topic.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span data-testid={`text-topic-${index}-author`}>
                            Автор: {topic.author}
                          </span>
                          <span data-testid={`text-topic-${index}-replies`}>
                            {topic.replies} ответов
                          </span>
                          <span data-testid={`text-topic-${index}-views`}>
                            {topic.views} просмотров
                          </span>
                        </div>
                        <span data-testid={`text-topic-${index}-last-post`}>
                          {topic.lastPost}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6" data-testid="text-forum-stats-title">
                Статистика форума
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold" data-testid="text-total-members">1,247</div>
                        <div className="text-sm text-gray-600">Участников</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold" data-testid="text-total-topics">527</div>
                        <div className="text-sm text-gray-600">Тем</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold" data-testid="text-total-posts">3,879</div>
                        <div className="text-sm text-gray-600">Сообщений</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4" data-testid="text-forum-rules-title">
                    Правила форума
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li data-testid="text-rule-1">• Уважайте мнения других участников</li>
                    <li data-testid="text-rule-2">• Придерживайтесь тематики разделов</li>
                    <li data-testid="text-rule-3">• Используйте конструктивную критику</li>
                    <li data-testid="text-rule-4">• Избегайте личных нападок</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
