"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, Phone, ArrowLeft, Utensils } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Restaurant {
    id: number;
    name: string;
    description: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    address: string;
    phone: string;
    image: string;
    specialties: string[];
}

const restaurants: Restaurant[] = [
    {
        id: 1,
        name: "Chez Lamine",
        description: "Restaurant traditionnel sénégalais spécialisé dans le Thiéboudienne authentique",
        cuisine: "Cuisine Sénégalaise",
        rating: 4.8,
        deliveryTime: "30-40 min",
        address: "Médina, Dakar",
        phone: "+221 78 603 79 13",
        image: "/logo_chez_lamine.png",
        specialties: ["Thiéboudienne", "Thiou", "Yassa"]
    },
    {
        id: 2,
        name: "Teranga Palace",
        description: "Cuisine sénégalaise raffinée dans un cadre moderne et élégant",
        cuisine: "Cuisine Sénégalaise",
        rating: 4.7,
        deliveryTime: "25-35 min",
        address: "Plateau, Dakar",
        phone: "+221 77 234 56 78",
        image: "/logo.png", // Placeholder: JaayLekk Logo
        specialties: ["Yassa Poulet", "Mafé", "Thiéboudienne"]
    },
    {
        id: 3,
        name: "Le Djoloff",
        description: "Restaurant familial proposant des plats traditionnels préparés avec amour",
        cuisine: "Cuisine Sénégalaise",
        rating: 4.6,
        deliveryTime: "30-40 min",
        address: "Ouakam, Dakar",
        phone: "+221 77 345 67 89",
        image: "/logo_chez_lamine.png", // Placeholder: Traditional style
        specialties: ["Mafé", "Domoda", "Thiou"]
    },
    {
        id: 4,
        name: "Chez Fatou",
        description: "Cuisine maison authentique avec des recettes transmises de génération en génération",
        cuisine: "Cuisine Sénégalaise",
        rating: 4.5,
        deliveryTime: "25-30 min",
        address: "Parcelles Assainies, Dakar",
        phone: "+221 77 456 78 90",
        image: "/logo_chez_lamine.png", // Placeholder: Traditional style
        specialties: ["Thiou", "Caldou", "Yassa"]
    }
];

export default function RestaurantsPage() {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-orange-600 tracking-tighter">
                        <ArrowLeft className="w-5 h-5" />
                        Jaay<span className="text-neutral-900">Lekk</span>
                    </Link>
                    <div className="flex items-center gap-4">

                        <Link href="/menu">
                            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
                                Voir le Menu
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-orange-50 to-white">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                            🏪 Plus de 50 restaurants partenaires
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Nos <span className="text-orange-600">Restaurants</span> Partenaires
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                            Découvrez les meilleurs restaurants de Dakar et Rufisque
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Restaurants Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {restaurants.map((restaurant, index) => (
                            <motion.div
                                key={restaurant.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-neutral-100"
                            >
                                <div className="relative aspect-video bg-neutral-100 p-8 flex items-center justify-center">
                                    <div className="relative w-32 h-32">
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-1">{restaurant.name}</h3>
                                            <p className="text-sm text-orange-600 font-medium">{restaurant.cuisine}</p>
                                        </div>
                                        <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-full">
                                            <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
                                            <span className="text-sm font-semibold text-orange-700">{restaurant.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{restaurant.description}</p>

                                    {/* Specialties */}
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-neutral-500 mb-2">Spécialités:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {restaurant.specialties.map((specialty, idx) => (
                                                <span key={idx} className="text-xs bg-neutral-100 px-2 py-1 rounded-full">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="space-y-2 mb-4 text-sm text-neutral-600">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{restaurant.deliveryTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{restaurant.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            <span>{restaurant.phone}</span>
                                        </div>
                                    </div>

                                    <Link href="/menu">
                                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                                            <Utensils className="w-4 h-4 mr-2" />
                                            Voir le menu
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Vous êtes restaurateur ?</h2>
                    <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                        Rejoignez JaayLekk et développez votre activité
                    </p>
                    <Link href="/contact">
                        <Button className="h-14 px-8 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg font-semibold">
                            Devenir Partenaire
                        </Button>
                    </Link>
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
