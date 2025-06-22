import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Palette, Truck, Users, Star, CheckCircle, Clock, Award, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import Image from "./Image"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Shield className="h-8 w-8 text-emerald-600" />
                        <span className="text-2xl font-bold text-slate-900">PatchMe</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                            Як працює
                        </Link>
                        <Link to="#options" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                            Опції
                        </Link>
                        <Link to="#delivery" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                            Доставка
                        </Link>
                        <Link to="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                            Контакти
                        </Link>
                    </nav>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Створити патч</Button>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10 bg-cover bg-center" />
                    <div className="container relative mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-600/30">
                                        🇺🇦 Зроблено в Україні
                                    </Badge>
                                    <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                        Персоналізовані <span className="text-emerald-400">шеврони</span> за 2-3 дні
                                    </h1>
                                    <p className="text-xl text-slate-300 leading-relaxed">
                                        Створюйте унікальні нашивки зі своїм позивним, підрозділом чи особистим дизайном. Від ідеї до
                                        готового патчу всього за кілька кліків.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                                        <Sparkles className="mr-2 h-5 w-5" />
                                        Створити дизайн
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8"
                                    >
                                        Переглянути приклади
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-8 text-slate-300">
                                    <div className="flex items-center space-x-2">
                                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                        <span className="font-semibold">4.9/5</span>
                                        <span className="text-sm">відгуків</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                                        <span className="text-sm">1000+ задоволених клієнтів</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative z-10">
                                    <Image
                                        src="/placeholder.svg?height=600&width=500"
                                        alt="Приклади персоналізованих шевронів"
                                        width={500}
                                        height={600}
                                        className="rounded-2xl shadow-2xl"
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why PatchMe Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Чому обирають PatchMe?</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Ми поєднуємо швидкість, якість та персональний підхід до кожного замовлення
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                        <Clock className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <CardTitle className="text-xl">Швидке замовлення</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">
                                        Від дизайну до доставки всього за 2-3 дні. Можливість термінового виконання.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                        <Palette className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl">Персоналізація</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">
                                        Додайте свій позивний, прапор чи інші елементи. Повна свобода творчості.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                        <Award className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl">Висока якість</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">
                                        Використовуємо тільки якісні та довговічні матеріали від перевірених постачальників.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                        <Zap className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">Зручний конструктор</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">
                                        Інтуїтивно зрозумілий онлайн-редактор для створення унікального дизайну.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="py-20 bg-slate-50">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Як це працює</h2>
                            <p className="text-xl text-slate-600">Простий процес від ідеї до готового патчу</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Оберіть дизайн",
                                    description: "Виберіть базовий шаблон або почніть з чистого аркуша",
                                },
                                {
                                    step: "02",
                                    title: "Додайте текст",
                                    description: "Введіть свій позивний, назву підрозділу або інший текст",
                                },
                                {
                                    step: "03",
                                    title: "Налаштуйте стиль",
                                    description: "Оберіть кольори, розмір та додаткові елементи",
                                },
                                {
                                    step: "04",
                                    title: "Замовте",
                                    description: "Вкажіть кількість та оформіть замовлення",
                                },
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full text-2xl font-bold mb-6">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                    {index < 3 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-emerald-200 -translate-x-8" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Options Section */}
                <section id="options" className="py-20 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Доступні опції</h2>
                            <p className="text-xl text-slate-600">Широкий вибір можливостей для створення ідеального патчу</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-emerald-600 rounded-full" />
                                        <span>Розміри</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>• 5x5 см - стандартний</li>
                                        <li>• 7x7 см - великий</li>
                                        <li>• 10x5 см - прямокутний</li>
                                        <li>• Індивідуальні розміри</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                                        <span>Кольори</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>• Повна палітра кольорів</li>
                                        <li>• Градієнти та переходи</li>
                                        <li>• Металеві відтінки</li>
                                        <li>• Світловідбиваючі елементи</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-purple-600 rounded-full" />
                                        <span>Кріплення</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>• Липучка (велкро)</li>
                                        <li>• Термоклей</li>
                                        <li>• Пришивний</li>
                                        <li>• Магнітне кріплення</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Target Audience Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Для кого PatchMe?</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: "Військовослужбовці",
                                    description: "Персональні шеврони з позивними та символікою підрозділів",
                                },
                                {
                                    icon: Users,
                                    title: "Волонтери",
                                    description: "Ідентифікаційні патчі для волонтерських організацій",
                                },
                                {
                                    icon: Award,
                                    title: "Громадські організації",
                                    description: "Корпоративна символіка та брендинг",
                                },
                                {
                                    icon: Star,
                                    title: "Приватні особи",
                                    description: "Унікальні дизайни для хобі та особистого використання",
                                },
                            ].map((item, index) => (
                                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                            <item.icon className="h-8 w-8 text-emerald-600" />
                                        </div>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery Section */}
                <section id="delivery" className="py-20 bg-white">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Швидка доставка по всій Україні</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Truck className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Нова Пошта</h3>
                                            <p className="text-slate-600">
                                                Відправка у відділення або поштомат. Доставка 1-2 дні по Україні.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Zap className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 mb-2">Термінове виконання</h3>
                                            <p className="text-slate-600">Можливість виготовлення та відправки протягом 24 годин.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    src="/placeholder.svg?height=400&width=500"
                                    alt="Доставка патчів"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
                    <div className="container mx-auto text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Готові створити свій унікальний патч?</h2>
                            <p className="text-xl text-emerald-100 mb-8">
                                Приєднуйтесь до тисяч задоволених клієнтів, які довіряють нам створення своїх персональних шевронів
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8">
                                    <Sparkles className="mr-2 h-5 w-5" />
                                    Створити дизайн зараз
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8"
                                >
                                    Зв'язатися з нами
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Shield className="h-8 w-8 text-emerald-400" />
                                <span className="text-2xl font-bold">PatchMe</span>
                            </div>
                            <p className="text-slate-400">
                                Персоналізовані шеврони та патчі найвищої якості для військових, волонтерів та всіх охочих.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Послуги</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Дизайн патчів
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Термінове виконання
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Оптові замовлення
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Консультації
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Підтримка</h3>
                            <ul className="space-y-2 text-slate-400">
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Часті питання
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Доставка
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Повернення
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors">
                                        Контакти
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Контакти</h3>
                            <div className="space-y-2 text-slate-400">
                                <p>📧 info@patchme.ua</p>
                                <p>📱 +380 XX XXX XX XX</p>
                                <p>🇺🇦 Україна</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                        <p>&copy; {new Date().getFullYear()} PatchMe. Всі права захищені.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
