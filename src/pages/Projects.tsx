import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, Hammer, Landmark, Layers, Ruler, Shield } from "lucide-react";
import heroBlueprint from "@/assets/hero-blueprint.jpg";
import modernHome from "@/assets/modern-home-blueprint.jpg";
import futuristicHome from "@/assets/futuristic-home-blueprint.jpg";
import floorplan from "@/assets/floorplan-blueprint.jpg";
import columnDetail from "@/assets/column-detail.jpg";

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{label}</div>
  </div>
);

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Projects — Ottoman Revolution Blueprint Portfolio"
        description="Blueprint-inspired engineering projects: modern homes, structural systems, and detailed plans."
        canonical="/projects"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground blueprint-grid relative overflow-hidden pt-24">
        <div className="container grid md:grid-cols-2 gap-10 items-center min-h-[60vh]">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-accent/80">Minimal Blueprint</p>
            <h1 className="font-heading title-intersect uppercase tracking-widest text-5xl md:text-7xl mt-3">Projects</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-prose">A curated selection of engineering work — documented with clarity and precision.</p>
            <div className="mt-8 flex gap-4">
              <Button variant="hero" size="lg">Start a Project</Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img src={heroBlueprint} alt="Blueprint wireframe cityscape" className="w-full h-auto rounded-lg border border-accent/30 shadow-sm" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Content row resembling brochure: About + Column image */}
      <section className="py-16 bg-secondary">
        <div className="container grid md:grid-cols-3 gap-8 items-stretch">
          <article className="md:col-span-2 bg-background rounded-lg border p-8">
            <h2 className="font-heading uppercase tracking-widest text-2xl mb-3">Our Company</h2>
            <p className="text-muted-foreground">We engineer pragmatic, elegant structures. From early feasibility to stamped drawings, our process is transparent and data-driven.</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat label="Since" value="2040" />
              <Stat label="Customers" value="40K" />
              <Stat label="Rating" value="5.0" />
            </div>
          </article>
          <aside className="bg-background rounded-lg border p-4 flex items-center justify-center">
            <img src={columnDetail} alt="Architectural column detail" className="rounded-md border"/>
          </aside>
        </div>
      </section>

      {/* Services + Mission/Vision twin cards */}
      <section className="py-6">
        <div className="container grid md:grid-cols-2 gap-8">
          <article className="rounded-lg border p-8">
            <h3 className="font-heading uppercase tracking-widest text-xl mb-6">Company Services</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Hammer className="text-accent" />
                <div>
                  <p className="font-medium">Design</p>
                  <p className="text-muted-foreground text-sm">Concept to construction documents</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Ruler className="text-accent" />
                <div>
                  <p className="font-medium">Plan</p>
                  <p className="text-muted-foreground text-sm">Analysis, modeling and coordination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-accent" />
                <div>
                  <p className="font-medium">Compliance</p>
                  <p className="text-muted-foreground text-sm">Code checks and peer review</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="text-accent" />
                <div>
                  <p className="font-medium">Documentation</p>
                  <p className="text-muted-foreground text-sm">Clear details and build notes</p>
                </div>
              </div>
            </div>
          </article>
          <article className="rounded-lg border p-8">
            <h3 className="font-heading uppercase tracking-widest text-xl mb-6">Mission & Vision</h3>
            <div className="grid gap-4">
              <div className="p-4 rounded-md bg-secondary">
                <p className="font-medium mb-1">Mission</p>
                <p className="text-muted-foreground text-sm">Create resilient, efficient structures that elevate human experience.</p>
              </div>
              <div className="p-4 rounded-md bg-secondary">
                <p className="font-medium mb-1">Vision</p>
                <p className="text-muted-foreground text-sm">Blueprint a sustainable future where clarity and elegance align.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="container">
          <h2 className="font-heading uppercase tracking-widest text-2xl mb-8 text-center">Selected Works</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <figure className="relative overflow-hidden rounded-lg border group">
              <img src={modernHome} alt="Modern home blueprint montage" className="w-full h-64 object-cover" loading="lazy" />
              <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-60 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-background/70 backdrop-blur border-t">
                <p className="font-medium">Modern Home</p>
                <Badge variant="secondary" className="mt-2">Residential</Badge>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-lg border group lg:col-span-2">
              <img src={futuristicHome} alt="Futuristic home design spread" className="w-full h-64 object-cover" loading="lazy" />
              <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-60 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-background/70 backdrop-blur border-t flex items-center justify-between">
                <p className="font-medium">Futuristic Home Design</p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Landmark size={16} />
                  <span>Concept</span>
                </div>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-lg border group lg:col-span-3">
              <img src={floorplan} alt="Floor plan sheet blueprint" className="w-full h-96 object-cover" loading="lazy" />
              <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-60 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-background/70 backdrop-blur border-t flex items-center justify-between">
                <div className="flex items-center gap-2"><Compass size={16} /><p className="font-medium">Minimalistic House Design</p></div>
                <Button size="sm" variant="outline">View Details</Button>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
