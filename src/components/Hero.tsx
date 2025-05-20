
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-candy-accent/30 to-white">
      {/* Background pattern */}
<div className="absolute inset-0 z-0 opacity-50 bg-[url('/hero.jpg')] bg-repeat bg-center bg-cover order-1 lg:order-2 animate-slide-from-right"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/6 w-24 h-24 rounded-full bg-candy-primary/10 animate-float" style={{animationDelay: '0.9s'}}></div>
      <div className="absolute bottom-1/3 left-1/6 w-16 h-16 rounded-full bg-candy-secondary/20 animate-float" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-candy-accent/30 animate-float" style={{animationDelay: '0.8s'}}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-candy-dark leading-tight">
              Vi packar, sorterar och monterar
            </h1>
            <p className="text-xl mb-8 text-gray-600 max-w-md">
              Snabbt, säkert och kostnadseffektivt
            </p>
            <Button asChild className="group bg-candy-primary hover:bg-candy-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-md transition-all">
              <Link to="/kontakt" className="flex items-center gap-2">
                Kontakta oss 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <div className="mt-10 flex items-center">
              <Sparkles className="h-5 w-5 text-candy-primary mr-2" />
              <p className="text-sm text-gray-600 italic">Professionell och pålitlig service sedan 2010</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
