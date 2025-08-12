import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Menu, Infinity } from "lucide-react";

// Navigation will be made multilingual
const getNavigation = (t: (key: string) => string) => [
  { name: t('nav.home'), href: "/" },
  { name: t('nav.manifest'), href: "/manifest" },
  { name: t('nav.codex'), href: "/codex" },
  { name: t('nav.institute'), href: "/institute" },
  { name: t('nav.journal'), href: "/journal" },
  { name: t('nav.news'), href: "/news" },
  { name: t('nav.forum'), href: "/forum" },
  { name: t('nav.projects'), href: "/projects" },
  { name: t('nav.library'), href: "/library" },
  { name: t('nav.dictionary'), href: "/dictionary" },
];

export default function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  const navigation = getNavigation(t);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Infinity className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-primary">AllUnity</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  location === item.href
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search, Language Selector and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Input
                type="text"
                placeholder={t('common.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4"
                data-testid="input-search"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            </form>
            
            <LanguageSelector />
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        location === item.href
                          ? "text-primary"
                          : "text-secondary hover:text-primary"
                      }`}
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <form onSubmit={handleSearch} className="mt-6">
                    <Input
                      type="text"
                      placeholder={t('common.search')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      data-testid="input-mobile-search"
                    />
                  </form>
                  <div className="mt-6">
                    <LanguageSelector />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
