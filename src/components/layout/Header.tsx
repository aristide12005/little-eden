import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "About",
  path: "/about"
}, {
  name: "Academics",
  path: "/programs"
}, {
  name: "Admissions",
  path: "/admissions"
}, {
  name: "Contact Us",
  path: "/contact"
}];
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/98 backdrop-blur-md shadow-soft py-2" : "bg-background/80 backdrop-blur-sm py-4"}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img alt="Little Eden School Logo" className="w-10 h-10 rounded-full object-cover transition-transform group-hover:scale-105" src="/lovable-uploads/af6f6bf4-9341-403b-862b-fff05989c501.png" />
          <span className="font-bold text-lg text-foreground hidden sm:block">
            Little Eden School
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-primary" : "text-foreground/70 hover:text-primary"}`}>
              {link.name}
            </Link>)}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 rounded-lg transition-colors hover:bg-secondary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-warm animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link, index) => <Link key={link.path} to={link.path} className={`px-4 py-3 rounded-lg font-medium transition-all ${location.pathname === link.path ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-secondary"}`} style={{
          animationDelay: `${index * 50}ms`
        }}>
                {link.name}
              </Link>)}
            <Button asChild className="mt-3">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </nav>
        </div>}
    </header>;
};