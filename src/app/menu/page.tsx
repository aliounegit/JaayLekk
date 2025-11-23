"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Clock, MapPin, ArrowLeft, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    restaurant: string;
    rating: number;
    prepTime: string;
    image: string;
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Thiéboudienne Royal",
        description: "Le plat national sénégalais : riz au poisson avec légumes variés (carotte, manioc, aubergine).",
        price: 3500,
        category: "Plats Traditionnels",
        restaurant: "Chez Lamine",
        rating: 4.8,
        prepTime: "30-40 min",
        image: "/thieboudienne.png"
    },
    {
        id: 2,
        name: "Yassa Poulet",
        description: "Poulet tendre mariné aux oignons caramélisés, citron et moutarde, servi avec du riz blanc.",
        price: 3000,
        category: "Plats Traditionnels",
        restaurant: "Teranga Palace",
        rating: 4.7,
        prepTime: "25-35 min",
        image: "/yassa.png"
    },
    {
        id: 3,
        name: "Mafé Kandja",
        description: "Ragoût onctueux à la pâte d'arachide avec viande de bœuf et gombos.",
        price: 3200,
        category: "Plats Traditionnels",
        restaurant: "Le Djoloff",
        rating: 4.6,
        prepTime: "30-40 min",
        image: "/thieboudienne.png" // Fallback or reuse for now as we didn't gen Mafe specifically, or use hero
    },
    {
        id: 4,
        name: "Thiou Curry",
        description: "Ragoût de viande aux légumes et sauce tomate parfumée au curry.",
        price: 2800,
        category: "Plats Traditionnels",
        restaurant: "Chez Fatou",
        rating: 4.5,
        prepTime: "25-30 min",
        image: "/yassa.png" // Fallback
    },
    {
        id: 5,
        name: "Burger Dakarois",
        description: "Burger gourmet avec steak haché local, fromage, salade, tomate et sauce secrète.",
        price: 2500,
        category: "Fast Food",
        restaurant: "Dakar Burgers",
        rating: 4.4,
        prepTime: "15-20 min",
        image: "/burger.png"
    },
    {
        id: 6,
        name: "Pizza Margherita",
        description: "Pizza classique avec sauce tomate maison, mozzarella fondante et basilic frais.",
        price: 4000,
        category: "Fast Food",
        restaurant: "Pizza Express",
        rating: 4.3,
        prepTime: "20-25 min",
        image: "/burger.png" // Fallback or reuse
    },
    {
        id: 7,
        name: "Salade César",
        description: "Salade romaine croquante, poulet grillé, parmesan et croûtons à l'ail.",
        price: 2000,
        category: "Salades",
        restaurant: "Green Garden",
        rating: 4.2,
        prepTime: "10-15 min",
        image: "/yassa.png" // Fallback
    },
    {
        id: 8,
        name: "Jus de Bissap",
        description: "Boisson traditionnelle à l'hibiscus, fraîche, sucrée et parfumée à la menthe.",
        price: 500,
        category: "Boissons",
        restaurant: "Tous les restaurants",
        rating: 4.9,
        prepTime: "5 min",
        image: "/juice.png"
    },
    {
        id: 9,
        name: "Jus de Bouye",
        description: "Nectar de fruit de baobab, onctueux et riche en vitamines.",
        price: 700,
        category: "Boissons",
        restaurant: "Tous les restaurants",
        rating: 4.8,
        prepTime: "5 min",
        image: "/juice.png"
    }
];

const categories = ["Tous", "Plats Traditionnels", "Fast Food", "Salades", "Boissons"];

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const { addItem, itemCount, total } = useCart();

    const filteredItems = selectedCategory === "Tous"
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    const handleAddToCart = (item: MenuItem) => {
        addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            restaurant: item.restaurant
        });
    };

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-orange-600 tracking-tighter">
                        <ArrowLeft className="w-5 h-5" />
                        Jaay<span className="text-neutral-900">Lekk</span>
                    </Link>
                    <div className="flex items-center space-x-4">

                        {itemCount > 0 && (
                            <Link href="/checkout">
                                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 flex items-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    Panier ({itemCount}) - {total} FCFA
                                </Button>
                            </Link>
                        )}
                        {itemCount === 0 && (
                            <div className="relative">
                                <ShoppingCart className="w-6 h-6 text-neutral-600" />
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* AI Recommendations Section */}
            <section className="py-12 bg-gradient-to-r from-orange-500 to-red-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                            <Sparkles className="w-6 h-6 text-yellow-300" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold">Recommandé pour vous</h2>
                            <p className="text-orange-100">Sélectionné par notre IA selon vos goûts</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {menuItems.slice(0, 3).map((item) => (
                            <motion.div
                                key={`rec-${item.id}`}
                                whileHover={{ y: -5 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                                onClick={() => handleAddToCart(item)}
                            >
                                <div className="flex gap-4">
                                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                        <p className="text-sm text-orange-100 mb-2 line-clamp-2">{item.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold">{item.price} FCFA</span>
                                            <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center">
                                                <ShoppingCart className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 bg-white border-b border-neutral-100 sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                    ? "bg-orange-600 text-white shadow-lg"
                                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Items Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-neutral-100"
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.name}</h3>
                                            <p className="text-sm text-neutral-500">{item.restaurant}</p>
                                        </div>
                                        <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-full">
                                            <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
                                            <span className="text-sm font-semibold text-orange-700">{item.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{item.prepTime}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-orange-600">{item.price} FCFA</span>
                                        <Button
                                            onClick={() => handleAddToCart(item)}
                                            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6"
                                        >
                                            Ajouter
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-12 border-t border-neutral-100">
                <div className="container mx-auto px-4 text-center text-neutral-500">
                    <p>© 2025 JaayLekk. Fait par ALIOUNE NDIAYE au Sénégal.</p>
                </div>
            </footer>
        </div>
    );
}
