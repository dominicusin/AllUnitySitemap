import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  BookOpen, 
  Filter,
  Hash,
  Quote,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const dictionaryCategories = [
  "Все категории",
  "Основные понятия",
  "Методология", 
  "Этические термины",
  "Историческая философия",
  "Современная философия",
  "Образование",
  "Практические аспекты"
];

const dictionaryTerms = [
  {
    id: 1,
    term: "Всеединство",
    category: "Основные понятия",
    definition: "Философское учение, согласно которому все существующее представляет собой единое целое, где каждая часть связана со всеми остальными частями внутренней связью.",
    etymology: "От церковнославянского 'всеединство' - единство всего сущего",
    relatedTerms: ["Неовсеединство", "Интегральная философия", "Синтез"],
    author: "Владимир Соловьев",
    sources: ["Чтения о Богочеловечестве", "Философские начала цельного знания"]
  },
  {
    id: 2,
    term: "Неовсеединство",
    category: "Современная философия",
    definition: "Современное развитие идей всеединства, адаптированное к вызовам XXI века и интегрирующее достижения современной науки и философии.",
    etymology: "Неологизм от 'нео-' (новый) и 'всеединство'",
    relatedTerms: ["Всеединство", "Интегральная философия", "Синтез знаний"],
    author: "Интегральное сообщество",
    sources: ["Манифест неовсеединства", "Основы интегральной философии"]
  },
  {
    id: 3,
    term: "Интегральная методология",
    category: "Методология",
    definition: "Комплексный подход к исследованию и познанию, объединяющий различные методы и перспективы для достижения целостного понимания изучаемых явлений.",
    etymology: "От лат. 'integralis' - цельный, единый и греч. 'methodologia' - учение о методах",
    relatedTerms: ["Холистический подход", "Системный анализ", "Трансдисциплинарность"],
    author: "Кен Уилбер, интегральное сообщество",
    sources: ["Теория интегрального подхода", "Методология интегрального познания"]
  },
  {
    id: 4,
    term: "Интегральная этика",
    category: "Этические термины",
    definition: "Этическая система, основанная на принципах целостности, включающая моральные аспекты индивидуального, коллективного и универсального уровней бытия.",
    etymology: "От лат. 'integralis' и греч. 'ethikos' - нравственный",
    relatedTerms: ["Этика всеединства", "Универсальная мораль", "Интегральное развитие"],
    author: "Интегральное сообщество",
    sources: ["Этические основания интегрального общества", "Интегральный кодекс"]
  },
  {
    id: 5,
    term: "Цельное знание",
    category: "Основные понятия",
    definition: "Философская концепция познания, предполагающая синтез эмпирического, рационального и мистического способов постижения истины.",
    etymology: "Термин В.С. Соловьева для обозначения синтетического познания",
    relatedTerms: ["Всеединство", "Интегральное знание", "Синтез"],
    author: "Владимир Соловьев",
    sources: ["Философские начала цельного знания", "Критика отвлеченных начал"]
  },
  {
    id: 6,
    term: "Трансдисциплинарность",
    category: "Методология",
    definition: "Подход к познанию, выходящий за рамки отдельных дисциплин и создающий новые концептуальные рамки для понимания сложных проблем.",
    etymology: "От лат. 'trans' - через, за пределами и 'disciplina' - учение",
    relatedTerms: ["Интердисциплинарность", "Интегральный подход", "Системное мышление"],
    author: "Жан Пиаже, Эдгар Морен",
    sources: ["Трансдисциплинарный подход", "Сложность и трансдисциплинарность"]
  },
  {
    id: 7,
    term: "Интегральное образование",
    category: "Образование",
    definition: "Образовательная парадигма, направленная на развитие всех аспектов личности через синтез различных форм знания и опыта.",
    etymology: "От лат. 'integralis' и 'educatio' - воспитание, обучение",
    relatedTerms: ["Холистическое образование", "Развитие личности", "Интегральная педагогика"],
    author: "Интегральное сообщество",
    sources: ["Интегральная педагогика: теория и практика", "Образование и развитие личности"]
  },
  {
    id: 8,
    term: "Ноосфера",
    category: "Историческая философия",
    definition: "Сфера взаимодействия общества и природы, в границах которой разумная человеческая деятельность становится определяющим фактором развития.",
    etymology: "От греч. 'noos' - разум и 'sphaira' - шар, сфера",
    relatedTerms: ["Биосфера", "Коэволюция", "Устойчивое развитие"],
    author: "Владимир Вернадский, Пьер Тейяр де Шарден",
    sources: ["Научная мысль как планетное явление", "Феномен человека"]
  }
];

const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ".split("");

export default function Dictionary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все категории");
  const [selectedLetter, setSelectedLetter] = useState("");

  const filteredTerms = dictionaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         term.relatedTerms.some(rt => rt.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "Все категории" || term.category === selectedCategory;
    const matchesLetter = !selectedLetter || term.term.toUpperCase().startsWith(selectedLetter);
    
    return matchesSearch && matchesCategory && matchesLetter;
  });

  return (
    <div>
      <HeroSection 
        title="Словарь интегральной философии" 
        subtitle="Терминологический словарь основных понятий и определений"
      />

      {/* Search and Filters */}
      <section className="py-8 bg-light-bg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Поиск по термину или определению..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-dictionary-search"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-64" data-testid="select-dictionary-category">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {dictionaryCategories.map((category) => (
                  <SelectItem key={category} value={category} data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Alphabet Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedLetter === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLetter("")}
              data-testid="button-all-letters"
            >
              Все
            </Button>
            {alphabet.map((letter) => (
              <Button
                key={letter}
                variant={selectedLetter === letter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLetter(letter)}
                data-testid={`button-letter-${letter.toLowerCase()}`}
              >
                {letter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Dictionary Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6" data-testid="text-dictionary-about-title">
                О словаре
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600" data-testid="text-dictionary-description">
                <p className="mb-4">
                  Терминологический словарь интегральной философии представляет собой 
                  систематизированное собрание основных понятий, терминов и определений, 
                  используемых в области интегрального подхода к познанию и практике.
                </p>
                <p className="mb-4">
                  Словарь включает как классические философские термины в их интегральной 
                  интерпретации, так и новые понятия, разработанные в рамках современного 
                  интегрального сообщества.
                </p>
                <p>
                  Каждая статья содержит определение термина, этимологию, связанные понятия 
                  и источники, что обеспечивает глубокое понимание концептуального аппарата 
                  интегральной философии.
                </p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-dictionary-stats-title">
                  Статистика словаря
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Всего терминов</span>
                    <span className="font-semibold" data-testid="text-total-terms">{dictionaryTerms.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Категорий</span>
                    <span className="font-semibold" data-testid="text-total-categories">{dictionaryCategories.length - 1}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Найдено</span>
                    <span className="font-semibold" data-testid="text-filtered-count">{filteredTerms.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dictionary Terms */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold" data-testid="text-terms-title">
              Термины и определения
            </h2>
          </div>
          
          {filteredTerms.length > 0 ? (
            <div className="space-y-6">
              {filteredTerms.map((term) => (
                <Card key={term.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold" data-testid={`text-term-${term.id}-name`}>
                            {term.term}
                          </h3>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" data-testid={`text-term-${term.id}-category`}>
                            {term.category}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Hash className="w-4 h-4 mr-1" />
                          <span data-testid={`text-term-${term.id}-etymology`}>{term.etymology}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Quote className="w-5 h-5 text-gray-400 mb-2" />
                      <p className="text-lg text-gray-700 leading-relaxed pl-6" data-testid={`text-term-${term.id}-definition`}>
                        {term.definition}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Связанные термины:</h4>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((relatedTerm, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                            data-testid={`text-term-${term.id}-related-${index}`}
                          >
                            {relatedTerm}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                      <div>
                        <h4 className="font-semibold mb-2">Автор концепции:</h4>
                        <p className="text-gray-600" data-testid={`text-term-${term.id}-author`}>
                          {term.author}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Основные источники:</h4>
                        <ul className="text-gray-600 space-y-1">
                          {term.sources.map((source, index) => (
                            <li key={index} className="flex items-start" data-testid={`text-term-${term.id}-source-${index}`}>
                              <ExternalLink className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{source}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg" data-testid="text-no-terms">
                  По вашему запросу термины не найдены.
                </p>
                <p className="text-gray-500 mt-2" data-testid="text-search-terms-suggestion">
                  Попробуйте изменить параметры поиска или выбрать другую категорию.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Contributing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4" data-testid="text-contribute-title">
                Участие в развитии словаря
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto" data-testid="text-contribute-description">
                Словарь постоянно пополняется новыми терминами и уточняется. 
                Если вы хотите предложить новый термин или уточнить существующее определение, 
                свяжитесь с редакционной коллегией.
              </p>
              <Button data-testid="button-contribute">
                Предложить термин
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
