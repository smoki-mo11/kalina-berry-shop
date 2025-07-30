import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Star, Heart } from "lucide-react";
import strawberryImg from "@/assets/strawberry.jpg";
import raspberryImg from "@/assets/raspberry.jpg";

const Products = () => {
  const products = [
    {
      name: "Клубника",
      image: strawberryImg,
      description: "Сладкая и ароматная клубника, выращенная без химикатов. Идеальна для еды в свежем виде, варенья и десертов.",
      features: ["Экологически чистая", "Высокое качество", "Собрана в день доставки"],
      price: "от 300₽/кг",
      color: "strawberry"
    },
    {
      name: "Малина",
      image: raspberryImg,
      description: "Нежная и сочная малина с неповторимым вкусом. Богата витаминами и полезными веществами.",
      features: ["Натуральная", "Без пестицидов", "Свежесобранная"],
      price: "от 400₽/кг",
      color: "raspberry"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Наша продукция
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свежие ягоды высочайшего качества, выращенные с любовью и заботой
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-berry transition-all duration-300 border-2 hover:border-primary/20">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${product.color} text-white`}>
                    <Heart className="h-4 w-4 mr-1" />
                    Свежее
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span className={`text-${product.color}`}>{product.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </CardTitle>
                <CardDescription className="text-lg">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Преимущества:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full bg-${product.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-foreground">
                    {product.price}
                  </div>
                  <Button 
                    variant="berry"
                    onClick={() => window.open('tel:+79212619000', '_self')}
                  >
                    <Phone className="h-4 w-4" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;