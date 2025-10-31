import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("residential");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Wind" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AirFlow Pro
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">Решения</a>
              <a href="#why" className="text-sm font-medium hover:text-primary transition-colors">Почему мы</a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Проекты</a>
              <a href="#guarantee" className="text-sm font-medium hover:text-primary transition-colors">Гарантии</a>
              <Button className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="Phone" size={16} className="mr-2" />
                8 800 555-35-35
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-accent/10 text-accent border-accent/20">
              ⚡ Монтаж под ключ за 24 часа
            </Badge>
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              Канальные системы <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Скрытая установка премиум-класса. Управление климатом в каждой комнате. 
              Гарантия результата и 7 лет обслуживания в подарок
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-10 py-7 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Получить расчёт за 5 минут
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-7 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-secondary" />
                <span>500+ установок</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-secondary" />
                <span>Сертификат ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-secondary" />
                <span>Официальный дилер Daikin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-4">
              Решения для любых задач
            </h2>
            <p className="text-muted-foreground text-lg">Выберите тип помещения</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={activeTab === "residential" ? "default" : "outline"}
              onClick={() => setActiveTab("residential")}
              className={activeTab === "residential" ? "bg-gradient-to-r from-primary to-secondary" : ""}
            >
              <Icon name="Home" size={18} className="mr-2" />
              Квартиры и дома
            </Button>
            <Button
              variant={activeTab === "commercial" ? "default" : "outline"}
              onClick={() => setActiveTab("commercial")}
              className={activeTab === "commercial" ? "bg-gradient-to-r from-primary to-secondary" : ""}
            >
              <Icon name="Building2" size={18} className="mr-2" />
              Офисы и бизнес
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activeTab === "residential" ? (
              <>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="h-56 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Home" size={80} className="text-primary/30" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-3">Квартиры 60-150 м²</h3>
                    <p className="text-muted-foreground mb-6">
                      Идеальное решение для современных квартир. Один внутренний блок обеспечивает климат-контроль всех комнат
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Скрытый монтаж в потолке",
                        "Независимые зоны для каждой комнаты",
                        "Бесшумная работа от 19 дБ",
                        "Экономия до 40% электроэнергии"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="Sparkles" size={18} className="text-secondary flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-primary">от 180 000 ₽</span>
                      <span className="text-muted-foreground">под ключ</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Подобрать систему
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="h-56 bg-gradient-to-br from-secondary/20 to-primary/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Castle" size={80} className="text-secondary/30" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-3">Загородные дома</h3>
                    <p className="text-muted-foreground mb-6">
                      Мультизональные VRF-системы для больших площадей. До 64 внутренних блоков на один наружный
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Поэтажное зонирование",
                        "Одновременно охлаждение и обогрев",
                        "Управление через приложение",
                        "Интеграция с умным домом"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="Sparkles" size={18} className="text-secondary flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-primary">от 450 000 ₽</span>
                      <span className="text-muted-foreground">под ключ</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Заказать проект
                    </Button>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="h-56 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Building2" size={80} className="text-primary/30" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-3">Офисы до 500 м²</h3>
                    <p className="text-muted-foreground mb-6">
                      Комплексная климатизация офисных помещений с учетом санитарных норм и требований
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Приточно-вытяжная вентиляция",
                        "Зонирование по кабинетам",
                        "Фильтрация и увлажнение",
                        "Минимальные затраты на обслуживание"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="Sparkles" size={18} className="text-secondary flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-primary">от 320 000 ₽</span>
                      <span className="text-muted-foreground">с НДС</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Получить КП
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="h-56 bg-gradient-to-br from-secondary/20 to-primary/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Store" size={80} className="text-secondary/30" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-3">Торговые площади</h3>
                    <p className="text-muted-foreground mb-6">
                      Мощные системы для магазинов, ресторанов, фитнес-центров с высокой проходимостью
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Повышенная производительность",
                        "Быстрое охлаждение больших объемов",
                        "Работа в режиме 24/7",
                        "Гарантия производителя 5 лет"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Icon name="Sparkles" size={18} className="text-secondary flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-primary">от 580 000 ₽</span>
                      <span className="text-muted-foreground">с НДС</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Консультация инженера
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="why" className="py-24 bg-gradient-to-b from-white to-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-4">
              Почему мы — лучший выбор
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 15 лет создаём идеальный микроклимат в домах и офисах
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: "Trophy",
                color: "text-accent",
                bg: "bg-accent/10",
                title: "№1 в Москве",
                stat: "2023-2024",
                desc: "По объёму установленных систем среди частных компаний"
              },
              {
                icon: "Shield",
                color: "text-primary",
                bg: "bg-primary/10",
                title: "Гарантия 7 лет",
                stat: "100%",
                desc: "На оборудование и монтажные работы с бесплатным ТО"
              },
              {
                icon: "Users",
                color: "text-secondary",
                bg: "bg-secondary/10",
                title: "Команда PRO",
                stat: "25 человек",
                desc: "Сертифицированные инженеры и монтажники"
              },
              {
                icon: "Clock",
                color: "text-accent",
                bg: "bg-accent/10",
                title: "Быстрый старт",
                stat: "24 часа",
                desc: "От заявки до начала монтажа при наличии материалов"
              }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all border-2 hover:border-primary/30">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={item.icon} size={32} className={item.color} />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-4">
              Реализованные проекты
            </h2>
            <p className="text-muted-foreground text-lg">Фотографии реальных объектов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { name: "ЖК «Остров», 120 м²", type: "Мультизона VRV", power: "14 кВт", time: "2 дня" },
              { name: "Особняк на Рублёвке", type: "Канальная система", power: "28 кВт", time: "5 дней" },
              { name: "Офис IT-компании", type: "4 канальных блока", power: "32 кВт", time: "3 дня" },
              { name: "Пентхаус 180 м²", type: "Премиум Daikin", power: "18 кВт", time: "3 дня" },
              { name: "Фитнес-клуб 400 м²", type: "Коммерческая VRF", power: "45 кВт", time: "7 дней" },
              { name: "Таунхаус 220 м²", type: "2-зонная система", power: "22 кВт", time: "4 дня" }
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon name="Image" size={64} className="text-primary/20" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary border-0 shadow-lg">
                      <Icon name="Zap" size={14} className="mr-1" />
                      {project.power}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.type}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>Установка: {project.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantee" className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-6">
              Гарантии и обязательства
            </h2>
            <p className="text-xl text-white/90">
              Мы уверены в качестве и берём на себя все риски
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "FileCheck",
                title: "Договор с фиксацией",
                points: ["Цена не изменится", "Сроки — в договоре", "Штрафы за срыв сроков"]
              },
              {
                icon: "ShieldCheck",
                title: "Гарантия 7 лет",
                points: ["На оборудование", "На монтажные работы", "Бесплатное ТО 1 год"]
              },
              {
                icon: "Headphones",
                title: "Поддержка 24/7",
                points: ["Выезд в день обращения", "Горячая линия", "Удалённая диагностика"]
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-2 text-sm text-white/90">
                        <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-heading font-bold mb-4">
                Получить расчёт стоимости
              </h2>
              <p className="text-muted-foreground text-lg">
                Ответим в течение 15 минут. Выезд инженера — бесплатно
              </p>
            </div>

            <Card className="border-2 shadow-2xl">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" className="h-12" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Площадь помещения (м²)</label>
                  <Input placeholder="Например: 85" className="h-12" />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Input placeholder="Квартира в новостройке, потолки 3м" className="h-12" />
                </div>
                <Button className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Получить расчёт за 5 минут
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <p className="font-semibold mb-1">Офис</p>
                <p className="text-sm text-muted-foreground">Москва, Ленинский пр-т, 38А</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <p className="font-semibold mb-1">Телефон</p>
                <p className="text-sm text-muted-foreground">8 800 555-35-35</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-sm text-muted-foreground">info@airflow-pro.ru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Wind" size={24} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold">AirFlow Pro</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Профессиональная установка климатического оборудования с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Канальные системы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VRF системы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вентиляция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обслуживание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-lg">Мы в соцсетях</h4>
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
              <p className="text-sm text-gray-400">ИНН: 7701234567<br />ОГРН: 1037739123456</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
            © 2024 AirFlow Pro. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
