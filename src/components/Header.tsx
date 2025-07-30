import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-berry bg-clip-text text-transparent">
            �草莓 Ягодная Ферма
          </div>
        </div>
        
        <Button 
          variant="call" 
          size="lg"
          onClick={() => window.open('tel:+79212619000', '_self')}
          className="flex items-center gap-2"
        >
          <Phone className="h-5 w-5" />
          Позвонить
        </Button>
      </div>
    </header>
  );
};

export default Header;