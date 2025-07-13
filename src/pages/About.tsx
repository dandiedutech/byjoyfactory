import React from 'react';
import { Heart, Target, Lightbulb, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang BYJOYFACTORY</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brand kreatif spesialis produk crochet handmade berkualitas
          </p>
        </div>

        {/* Tentang Kami */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 mb-16 animate-slide-up">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary animate-bounce">
                <Star className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Tentang Kami</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Byjoyfactory merupakan brand yang bergerak di bidang kreatif dan mengkhususkan diri dalam pembuatan produk crochet atau sulam dengan sentuhan tangan yang penuh cinta. Kami percaya bahwa setiap benang yang kami rajut mengandung cerita dan kehangatan, menciptakan karya seni yang tidak hanya indah tetapi juga bermakna.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-accent/5 rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300 animate-slide-up animation-delay-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Visi</h2>
            <p className="text-muted-foreground">
              Visi kami adalah menghadirkan keindahan dan keunikan dalam setiap produk yang kami buat, menjadikan setiap item sebagai pernyataan gaya hidup yang otentik dan penuh karakter.
            </p>
          </div>
          <div className="group bg-accent/5 rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300 animate-slide-up animation-delay-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Misi</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start group">
                <Heart className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                Menggunakan bahan berkualitas tinggi untuk memastikan setiap produk tahan lama dan nyaman digunakan.
              </li>
              <li className="flex items-start group">
                <Heart className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                Mendorong inovasi desain yang mencerminkan tren terkini.
              </li>
              <li className="flex items-start group">
                <Heart className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                Memberdayakan barang lokal melalui pelatihan dan kesempatan kerja, serta mendukung ekonomi lokal.
              </li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 animate-fade-in">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Kualitas",
                description: "Kami berkomitmen untuk menghadirkan produk berkualitas tinggi dengan perhatian detail yang maksimal."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Kreativitas",
                description: "Setiap produk kami adalah hasil dari eksplorasi kreatif dan inovasi desain yang berkelanjutan."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Kepuasan",
                description: "Kepuasan pelanggan adalah prioritas utama dalam setiap langkah proses produksi kami."
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`group bg-accent/5 rounded-2xl p-8 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}