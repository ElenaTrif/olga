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
      <div className="flex items-center justify-center h-screen bg-[#FAF3E0] text-blue-marine">
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
    <div className="bg-gray-50 text-blue-marine min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
          {/* Left - Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-marine">Olga Beauty Expert</h1>
            <p className="text-sm text-blue-marine">Soins exclusifs, peau rayonnante</p>
          </div>

          {/* Right - Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-blue-marine">
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
              <span className="text-pink-500 text-2xl cursor-pointer">❤</span>
            </motion.div>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-marine">
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md absolute top-16 left-0 right-0 px-6 py-4">
            <nav className="flex flex-col space-y-4 text-blue-marine">
              {['Tous nos soins', 'Tarifs', 'Offrir', 'Carte', 'Contact'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, color: '#A05544' }} // Accent doré
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
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-20 mb-1">
          {/* SVG Animé avec Motion */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.path
              d="M4 44L16 20L24 32L32 16L40 32L48 20L60 44H4Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.path
              d="M4 50H60"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.circle
              cx="16"
              cy="20"
              r="2"
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
            <motion.circle
              cx="32"
              cy="16"
              r="2"
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
            <motion.circle
              cx="48"
              cy="20"
              r="2"
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            />
          </motion.svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#A05544"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 mx-auto mb-4"
          >
            <path d="M4 44L16 20L24 32L32 16L40 32L48 20L60 44H4Z" />
            <path d="M4 50H60" />
            <circle cx="16" cy="20" r="2" fill="#A05544" />
            <circle cx="32" cy="16" r="2" fill="#A05544" />
            <circle cx="48" cy="20" r="2" fill="#A05544" />
          </svg>

          <h2 className="text-4xl font-bold mb-4 text-blue-marine">À propos de moi</h2>
          <p className="text-black-600 text-lg">
            Olga est une esthéticienne spécialisée dans les soins personnalisés et les techniques avancées.
            Avec des années d'expérience, elle vous garantit une peau éclatante et un bien-être absolu.
          </p>
        </div>
      </section>

      {/* Soins / Galerie Section */}
      <section id="soins" className="py-20 px-6 bg-[#FEF0E3]">
        <div className="max-w-6xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#A05544"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 mx-auto mb-4"
          >
            <path d="M4 44L16 20L24 32L32 16L40 32L48 20L60 44H4Z" />
            <path d="M4 50H60" />
            <circle cx="16" cy="20" r="2" fill="#A05544" />
            <circle cx="32" cy="16" r="2" fill="#A05544" />
            <circle cx="48" cy="20" r="2" fill="#A05544" />
          </svg>
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-marine">Soins et Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo5.jpeg', 'photo6.jpeg'].map((photo, index) => (
              <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img
                  src={`/${photo}`}
                  alt={`Galerie ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carte Section */}
      <section id="carte" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#A05544"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 mx-auto mb-4"
          >
            <path d="M4 44L16 20L24 32L32 16L40 32L48 20L60 44H4Z" />
            <path d="M4 50H60" />
            <circle cx="16" cy="20" r="2" fill="#A05544" />
            <circle cx="32" cy="16" r="2" fill="#A05544" />
            <circle cx="48" cy="20" r="2" fill="#A05544" />
          </svg>
          <h2 className="text-4xl font-bold mb-4 text-center text-blue-marine">Nous trouver</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.469179003254!2d7.26916494077989!3d43.700797849470966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cddaa5cb80da29%3A0x819061a85fa2183e!2s23%20Rue%20Pastorelli%2C%2006000%20Nice!5e0!3m2!1sfr!2sfr!4v1736194751049!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            className="rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#EAEEE9] text-center">
        <div className="max-w-4xl mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#A05544"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 mx-auto mb-4"
          >
            <path d="M4 44L16 20L24 32L32 16L40 32L48 20L60 44H4Z" />
            <path d="M4 50H60" />
            <circle cx="16" cy="20" r="2" fill="#A05544" />
            <circle cx="32" cy="16" r="2" fill="#A05544" />
            <circle cx="48" cy="20" r="2" fill="#A05544" />
          </svg>
          <h2 className="text-4xl font-bold mb-4 text-blue-marine">Contactez-nous</h2>
          <p className="text-gray-600 text-lg mb-6">
            Prenez rendez-vous ou contactez-nous pour toute question.
          </p>
          <p className="text-lg">📞 01 23 45 67 89</p>
          <p className="text-lg">📧 contact@olgabeautyexpert.com</p>
          <p className="text-lg">📍 23 Rue Pastorelli, 06000 Nice</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FEF0E3] text-black text-center py-6">
        <p>© 2025 NovikovaWeb. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
