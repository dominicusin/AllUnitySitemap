import { ReactNode } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  linkText?: string;
  className?: string;
}

export function SectionCard({ 
  title, 
  description, 
  href, 
  icon, 
  linkText = "Подробнее",
  className 
}: SectionCardProps) {
  return (
    <Card className={cn(
      "hover:shadow-md transition-shadow border border-gray-100",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {icon && (
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold" data-testid={`text-${title.toLowerCase().replace(/\s+/g, '-')}-title`}>
            {title}
          </h3>
        </div>
        <p className="text-gray-600 mb-4" data-testid={`text-${title.toLowerCase().replace(/\s+/g, '-')}-description`}>
          {description}
        </p>
        <Link 
          href={href} 
          className="text-accent hover:text-emerald-700 font-medium inline-flex items-center transition-colors"
          data-testid={`link-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {linkText} <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
