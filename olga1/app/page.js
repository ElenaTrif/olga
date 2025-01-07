'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loader visible pendant 2 secondes
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#FAF3E0] text-gray-800">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            id="olga-beauty-expert" // Utilisation de la classe CSS pour appliquer Benton ici
            className="text-4xl font-bold"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Olga Beauty Expert
          </motion.h1>
          <p className="mt-2 text-lg font-light">Chargement en cours...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
          {/* Left - Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-marine">Olga Beauty Expert</h1>
            <p className="text-sm text-blue-marine">Soins exclusifs, peau rayonnante</p>
          </div>

          {/* Right - Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700">
            {['Tous nos soins', 'Tarifs', 'Offrir', 'Carte', 'Contact'].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: '#B39D6F' }} // Accent doré
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg font-medium cursor-pointer"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.2 }}>
              <span className="text-red-500 text-2xl cursor-pointer">❤</span>
            </motion.div>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md absolute top-16 left-0 right-0 px-6 py-4">
            <nav className="flex flex-col space-y-4 text-gray-700">
              {['Tous nos soins', 'Tarifs', 'Offrir', 'Carte', 'Contact'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, color: '#B39D6F' }} // Accent doré
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg font-medium cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Video */}
      <section className="relative h-screen bg-black text-center text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Olga Beauty Expert
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Des soins exclusifs pour une peau rayonnante
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-[#ffffff] text-blue-marine text-lg font-bold rounded-full shadow-md"
          >
            Réservez maintenant
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundPosition: "100% 0", // Fait glisser la couleur du fond de gauche à droite
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-[#ffffff] text-blue-marine text-lg font-bold rounded-full shadow-md transition-all duration-500 ease-in-out bg-gradient-to-r from-[#003366] via-transparent to-[#003366] hover:via-[#003366] hover:to-[#003366] hover:text-white hover:bg-[#003366]"
          >
            Réservez maintenant
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p className="text-gray-600 text-lg">
            Olga est une esthéticienne spécialisée dans les soins personnalisés et les techniques avancées.
            Avec des années d'expérience, elle vous garantit une peau éclatante et un bien-être absolu.
          </p>
        </div>
      </section>

      {/* Soins / Galerie Section */}
      <section id="soins" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Soins et Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((image) => (
              <div
                key={image}
                className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={`/gallery/image${image}.jpg`}
                  alt={`Galerie ${image}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section id="offrir" className="py-20 px-6 bg-pink-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Offrez un cadeau</h2>
          <p className="text-gray-600 text-lg">
            Faites plaisir à vos proches avec un bon cadeau pour un soin personnalisé.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg font-bold rounded-lg shadow-md"
          >
            Acheter un bon cadeau
          </motion.button>
        </div>
      </section>

      {/* Carte Section */}
      <section id="carte" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Nous trouver</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.469179003254!2d7.26916494077989!3d43.700797849470966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cddaa5cb80da29%3A0x819061a85fa2183e!2s23%20Rue%20Pastorelli%2C%2006000%20Nice!5e0!3m2!1sfr!2sfr!4v1736194751049!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            className="rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-gray-600 text-lg mb-6">
            Prenez rendez-vous ou contactez-nous pour toute question.
          </p>
          <p className="text-lg">📞 01 23 45 67 89</p>
          <p className="text-lg">📧 contact@olgabeautyexpert.com</p>
          <p className="text-lg">📍 23 Rue Pastorelli, 06000 Nice</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#B39D6F] text-white text-center py-6">
        <p>© 2025 Olga Beauty Expert. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
