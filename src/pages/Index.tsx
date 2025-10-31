import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold text-primary">КлиматПро</div>
          <nav className="hidden md:flex gap-8">
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-secondary leading-tight">
              Профессиональная установка <span className="text-primary">канальных кондиционеров</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Комфортный климат в каждом помещении. Гарантия на оборудование и монтаж до 5 лет
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Гарантия до 5 лет",
                description: "Полная гарантия на оборудование и все монтажные работы",
              },
              {
                icon: "Award",
                title: "Опыт 15+ лет",
                description: "Более 500 успешно реализованных проектов по всей России",
              },
              {
                icon: "Clock",
                title: "Монтаж за 1-2 дня",
                description: "Быстрая установка без ущерба качеству работ",
              },
              {
                icon: "Users",
                title: "Сертифицированные специалисты",
                description: "Команда профессионалов с официальными сертификатами",
              },
              {
                icon: "Wrench",
                title: "Бесплатное обслуживание",
                description: "Первый год обслуживания и диагностика в подарок",
              },
              {
                icon: "BadgeCheck",
                title: "Официальный партнер",
                description: "Работаем напрямую с ведущими производителями",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "Wind",
                title: "Установка канальных кондиционеров",
                description: "Проектирование и монтаж систем любой сложности для жилых и коммерческих помещений",
                features: ["Расчет мощности", "3D-проектирование", "Скрытый монтаж", "Пуско-наладка"],
              },
              {
                icon: "Settings",
                title: "Обслуживание и ремонт",
                description: "Профилактика, диагностика и ремонт систем кондиционирования всех типов",
                features: ["Чистка фильтров", "Заправка фреоном", "Замена запчастей", "Диагностика 24/7"],
              },
              {
                icon: "Thermometer",
                title: "Системы вентиляции",
                description: "Комплексные решения для обеспечения свежего воздуха и комфортного микроклимата",
                features: ["Приточная вентиляция", "Рекуперация", "Очистка воздуха", "Автоматизация"],
              },
              {
                icon: "Zap",
                title: "Автоматизация климата",
                description: "Умные системы управления климатом с удаленным доступом",
                features: ["Датчики температуры", "Управление со смартфона", "Расписания работы", "Интеграция с умным домом"],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Как мы работаем
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Консультация и замер",
                description: "Выезд специалиста, осмотр объекта, расчет необходимой мощности оборудования",
              },
              {
                number: "02",
                title: "Проектирование системы",
                description: "Разработка технического проекта с учетом всех особенностей помещения",
              },
              {
                number: "03",
                title: "Согласование и договор",
                description: "Утверждение проекта, подписание договора с фиксированной стоимостью",
              },
              {
                number: "04",
                title: "Монтажные работы",
                description: "Установка оборудования, прокладка коммуникаций, скрытый монтаж воздуховодов",
              },
              {
                number: "05",
                title: "Пуско-наладка",
                description: "Тестирование системы, настройка параметров, обучение пользователя",
              },
              {
                number: "06",
                title: "Гарантийное обслуживание",
                description: "Бесплатное обслуживание первый год, круглосуточная поддержка",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-heading font-bold text-2xl">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Прозрачные цены
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Стоимость зависит от площади помещения, типа оборудования и сложности монтажа
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "от 85 000 ₽",
                description: "Для квартир до 70 м²",
                features: [
                  "Канальный кондиционер до 7 кВт",
                  "Монтаж оборудования",
                  "Воздуховоды до 15 м",
                  "Пуско-наладка",
                  "Гарантия 3 года",
                ],
              },
              {
                name: "Стандарт",
                price: "от 150 000 ₽",
                description: "Для квартир до 120 м²",
                popular: true,
                features: [
                  "Канальный кондиционер до 12 кВт",
                  "Полный комплекс монтажа",
                  "Воздуховоды до 30 м",
                  "Автоматизация",
                  "Гарантия 5 лет",
                  "Бесплатное обслуживание 1 год",
                ],
              },
              {
                name: "Премиум",
                price: "от 250 000 ₽",
                description: "Для домов и больших квартир",
                features: [
                  "Мультизональная система",
                  "Индивидуальное проектирование",
                  "Умное управление климатом",
                  "Премиум оборудование",
                  "Гарантия 7 лет",
                  "Обслуживание 2 года в подарок",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-accent scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-heading font-bold mb-2 text-secondary">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Наши работы
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Квартира 85 м²", location: "Москва, ЖК Лайф", system: "Канальная система 9 кВт" },
              { title: "Загородный дом", location: "Московская область", system: "Мультизональная VRF" },
              { title: "Офис 200 м²", location: "Москва-Сити", system: "2 канальных блока" },
              { title: "Пентхаус 150 м²", location: "Москва, Патриаршие", system: "Премиум система Daikin" },
              { title: "Коттедж 250 м²", location: "Рублевка", system: "Комплексная климатизация" },
              { title: "Квартира 120 м²", location: "СПб, Новая Голландия", system: "Канальная + вентиляция" },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-primary/40" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-heading font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                  <p className="text-sm text-primary font-medium">{project.system}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Александр Петров",
                role: "Владелец квартиры",
                text: "Отличная работа! Установили канальник за 2 дня, все чисто и аккуратно. Теперь во всей квартире комфортная температура.",
                rating: 5,
              },
              {
                name: "Елена Соколова",
                role: "Управляющая офисом",
                text: "Профессиональный подход на всех этапах. Особенно порадовала гарантия и первый год бесплатного обслуживания.",
                rating: 5,
              },
              {
                name: "Дмитрий Волков",
                role: "Владелец загородного дома",
                text: "Сделали сложную систему для дома 300 м². Работает идеально, управление через телефон очень удобное.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-4 text-secondary">
              Получить консультацию
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </p>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <p className="font-semibold">Телефон</p>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@klimatpro.ru</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <p className="font-semibold">Адрес</p>
                <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">КлиматПро</h3>
              <p className="text-white/70 text-sm">
                Профессиональная установка и обслуживание систем кондиционирования с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Установка кондиционеров</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вентиляция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоматизация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@klimatpro.ru</li>
                <li>Москва, ул. Примерная, 1</li>
                <li className="pt-2">
                  <div className="flex gap-3">
                    <a href="#" className="hover:text-white transition-colors">
                      <Icon name="Instagram" size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <Icon name="Youtube" size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <Icon name="MessageCircle" size={20} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 КлиматПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
