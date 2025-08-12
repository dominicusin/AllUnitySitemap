import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  gradient?: string;
  linkText?: string;
  className?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  href, 
  icon = "infinity",
  gradient = "from-primary to-blue-600",
  linkText = "Подробнее",
  className 
}: ProjectCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[icon.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')] || Icons.Infinity;

  return (
    <Card className={cn(
      "hover:shadow-lg transition-shadow border border-gray-100",
      className
    )}>
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <div className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br",
            gradient
          )}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2" data-testid={`text-${title.toLowerCase().replace(/\s+/g, '-')}-title`}>
              {title}
            </h3>
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
