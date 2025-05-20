
import { Package, CakeSlice, Package2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Package className="h-16 w-16 text-white" />,
    title: "Paketering",
    description: "Vi paketerar alla typer av material enligt era önskemål – från små enheter till större presentförpackningar."
  },
  {
    icon: <CakeSlice className="h-16 w-16 text-white" />,
    title: "Sortering",
    description: "Effektiv sortering av olika typer av material, komponenter eller produkter – anpassat efter era specifika behov."
  },
  {
    icon: <Package2 className="h-16 w-16 text-white" />,
    title: "Montering",
    description: "Vi monterar kit, förpackningar och speciallösningar – färdiga att levereras eller användas direkt, oavsett tillfälle eller bransch."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-tr from-candy-light via-white to-candy-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-candy-dark">Våra tjänster</h2>
          <div className="w-20 h-1 bg-candy-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
AB Ademi & Ademi erbjuder professionella lösningar för packning, sortering och montering av olika typer av material – anpassat efter era behov.          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <div className="relative bg-gradient-to-r from-candy-primary to-candy-primary/80 h-40 flex items-center justify-center">
                <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-candy-dark">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
