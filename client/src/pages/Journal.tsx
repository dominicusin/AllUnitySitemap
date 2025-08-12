import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Calendar, User } from "lucide-react";

const journalIssues = [
  {
    id: 1,
    volume: 1,
    issue: 3,
    year: 2024,
    title: "Интегральная методология в современной философии",
    description: "Специальный выпуск, посвященный развитию интегральных методов исследования",
    articles: [
      "Основы интегральной методологии",
      "Синтез эмпирического и рационального познания",
      "Холистический подход в науке XXI века"
    ],
    publishDate: "Декабрь 2024",
    pages: 156
  },
  {
    id: 2,
    volume: 1,
    issue: 2,
    year: 2024,
    title: "Философия всеединства: классика и современность",
    description: "Анализ классических идей всеединства и их актуализация",
    articles: [
      "Владимир Соловьев и современная философия",
      "Неовсеединство как философия будущего",
      "Интегральная этика в контексте глобализации"
    ],
    publishDate: "Сентябрь 2024",
    pages: 142
  },
  {
    id: 3,
    volume: 1,
    issue: 1,
    year: 2024,
    title: "Манифест интегрального сообщества",
    description: "Программный выпуск с основными принципами и целями",
    articles: [
      "Манифест неовсеединства",
      "Принципы интегрального знания",
      "Образование и развитие личности"
    ],
    publishDate: "Июнь 2024",
    pages: 98
  }
];

const editorialBoard = [
  "Главный редактор: Проф. А.И. Иванов",
  "Заместитель главного редактора: Доц. М.П. Петрова",
  "Ответственный секретарь: К.ф.н. С.С. Сидоров",
  "Члены редколлегии: ведущие специалисты в области философии"
];

export default function Journal() {
  return (
    <div>
      <HeroSection 
        title="Научный журнал" 
        subtitle="Периодическое издание по интегральной философии и смежным дисциплинам"
      />

      {/* Journal Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-journal-about-title">
                О журнале
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600" data-testid="text-journal-description">
                <p className="mb-4">
                  Научный журнал интегрального сообщества является ведущим периодическим изданием, 
                  публикующим оригинальные исследования в области интегральной философии, 
                  методологии науки и смежных дисциплин.
                </p>
                <p className="mb-4">
                  Журнал ставит своей целью развитие интегрального подхода к познанию, 
                  синтез различных областей знания и создание платформы для научного диалога 
                  между исследователями разных специальностей.
                </p>
                <p>
                  Все материалы проходят рецензирование и соответствуют высоким стандартам 
                  научной публикации.
                </p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-journal-info-title">
                  Информация о издании
                </h3>
                <div className="space-y-3 text-sm">
                  <div data-testid="text-journal-issn">
                    <strong>ISSN:</strong> 2024-0001 (Print)
                  </div>
                  <div data-testid="text-journal-frequency">
                    <strong>Периодичность:</strong> 4 раза в год
                  </div>
                  <div data-testid="text-journal-languages">
                    <strong>Языки:</strong> Русский, English
                  </div>
                  <div data-testid="text-journal-founded">
                    <strong>Основан:</strong> 2024
                  </div>
                  <div data-testid="text-journal-format">
                    <strong>Формат:</strong> Электронное издание
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Issues */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-issues-title">
              Последние выпуски
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-issues-description">
              Актуальные публикации по интегральной философии и исследованиям
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {journalIssues.map((issue) => (
              <Card key={issue.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2" data-testid={`text-issue-${issue.id}-title`}>
                        Том {issue.volume}, № {issue.issue} ({issue.year})
                      </h3>
                      <p className="text-sm text-gray-600 mb-2" data-testid={`text-issue-${issue.id}-theme`}>
                        {issue.title}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4" data-testid={`text-issue-${issue.id}-description`}>
                    {issue.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Основные статьи:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {issue.articles.map((article, index) => (
                        <li key={index} data-testid={`text-issue-${issue.id}-article-${index}`}>
                          • {article}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span data-testid={`text-issue-${issue.id}-date`}>{issue.publishDate}</span>
                    </div>
                    <span data-testid={`text-issue-${issue.id}-pages`}>{issue.pages} стр.</span>
                  </div>
                  
                  <Button className="w-full" data-testid={`button-download-${issue.id}`}>
                    <Download className="w-4 h-4 mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Board */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-editorial-board-title">
                Редакционная коллегия
              </h2>
              <div className="space-y-3">
                {editorialBoard.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`text-editor-${index}`}>
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-gray-700">{member}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-submission-title">
                Для авторов
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600" data-testid="text-submission-info">
                  Журнал принимает к рассмотрению оригинальные научные статьи, 
                  обзоры и рецензии по тематике интегральной философии.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Требования к публикациям:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li data-testid="text-requirement-1">• Объем статьи: 15-25 страниц</li>
                    <li data-testid="text-requirement-2">• Аннотация на русском и английском языках</li>
                    <li data-testid="text-requirement-3">• Ключевые слова и библиография</li>
                    <li data-testid="text-requirement-4">• Соответствие тематике журнала</li>
                  </ul>
                </div>
                <Button variant="outline" data-testid="button-submit-article">
                  Подать статью
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
