import { Button } from "@/components/ui/button";
import heroBlueprint from "@/assets/hero-blueprint.jpg";

interface HeroVariantAProps {
  onCtaClick: () => void;
}

// Version A: Original Professional/Minimal Design
export const HeroVariantA = ({ onCtaClick }: HeroVariantAProps) => {
  return (
    <section id="hero" className="bg-primary text-primary-foreground blueprint-grid relative overflow-hidden pt-28">
      <div className="container grid md:grid-cols-2 gap-10 items-center min-h-[80vh]">
        <div className="animate-enter">
          <p className="uppercase tracking-[0.35em] text-sm text-accent/80">Minimal Blueprint</p>
          <h1 className="font-heading title-intersect uppercase tracking-widest text-5xl md:text-7xl mt-3">
            The Ottoman Revolution
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-prose">
            Engineering Portfolio — structured like a technical blueprint: clean lines, precise thinking, and attention to detail.
          </p>
          <div className="mt-8 flex gap-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={onCtaClick}
            >
              Explore Portfolio
            </Button>
            <Button variant="outline" size="lg">
              About Me
            </Button>
          </div>
        </div>
        <div className="relative max-md:order-first">
          <img 
            src={heroBlueprint} 
            alt="Blueprint wireframe cityscape" 
            className="w-full h-auto rounded-lg border border-accent/30 shadow-sm animate-fade-in" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};