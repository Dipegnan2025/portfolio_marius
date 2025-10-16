import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-10 px-4 mt-12">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Informations personnelles */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-amber-400">
            TOURE DIPEGNAN MARIUS
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Technicien réseau et système.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li><a href="/" className="hover:text-amber-400 transition">Accueil</a></li>
            <li><a href="/about" className="hover:text-amber-400 transition">À propos</a></li>
            <li><a href="/projects" className="hover:text-amber-400 transition">Projets</a></li>
            <li><a href="/skills" className="hover:text-amber-400 transition">Compétences</a></li>
            <li><a href="/contact" className="hover:text-amber-400 transition">Contacts</a></li>
          </ul>
        </nav>

        {/* Section contact */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base mt-6">
          <p className="flex items-center gap-2">
            <Mail className="text-amber-400" size={18} />
            dipegnan@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone className="text-amber-400" size={18} /> +225 0546787669
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="text-amber-400" size={18} /> Cocody, Abidjan, Côte d'Ivoire
          </p>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://wa.me/2250546787669"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <MessageCircle size={24} />
          </a>
        </div>

        {/* Mentions légales */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-sm text-gray-500">
            © 2025 <span className="text-amber-400 font-semibold">MARIUS TOURE </span>. Tous droits réservés. <br />
            Développé avec ❤️ et <span className="text-blue-400 font-semibold">React.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
