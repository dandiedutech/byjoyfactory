import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="https://s6.imgcdn.dev/Y640dq.jpg"
                alt="BYJOYFACTORY Logo"
                className="h-8 w-auto rounded-full"
                loading="lazy"
              />
              <span className="ml-2 text-lg font-semibold">BYJOYFACTORY</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Brand kreatif spesialis produk crochet handmade berkualitas
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Produk</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Tentang</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Kontak</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="https://wa.me/6282297449901" className="hover:text-primary transition-colors">
                  +62 822-9744-9901
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="mr-2" />
                <a href="https://instagram.com/byjoyfactory" className="hover:text-primary transition-colors">
                  @byjoyfactory
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Alamat</h3>
            <p className="text-muted-foreground">
              Bekasi Utara, Indonesia
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BYJOYFACTORY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}