
import { Button } from '@/components/ui/button';
import { ArrowDown, BookOpen, PenTool } from 'lucide-react';

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <BookOpen className="h-20 w-20 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <PenTool className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <BookOpen className="h-24 w-24 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            Selamat Datang di
            <span className="block text-yellow-300">Dunia Mochatsu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Temukan koleksi novel dan cerpen yang akan membawa Anda ke dalam 
            petualangan tak terlupakan melalui kata-kata yang penuh makna
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 px-8 py-3 text-lg font-semibold"
              onClick={scrollToWorks}
            >
              Jelajahi Karya
            </Button>
            <div className="text-white/80 text-sm">
              <p>Follow @Mochatsu di Wattpad</p>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              className="h-8 w-8 text-white/70 mx-auto cursor-pointer hover:text-white transition-colors duration-300" 
              onClick={scrollToWorks}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
