
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';

const Works = () => {
  // Data lengkap untuk semua karya tulis
  const books = [
    {
      id: '1',
      title: 'Jejak Langkah di Musim Hujan',
      type: 'novel' as const,
      excerpt: 'Sebuah perjalanan emosional seorang pemuda yang menemukan makna kehidupan di tengah badai yang menghadang. Kisah tentang cinta, persahabatan, dan pengorbanan yang akan menyentuh hati pembaca.',
      publishDate: '15 Nov 2024',
      views: 1250,
      likes: 89
    },
    {
      id: '2',
      title: 'Secangkir Kopi dan Seribu Makna',
      type: 'cerpen' as const,
      excerpt: 'Dalam secangkir kopi yang sederhana, tersimpan kenangan indah yang tak pernah pudar. Sebuah cerpen yang mengisahkan tentang nostalgia dan kehangatan hubungan manusia.',
      publishDate: '8 Nov 2024',
      views: 892,
      likes: 67
    },
    {
      id: '3',
      title: 'Mentari Pagi di Ujung Senja',
      type: 'novel' as const,
      excerpt: 'Ketika harapan hampir sirna, datanglah cahaya yang memberikan kekuatan baru. Novel yang mengangkat tema tentang ketabahan dan optimisme dalam menghadapi ujian hidup.',
      publishDate: '2 Nov 2024',
      views: 1580,
      likes: 124
    },
    {
      id: '4',
      title: 'Dialog dengan Bintang',
      type: 'cerpen' as const,
      excerpt: 'Percakapan sunyi di malam yang kelam, ketika jiwa mencari jawaban atas pertanyaan-pertanyaan hidup. Sebuah cerpen filosofis yang mengajak pembaca untuk merenung.',
      publishDate: '28 Okt 2024',
      views: 756,
      likes: 45
    },
    {
      id: '5',
      title: 'Rumah di Ujung Pelangi',
      type: 'novel' as const,
      excerpt: 'Sebuah rumah tua menyimpan sejuta cerita keluarga yang penuh warna. Novel keluarga yang menghangatkan hati dengan pesan tentang nilai-nilai tradisional dan cinta kasih.',
      publishDate: '20 Okt 2024',
      views: 2134,
      likes: 178
    },
    {
      id: '6',
      title: 'Surat untuk Masa Depan',
      type: 'cerpen' as const,
      excerpt: 'Apa yang akan kita katakan pada diri kita di masa depan? Cerpen yang mengajak pembaca untuk merenungkan perjalanan hidup dan impian yang belum terwujud.',
      publishDate: '15 Okt 2024',
      views: 1023,
      likes: 82
    },
    {
      id: '7',
      title: 'Pelarian Terakhir',
      type: 'novel' as const,
      excerpt: 'Dalam dunia yang penuh dengan tekanan dan ekspektasi, seorang remaja mencari jalan keluar dari labirin kehidupan yang membelenggu. Novel coming-of-age yang menguras emosi.',
      publishDate: '10 Okt 2024',
      views: 1689,
      likes: 143
    },
    {
      id: '8',
      title: 'Bisikan Angin Laut',
      type: 'cerpen' as const,
      excerpt: 'Di tepi pantai yang sunyi, seorang nelayan tua bercerita tentang legenda yang telah turun temurun. Cerpen yang memadukan realitas dengan mistik lokal.',
      publishDate: '5 Okt 2024',
      views: 834,
      likes: 56
    },
    {
      id: '9',
      title: 'Jejak Kaki di Salju',
      type: 'novel' as const,
      excerpt: 'Kisah cinta yang terpisah oleh jarak dan waktu, namun disatukan kembali oleh takdir. Novel romantis yang mengangkat tema tentang kesetiaan dan pengorbanan.',
      publishDate: '28 Sep 2024',
      views: 2456,
      likes: 201
    },
    {
      id: '10',
      title: 'Melodi di Tengah Malam',
      type: 'cerpen' as const,
      excerpt: 'Seorang pianis muda menemukan makna hidupnya melalui musik yang dimainkannya di tengah kesunyian malam. Cerpen tentang passion dan dedikasi seni.',
      publishDate: '22 Sep 2024',
      views: 967,
      likes: 78
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Koleksi Karya Tulis
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Jelajahi seluruh koleksi novel dan cerpen yang telah dipublikasikan. 
              Setiap karya hadir dengan cerita mendalam yang siap membawa Anda 
              ke dalam petualangan emosional yang tak terlupakan.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Filter berdasarkan:</span>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-lg font-medium hover:bg-purple-200 transition-colors duration-300">
                  Semua
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300">
                  Novel
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300">
                  Cerpen
                </button>
              </div>
            </div>
            <div className="text-gray-600">
              <span className="font-medium">{books.length}</span> karya ditemukan
            </div>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="animate-fade-in">
                <BookCard {...book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Works;
