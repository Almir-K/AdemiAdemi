
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-candy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Package className="h-6 w-6 text-candy-secondary" />
            <span className="font-bold text-xl">AB Ademi & Ademi</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-0">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Hem</Link>
            <Link to="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>© 2010 AB Ademi & Ademi. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
