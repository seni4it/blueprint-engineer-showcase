import { Button } from "@/components/ui/button";
import heroBlueprint from "@/assets/hero-blueprint.jpg";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

interface HeroVariantBProps {
  onCtaClick: () => void;
}

// Version B: Bold/Modern Design with Different CTAs
export const HeroVariantB = ({ onCtaClick }: HeroVariantBProps) => {
  return (
    <section id="hero" className="bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden pt-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Revolutionary Engineering</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Build The Future
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Transform your vision into reality with cutting-edge engineering solutions that push boundaries
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-6 text-lg group"
              onClick={onCtaClick}
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Image with overlay stats */}
          <div className="relative max-w-5xl mx-auto">
            <img 
              src={heroBlueprint} 
              alt="Futuristic engineering visualization" 
              className="w-full h-auto rounded-2xl shadow-2xl border border-white/20" 
              loading="lazy" 
            />
            
            {/* Floating stats cards */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-accent">150+</div>
              <div className="text-sm text-white/70">Projects Completed</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-accent">99%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};