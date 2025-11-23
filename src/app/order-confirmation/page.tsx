"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Package, Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OrderConfirmationContent() {
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("order") || "TD00000000";
    const paymentMethod = searchParams.get("payment") || "wave";

    const estimatedTime = new Date();
    estimatedTime.setMinutes(estimatedTime.getMinutes() + 35);

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl w-full"
            >
                {/* Success Icon */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                        <CheckCircle className="w-16 h-16 text-white" />
                    </motion.div>
                    <h1 className="text-4xl font-extrabold text-neutral-900 mb-2">
                        Commande confirmée !
                    </h1>
                    <p className="text-xl text-neutral-600">
                        Merci pour votre commande
                    </p>
                </div>

                {/* Order Details Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-orange-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Package className="w-6 h-6 text-orange-600" />
                                <h3 className="font-semibold text-lg">Numéro de commande</h3>
                            </div>
                            <p className="text-3xl font-bold text-orange-600">{orderNumber}</p>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Clock className="w-6 h-6 text-blue-600" />
                                <h3 className="font-semibold text-lg">Livraison estimée</h3>
                            </div>
                            <p className="text-2xl font-bold text-blue-600">
                                {estimatedTime.toLocaleTimeString("fr-FR", {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}
                            </p>
                            <p className="text-sm text-neutral-600 mt-1">Dans 30-40 minutes</p>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="border-t border-neutral-100 pt-6 mb-6">
                        <h3 className="font-semibold text-lg mb-4">Mode de paiement</h3>
                        <div className="flex items-center gap-4 bg-neutral-50 rounded-xl p-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold ${paymentMethod === "wave" ? "bg-blue-600" : "bg-orange-500"
                                }`}>
                                {paymentMethod === "wave" ? "W" : "OM"}
                            </div>
                            <div>
                                <p className="font-semibold">
                                    {paymentMethod === "wave" ? "Wave" : "Orange Money"}
                                </p>
                                <p className="text-sm text-green-600 font-medium">✓ Paiement confirmé</p>
                            </div>
                        </div>
                    </div>

                    {/* Status Steps */}
                    <div className="border-t border-neutral-100 pt-6">
                        <h3 className="font-semibold text-lg mb-4">Statut de la commande</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                    ✓
                                </div>
                                <div>
                                    <p className="font-semibold">Commande reçue</p>
                                    <p className="text-sm text-neutral-500">Votre commande a été confirmée</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white animate-pulse">
                                    <Package className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold">En préparation</p>
                                    <p className="text-sm text-neutral-500">Le restaurant prépare votre commande</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 opacity-50">
                                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-neutral-400" />
                                </div>
                                <div>
                                    <p className="font-semibold">En livraison</p>
                                    <p className="text-sm text-neutral-500">Votre commande est en route</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/menu" className="flex-1">
                        <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg font-semibold">
                            Commander à nouveau
                        </Button>
                    </Link>
                    <Link href="/" className="flex-1">
                        <Button variant="outline" className="w-full h-14 border-2 rounded-full text-lg font-semibold">
                            Retour à l'accueil
                        </Button>
                    </Link>
                </div>

                {/* Support Info */}
                <div className="mt-8 text-center">
                    <p className="text-neutral-600 mb-2">Besoin d'aide ?</p>
                    <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                        <Phone className="w-5 h-5" />
                        <span>+221 78 603 79 13</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function OrderConfirmationPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-neutral-600">Chargement...</p>
                </div>
            </div>
        }>
            <OrderConfirmationContent />
        </Suspense>
    );
}
