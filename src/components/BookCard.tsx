
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Eye, Heart } from 'lucide-react';
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
}

const BookCard = ({ id, title, type, excerpt, publishDate, views, likes, coverImage }: BookCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-white">
      <div className="relative overflow-hidden">
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-primary flex items-center justify-center">
            <span className="text-white text-6xl font-playfair font-bold opacity-50">
              {title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            type === 'novel' 
              ? 'bg-purple-500 text-white' 
              : 'bg-pink-500 text-white'
          }`}>
            {type === 'novel' ? 'Novel' : 'Cerpen'}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
        
        <Link to={`/book/${id}`}>
          <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300">
            Baca Selengkapnya
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BookCard;
