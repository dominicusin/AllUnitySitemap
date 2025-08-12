import { Link } from "wouter";
import { Infinity, Send, MessageCircle, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Основное",
    links: [
      { name: "Манифест", href: "/manifest" },
      { name: "Кодекс", href: "/codex" },
      { name: "Институт", href: "/institute" },
      { name: "История", href: "/institute" },
      { name: "Эмблема", href: "/institute" },
    ],
  },
  {
    title: "Сообщество",
    links: [
      { name: "Форум", href: "/forum" },
      { name: "Дискуссии", href: "/forum" },
      { name: "Новости", href: "/news" },
      { name: "Журнал", href: "/journal" },
      { name: "Библиотека", href: "/library" },
    ],
  },
  {
    title: "Проекты",
    links: [
      { name: "Неовсеединство", href: "/projects" },
      { name: "Интегралика", href: "/projects" },
      { name: "Единое знание", href: "/projects" },
      { name: "Интегральная медицина", href: "/projects" },
      { name: "Все проекты", href: "/projects" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Infinity className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold">AllUnity</span>
            </div>
            <p className="text-gray-300 mb-4">
              Интегральное сообщество объединяет конструктивные силы на основе принципов интегральной философии.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-vk"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Интегральное сообщество AllUnity. Все права защищены.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            Основано на принципах интегральной философии
          </p>
        </div>
      </div>
    </footer>
  );
}
