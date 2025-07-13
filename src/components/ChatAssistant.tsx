// src/components/ChatAssistant.tsx
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, MessageCircleQuestion, Info, ShoppingBag, Phone } from 'lucide-react';
import { products, Product } from '../data/products'; // Pastikan path ini benar

// Komponen untuk menampilkan logo sebagai avatar bot
const BotAvatarLogo: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="https://s6.imgcdn.dev/Y640dq.jpg" // Path ke logo Anda di folder public
    alt="Logo ByJoyFactory"
    className={`${className} rounded-full object-cover`} // Pastikan logo berbentuk bulat dan terisi baik
    onError={(e) => {
      // Fallback jika logo gagal dimuat
      (e.target as HTMLImageElement).style.display = 'none'; // Sembunyikan img tag
      // Anda bisa menampilkan SVG placeholder atau ikon lain di sini jika mau
      // Untuk saat ini, kita biarkan kosong atau Anda bisa menambahkan SVG seperti sebelumnya
    }}
  />
);


interface ChatMessage {
  id: string;
  text: string | React.ReactNode;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
}

interface SuggestedQuestion {
  text: string;
  icon?: React.ElementType;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const websiteContact = {
    email: "info@byjoyfactory.com",
    phone: "+62 812 3456 7890",
    address: "Bekasi Utara, Indonesia"
  };

  const suggestedQuestions: SuggestedQuestion[] = [
    { text: "Produk apa saja yang tersedia?", icon: ShoppingBag },
    { text: "Bagaimana cara menghubungi support?", icon: Phone },
    { text: "Ceritakan tentang ByJoyFactory", icon: Info },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: `bot-welcome-${Date.now()}`,
          text: 'Halo! Saya asisten virtual ByJoyFactory. Ada yang bisa saya bantu?',
          sender: 'bot',
          timestamp: new Date(),
        },
        {
          id: `system-suggestions-${Date.now()}`,
          text: (
            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Atau pilih salah satu pertanyaan ini:</p>
              <div className="flex flex-col space-y-2 items-start">
                {suggestedQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestionClick(q.text)}
                    className="w-full text-left bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 transition-colors duration-150 flex items-center"
                  >
                    {q.icon && <q.icon size={16} className="mr-2 flex-shrink-0" />}
                    {q.text}
                  </button>
                ))}
              </div>
            </div>
          ),
          sender: 'system',
          timestamp: new Date(),
        }
      ]);
    } else if (!isOpen) {
      setMessages([]);
    }
  }, [isOpen, messages.length]); // Tambahkan messages.length sebagai dependency

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('halo') || lowerCaseMessage.includes('hai') || lowerCaseMessage.includes('selamat')) {
      return 'Halo juga! Ada yang bisa saya bantu hari ini?';
    }

    if (lowerCaseMessage.includes('produk apa saja') || lowerCaseMessage.includes('barang apa saja') || lowerCaseMessage.includes('jual apa') || lowerCaseMessage.includes('produk')) {
      if (products.length > 0) {
        const productNames = products.map(p => p.name).join(', ');
        return `Kami menawarkan berbagai produk menarik, seperti: ${productNames}. Apakah ada produk spesifik yang ingin Anda ketahui lebih detail?`;
      }
      return 'Saat ini kami sedang memperbarui daftar produk kami. Silakan periksa kembali nanti atau hubungi kami untuk informasi lebih lanjut.';
    }

    for (const product of products) {
      if (lowerCaseMessage.includes(product.name.toLowerCase())) {
        let response = `Tentu! Mengenai ${product.name}: Harganya adalah Rp ${product.price.toLocaleString('id-ID')}. Ini adalah ${product.description}.`;
        if (product.details && product.details.length > 0) {
          response += ` Beberapa detail tambahan: ${product.details.join(', ')}.`;
        }
        response += ` Apakah Anda tertarik untuk mengetahui lebih lanjut atau ingin melakukan pemesanan?`;
        return response;
      }
    }
    
    if (lowerCaseMessage.includes('harga')) {
        return `Untuk informasi harga, produk apa yang Anda maksud? Sebutkan nama produknya agar saya bisa bantu cek. Atau Anda bisa melihat daftar produk kami.`;
    }

    if (lowerCaseMessage.includes('kontak') || lowerCaseMessage.includes('hubungi') || lowerCaseMessage.includes('telepon') || lowerCaseMessage.includes('email') || lowerCaseMessage.includes('support')) {
      return `Anda dapat menghubungi kami melalui email di ${websiteContact.email} atau telepon di ${websiteContact.phone}. Kami siap membantu! Anda juga bisa mengunjungi halaman Kontak di website kami.`;
    }

    if (lowerCaseMessage.includes('tentang kami') || lowerCaseMessage.includes('siapa anda') || lowerCaseMessage.includes('perusahaan') || lowerCaseMessage.includes('tentang byjoyfactory')) {
      return 'ByJoyFactory adalah perusahaan yang berdedikasi untuk menyediakan produk berkualitas tinggi dan inovatif. Untuk informasi lebih lengkap, silakan kunjungi halaman "Tentang Kami" di website kami.';
    }
    
    if (lowerCaseMessage.includes('faq') || lowerCaseMessage.includes('pertanyaan umum')) {
        return 'Kumpulan pertanyaan yang sering diajukan beserta jawabannya dapat Anda temukan di halaman FAQ kami. Mungkin pertanyaan Anda sudah terjawab di sana!';
    }

    if (lowerCaseMessage.includes('terima kasih') || lowerCaseMessage.includes('makasih')) {
        return 'Sama-sama! Jika ada hal lain yang bisa saya bantu, jangan ragu untuk bertanya.';
    }
    
    if (lowerCaseMessage.includes('bantuan') || lowerCaseMessage.includes('tolong')) {
        return 'Tentu, saya di sini untuk membantu. Apa yang ingin Anda ketahui atau butuhkan? Anda bisa bertanya tentang produk, layanan, cara pemesanan, atau informasi lainnya.';
    }

    return 'Maaf, saya mungkin belum sepenuhnya memahami pertanyaan Anda. Bisakah Anda mencoba menjelaskannya dengan cara lain? Anda juga bisa menanyakan tentang "produk", "kontak", atau "FAQ".';
  };

  const addMessage = (text: string | React.ReactNode, sender: 'user' | 'bot' | 'system') => {
    const newMessage: ChatMessage = {
      id: `${sender}-${Date.now()}`,
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };
  
  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (textToSend.trim() === '') return;

    addMessage(textToSend, 'user');
    
    const botResponseText = generateBotResponse(textToSend);

    setTimeout(() => {
      addMessage(botResponseText, 'bot');
    }, 600 + Math.random() * 500); 

    if (!messageText) { 
        setInputValue('');
    }
  };

  const handleSuggestedQuestionClick = (question: string) => {
    setMessages(prev => prev.filter(msg => msg.sender !== 'system'));
    handleSendMessage(question);
  };


  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleChat}
          // Ganti warna utama di sini (misal: bg-rose-600, hover:bg-rose-700)
          className="fixed bottom-6 right-6 bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
          aria-label="Buka Chat"
        >
          <MessageCircleQuestion size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full h-full sm:w-96 sm:h-[calc(100vh-6rem)] max-h-[600px] bg-white dark:bg-gray-900 shadow-xl rounded-t-lg sm:rounded-lg flex flex-col z-[100] border border-gray-300 dark:border-gray-700">
          {/* Ganti warna utama di sini (misal: bg-rose-600) */}
          <div className="bg-rose-600 text-white p-4 flex justify-between items-center rounded-t-lg sm:rounded-t-lg">
            <div className="flex items-center">
              <BotAvatarLogo className="w-8 h-8 mr-3" /> {/* Ukuran logo disesuaikan */}
              <h3 className="font-semibold text-lg">Asisten ByJoyFactory</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200" aria-label="Tutup Chat">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50 dark:bg-gray-800 custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                { msg.sender === 'system' ? (
                    <div className="w-full">{msg.text}</div>
                ) : (
                    <div className={`flex items-end max-w-[85%] space-x-2`}>
                    {msg.sender === 'bot' && (
                        <div className="flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded-full h-9 w-9 flex items-center justify-center overflow-hidden"> {/* Dibuat bulat dan overflow hidden */}
                           <BotAvatarLogo className="w-full h-full" />
                        </div>
                    )}
                    <div
                        className={`p-3 rounded-xl shadow-sm ${
                        msg.sender === 'user'
                            // Ganti warna bubble chat pengguna di sini (misal: bg-rose-500)
                            ? 'bg-rose-500 text-white rounded-br-none'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none'
                        }`}
                    >
                        {typeof msg.text === 'string' ? <p className="text-sm whitespace-pre-wrap">{msg.text}</p> : msg.text}
                        <p className="text-xs mt-1 opacity-60 text-right">
                            {msg.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
                    {msg.sender === 'user' && (
                        <div className="flex-shrink-0 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white rounded-full h-9 w-9 flex items-center justify-center">
                           <User size={20} />
                        </div>
                    )}
                    </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-lg sm:rounded-b-lg">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ketik pertanyaan Anda..."
                // Ganti warna focus ring input di sini (misal: focus:ring-rose-500)
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                // Ganti warna tombol kirim di sini (misal: bg-rose-600, hover:bg-rose-700, disabled:bg-rose-300)
                className="bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300 dark:disabled:bg-rose-800 text-white p-3 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
                aria-label="Kirim Pesan"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
