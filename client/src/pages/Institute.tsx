import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scale, 
  Type, 
  Calculator, 
  Landmark, 
  Gavel, 
  Music, 
  Atom, 
  GraduationCap,
  BookOpen,
  Users,
  Globe
} from "lucide-react";

const disciplines = [
  { 
    name: "Этика", 
    icon: <Scale className="w-8 h-8 text-primary" />, 
    description: "Моральные принципы и философская этика в контексте интегрального подхода",
    details: "Исследование этических систем и их интеграция в современную философию."
  },
  { 
    name: "Филология", 
    icon: <Type className="w-8 h-8 text-primary" />, 
    description: "Язык, литература и текстология",
    details: "Изучение языковых структур и литературных произведений через призму интегрального анализа."
  },
  { 
    name: "Математика", 
    icon: <Calculator className="w-8 h-8 text-primary" />, 
    description: "Математические основы философии",
    details: "Применение математических методов в философских исследованиях."
  },
  { 
    name: "История", 
    icon: <Landmark className="w-8 h-8 text-primary" />, 
    description: "Исторические исследования и анализ",
    details: "Интегральный подход к пониманию исторических процессов и их закономерностей."
  },
  { 
    name: "Право", 
    icon: <Gavel className="w-8 h-8 text-primary" />, 
    description: "Правовые основы и юриспруденция",
    details: "Изучение правовых систем с позиций интегральной философии."
  },
  { 
    name: "Музыкальная лаборатория", 
    icon: <Music className="w-8 h-8 text-primary" />, 
    description: "Исследования музыки и звука",
    details: "Интегральный анализ музыкальных форм и их влияния на сознание."
  },
  { 
    name: "Физическая лаборатория", 
    icon: <Atom className="w-8 h-8 text-primary" />, 
    description: "Физические исследования и эксперименты",
    details: "Интеграция физических принципов с философскими концепциями."
  },
  { 
    name: "Школа", 
    icon: <GraduationCap className="w-8 h-8 text-primary" />, 
    description: "Образовательные программы",
    details: "Разработка интегральных образовательных методик и программ."
  },
];

const instituteFeatures = [
  {
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    title: "Исследования",
    description: "Фундаментальные и прикладные исследования в области интегральной философии"
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Сообщество",
    description: "Объединение ученых, философов и исследователей со всего мира"
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Глобальность",
    description: "Международное сотрудничество и обмен знаниями"
  }
];

export default function Institute() {
  return (
    <div>
      <HeroSection 
        title="Институт интегрального знания" 
        subtitle="Синтез научного знания для познания единой реальности"
      />

      {/* Institute Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-institute-overview-title">
              Миссия института
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="text-institute-mission">
              Институт интегрального знания (ИИН) представляет собой уникальную исследовательскую 
              организацию, целью которой является синтез всех областей человеческого знания в 
              единую когерентную систему понимания реальности. Мы стремимся преодолеть разрыв 
              между различными дисциплинами и создать новую парадигму познания.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {instituteFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4" data-testid={`text-feature-${index}-title`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600" data-testid={`text-feature-${index}-description`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Disciplines */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-disciplines-title">
              Академические дисциплины
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-disciplines-description">
              Исследовательские направления и образовательные программы института
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disciplines.map((discipline, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {discipline.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3" data-testid={`text-discipline-${index}-name`}>
                        {discipline.name}
                      </h3>
                      <p className="text-gray-600 mb-3" data-testid={`text-discipline-${index}-description`}>
                        {discipline.description}
                      </p>
                      <p className="text-sm text-gray-500" data-testid={`text-discipline-${index}-details`}>
                        {discipline.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-research-title">
              Основные направления исследований
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-research-theory-title">
                  Теоретические исследования
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li data-testid="text-research-item-1">• Разработка интегральной методологии</li>
                  <li data-testid="text-research-item-2">• Философские основания единого знания</li>
                  <li data-testid="text-research-item-3">• Онтологические и эпистемологические вопросы</li>
                  <li data-testid="text-research-item-4">• Этические аспекты интегрального подхода</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4" data-testid="text-research-applied-title">
                  Прикладные исследования
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li data-testid="text-research-applied-1">• Интегральная педагогика и образование</li>
                  <li data-testid="text-research-applied-2">• Применение в медицине и психологии</li>
                  <li data-testid="text-research-applied-3">• Социальные и экономические модели</li>
                  <li data-testid="text-research-applied-4">• Технологические инновации</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
