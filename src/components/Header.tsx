import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { motion } from 'framer-motion';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    ,
    { name: "Pricing", href: "/pricing" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className={cn(
        "rounded-2xl transition-all duration-500 backdrop-blur-md border",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 shadow-2xl border-gray-200 dark:border-gray-800"
          : "bg-white/70 dark:bg-gray-900/70 shadow-lg border-gray-100 dark:border-gray-700"
      )}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-gradient-to-r from-pink-400 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-600 transition-all">
                <img
                  src={logo}
                  alt="LexionTech Logo"
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                LexionTech
              </span>
            </Link>

            {/* Desktop Navigation with Indicators */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group",
                    location.pathname === item.href
                      ? "text-white bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {item.name}
                  {location.pathname !== item.href && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
           

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-xl"
            >
              <div className="relative w-6 h-6">
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-current transition-transform duration-300",
                  isMenuOpen ? "rotate-45 top-3" : "top-1"
                )} />
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-current transition-opacity duration-300 top-3",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )} />
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-current transition-transform duration-300",
                  isMenuOpen ? "-rotate-45 top-3" : "top-5"
                )} />
              </div>
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 py-4">
              <nav className="grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-semibold transition-all",
                      location.pathname === item.href
                        ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;