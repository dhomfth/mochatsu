
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-playfair font-bold">Mochatsu</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Platform publikasi karya tulis yang menghadirkan novel dan cerpen 
              berkualitas dengan cerita yang menginspirasi dan menghibur.
            </p>
            <div className="text-sm text-gray-400">
              <p>Follow: @Mochatsu di Wattpad</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigasi</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Beranda
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Tentang Penulis
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Kontak
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <a 
                  href="mailto:ridhohusna02@gmail.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  ridhohusna02@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <a 
                  href="tel:+6289510275568" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  +62 895 1027 5568
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Indramayu, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Mochatsu. Semua hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
