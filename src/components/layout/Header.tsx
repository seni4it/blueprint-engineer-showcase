import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <a href="/" aria-label="Home" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/a8a36a4a-c8c8-4a1b-80c0-919c24eca173.png"
              alt="CEZERIS logo"
              className="h-7 w-auto"
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-accent transition-colors" href="/">Home</a>
          <a className="hover:text-accent transition-colors" href="/projects">Projects</a>
          <a className="hover:text-accent transition-colors" href="/#services">Services</a>
          <a className="hover:text-accent transition-colors" href="/#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="blueprintOutline" size="sm">
            <a href="/projects" aria-label="Explore portfolio">Explore</a>
          </Button>
          <button className="md:hidden p-2 rounded-md border" aria-label="Open Menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
