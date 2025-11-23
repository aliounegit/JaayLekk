"use client";

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingCart,
    ArrowLeft,
    Minus,
    Plus,
    Trash2,
    CreditCard,
    MapPin,
    Phone,
    User
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { items, updateQuantity, removeItem, total, clearCart } = useCart();
    const router = useRouter();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState<"wave" | "orange" | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "Dakar"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedPayment && items.length > 0) {
            setShowPaymentModal(true);
        }
    };

    const handlePayment = () => {
        // Simulate payment processing
        setTimeout(() => {
            const orderNumber = `TD${Date.now().toString().slice(-8)}`;
            clearCart();
            router.push(`/order-confirmation?order=${orderNumber}&payment=${selectedPayment}`);
        }, 2000);
    };

    const handleWhatsAppOrder = () => {
        const message = `*Nouvelle Commande JaayLekk* 🛍️\n\n` +
            `*Client:* ${formData.name || "Non spécifié"}\n` +
            `*Tél:* ${formData.phone || "Non spécifié"}\n` +
            `*Adresse:* ${formData.address || "Non spécifié"}, ${formData.city}\n\n` +
            `*Commande:*\n` +
            items.map(item => `- ${item.quantity}x ${item.name} (${item.price * item.quantity} FCFA)`).join("\n") +
            `\n\n*Total:* ${total + 500} FCFA (Livraison incluse)\n\n` +
            `Merci de confirmer ma commande !`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/221786037913?text=${encodedMessage}`, "_blank");
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
                <div className="text-center">
                    <ShoppingCart className="w-24 h-24 text-neutral-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">Votre panier est vide</h2>
                    <p className="text-neutral-600 mb-6">Ajoutez des plats pour continuer</p>
                    <Link href="/menu">
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
                            Voir le Menu
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/menu" className="flex items-center gap-2 text-2xl font-bold text-orange-600 tracking-tighter">
                        <ArrowLeft className="w-5 h-5" />
                        Jaay<span className="text-neutral-900">Lekk</span>
                    </Link>
                </div>
            </nav>

            <div className="pt-24 pb-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl font-extrabold mb-8">Finaliser la commande</h1>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Cart Items & Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Cart Items */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                                <h2 className="text-2xl font-bold mb-4">Votre commande</h2>
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-neutral-100 last:border-0">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                                <p className="text-sm text-neutral-500">{item.restaurant}</p>
                                                <p className="text-orange-600 font-bold mt-1">{item.price} FCFA</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center ml-2"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Delivery Form */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                                <h2 className="text-2xl font-bold mb-4">Informations de livraison</h2>
                                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            <User className="w-4 h-4 inline mr-2" />
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            <Phone className="w-4 h-4 inline mr-2" />
                                            Numéro de téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                            placeholder="78 603 79 13"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            <MapPin className="w-4 h-4 inline mr-2" />
                                            Adresse de livraison
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                            placeholder="Rue, quartier"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Ville</label>
                                        <select
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                        >
                                            <option value="Dakar">Dakar</option>
                                            <option value="Rufisque">Rufisque</option>
                                            <option value="Pikine">Pikine</option>
                                            <option value="Guédiawaye">Guédiawaye</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right Column - Summary & Payment */}
                        <div className="space-y-6">
                            {/* Order Summary */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 sticky top-24">
                                <h2 className="text-xl font-bold mb-4">Résumé</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-neutral-600">
                                        <span>Sous-total</span>
                                        <span>{total} FCFA</span>
                                    </div>
                                    <div className="flex justify-between text-neutral-600">
                                        <span>Livraison</span>
                                        <span>500 FCFA</span>
                                    </div>
                                    <div className="border-t border-neutral-200 pt-3 flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-orange-600">{total + 500} FCFA</span>
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="mb-6">
                                    <h3 className="font-semibold mb-3">Mode de paiement</h3>
                                    <div className="space-y-3">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedPayment("wave")}
                                            className={`w-full p-4 rounded-xl border-2 transition-all ${selectedPayment === "wave"
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-neutral-200 hover:border-neutral-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                                    W
                                                </div>
                                                <div className="text-left">
                                                    <p className="font-semibold">Wave</p>
                                                    <p className="text-sm text-neutral-500">Paiement mobile</p>
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedPayment("orange")}
                                            className={`w-full p-4 rounded-xl border-2 transition-all ${selectedPayment === "orange"
                                                ? "border-orange-500 bg-orange-50"
                                                : "border-neutral-200 hover:border-neutral-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                                    OM
                                                </div>
                                                <div className="text-left">
                                                    <p className="font-semibold">Orange Money</p>
                                                    <p className="text-sm text-neutral-500">Paiement mobile</p>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    disabled={!selectedPayment || !formData.name || !formData.phone || !formData.address}
                                    className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                                >
                                    <CreditCard className="w-5 h-5 mr-2" />
                                    Payer {total + 500} FCFA
                                </Button>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-neutral-200" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-white px-2 text-neutral-500">Ou</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleWhatsAppOrder}
                                    variant="outline"
                                    className="w-full h-14 border-green-500 text-green-600 hover:bg-green-50 rounded-full text-lg font-semibold mt-4"
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Commander sur WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            <AnimatePresence>
                {showPaymentModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowPaymentModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
                        >
                            <div className="text-center">
                                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${selectedPayment === "wave" ? "bg-blue-600" : "bg-orange-500"
                                    } text-white text-3xl font-bold`}>
                                    {selectedPayment === "wave" ? "W" : "OM"}
                                </div>
                                <h2 className="text-2xl font-bold mb-2">
                                    Paiement {selectedPayment === "wave" ? "Wave" : "Orange Money"}
                                </h2>
                                <p className="text-neutral-600 mb-6">
                                    Vous allez recevoir une notification sur votre téléphone pour confirmer le paiement de{" "}
                                    <span className="font-bold text-orange-600">{total + 500} FCFA</span>
                                </p>
                                <div className="bg-neutral-50 rounded-xl p-4 mb-6">
                                    <p className="text-sm text-neutral-600 mb-2">Numéro de téléphone</p>
                                    <p className="text-xl font-bold">{formData.phone}</p>
                                </div>

                                <div className="flex gap-3">
                                    <Button
                                        onClick={() => setShowPaymentModal(false)}
                                        variant="outline"
                                        className="flex-1 h-12 rounded-full"
                                    >
                                        Annuler
                                    </Button>
                                    <Button
                                        onClick={handlePayment}
                                        className={`flex-1 h-12 rounded-full text-white ${selectedPayment === "wave"
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "bg-orange-600 hover:bg-orange-700"
                                            }`}
                                    >
                                        Confirmer
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
