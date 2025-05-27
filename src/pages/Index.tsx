
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookCard from '@/components/BookCard';
import Footer from '@/components/Footer';

const Index = () => {
  // Sample data untuk karya tulis dengan link Wattpad
  const books = [
    {
      id: '1',
      title: 'Jejak Langkah di Musim Hujan',
      type: 'novel' as const,
      excerpt: 'Sebuah perjalanan emosional seorang pemuda yang menemukan makna kehidupan di tengah badai yang menghadang. Kisah tentang cinta, persahabatan, dan pengorbanan yang akan menyentuh hati pembaca.',
      publishDate: '15 Nov 2024',
      views: 1250,
      likes: 89,
      wattpadUrl: 'https://www.wattpad.com/story/jejak-langkah-di-musim-hujan'
    },
    {
      id: '2',
      title: 'Secangkir Kopi dan Seribu Makna',
      type: 'cerpen' as const,
      excerpt: 'Dalam secangkir kopi yang sederhana, tersimpan kenangan indah yang tak pernah pudar. Sebuah cerpen yang mengisahkan tentang nostalgia dan kehangatan hubungan manusia.',
      publishDate: '8 Nov 2024',
      views: 892,
      likes: 67,
      wattpadUrl: 'https://www.wattpad.com/story/secangkir-kopi-dan-seribu-makna'
    },
    {
      id: '3',
      title: 'Mentari Pagi di Ujung Senja',
      type: 'novel' as const,
      excerpt: 'Ketika harapan hampir sirna, datanglah cahaya yang memberikan kekuatan baru. Novel yang mengangkat tema tentang ketabahan dan optimisme dalam menghadapi ujian hidup.',
      publishDate: '2 Nov 2024',
      views: 1580,
      likes: 124,
      wattpadUrl: 'https://www.wattpad.com/story/mentari-pagi-di-ujung-senja'
    },
    {
      id: '4',
      title: 'Dialog dengan Bintang',
      type: 'cerpen' as const,
      excerpt: 'Percakapan sunyi di malam yang kelam, ketika jiwa mencari jawaban atas pertanyaan-pertanyaan hidup. Sebuah cerpen filosofis yang mengajak pembaca untuk merenung.',
      publishDate: '28 Okt 2024',
      views: 756,
      likes: 45,
      wattpadUrl: 'https://www.wattpad.com/story/dialog-dengan-bintang'
    },
    {
      id: '5',
      title: 'Rumah di Ujung Pelangi',
      type: 'novel' as const,
      excerpt: 'Sebuah rumah tua menyimpan sejuta cerita keluarga yang penuh warna. Novel keluarga yang menghangatkan hati dengan pesan tentang nilai-nilai tradisional dan cinta kasih.',
      publishDate: '20 Okt 2024',
      views: 2134,
      likes: 178,
      wattpadUrl: 'https://www.wattpad.com/story/rumah-di-ujung-pelangi'
    },
    {
      id: '6',
      title: 'Surat untuk Masa Depan',
      type: 'cerpen' as const,
      excerpt: 'Apa yang akan kita katakan pada diri kita di masa depan? Cerpen yang mengajak pembaca untuk merenungkan perjalanan hidup dan impian yang belum terwujud.',
      publishDate: '15 Okt 2024',
      views: 1023,
      likes: 82,
      wattpadUrl: 'https://www.wattpad.com/story/surat-untuk-masa-depan'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Hero />
      
      {/* Works Section */}
      <section id="works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              <span className="text-amber-800">Koleksi Karya</span>
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Jelajahi dunia imajinasi melalui kumpulan novel dan cerpen yang telah ditulis 
              dengan penuh passion dan dedikasi untuk para pembaca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="animate-fade-in">
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Bergabunglah dalam Perjalanan Literasi
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ikuti terus karya-karya terbaru dan jadilah bagian dari komunitas pembaca 
            yang mengapresiasi keindahan kata-kata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.wattpad.com/user/Mochatsuu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-amber-800 hover:bg-amber-100 hover:text-amber-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              Follow di Wattpad
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
