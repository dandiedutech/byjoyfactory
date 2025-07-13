import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Apa itu produk crochet dari ByJoyFactory?',
    answer: 'Produk crochet ByJoyFactory adalah kerajinan tangan berbahan benang rajut yang dibuat secara handmade. Kami menghadirkan berbagai produk seperti tas rajut, gantungan kunci, dan aksesoris dengan desain unik dan personal.'
  },
  {
    question: 'Apakah semua produk dibuat secara handmade?',
    answer: 'Ya, semua produk kami 100% buatan tangan (handmade), sehingga setiap item memiliki sentuhan unik dan tidak selalu identik satu sama lain.'
  },
  {
    question: 'Bahan apa yang digunakan untuk produk rajut ini?',
    answer: 'Kami menggunakan benang berkualitas tinggi seperti katun, poliester, atau campuran akrilik yang aman, tahan lama, dan nyaman disentuh.'
  },
  {
    question: 'Apakah produk bisa custom (pesan sesuai keinginan)?',
    answer: 'Tentu! Kami menerima pesanan custom sesuai desain, warna, ukuran, atau karakter yang kamu inginkan. Silakan hubungi kami untuk konsultasi dan estimasi waktu pengerjaan.'
  },
  {
    question: 'Berapa lama waktu produksi untuk produk custom?',
    answer: 'Waktu produksi tergantung pada tingkat kesulitan dan antrean pesanan. Rata-rata sekitar 5–14 hari kerja. Kami akan menginformasikan estimasi waktu secara jelas saat pemesanan.'
  },
  {
    question: 'Bagaimana cara perawatan produk crochet?',
    answer: '- Cuci secara manual dengan air dingin dan sabun lembut.\n- Jangan menggunakan mesin cuci atau pengering.\n- Keringkan secara alami, jangan dijemur langsung di bawah sinar matahari.\n- Simpan di tempat kering agar tidak lembap atau berjamur'
  },
  {
    question: 'Apakah produk crochet aman untuk anak-anak?',
    answer: 'Produk kami dibuat dengan bahan yang aman, namun untuk anak usia di bawah 3 tahun, harap awasi penggunaannya, terutama jika terdapat bagian kecil seperti kancing atau mata boneka.'
  },
  {
    question: 'Apakah produk tersedia ready stock?',
    answer: 'Beberapa produk tersedia ready stock dan bisa langsung dikirim. Namun untuk desain tertentu dan produk custom, akan dibuat setelah pemesanan.'
  },
  {
    question: 'Bagaimana cara memesan dan metode pembayarannya?',
    answer: 'Pemesanan bisa dilakukan melalui Instagram, WhatsApp, atau marketplace resmi kami. Pembayaran dapat dilakukan via transfer bank, e-wallet, atau metode lain yang tersedia.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h1>
          <p className="text-lg text-muted-foreground">
            Pertanyaan yang sering ditanyakan seputar produk BYJOYFACTORY
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-accent/5 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}