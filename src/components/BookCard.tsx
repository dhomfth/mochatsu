
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Eye, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookCardProps {
  id: string;
  title: string;
  type: 'novel' | 'cerpen';
  excerpt: string;
  publishDate: string;
  views: number;
  likes: number;
  coverImage?: string;
  wattpadUrl?: string;
}

const BookCard = ({ id, title, type, excerpt, publishDate, views, likes, coverImage, wattpadUrl }: BookCardProps) => {
  const handleWattpadClick = () => {
    if (wattpadUrl) {
      window.open(wattpadUrl, '_blank');
    } else {
      // Default Wattpad profile if specific story URL not available
      window.open('https://www.wattpad.com/user/Mochatsuu', '_blank');
    }
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-white border-amber-200">
      <div className="relative overflow-hidden">
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
            <span className="text-white text-6xl font-playfair font-bold opacity-50">
              {title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            type === 'novel' 
              ? 'bg-amber-700 text-white' 
              : 'bg-amber-600 text-white'
          }`}>
            {type === 'novel' ? 'Novel' : 'Cerpen'}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-amber-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-amber-800 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-amber-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Link to={`/book/${id}`}>
            <Button className="w-full bg-gradient-to-br from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 transition-all duration-300">
              Baca Preview
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 transition-all duration-300"
            onClick={handleWattpadClick}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Baca Selengkapnya di Wattpad
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
