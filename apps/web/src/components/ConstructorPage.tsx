import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
    Shield,
    Download,
    Save,
    Undo,
    Redo,
    RotateCcw,
    Star,
    Heart,
    Zap,
    Crown,
    Target,
    Flame,
    Eye,
    ArrowLeft,
    ShoppingCart,
    Plus,
    Minus,
} from "lucide-react"
import { Link } from "react-router-dom"

interface PatchElement {
    id: string
    type: "text" | "shape" | "icon"
    content: string
    x: number
    y: number
    width: number
    height: number
    color: string
    fontSize?: number
    fontFamily?: string
    rotation: number
    selected: boolean
}

interface PatchDesign {
    shape: "circle" | "square" | "shield" | "hexagon" | "rectangle"
    backgroundColor: string
    borderColor: string
    borderWidth: number
    size: number
    elements: PatchElement[]
}

const PATCH_SHAPES = [
    { id: "circle", name: "Круглий", icon: "⭕" },
    { id: "square", name: "Квадратний", icon: "⬜" },
    { id: "shield", name: "Щит", icon: "🛡️" },
    { id: "hexagon", name: "Шестикутник", icon: "⬡" },
    { id: "rectangle", name: "Прямокутний", icon: "▭" },
]

const PRESET_COLORS = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#000080",
    "#808080",
    "#C0C0C0",
    "#800000",
    "#808000",
    "#008080",
    "#FFD700",
]

const MILITARY_ICONS = [
    { icon: Shield, name: "Щит" },
    { icon: Star, name: "Зірка" },
    { icon: Crown, name: "Корона" },
    { icon: Target, name: "Мішень" },
    { icon: Flame, name: "Полум'я" },
    { icon: Zap, name: "Блискавка" },
    { icon: Eye, name: "Око" },
    { icon: Heart, name: "Серце" },
]

export default function PatchConstructor() {
    const [design, setDesign] = useState<PatchDesign>({
        shape: "shield",
        backgroundColor: "#2D5016",
        borderColor: "#FFD700",
        borderWidth: 3,
        size: 200,
        elements: [],
    })

    const [selectedElement, setSelectedElement] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState("shape")
    const [textInput, setTextInput] = useState("")
    const [quantity, setQuantity] = useState(1)
    const canvasRef = useRef<HTMLDivElement>(null)

    const addTextElement = useCallback(() => {
        if (!textInput.trim()) return

        const newElement: PatchElement = {
            id: Date.now().toString(),
            type: "text",
            content: textInput,
            x: design.size / 2 - 50,
            y: design.size / 2 - 10,
            width: 100,
            height: 20,
            color: "#FFFFFF",
            fontSize: 16,
            fontFamily: "Arial",
            rotation: 0,
            selected: false,
        }

        setDesign((prev) => ({
            ...prev,
            elements: [...prev.elements, newElement],
        }))
        setTextInput("")
    }, [textInput, design.size])

    const addIconElement = useCallback(
        (_IconComponent: any, name: string) => {
            const newElement: PatchElement = {
                id: Date.now().toString(),
                type: "icon",
                content: name,
                x: design.size / 2 - 15,
                y: design.size / 2 - 15,
                width: 30,
                height: 30,
                color: "#FFD700",
                rotation: 0,
                selected: false,
            }

            setDesign((prev) => ({
                ...prev,
                elements: [...prev.elements, newElement],
            }))
        },
        [design.size],
    )

    const updateElement = useCallback((id: string, updates: Partial<PatchElement>) => {
        setDesign((prev) => ({
            ...prev,
            elements: prev.elements.map((el) => (el.id === id ? { ...el, ...updates } : el)),
        }))
    }, [])

    const deleteElement = useCallback((id: string) => {
        setDesign((prev) => ({
            ...prev,
            elements: prev.elements.filter((el) => el.id !== id),
        }))
        setSelectedElement(null)
    }, [])

    const selectElement = useCallback((id: string) => {
        setSelectedElement(id)
        setDesign((prev) => ({
            ...prev,
            elements: prev.elements.map((el) => ({
                ...el,
                selected: el.id === id,
            })),
        }))
    }, [])

    const getShapeStyle = () => {
        const baseStyle = {
            width: design.size,
            height: design.size,
            backgroundColor: design.backgroundColor,
            border: `${design.borderWidth}px solid ${design.borderColor}`,
            position: "relative" as const,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        }

        switch (design.shape) {
            case "circle":
                return { ...baseStyle, borderRadius: "50%" }
            case "shield":
                return {
                    ...baseStyle,
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                }
            case "hexagon":
                return {
                    ...baseStyle,
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                }
            case "rectangle":
                return { ...baseStyle, width: design.size * 1.5, borderRadius: "8px" }
            default:
                return { ...baseStyle, borderRadius: "8px" }
        }
    }

    const selectedElementData = design.elements.find((el) => el.id === selectedElement)

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
                <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <ArrowLeft className="h-5 w-5" />
                            <span>Назад</span>
                        </Link>
                        <Separator orientation="vertical" className="h-6" />
                        <div className="flex items-center space-x-2">
                            <Shield className="h-6 w-6 text-emerald-600" />
                            <span className="text-xl font-bold">Конструктор патчів</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                            <Save className="h-4 w-4 mr-2" />
                            Зберегти
                        </Button>
                        <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Експорт
                        </Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Замовити
                        </Button>
                    </div>
                </div>
            </header>

                            <div className="container py-6 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Left Panel - Tools */}
                    <div className="lg:col-span-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Інструменти</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Tabs value={activeTab} onValueChange={setActiveTab}>
                                    <TabsList className="grid w-full grid-cols-4">
                                        <TabsTrigger value="shape">Форма</TabsTrigger>
                                        <TabsTrigger value="text">Текст</TabsTrigger>
                                        <TabsTrigger value="icons">Іконки</TabsTrigger>
                                        <TabsTrigger value="colors">Кольори</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="shape" className="space-y-4">
                                        <div>
                                            <Label>Форма патчу</Label>
                                            <div className="grid grid-cols-2 gap-2 mt-2">
                                                {PATCH_SHAPES.map((shape) => (
                                                    <Button
                                                        key={shape.id}
                                                        variant={design.shape === shape.id ? "default" : "outline"}
                                                        className="h-16 flex flex-col"
                                                        onClick={() => setDesign((prev) => ({ ...prev, shape: shape.id as any }))}
                                                    >
                                                        <span className="text-2xl mb-1">{shape.icon}</span>
                                                        <span className="text-xs">{shape.name}</span>
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <Label>Розмір: {design.size}px</Label>
                                            <Slider
                                                value={[design.size]}
                                                onValueChange={([value]) => setDesign((prev) => ({ ...prev, size: value }))}
                                                max={300}
                                                min={100}
                                                step={10}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div>
                                            <Label>Товщина рамки: {design.borderWidth}px</Label>
                                            <Slider
                                                value={[design.borderWidth]}
                                                onValueChange={([value]) => setDesign((prev) => ({ ...prev, borderWidth: value }))}
                                                max={10}
                                                min={0}
                                                step={1}
                                                className="mt-2"
                                            />
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="text" className="space-y-4">
                                        <div>
                                            <Label htmlFor="text-input">Додати текст</Label>
                                            <div className="flex space-x-2 mt-2">
                                                <Input
                                                    id="text-input"
                                                    value={textInput}
                                                    onChange={(e) => setTextInput(e.target.value)}
                                                    placeholder="Введіть позивний..."
                                                    onKeyPress={(e) => e.key === "Enter" && addTextElement()}
                                                />
                                                <Button onClick={addTextElement} size="sm">
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        {selectedElementData?.type === "text" && (
                                            <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                                                <h4 className="font-semibold">Налаштування тексту</h4>

                                                <div>
                                                    <Label>Розмір шрифту: {selectedElementData.fontSize}px</Label>
                                                    <Slider
                                                        value={[selectedElementData.fontSize || 16]}
                                                        onValueChange={([value]) => updateElement(selectedElementData.id, { fontSize: value })}
                                                        max={48}
                                                        min={8}
                                                        step={1}
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <Label>Колір тексту</Label>
                                                    <div className="flex space-x-1 mt-2">
                                                        {PRESET_COLORS.slice(0, 8).map((color) => (
                                                            <button
                                                                key={color}
                                                                className="w-8 h-8 rounded border-2 border-gray-300"
                                                                style={{ backgroundColor: color }}
                                                                onClick={() => updateElement(selectedElementData.id, { color })}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <Button variant="destructive" size="sm" onClick={() => deleteElement(selectedElementData.id)}>
                                                    Видалити текст
                                                </Button>
                                            </div>
                                        )}
                                    </TabsContent>

                                    <TabsContent value="icons" className="space-y-4">
                                        <div>
                                            <Label>Військові символи</Label>
                                            <div className="grid grid-cols-4 gap-2 mt-2">
                                                {MILITARY_ICONS.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        variant="outline"
                                                        className="h-12 w-12 p-0"
                                                        onClick={() => addIconElement(item.icon, item.name)}
                                                    >
                                                        <item.icon className="h-6 w-6" />
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedElementData?.type === "icon" && (
                                            <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                                                <h4 className="font-semibold">Налаштування іконки</h4>

                                                <div>
                                                    <Label>Розмір: {selectedElementData.width}px</Label>
                                                    <Slider
                                                        value={[selectedElementData.width]}
                                                        onValueChange={([value]) =>
                                                            updateElement(selectedElementData.id, {
                                                                width: value,
                                                                height: value,
                                                            })
                                                        }
                                                        max={80}
                                                        min={16}
                                                        step={2}
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <Label>Колір іконки</Label>
                                                    <div className="flex space-x-1 mt-2">
                                                        {PRESET_COLORS.slice(0, 8).map((color) => (
                                                            <button
                                                                key={color}
                                                                className="w-8 h-8 rounded border-2 border-gray-300"
                                                                style={{ backgroundColor: color }}
                                                                onClick={() => updateElement(selectedElementData.id, { color })}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <Button variant="destructive" size="sm" onClick={() => deleteElement(selectedElementData.id)}>
                                                    Видалити іконку
                                                </Button>
                                            </div>
                                        )}
                                    </TabsContent>

                                    <TabsContent value="colors" className="space-y-4">
                                        <div>
                                            <Label>Колір фону</Label>
                                            <div className="grid grid-cols-6 gap-2 mt-2">
                                                {PRESET_COLORS.map((color) => (
                                                    <button
                                                        key={color}
                                                        className="w-10 h-10 rounded border-2 border-gray-300"
                                                        style={{ backgroundColor: color }}
                                                        onClick={() => setDesign((prev) => ({ ...prev, backgroundColor: color }))}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <Label>Колір рамки</Label>
                                            <div className="grid grid-cols-6 gap-2 mt-2">
                                                {PRESET_COLORS.map((color) => (
                                                    <button
                                                        key={color}
                                                        className="w-10 h-10 rounded border-2 border-gray-300"
                                                        style={{ backgroundColor: color }}
                                                        onClick={() => setDesign((prev) => ({ ...prev, borderColor: color }))}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Center Panel - Canvas */}
                    <div className="lg:col-span-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Превью патчу</CardTitle>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm">
                                            <Undo className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Redo className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <RotateCcw className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-center p-8 bg-gray-100 rounded-lg min-h-[400px] items-center">
                                    <div ref={canvasRef} style={getShapeStyle()} className="relative cursor-pointer">
                                        {design.elements.map((element) => {
                                            const IconComponent = MILITARY_ICONS.find((icon) => icon.name === element.content)?.icon

                                            return (
                                                <div
                                                    key={element.id}
                                                    className={`absolute cursor-move ${element.selected ? "ring-2 ring-blue-500" : ""}`}
                                                    style={{
                                                        left: element.x,
                                                        top: element.y,
                                                        width: element.width,
                                                        height: element.height,
                                                        transform: `rotate(${element.rotation}deg)`,
                                                        color: element.color,
                                                        fontSize: element.fontSize,
                                                        fontFamily: element.fontFamily,
                                                    }}
                                                    onClick={() => selectElement(element.id)}
                                                >
                                                    {element.type === "text" && (
                                                        <span className="font-bold whitespace-nowrap select-none">{element.content}</span>
                                                    )}
                                                    {element.type === "icon" && IconComponent && <IconComponent className="w-full h-full" />}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="mt-4 text-center text-sm text-slate-600">
                                    Клікніть на елемент для редагування. Перетягуйте для переміщення.
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Panel - Order Info */}
                    <div className="lg:col-span-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Деталі замовлення</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label>Кількість</Label>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <Input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                                            className="text-center"
                                        />
                                        <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <Label>Тип кріплення</Label>
                                    <Select defaultValue="velcro">
                                        <SelectTrigger className="mt-2">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="velcro">Липучка (велкро)</SelectItem>
                                            <SelectItem value="iron-on">Термоклей</SelectItem>
                                            <SelectItem value="sew-on">Пришивний</SelectItem>
                                            <SelectItem value="magnetic">Магнітний</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Додаткові опції</Label>
                                    <div className="space-y-2 mt-2">
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <span className="text-sm">Світловідбиваючі елементи (+50 грн)</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <span className="text-sm">Захисне покриття (+30 грн)</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <span className="text-sm">Термінове виконання (+100 грн)</span>
                                        </label>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Базова ціна:</span>
                                        <span>150 грн</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Кількість: {quantity}</span>
                                        <span>{150 * quantity} грн</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Загалом:</span>
                                        <span>{150 * quantity} грн</span>
                                    </div>
                                </div>

                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Додати в кошик
                                </Button>

                                <div className="text-xs text-slate-600 space-y-1">
                                    <p>• Виготовлення: 2-3 робочі дні</p>
                                    <p>• Доставка: 1-2 дні по Україні</p>
                                    <p>• Гарантія якості: 1 рік</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mt-4">
                            <CardHeader>
                                <CardTitle className="text-lg">Популярні шаблони</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { name: "ЗСУ", bg: "#2D5016", border: "#FFD700" },
                                        { name: "Поліція", bg: "#000080", border: "#FFFFFF" },
                                        { name: "ДСНС", bg: "#FF4500", border: "#FFFFFF" },
                                        { name: "Медик", bg: "#FFFFFF", border: "#FF0000" },
                                    ].map((template, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className="h-16 flex flex-col text-xs"
                                            onClick={() =>
                                                setDesign((prev) => ({
                                                    ...prev,
                                                    backgroundColor: template.bg,
                                                    borderColor: template.border,
                                                }))
                                            }
                                        >
                                            <div
                                                className="w-8 h-8 rounded mb-1 border-2"
                                                style={{
                                                    backgroundColor: template.bg,
                                                    borderColor: template.border,
                                                }}
                                            />
                                            {template.name}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
