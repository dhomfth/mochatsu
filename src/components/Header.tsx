
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Home, User, Mail, Book } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-playfair font-bold hero-text">
              Mochatsu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              <Home className="h-4 w-4" />
              <span>Beranda</span>
            </Link>
            <Link 
              to="/works" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              <Book className="h-4 w-4" />
              <span>Karya</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              <User className="h-4 w-4" />
              <span>Tentang</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              <span>Kontak</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-purple-600 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                <Home className="h-4 w-4" />
                <span>Beranda</span>
              </Link>
              <Link 
                to="/works" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                <Book className="h-4 w-4" />
                <span>Karya</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                <User className="h-4 w-4" />
                <span>Tentang</span>
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                <Mail className="h-4 w-4" />
                <span>Kontak</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
