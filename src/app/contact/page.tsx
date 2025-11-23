"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 3000);
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
                    <Link href="/menu">
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
                            Voir le Menu
                        </Button>
                    </Link>
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
                            💬 Nous sommes à votre écoute
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            <span className="text-orange-600">Contactez</span>-nous
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                            Une question ? Une suggestion ? Notre équipe est là pour vous aider
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-bold mb-6">Nos coordonnées</h2>

                                <div className="space-y-6">
                                    {/* Phone */}
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Téléphone</h3>
                                            <p className="text-neutral-600">+221 78 603 79 13</p>
                                            <p className="text-neutral-600">+221 70 583 91 55</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-neutral-600">contact@jaaylekk.sn</p>
                                            <p className="text-neutral-600">support@jaaylekk.sn</p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Adresse</h3>
                                            <p className="text-neutral-600">Rufisque</p>
                                            <p className="text-neutral-600">Dakar, Sénégal</p>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Horaires</h3>
                                            <p className="text-neutral-600">Lundi - Dimanche: 8h - 23h</p>
                                            <p className="text-sm text-orange-600 font-medium">Service 7j/7</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Social / Additional Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
                            >
                                <h3 className="text-2xl font-bold mb-4">Vous êtes restaurateur ?</h3>
                                <p className="mb-6 text-orange-50">
                                    Rejoignez notre plateforme et augmentez votre visibilité auprès de milliers de clients à Dakar et Rufisque.
                                </p>
                                <Button className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-6">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Devenir Partenaire
                                </Button>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
                        >
                            <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message envoyé !</h3>
                                    <p className="text-neutral-600">Nous vous répondrons dans les plus brefs délais.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Nom complet *</label>
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
                                        <label className="block text-sm font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Téléphone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                            placeholder="+221 78 603 79 13"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Sujet *</label>
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="question">Question générale</option>
                                            <option value="commande">Problème de commande</option>
                                            <option value="partenariat">Devenir partenaire</option>
                                            <option value="suggestion">Suggestion</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message *</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
                                            placeholder="Votre message..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg font-semibold"
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Envoyer le message
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-12 px-4 bg-neutral-100">
                <div className="container mx-auto">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl h-96 flex items-center justify-center text-white">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Notre localisation</h3>
                            <p className="text-orange-100">RUFISQUE</p>
                        </div>
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
