import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BookOpen, 
  Download, 
  Search, 
  Filter,
  FileText,
  Book,
  GraduationCap,
  ScrollText,
  Calendar,
  User,
  Eye
} from "lucide-react";
import { useState } from "react";

const libraryCategories = [
  "Все категории",
  "Интегральная философия",
  "Неовсеединство", 
  "Методология",
  "Этика",
  "Образование",
  "История философии",
  "Научные статьи",
  "Переводы"
];

const libraryItems = [
  {
    id: 1,
    title: "Основы интегральной философии",
    author: "Интегральное сообщество",
    category: "Интегральная философия",
    type: "Монография",
    pages: 312,
    year: 2024,
    description: "Фундаментальный труд, излагающий основные принципы и методы интегральной философии как синтетической системы знания.",
    downloads: 245,
    views: 1520,
    format: "PDF"
  },
  {
    id: 2,
    title: "Манифест неовсеединства",
    author: "Коллектив авторов",
    category: "Неовсеединство",
    type: "Программный документ",
    pages: 89,
    year: 2024,
    description: "Программный документ, определяющий цели и задачи философского направления неовсеединства в современном контексте.",
    downloads: 189,
    views: 890,
    format: "PDF"
  },
  {
    id: 3,
    title: "Методология интегрального познания",
    author: "А.И. Смирнов",
    category: "Методология",
    type: "Учебное пособие",
    pages: 156,
    year: 2023,
    description: "Систематическое изложение методологических принципов интегрального подхода к научному и философскому познанию.",
    downloads: 167,
    views: 743,
    format: "PDF"
  },
  {
    id: 4,
    title: "Этические основания интегрального общества",
    author: "М.П. Васильева",
    category: "Этика",
    type: "Научная статья",
    pages: 45,
    year: 2024,
    description: "Исследование этических принципов и моральных оснований общества, построенного на интегральных принципах.",
    downloads: 134,
    views: 567,
    format: "PDF"
  },
  {
    id: 5,
    title: "История философии всеединства",
    author: "П.Н. Козлов",
    category: "История философии",
    type: "Исторический очерк",
    pages: 278,
    year: 2023,
    description: "Комплексное исследование развития идей всеединства от В.С. Соловьева до современных концепций.",
    downloads: 198,
    views: 923,
    format: "PDF"
  },
  {
    id: 6,
    title: "Интегральная педагогика: теория и практика",
    author: "Е.В. Петрова",
    category: "Образование",
    type: "Методическое пособие",
    pages: 201,
    year: 2024,
    description: "Практическое руководство по применению интегральных принципов в образовательном процессе.",
    downloads: 212,
    views: 1156,
    format: "PDF"
  }
];

const documentTypes = [
  "Все типы",
  "Монография",
  "Научная статья", 
  "Учебное пособие",
  "Методическое пособие",
  "Программный документ",
  "Исторический очерк",
  "Перевод"
];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все категории");
  const [selectedType, setSelectedType] = useState("Все типы");

  const filteredItems = libraryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все категории" || item.category === selectedCategory;
    const matchesType = selectedType === "Все типы" || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Монография":
        return <Book className="w-5 h-5 text-primary" />;
      case "Научная статья":
        return <FileText className="w-5 h-5 text-primary" />;
      case "Учебное пособие":
      case "Методическое пособие":
        return <GraduationCap className="w-5 h-5 text-primary" />;
      case "Программный документ":
        return <ScrollText className="w-5 h-5 text-primary" />;
      default:
        return <BookOpen className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div>
      <HeroSection 
        title="Библиотека сообщества" 
        subtitle="Собрание трудов по интегральной философии и смежным дисциплинам"
      />

      {/* Search and Filters */}
      <section className="py-8 bg-light-bg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Поиск по названию, автору или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-library-search"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-64" data-testid="select-category">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {libraryCategories.map((category) => (
                  <SelectItem key={category} value={category} data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full lg:w-64" data-testid="select-type">
                <SelectValue placeholder="Тип документа" />
              </SelectTrigger>
              <SelectContent>
                {documentTypes.map((type) => (
                  <SelectItem key={type} value={type} data-testid={`type-${type.toLowerCase().replace(/\s+/g, '-')}`}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Library Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-library-about-title">
                О библиотеке
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600" data-testid="text-library-description">
                <p className="mb-4">
                  Библиотека интегрального сообщества представляет собой уникальное собрание 
                  философских, научных и методологических работ, посвященных развитию 
                  интегрального подхода к познанию и практической деятельности.
                </p>
                <p className="mb-4">
                  В библиотеке представлены как классические труды по философии всеединства, 
                  так и современные исследования в области интегральной методологии, 
                  этики, образования и других смежных дисциплин.
                </p>
                <p>
                  Все материалы доступны для свободного скачивания и использования 
                  в образовательных и исследовательских целях.
                </p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-library-stats-title">
                  Статистика библиотеки
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Всего документов</span>
                    <span className="font-semibold" data-testid="text-total-documents">{libraryItems.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Категорий</span>
                    <span className="font-semibold" data-testid="text-total-categories">{libraryCategories.length - 1}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Всего скачиваний</span>
                    <span className="font-semibold" data-testid="text-total-downloads">
                      {libraryItems.reduce((sum, item) => sum + item.downloads, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Общие просмотры</span>
                    <span className="font-semibold" data-testid="text-total-views">
                      {libraryItems.reduce((sum, item) => sum + item.views, 0)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Library Items */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" data-testid="text-documents-title">
              Документы библиотеки
            </h2>
            <p className="text-gray-600" data-testid="text-documents-count">
              Найдено: {filteredItems.length} из {libraryItems.length}
            </p>
          </div>
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        {getTypeIcon(item.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2" data-testid={`text-document-${item.id}-title`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span data-testid={`text-document-${item.id}-author`}>{item.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span data-testid={`text-document-${item.id}-year`}>{item.year}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded" data-testid={`text-document-${item.id}-category`}>
                            {item.category}
                          </span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded" data-testid={`text-document-${item.id}-type`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4" data-testid={`text-document-${item.id}-description`}>
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span data-testid={`text-document-${item.id}-pages`}>{item.pages} стр.</span>
                        <span className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          <span data-testid={`text-document-${item.id}-downloads`}>{item.downloads}</span>
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span data-testid={`text-document-${item.id}-views`}>{item.views}</span>
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded" data-testid={`text-document-${item.id}-format`}>
                        {item.format}
                      </span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="flex-1" data-testid={`button-download-${item.id}`}>
                        <Download className="w-4 h-4 mr-2" />
                        Скачать
                      </Button>
                      <Button variant="outline" data-testid={`button-preview-${item.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        Просмотр
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg" data-testid="text-no-documents">
                  По вашему запросу документы не найдены.
                </p>
                <p className="text-gray-500 mt-2" data-testid="text-search-suggestion">
                  Попробуйте изменить параметры поиска или выбрать другую категорию.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
