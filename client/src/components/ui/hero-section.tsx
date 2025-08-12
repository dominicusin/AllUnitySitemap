import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({ title, subtitle, children, className }: HeroSectionProps) {
  return (
    <section className={cn(
      "bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-balance" data-testid="text-hero-title">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto text-balance" data-testid="text-hero-subtitle">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
