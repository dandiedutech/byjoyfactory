import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductGalleryProps {
  images: string[];
  onImageClick: (image: string) => void;
}

export default function ProductGallery({ images, onImageClick }: ProductGalleryProps) {
  return (
    <div className="relative">
      {/* Main Gallery */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="product-gallery rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative aspect-square cursor-zoom-in"
              onClick={() => onImageClick(image)}
            >
              <img
                src={image}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square cursor-pointer rounded-lg overflow-hidden hover:opacity-75 transition-opacity"
            onClick={() => onImageClick(image)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}