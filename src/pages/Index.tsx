import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState([{ id: 1, name: '', age: '' }]);
  const [activeSection, setActiveSection] = useState('home');

  const routes = [
    {
      name: 'Прекестулен',
      difficulty: 'Средняя',
      distance: '8 км',
      time: '4-5 часов',
      description: 'Знаменитая скала с видом на Люсе-фьорд'
    },
    {
      name: 'Язык Тролля',
      difficulty: 'Сложная',
      distance: '22 км',
      time: '10-12 часов',
      description: 'Живописный скальный выступ над озером Рингедалсватнет'
    },
    {
      name: 'Бессегген',
      difficulty: 'Средняя',
      distance: '14 км',
      time: '6-8 часов',
      description: 'Горный хребет между двумя озерами разных цветов'
    },
    {
      name: 'Рёмсдалсеггене',
      difficulty: 'Легкая',
      distance: '5 км',
      time: '2-3 часа',
      description: 'Панорамный вид на Ромсдальские Альпы'
    }
  ];

  const cabins = [
    {
      name: 'Хижина Гейрангер',
      capacity: '6 человек',
      price: '1200 NOK/ночь',
      amenities: ['Кухня', 'Душ', 'WiFi', 'Камин']
    },
    {
      name: 'Хижина Согнефьелль',
      capacity: '8 человек',
      price: '1500 NOK/ночь',
      amenities: ['Кухня', 'Сауна', 'Терраса', 'Парковка']
    },
    {
      name: 'Хижина Юнтунхеймен',
      capacity: '4 человека',
      price: '900 NOK/ночь',
      amenities: ['Кухня', 'Дровяная печь', 'Веранда']
    }
  ];

  const equipment = [
    { category: 'Одежда', items: ['Мембранная куртка', 'Термобелье', 'Трекинговые ботинки', 'Теплая шапка', 'Перчатки'] },
    { category: 'Снаряжение', items: ['Рюкзак 40-60л', 'Спальник', 'Коврик', 'Палатка', 'Трекинговые палки'] },
    { category: 'Еда и вода', items: ['Термос', 'Газовая горелка', 'Котелок', 'Фильтр для воды', 'Сухпайки'] },
    { category: 'Прочее', items: ['Аптечка', 'Карта и компас', 'Фонарик', 'Powerbank', 'Спички/зажигалка'] }
  ];

  const weatherData = [
    { location: 'Ставангер', temp: '12°C', condition: 'Облачно', wind: '15 км/ч' },
    { location: 'Берген', temp: '10°C', condition: 'Дождь', wind: '20 км/ч' },
    { location: 'Осло', temp: '14°C', condition: 'Ясно', wind: '10 км/ч' },
    { location: 'Тромсё', temp: '6°C', condition: 'Снег', wind: '25 км/ч' }
  ];

  const addGuest = () => {
    setGuests([...guests, { id: guests.length + 1, name: '', age: '' }]);
  };

  const removeGuest = (id: number) => {
    if (guests.length > 1) {
      setGuests(guests.filter(g => g.id !== id));
    }
  };

  const updateGuest = (id: number, field: 'name' | 'age', value: string) => {
    setGuests(guests.map(g => g.id === id ? { ...g, [field]: value } : g));
  };

  const handleBooking = () => {
    toast.success('Заявка отправлена! Мы свяжемся с вами для подтверждения.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" className="text-primary-foreground" size={32} />
              <h1 className="text-2xl font-bold text-primary-foreground font-heading">NorwayTrek</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'routes', 'booking', 'equipment', 'weather', 'maps', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-primary-foreground/90 hover:text-primary-foreground transition-colors capitalize ${
                    activeSection === section ? 'font-semibold' : ''
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'routes' ? 'Маршруты' :
                   section === 'booking' ? 'Бронирование' :
                   section === 'equipment' ? 'Снаряжение' :
                   section === 'weather' ? 'Погода' :
                   section === 'maps' ? 'Карты' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: 'url(https://cdn.poehali.dev/projects/80b25940-8177-481d-8761-e063fa8046f0/files/b18f0838-1965-4b41-accf-03ba6fd45bb9.jpg)',
                filter: 'brightness(0.7)'
              }}
            />
            <div className="relative z-10 text-center text-white px-4">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading animate-slide-up">
                Откройте для себя Норвегию
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Планируйте незабываемые походы по самым живописным местам Скандинавии
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                onClick={() => setActiveSection('routes')}
              >
                Выбрать маршрут
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </section>

          <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('routes')}>
                <CardHeader>
                  <Icon name="Map" className="text-primary mb-2" size={40} />
                  <CardTitle>Маршруты</CardTitle>
                  <CardDescription>Более 50 проверенных троп</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('booking')}>
                <CardHeader>
                  <Icon name="Home" className="text-primary mb-2" size={40} />
                  <CardTitle>Хижины</CardTitle>
                  <CardDescription>Уютное размещение в горах</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('equipment')}>
                <CardHeader>
                  <Icon name="Backpack" className="text-primary mb-2" size={40} />
                  <CardTitle>Снаряжение</CardTitle>
                  <CardDescription>Полный чек-лист для похода</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'routes' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 font-heading text-primary">Популярные маршруты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{route.name}</CardTitle>
                      <CardDescription>{route.description}</CardDescription>
                    </div>
                    <Badge variant={route.difficulty === 'Легкая' ? 'secondary' : route.difficulty === 'Средняя' ? 'default' : 'destructive'}>
                      {route.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <span>{route.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="text-primary" size={20} />
                      <span>{route.time}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Подробнее
                    <Icon name="ChevronRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'booking' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 font-heading text-primary">Бронирование хижин</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Доступные хижины</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cabins.map((cabin, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl">{cabin.name}</CardTitle>
                            <CardDescription className="mt-2">
                              <div className="flex items-center gap-2 mb-1">
                                <Icon name="Users" size={16} />
                                {cabin.capacity}
                              </div>
                              <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                                <Icon name="Wallet" size={16} />
                                {cabin.price}
                              </div>
                            </CardDescription>
                          </div>
                          <img 
                            src="https://cdn.poehali.dev/projects/80b25940-8177-481d-8761-e063fa8046f0/files/e5bea7e3-a86e-40e7-8b6d-4f1d7e9c2511.jpg"
                            alt={cabin.name}
                            className="w-32 h-24 object-cover rounded-md"
                          />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cabin.amenities.map((amenity, i) => (
                            <Badge key={i} variant="secondary">{amenity}</Badge>
                          ))}
                        </div>
                        <Button className="w-full">Забронировать</Button>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Выберите даты</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Гости</CardTitle>
                  <CardDescription>Добавьте информацию о путешественниках</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {guests.map((guest, index) => (
                    <div key={guest.id} className="space-y-2 p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Label className="font-semibold">Гость {index + 1}</Label>
                        {guests.length > 1 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeGuest(guest.id)}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        )}
                      </div>
                      <div>
                        <Label>Имя</Label>
                        <Input
                          placeholder="Введите имя"
                          value={guest.name}
                          onChange={(e) => updateGuest(guest.id, 'name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Возраст</Label>
                        <Input
                          type="number"
                          placeholder="Возраст"
                          value={guest.age}
                          onChange={(e) => updateGuest(guest.id, 'age', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" onClick={addGuest}>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить гостя
                  </Button>
                  <Button className="w-full" onClick={handleBooking}>
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'equipment' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-heading text-primary">Снаряжение для похода</h2>
              <img 
                src="https://cdn.poehali.dev/projects/80b25940-8177-481d-8761-e063fa8046f0/files/c60c771e-b037-4d34-8224-7424fddda507.jpg"
                alt="Снаряжение"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
              />
            </div>
            <div>
              <Tabs defaultValue="clothing" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="clothing">Одежда</TabsTrigger>
                  <TabsTrigger value="gear">Снаряжение</TabsTrigger>
                  <TabsTrigger value="food">Еда</TabsTrigger>
                  <TabsTrigger value="other">Прочее</TabsTrigger>
                </TabsList>
                {equipment.map((cat, index) => (
                  <TabsContent 
                    key={index} 
                    value={cat.category === 'Одежда' ? 'clothing' : 
                           cat.category === 'Снаряжение' ? 'gear' :
                           cat.category === 'Еда и вода' ? 'food' : 'other'}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{cat.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {cat.items.map((item, i) => (
                          <div key={i} className="flex items-center space-x-3 p-2 hover:bg-muted rounded-md transition-colors">
                            <Checkbox id={`${cat.category}-${i}`} />
                            <label
                              htmlFor={`${cat.category}-${i}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'weather' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 font-heading text-primary">Погода в регионах</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherData.map((data, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {data.location}
                    <Icon name="Cloud" className="text-primary" size={24} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4 text-primary">{data.temp}</div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="CloudRain" size={16} />
                      {data.condition}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Wind" size={16} />
                      {data.wind}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Прогноз на неделю</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Ожидается стабильная погода с переменной облачностью. Рекомендуется планировать походы на первую половину недели.</p>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'maps' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 font-heading text-primary">Карты троп</h2>
          <Card>
            <CardContent className="p-6">
              <div className="bg-muted rounded-lg h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" className="mx-auto text-primary mb-4" size={64} />
                  <p className="text-xl text-muted-foreground">Интерактивная карта маршрутов</p>
                  <p className="text-sm text-muted-foreground mt-2">Здесь будет отображаться карта с маршрутами</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 font-heading text-primary">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Мы ответим на все ваши вопросы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Имя</Label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label>Сообщение</Label>
                  <Input placeholder="Ваш вопрос" />
                </div>
                <Button className="w-full">Отправить</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@norwaytrek.no</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+47 123 45 678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Oslo, Norway</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 NorwayTrek. Все права защищены.</p>
          <p className="text-sm text-primary-foreground/80">Откройте для себя красоту норвежской природы</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
