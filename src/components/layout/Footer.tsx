import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Little Eden School"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-bold text-lg">Little Eden School</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Nurturing young minds with knowledge, compassion, and purpose in
              Nyakiriba, Rwanda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Academics", path: "/programs" },
                { name: "Admissions", path: "/admissions" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/70 hover:text-background text-sm transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Academics */}
          <div className="space-y-4">
            <h4 className="font-semibold">Academics</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/programs"
                className="text-background/70 hover:text-background text-sm transition-colors w-fit"
              >
                Nursery School
              </Link>
              <Link
                to="/programs"
                className="text-background/70 hover:text-background text-sm transition-colors w-fit"
              >
                Primary School
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-background/70">
                  Nyakiriba, Western Province, Rwanda
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/70">+250 787 999 646</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/70">
                  amaniimanishimwe6@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>
            &copy; {new Date().getFullYear()} Little Eden School. All rights
            reserved.
          </p>
          <p>Discipline · Work · Cleanliness · Success</p>
        </div>
      </div>
    </footer>
  );
};
