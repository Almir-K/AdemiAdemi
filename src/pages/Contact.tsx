
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Initialize the map iframe after component mounts
    setMapLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-candy-primary/10 to-candy-accent/20 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4 text-candy-dark">Kontakta oss</h1>
            <div className="w-20 h-1 bg-candy-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Har du frågor om våra tjänster? Kontakta oss så hjälper vi dig!
            </p>
          </div>
        </div>
        
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-8 text-candy-dark">Kontaktuppgifter</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-full bg-candy-accent text-candy-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-candy-dark">Adress</h3>
                      <p className="text-gray-600">Diabasgatan 15, 254 68 Helsingborg</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-full bg-candy-accent text-candy-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-candy-dark">Telefon</h3>
                      <p className="text-gray-600">073-652 89 34</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-full bg-candy-accent text-candy-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-candy-dark">E-post</h3>
                      <p className="text-gray-600">info@ademiademi.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-[450px] rounded-xl overflow-hidden shadow-xl border border-gray-200 order-1 md:order-2">
                {mapLoaded && (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.0408303812893!2d12.748073277006442!3d56.03216997066792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3dd5ccc58a5%3A0xf1e9e0f0d9c31239!2sDiabasgatan%2015%2C%20254%2068%20Helsingborg!5e0!3m2!1sen!2sse!4v1716134400000!5m2!1sen!2sse" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
