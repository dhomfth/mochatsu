
import { Button } from '@/components/ui/button';
import { ArrowDown, BookOpen, PenTool, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden purple-blue-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <BookOpen className="h-12 w-12 md:h-20 md:w-20 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <PenTool className="h-10 w-10 md:h-16 md:w-16 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <BookOpen className="h-14 w-14 md:h-24 md:w-24 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '3s' }}>
          <Star className="h-8 w-8 md:h-12 md:w-12 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white mb-4 md:mb-6 leading-tight">
            Selamat Datang di
            <span className="block text-yellow-300 mt-2">Dunia Mochatsu</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Temukan koleksi novel dan cerpen yang akan membawa Anda ke dalam 
            petualangan tak terlupakan melalui kata-kata yang penuh makna
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8 px-4">
            <div className="flex items-center space-x-2 text-white/80">
              <BookOpen className="h-4 w-4 md:h-6 md:w-6" />
              <span className="text-sm md:text-lg font-semibold">15+ Karya</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Users className="h-4 w-4 md:h-6 md:w-6" />
              <span className="text-sm md:text-lg font-semibold">1000+ Pembaca</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Award className="h-4 w-4 md:h-6 md:w-6" />
              <span className="text-sm md:text-lg font-semibold">Best Seller</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
              onClick={scrollToWorks}
            >
              Jelajahi Karya
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold"
              onClick={() => window.open('https://www.wattpad.com/user/Mochatsuu', '_blank')}
            >
              Follow @Mochatsuu
            </Button>
          </div>

          <div className="text-white/80 text-xs md:text-sm mb-6 md:mb-8 px-4">
            <p>✨ Karya terbaru setiap minggu di Wattpad</p>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              className="h-6 w-6 md:h-8 md:w-8 text-white/70 mx-auto cursor-pointer hover:text-white transition-colors duration-300" 
              onClick={scrollToWorks}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
