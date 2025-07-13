import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Package, Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Tas',
    image: 'https://files.catbox.moe/a26t71.jpeg',
  },
  {
    id: 2,
    name: 'Bucket Hat',
    image: 'https://files.catbox.moe/ho4cq4.jpeg',
  },
  {
    id: 3,
    name: 'Gantungan Kunci',
    image: 'https://files.catbox.moe/0szfwb.jpeg',
  },
  {
    id: 4,
    name: 'Pouch',
    image: 'https://files.catbox.moe/whwpbq.jpeg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-12 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                BYJOYFACTORY
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 leading-relaxed animate-slide-up animation-delay-200">
                Brand kreatif spesialis produk crochet handmade berkualitas
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 animate-slide-up animation-delay-300">
                Setiap produk kami adalah hasil karya tangan yang dibuat dengan cinta dan dedikasi, 
                menghadirkan keunikan dan kehangatan dalam setiap detail rajutan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Link
                  to="/products"
                  className="btn-primary"
                >
                  Lihat Koleksi
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="btn-secondary"
                >
                  Tentang Kami
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 animate-fade-in animation-delay-500">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? 'translate-y-4 sm:translate-y-8' : '-translate-y-4 sm:-translate-y-8'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-base sm:text-xl font-semibold">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Dibuat dengan Cinta",
                description: "Setiap produk dirajut dengan penuh perhatian dan dedikasi untuk menghasilkan karya terbaik"
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Kualitas Premium",
                description: "Menggunakan bahan berkualitas tinggi untuk memastikan ketahanan dan kenyamanan maksimal"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Desain Unik",
                description: "Setiap produk memiliki karakter dan keunikan tersendiri yang mencerminkan kreativitas"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-secondary/30 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:bg-primary/5 transition-colors duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-in">Siap Memesan?</h2>
          <p className="text-muted-foreground mb-8 text-base sm:text-lg animate-fade-in animation-delay-100">
            Hubungi kami untuk mendapatkan produk handmade berkualitas yang Anda inginkan
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Hubungi Kami
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}