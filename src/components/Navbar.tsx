
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package, Home, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinkClass = (path: string) => {
    return cn(
      "relative px-3 py-2 inline-block font-medium transition-colors",
      "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-candy-primary after:origin-bottom-right after:transition-transform after:duration-300",
      location.pathname === path ? 
        "text-candy-primary after:scale-x-100" : 
        "text-gray-700 hover:text-candy-primary hover:after:scale-x-100 hover:after:origin-bottom-left"
    );
  };

  return (
   <nav 
  className={cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled 
      ? 'bg-purple-500/50 backdrop-blur-sm shadow-md py-3' 
      : 'bg-purple-500/10 py-5'
  )}
>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Package className="h-6 w-6 text-candy-primary" />
          <span className="font-bold text-xl text-candy-dark">AB Ademi & Ademi</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass("/")}>
            <Home className="h-4 w-4 inline-block mr-1" />
            <span>Hem</span>
          </Link>
          
          <Link to="/kontakt" className={navLinkClass("/kontakt")}>
            <Mail className="h-4 w-4 inline-block mr-1" />
            <span>Kontakt</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700 hover:text-candy-primary" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center py-2 text-gray-700 hover:text-candy-primary"
              onClick={closeMobileMenu}
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Hem</span>
            </Link>
            
            <Link 
              to="/kontakt" 
              className="flex items-center py-2 text-gray-700 hover:text-candy-primary"
              onClick={closeMobileMenu}
            >
              <Mail className="h-5 w-5 mr-2" />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
