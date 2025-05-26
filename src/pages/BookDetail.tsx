import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Eye, Heart, Share2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();

  // Data lengkap untuk semua karya tulis
  const bookData = {
    '1': {
      title: 'Jejak Langkah di Musim Hujan',
      type: 'novel',
      publishDate: '15 November 2024',
      views: 1250,
      likes: 89,
      fullContent: `Hujan turun dengan deras di sore itu, membasahi jalanan kota yang mulai sepi. Andi berjalan sendirian di trotoar yang basah, langkahnya tergesa namun entah kemana arah tujuannya. Setiap tetes air hujan yang jatuh seolah mengingatkannya pada kenangan yang telah lama ia coba lupakan.

Tiga tahun yang lalu, di tempat yang sama, ia pernah berjalan bersama Sarah. Gadis yang telah mengubah hidupnya, yang mengajarkannya arti cinta sejati. Namun takdir berkata lain. Sarah harus pergi, meninggalkan Andi dengan sejuta pertanyaan yang tak pernah terjawab.

"Kenapa harus berpisah?" gumam Andi sambil terus melangkah. Air matanya bercampur dengan air hujan, membuat wajahnya basah kuyup. Ia tidak peduli dengan dinginnya malam, yang ia pedulikan hanya satu - bagaimana cara melanjutkan hidup tanpa Sarah.

Di ujung jalan, ia melihat sesosok wanita berdiri di bawah halte bus. Postur tubuhnya begitu familiar, rambut panjangnya yang terurai, cara berdirinya yang anggun. Jantung Andi berdetak kencang. Apakah mungkin...?

"Sarah?" bisiknya pelan, hampir tidak percaya dengan apa yang dilihatnya.

Wanita itu menoleh. Mata mereka bertemu dalam gerimis hujan yang mulai reda. Senyuman tipis tersungging di bibirnya, senyuman yang sama seperti tiga tahun yang lalu.

"Andi..." suaranya masih sama, lembut seperti angin sepoi-sepoi.

Tanpa berkata apa-apa lagi, mereka saling berlari menghampiri. Pelukan hangat di tengah dinginnya malam hujan, seolah waktu berhenti berputar. Semua luka, semua kesedihan, semuanya sirna dalam sekejap.

"Aku kembali," bisik Sarah di telinga Andi.

"Dan aku tidak akan membiarkanmu pergi lagi," jawab Andi sambil memeluknya semakin erat.

Hujan berhenti. Langit mulai cerah. Dan cinta mereka, sekali lagi, menemukan jalannya pulang.

Keesokan harinya, mereka duduk bersama di kafe kecil tempat mereka biasa bertemu dulu. Sarah menceritakan perjalanan hidupnya selama tiga tahun terakhir, bagaimana ia harus pindah ke luar negeri karena pekerjaan ayahnya, bagaimana ia tidak pernah sehari pun melupakan Andi.

"Aku menulis surat untukmu setiap hari," kata Sarah sambil mengeluarkan sebuah kotak kecil dari tasnya. "Tapi aku tidak pernah mengirimkannya karena takut kamu sudah melupakanku."

Andi mengambil kotak itu dengan tangan bergetar. Di dalamnya, puluhan surat dengan tulisan tangan Sarah yang familiar. Setiap surat berisi kerinduan, harapan, dan cinta yang tak pernah pudar.

"Bagaimana mungkin aku melupakanmu?" bisik Andi. "Kamu adalah bagian dari jiwaku yang hilang."

Mereka memutuskan untuk memulai semuanya dari awal, tapi kali ini dengan tekad yang lebih kuat. Tidak ada lagi yang bisa memisahkan mereka. Cinta mereka telah melewati ujian waktu dan jarak, dan kini saatnya untuk menulis babak baru dalam kisah hidup mereka.`,
      excerpt: 'Sebuah perjalanan emosional seorang pemuda yang menemukan makna kehidupan di tengah badai yang menghadang. Kisah tentang cinta, persahabatan, dan pengorbanan yang akan menyentuh hati pembaca.'
    },
    '2': {
      title: 'Secangkir Kopi dan Seribu Makna',
      type: 'cerpen',
      publishDate: '8 November 2024',
      views: 892,
      likes: 67,
      fullContent: `Sore itu, seperti biasa, Pak Budi duduk di teras kedai kopinya yang sederhana. Kedai kecil di pinggir jalan yang telah berusia lebih dari dua puluh tahun itu menjadi saksi bisu berbagai kisah hidup yang datang dan pergi.

"Satu kopi tubruk, Pak," kata seorang pemuda yang baru saja datang.

Pak Budi tersenyum ramah sambil menyiapkan pesanan. Ia memperhatikan wajah lelah pemuda itu. Ada sesuatu yang familiar dari tatapan matanya - tatapan seseorang yang sedang berjuang dengan hidupnya.

"Pertama kali ke sini?" tanya Pak Budi sambil menyajikan secangkir kopi hangat.

"Iya, Pak. Saya baru pindah ke daerah sini," jawab pemuda itu sambil duduk di kursi plastik yang sudah agak kusam.

"Namanya siapa, Nak?"

"Reza, Pak."

Pak Budi mengangguk sambil ikut duduk di sebelah Reza. "Bapak di sini sudah dua puluh tahun, Nak. Sudah banyak cerita yang Bapak dengar dari para pelanggan. Kadang orang datang ke sini bukan hanya untuk minum kopi, tapi juga untuk mencari ketenangan."

Reza mengangguk sambil menyeruput kopinya. Rasa pahit bercampur manis itu seolah merefleksikan hidupnya saat ini.

"Bapak tahu, Nak, setiap cangkir kopi itu punya cerita. Seperti hidup kita, kadang pahit, kadang manis, tapi selalu punya makna," kata Pak Budi bijak.

"Saya baru saja kehilangan pekerjaan, Pak," akhirnya Reza bercerita. "Sudah berminggu-minggu melamar ke mana-mana, tapi belum ada yang merespons."

Pak Budi tersenyum hangat. "Dulu, sebelum buka kedai ini, Bapak juga pernah mengalami masa-masa sulit. Dikeluarkan dari pekerjaan, istri sakit, anak masih kecil-kecil. Rasanya dunia seperti runtuh."

"Lalu bagaimana Bapak bisa bertahan?"

"Dengan secangkir kopi," jawab Pak Budi sambil tertawa kecil. "Bapak sadar, hidup ini seperti proses menyeduh kopi. Butuh waktu, kesabaran, dan takaran yang tepat. Kalau terburu-buru, hasilnya pasti tidak sempurna."

Reza mulai memahami maksud Pak Budi. "Jadi, saya harus bersabar?"

"Bukan hanya sabar, Nak. Tapi juga terus berusaha sambil menikmati prosesnya. Seperti kopi ini, nikmatnya bukan hanya pada hasil akhir, tapi juga pada aromanya, hangatnya, dan momen kebersamaan seperti ini."

Sejak hari itu, Reza menjadi pelanggan tetap kedai Pak Budi. Setiap sore, ia datang untuk minum kopi sambil berbagi cerita. Pak Budi selalu mendengarkan dengan sabar dan memberikan nasihat-nasihat sederhana namun bermakna.

Hingga suatu hari, Reza datang dengan wajah berseri-seri.

"Pak Budi, saya dapat pekerjaan!"

"Alhamdulillah, Nak. Bapak turut senang."

"Terima kasih, Pak. Nasihat Bapak tentang kopi itu yang membuat saya tidak menyerah."

Pak Budi tersenyum sambil menyajikan secangkir kopi untuk Reza. "Ingat, Nak, hidup akan terus memberikan tantangan. Tapi selama kita punya tempat untuk pulang dan secangkir kopi untuk merenung, semuanya pasti akan baik-baik saja."

Mereka menikmati kopi itu dalam keheningan yang hangat, ditemani suara sore yang mulai beranjak malam. Di dalam secangkir kopi sederhana itu, tersimpan ribuan makna tentang kehidupan, persahabatan, dan harapan.`,
      excerpt: 'Dalam secangkir kopi yang sederhana, tersimpan kenangan indah yang tak pernah pudar. Sebuah cerpen yang mengisahkan tentang nostalgia dan kehangatan hubungan manusia.'
    },
    // Add more books as needed
  };

  const book = bookData[id as keyof typeof bookData];

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Karya Tidak Ditemukan</h1>
          <Link to="/works">
            <Button>Lihat Semua Karya</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/works" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Karya
            </Link>
            
            <div className="text-center text-white">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                book.type === 'novel' ? 'bg-purple-500' : 'bg-pink-500'
              }`}>
                {book.type === 'novel' ? 'Novel' : 'Cerpen'}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                {book.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{book.publishDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{book.views}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>{book.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                        {book.fullContent}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Action Buttons */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300">
                        <Heart className="h-4 w-4 mr-2" />
                        Suka
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Bagikan
                      </Button>
                      <Button variant="outline" className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Simpan
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Author Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Tentang Penulis</h3>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl font-bold">M</span>
                      </div>
                      <h4 className="font-semibold">Mochatsu</h4>
                      <p className="text-sm text-gray-600 mb-4">Penulis Novel & Cerpen</p>
                      <a 
                        href="https://www.wattpad.com/user/Mochatsu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 text-sm transition-colors duration-300"
                      >
                        @Mochatsu di Wattpad
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Reading Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Statistik</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pembaca</span>
                        <span className="font-semibold">{book.views}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Disukai</span>
                        <span className="font-semibold">{book.likes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Komentar</span>
                        <span className="font-semibold">23</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDetail;
