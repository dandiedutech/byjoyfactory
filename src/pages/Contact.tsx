import React, { useState } from 'react';
import { Phone, Instagram, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(`${message}`);
    window.open(`https://wa.me/6282297449901?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu Anda dengan pertanyaan, pesanan, atau konsultasi produk
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Informasi Kontak</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/6282297449901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 822-9744-9901
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-4">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/byjoyfactory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @byjoyfactory
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
                  <p className="text-muted-foreground">
                    Bekasi Utara, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-accent/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Tulis pesan Anda"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                Kirim Pesan
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}