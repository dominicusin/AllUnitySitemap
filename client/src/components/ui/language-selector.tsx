import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage, languageLabels } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import type { Language } from "@shared/schema";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
      <SelectTrigger className="w-32" data-testid="language-selector">
        <Languages className="w-4 h-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languageLabels).map(([lang, label]) => (
          <SelectItem key={lang} value={lang} data-testid={`language-${lang}`}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}