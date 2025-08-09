import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Cpu, Building2, Wrench, Github, Linkedin } from "lucide-react";
import heroBlueprint from "@/assets/hero-blueprint.jpg";
import Header from "@/components/layout/Header";
import portrait from "@/assets/statesman-blueprint.jpg";
import turkeyFlag from "@/assets/turkey-flag.jpg";
import { useEffect, useState } from "react";

const projects = [
  { id: 1, title: "Parametric Bridge", image: heroBlueprint, desc: "Algorithmic design with finite element analysis and modular prefabrication." },
  { id: 2, title: "High-Rise Core", image: heroBlueprint, desc: "Seismic core optimization and outrigger placement study." },
  { id: 3, title: "Automated Plant", image: heroBlueprint, desc: "Digital twin of a robotic assembly line with energy telemetry." },
];

const Index = () => {
  const { toast } = useToast();
  const [showKababDialog, setShowKababDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowKababDialog(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleKababChoice = () => {
    window.location.href = "https://www.youtube.com/watch?v=hWOmuL11g8w";
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks! I will get back to you soon." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Ottoman Revolution — Engineer Blueprint Portfolio" description="Explore blueprint-inspired engineering work, services, and contact." canonical="/" />
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>

      {/* Kabab Popup Dialog */}
      <Dialog open={showKababDialog} onOpenChange={setShowKababDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">🥙 Do you want a kabab? 🥙</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4 justify-center mt-6">
            <Button size="lg" onClick={handleKababChoice}>
              Yes, I want kabab!
            </Button>
            <Button size="lg" variant="outline" onClick={handleKababChoice}>
              No, maybe later
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Header */}
      <Header />
      
      {/* Turkish Flags Display */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-40 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <img 
            key={i}
            src={turkeyFlag} 
            alt="Turkish Flag" 
            className="absolute w-20 h-14 opacity-90 animate-pulse"
            style={{
              left: `${(i % 5) * 20 + Math.random() * 10}%`,
              top: `${Math.floor(i / 5) * 25 + Math.random() * 10}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <section id="hero" className="bg-primary text-primary-foreground blueprint-grid relative overflow-hidden pt-28">
        <div className="container grid md:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <div className="animate-enter">
            <p className="uppercase tracking-[0.35em] text-sm text-accent/80">Minimal Blueprint</p>
            <h1 className="font-heading title-intersect uppercase tracking-widest text-5xl md:text-7xl mt-3">The Ottoman Revolution</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-prose">Engineering Portfolio — structured like a technical blueprint: clean lines, precise thinking, and attention to detail.</p>
            <div className="mt-8 flex gap-4">
              <Button variant="hero" size="lg">Explore Portfolio</Button>
              <Button variant="outline" size="lg">About Me</Button>
            </div>
          </div>
          <div className="relative max-md:order-first">
            <img src={heroBlueprint} alt="Blueprint wireframe cityscape" className="w-full h-auto rounded-lg border border-accent/30 shadow-sm animate-fade-in" loading="lazy" />
          </div>
        </div>
      </section>

      <main id="main" className="flex flex-col">
        {/* About */}
        <section id="about" className="py-20 bg-secondary">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading uppercase tracking-widest text-3xl mb-4">About Me</h2>
              <p className="text-muted-foreground max-w-prose">I’m John Smith, an engineer focused on structural systems, parametric design, and elegant problem solving. I translate complex constraints into pragmatic, buildable solutions — documented like blueprints and validated by data.</p>
            </div>
            <div className="relative">
              <img src={portrait} alt="Blueprint portrait illustration" className="w-full h-auto rounded-md border border-border" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-20 bg-primary text-primary-foreground blueprint-grid">
          <div className="container grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading uppercase tracking-widest text-2xl mb-3">Mission</h3>
              <p className="text-primary-foreground/85">Deliver robust, efficient, and human-centered engineering — merging craft and computation to create resilient forms that stand the test of time.</p>
            </div>
            <div className="md:border-l md:pl-10 border-accent/30">
              <h3 className="font-heading uppercase tracking-widest text-2xl mb-3">Vision</h3>
              <p className="text-primary-foreground/85">Blueprint a sustainable future where performance, elegance, and clarity align — and every line communicates purpose.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-background">
          <div className="container">
            <h2 className="font-heading uppercase tracking-widest text-3xl mb-10 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Building2 className="text-accent" />
                <h4 className="font-heading uppercase tracking-wider mt-4">Structural Design</h4>
                <p className="text-muted-foreground mt-2">Codes-compliant, performance-based design with clear documentation.</p>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Cpu className="text-accent" />
                <h4 className="font-heading uppercase tracking-wider mt-4">Parametric Modeling</h4>
                <p className="text-muted-foreground mt-2">Automation, digital twins, and optimization for speed and reliability.</p>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Wrench className="text-accent" />
                <h4 className="font-heading uppercase tracking-wider mt-4">Consulting</h4>
                <p className="text-muted-foreground mt-2">Peer reviews, value engineering, and constructability insight.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-20 bg-primary text-primary-foreground blueprint-grid">
          <div className="container">
            <h2 className="font-heading uppercase tracking-widest text-3xl mb-10 text-center">Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {["Alex Kim","Riley Chen","Samir Patel"].map((name)=> (
                <div key={name} className="text-center">
                  <img src="/placeholder.svg" alt={`${name} avatar`} className="mx-auto size-24 rounded-full border border-accent/40 bg-background object-cover" />
                  <p className="mt-4 font-semibold">{name}</p>
                  <p className="text-primary-foreground/70 text-sm">Engineer</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 bg-background">
          <div className="container">
            <h2 className="font-heading uppercase tracking-widest text-3xl mb-10 text-center">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map(p => (
                <Dialog key={p.id}>
                  <DialogTrigger asChild>
                    <button className="group relative overflow-hidden rounded-lg border">
                      <img src={p.image} alt={`${p.title} blueprint`} className="w-full h-56 object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors" />
                      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-0 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/70 backdrop-blur border-t">
                        <p className="font-semibold">{p.title}</p>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{p.title}</DialogTitle>
                    </DialogHeader>
                    <img src={p.image} alt={`${p.title} detailed blueprint`} className="w-full h-auto rounded-md border" />
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-secondary">
          <div className="container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-heading uppercase tracking-widest text-3xl mb-4">Contact</h2>
              <p className="text-muted-foreground mb-6">Let’s talk about your next project.</p>
              <form onSubmit={onSubmit} className="space-y-4">
                <Input required name="name" placeholder="Name" aria-label="Name" />
                <Input required name="email" type="email" placeholder="Email" aria-label="Email" />
                <Textarea required name="message" placeholder="Message" aria-label="Message" rows={5} />
                <Button type="submit" variant="default">Send Message</Button>
              </form>
            </div>
            <aside className="md:pl-8">
              <div className="rounded-lg border p-6">
                <p className="font-semibold">Contact Info</p>
                <p className="text-muted-foreground mt-2">email@example.com</p>
                <div className="flex gap-4 mt-4">
                  <a className="hover:text-primary" href="#" aria-label="GitHub"><Github /></a>
                  <a className="hover:text-primary" href="#" aria-label="LinkedIn"><Linkedin /></a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground blueprint-grid">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/a8a36a4a-c8c8-4a1b-80c0-919c24eca173.png" alt="CEZERIS logo" className="h-6 w-auto" />
            <span className="text-sm">© {new Date().getFullYear()} Ottoman Revolution</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
