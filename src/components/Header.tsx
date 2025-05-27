
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Home, User, Mail, Book, Search, Moon, Sun, Bell, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Beranda', icon: Home },
    { path: '/works', label: 'Karya', icon: Book },
    { path: '/about', label: 'Tentang', icon: User },
    { path: '/contact', label: 'Kontak', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect-purple backdrop-blur-lg border-b border-purple-200/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-purple-600 group-hover:text-indigo-600 transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-lg group-hover:bg-indigo-600/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Mochatsu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 shadow-md border border-purple-200'
                    : 'text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-700 hover:shadow-sm'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="text-purple-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="text-purple-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300"
            >
              <Bell className="h-5 w-5" />
            </Button>

            {/* Settings */}
            <Button
              variant="ghost"
              size="icon"
              className="text-purple-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300"
            >
              <Settings className="h-5 w-5" />
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-purple-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-600 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Cari karya atau penulis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500/20 bg-white/80 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 shadow-md'
                      : 'text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-700'
                  }`}
                  onClick={toggleMenu}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="flex items-center space-x-2 px-4 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSearch}
                  className="text-purple-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Pencarian
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="text-purple-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50"
                >
                  {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {isDarkMode ? 'Terang' : 'Gelap'}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
