"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, Utensils, Smartphone, ArrowRight, Star, Mic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        alert("Votre navigateur ne supporte pas la recherche vocale.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'fr-FR';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListening(true);
      recognition.start();

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        alert(`Vous avez dit : "${transcript}"\n(Simulation de recherche...)`);
      };

      recognition.onspeechend = () => {
        setIsListening(false);
        recognition.stop();
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        console.error("Erreur de reconnaissance vocale", event.error);
      };
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans relative">
      {/* Voice Search FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleVoiceSearch}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-colors ${isListening ? "bg-red-500 animate-pulse" : "bg-orange-600 hover:bg-orange-700"
          }`}
      >
        <Mic className="w-8 h-8 text-white" />
      </motion.button>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="JaayLekk Logo" width={40} height={40} className="w-10 h-10" />
            <div className="text-2xl font-bold text-orange-600 tracking-tighter">
              Jaay<span className="text-neutral-900">Lekk</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-neutral-600">
            <Link href="/" className="hover:text-orange-600 transition-colors">Accueil</Link>
            <Link href="/menu" className="hover:text-orange-600 transition-colors">Menu</Link>
            <Link href="/restaurants" className="hover:text-orange-600 transition-colors">Restaurants</Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">

            <Link href="/menu">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 shadow-lg shadow-orange-600/20 transition-all hover:scale-105">
                Commander
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Festin Sénégalais"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left text-white"
          >
            <div className="inline-block px-4 py-1.5 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-300 rounded-full text-sm font-semibold mb-6">
              🚀 Disponible à Dakar & Rufisque
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Le Goût du <br />
              <span className="text-orange-500">Sénégal</span> chez vous.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-lg text-neutral-200 font-light">
              Commandez vos plats préférés parmi les meilleurs restaurants. Livraison rapide et saveurs authentiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-full shadow-xl shadow-orange-600/30 transition-all hover:scale-105" asChild>
                <Link href="/menu">
                  Commander Maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full" asChild>
                <Link href="/restaurants">
                  Voir les Restaurants
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-neutral-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center text-xs">👤</div>
                  ))}
                </div>
                <span>+1000 Clients heureux</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 Note moyenne</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Abstract decorative elements could go here, or just keep it clean to show the background food */}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Pourquoi choisir JaayLekk ?</h2>
            <p className="text-neutral-600 text-lg">Une expérience culinaire sans friction, pensée pour vous.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Utensils className="w-8 h-8 text-orange-600" />}
              title="Large Choix"
              description="Des thiéboudiennes authentiques aux burgers gourmets, trouvez tout ce qui vous fait envie."
            />
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-orange-600" />}
              title="Paiement Mobile"
              description="Payez en toute sécurité avec vos solutions préférées : Wave et Orange Money."
            />
            <FeatureCard
              icon={<Truck className="w-8 h-8 text-orange-600" />}
              title="Livraison Express"
              description="Nos livreurs connaissent Dakar et Rufisque comme leur poche. Vos plats arrivent chauds."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <Image src="/hero.png" alt="Background" fill className="object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Faim ? Ne cherchez plus.</h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Téléchargez l'application ou commandez directement sur le site.
          </p>
          <Link href="/menu">
            <Button className="h-16 px-10 text-xl bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-xl shadow-orange-900/50 transition-all hover:scale-105">
              Commander Maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-neutral-100">
        <div className="container mx-auto px-4 text-center text-neutral-500">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/logo.png" alt="JaayLekk Logo" width={30} height={30} className="w-8 h-8 grayscale opacity-50" />
            <span className="font-bold text-neutral-400">JaayLekk</span>
          </div>
          <p>© 2025 JaayLekk. Fait par ALIOUNE NDIAYE au Sénégal.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-neutral-900">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}
