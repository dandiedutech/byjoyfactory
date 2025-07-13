import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://files.catbox.moe/u9ai71.png"
                alt="BYJOYFACTORY Logo"
                className="h-8 w-auto rounded-full"
                loading="lazy"
              />
              <span className="ml-2 text-lg font-semibold">BYJOYFACTORY</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-full text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Beranda</span>
              <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-45deg]" />
            </Link>
            <Link 
              to="/products" 
              className="px-4 py-2 rounded-full text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Produk</span>
              <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-45deg]" />
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 rounded-full text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Tentang</span>
              <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-45deg]" />
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-full text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Kontak</span>
              <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-45deg]" />
            </Link>
            <Link 
              to="/faq" 
              className="px-4 py-2 rounded-full text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">FAQ</span>
              <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-45deg]" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/products"
              className="block px-4 py-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <Link
              to="/faq"
              className="block px-4 py-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}