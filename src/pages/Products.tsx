import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { products } from '../data/products';
import ImageModal from '../components/ImageModal';
import ProductGallery from '../components/ProductGallery';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Koleksi Produk</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai produk handmade berkualitas dari BYJOYFACTORY
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-accent/5 rounded-2xl overflow-hidden animate-fade-in"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6">
                  <ProductGallery
                    images={product.images || [product.image]}
                    onImageClick={setSelectedImage}
                  />
                </div>

                <div className="p-8 lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                  <p className="text-xl font-semibold text-primary mb-4">
                    Rp {product.price}
                  </p>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {product.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Fitur Produk:</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-muted-foreground"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="btn-primary"
                  >
                    Pesan Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Product preview"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}