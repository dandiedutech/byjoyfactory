export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  images?: string[];
  features: string[];
  price: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Gantungan Kunci',
    description: 'Gantungan kunci Byjoyfactory dirancang dengan detail yang unik dan penuh warna. Setiap gantungan kunci terbuat dari benang berkualitas tinggi, memberikan sentuhan artistik yang menyenangkan.',
    image: 'https://files.catbox.moe/0szfwb.jpeg',
    images: [
      'https://files.catbox.moe/0szfwb.jpeg',
      'https://files.catbox.moe/btahpx.jpeg',
      'https://files.catbox.moe/p51xys.jpeg',
      'https://files.catbox.moe/bywpmk.jpeg'
    ],
    features: ['Handmade', 'Bahan berkualitas', 'Desain unik', 'Tahan lama'],
    price: '35.000 - 40.000',
    category: 'aksesoris'
  },
  {
    id: 2,
    name: 'Pouch',
    description: 'Pouch Byjoyfactory adalah solusi praktis untuk menyimpan barang-barang kecil Anda. Dengan desain yang stylish dan kompak, pouch ini ideal untuk makeup, alat tulis, atau barang-barang penting lainnya.',
    image: 'https://files.catbox.moe/whwpbq.jpeg',
    images: [
      'https://files.catbox.moe/whwpbq.jpeg',
    ],
    features: ['Praktis', 'Stylish', 'Multi fungsi', 'Tahan lama'],
    price: '40.000',
    category: 'tas'
  },
  {
    id: 3,
    name: 'Bucket Hat',
    description: 'Bucket hat Byjoyfactory adalah aksesori fashion yang sempurna untuk melindungi Anda dari sinar matahari sekaligus menambahkan gaya pada penampilan Anda. Terbuat dari bahan yang nyaman dan breathable.',
    image: 'https://files.catbox.moe/ho4cq4.jpeg',
    features: ['Trendy', 'Nyaman', 'Breathable', 'Stylish'],
    price: '90.000',
    category: 'aksesoris'
  },
  {
    id: 4,
    name: 'Tas HP',
    description: 'Tas HP yang praktis dan stylish untuk membawa smartphone Anda. Dengan desain yang trendy dan ukuran yang pas, sempurna untuk penggunaan sehari-hari.',
    image: 'https://files.catbox.moe/9xud0q.jpeg',
    features: ['Compact', 'Trendy', 'Praktis', 'Tahan lama'],
    price: '90.000',
    category: 'tas'
  },
  {
    id: 5,
    name: 'Tas Tenteng',
    description: 'Tas Byjoyfactory menggabungkan fungsi dan estetika dalam satu paket. Didesain dengan ruang yang cukup untuk semua kebutuhan sehari-hari, tas ini terbuat dari benang berkualitas yang kuat dan tahan lama.',
    image: 'https://files.catbox.moe/a26t71.jpeg',
    features: ['Fungsional', 'Estetik', 'Spacious', 'Tahan lama'],
    price: '120.000',
    category: 'tas'
  }
];