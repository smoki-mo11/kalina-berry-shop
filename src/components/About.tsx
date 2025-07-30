import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Award, Truck, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-leaf-green" />,
      title: "Экологично",
      description: "Выращиваем без химических удобрений и пестицидов в экологически чистом районе Калининградской области"
    },
    {
      icon: <Award className="h-8 w-8 text-strawberry" />,
      title: "Качество",
      description: "Строгий контроль качества на всех этапах выращивания и сбора урожая"
    },
    {
      icon: <Truck className="h-8 w-8 text-raspberry" />,
      title: "Свежесть",
      description: "Доставляем ягоды в день сбора, сохраняя максимум вкуса и полезных веществ"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "С любовью",
      description: "Семейная ферма с многолетним опытом и страстью к выращиванию лучших ягод"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            О нашей ферме
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы - семейная ферма в Калининградской области, которая вот уже много лет 
            выращивает самые вкусные и полезные ягоды. Наша миссия - дарить людям 
            радость от настоящего вкуса природы.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-nature transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Почему выбирают нас?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">🌱 Натуральное выращивание</h4>
              <p className="text-muted-foreground">
                Используем только органические методы выращивания, заботимся о почве и экосистеме.
                Никаких химических добавок - только природная сила земли.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">🍓 Уникальные сорта</h4>
              <p className="text-muted-foreground">
                Выращиваем лучшие сорта клубники и малины, адаптированные к климату региона.
                Каждая ягода - это результат многолетней селекционной работы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;