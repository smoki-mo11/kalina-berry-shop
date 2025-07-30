import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground">
            Готовы к заказу? Звоните прямо сейчас!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Phone className="h-6 w-6 text-strawberry" />
                Заказ по телефону
              </CardTitle>
              <CardDescription>
                Самый быстрый способ оформить заказ
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold mb-4 text-foreground">
                +7 921 261-90-00
              </div>
              <Button 
                variant="call" 
                size="xl"
                onClick={() => window.open('tel:+79212619000', '_self')}
                className="w-full"
              >
                <Phone className="h-5 w-5" />
                Позвонить сейчас
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-leaf-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Наше расположение</h3>
                    <p className="text-muted-foreground">
                      Калининградская область<br />
                      Экологически чистый район
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-strawberry mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Время работы</h3>
                    <p className="text-muted-foreground">
                      Ежедневно: 8:00 - 20:00<br />
                      Сезон: май - октябрь
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-raspberry mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Доставка</h3>
                    <p className="text-muted-foreground">
                      По Калининградской области<br />
                      Свежие ягоды в день сбора
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-card rounded-xl p-8 shadow-berry">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              🍓 Сезон свежих ягод уже начался! 🍓
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Не упустите возможность насладиться вкусом настоящих ягод. 
              Звоните и заказывайте прямо сейчас!
            </p>
            <Button 
              variant="berry" 
              size="xl"
              onClick={() => window.open('tel:+79212619000', '_self')}
            >
              <Phone className="h-6 w-6" />
              +7 921 261-90-00
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;