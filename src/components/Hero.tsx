import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import strawberryHero from "@/assets/strawberry-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${strawberryHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Свежая <span className="bg-gradient-berry bg-clip-text text-transparent">клубника</span>
          <br />
          и <span className="text-raspberry">малина</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Выращиваем самые вкусные и свежие ягоды в экологически чистых условиях 
          Калининградской области
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="berry" 
            size="xl"
            onClick={() => window.open('tel:+79212619000', '_self')}
            className="w-full sm:w-auto"
          >
            <Phone className="h-6 w-6" />
            Заказать: +7 921 261-90-00
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" />
          <span>Калининградская область</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;