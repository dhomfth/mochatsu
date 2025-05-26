
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, PenTool, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Tentang Mochatsu
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Mengenal lebih dekat dengan penulis di balik karya-karya yang menginspirasi
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <PenTool className="h-16 w-16 text-white" />
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-4">Selamat Datang</h2>
                <p className="text-lg text-gray-600">
                  Saya adalah seorang penulis yang passionate dalam menciptakan cerita-cerita 
                  yang dapat menyentuh hati dan menginspirasi pembaca.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
                    Perjalanan Menulis
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Menulis adalah passion yang telah mengalir dalam darah saya sejak lama. 
                    Setiap kata yang tertuang adalah cerminan dari pengalaman, impian, dan 
                    refleksi tentang kehidupan yang terus berkembang.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-pink-600 mr-2" />
                    Filosofi Berkarya
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Saya percaya bahwa setiap cerita memiliki kekuatan untuk mengubah perspektif 
                    dan membawa pembaca dalam perjalanan emosional yang mendalam. Karya saya 
                    selalu berusaha menyampaikan pesan yang bermakna.
                  </p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-6 text-center">Genre Favorit</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Drama</span>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Romance</span>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Slice of Life</span>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <PenTool className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Inspirational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Karya Dipublikasi</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-pink-600 mb-2">50K+</div>
                <div className="text-gray-600">Total Pembaca</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600">Tahun Menulis</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Followers</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-secondary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Mari Terhubung
              </h3>
              <p className="mb-6">
                Ikuti perjalanan menulis saya dan jadilah bagian dari komunitas pembaca 
                yang mengapresiasi karya sastra Indonesia
              </p>
              <a 
                href="https://www.wattpad.com/user/Mochatsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                Follow @Mochatsu di Wattpad
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
