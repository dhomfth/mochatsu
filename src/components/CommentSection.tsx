
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Heart, Star, Flag, Reply } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
  likes: number;
  rating?: number;
  response?: string;
  responseDate?: string;
}

interface CommentSectionProps {
  bookId: string;
}

const CommentSection = ({ bookId }: CommentSectionProps) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      name: 'Andi Pratama',
      content: 'Cerita yang sangat menyentuh hati! Gaya penulisannya sangat indah dan mengalir.',
      date: '2 hari yang lalu',
      likes: 5,
      rating: 5,
      response: 'Terima kasih Andi! Senang sekali karya ini bisa menyentuh hatimu. Dukunganmu sangat berarti untuk saya.',
      responseDate: '1 hari yang lalu'
    },
    {
      id: '2',
      name: 'Sarah Kusuma',
      content: 'Plotnya tidak terduga, benar-benar membuat saya terbawa suasana dari awal hingga akhir.',
      date: '5 hari yang lalu',
      likes: 3,
      rating: 4
    },
    {
      id: '3',
      name: 'Budi Santoso',
      content: 'Karakternya sangat hidup, seolah-olah saya bisa merasakan emosi yang mereka alami.',
      date: '1 minggu yang lalu',
      likes: 7,
      rating: 5,
      response: 'Halo Budi! Itu adalah pujian terbaik untuk seorang penulis. Saya berusaha membuat karakter yang relatable dan hidup.',
      responseDate: '6 hari yang lalu'
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [rating, setRating] = useState(0);
  const [responseText, setResponseText] = useState<{ [key: string]: string }>({});

  const handleSubmitComment = () => {
    if (!newComment.trim() || !commenterName.trim()) {
      toast({
        title: "Peringatan",
        description: "Mohon isi nama dan komentar Anda",
        variant: "destructive"
      });
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      name: commenterName,
      content: newComment,
      date: 'Baru saja',
      likes: 0,
      rating: rating || undefined
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setCommenterName('');
    setRating(0);
    
    toast({
      title: "Berhasil!",
      description: "Komentar Anda telah ditambahkan"
    });
  };

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const handleSendResponse = (commentId: string) => {
    const response = responseText[commentId];
    if (!response?.trim()) {
      toast({
        title: "Peringatan",
        description: "Mohon isi respon terlebih dahulu",
        variant: "destructive"
      });
      return;
    }

    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            response,
            responseDate: 'Baru saja'
          }
        : comment
    ));

    setResponseText(prev => ({ ...prev, [commentId]: '' }));
    
    toast({
      title: "Berhasil!",
      description: "Respon telah disimpan dan ditambahkan"
    });
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating 
                ? 'fill-purple-500 text-purple-500' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-purple-400' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <Card className="shadow-xl border-purple-200 card-hover">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
        <CardTitle className="flex items-center space-x-2 text-purple-800">
          <MessageCircle className="h-5 w-5" />
          <span>Komentar & Ulasan ({comments.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {/* Comment Form */}
        <div className="space-y-4 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
          <h4 className="font-semibold text-purple-800 text-lg">Tulis Komentar & Berikan Rating</h4>
          <Input
            placeholder="Nama Anda"
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
            className="border-purple-200 focus:border-purple-500 bg-white/80"
          />
          <div className="space-y-2">
            <label className="text-sm font-medium text-purple-700">Rating (opsional):</label>
            {renderStars(rating, true, setRating)}
          </div>
          <Textarea
            placeholder="Bagikan pendapat Anda tentang karya ini..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border-purple-200 focus:border-purple-500 bg-white/80"
            rows={4}
          />
          <Button 
            onClick={handleSubmitComment}
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            <Send className="h-4 w-4 mr-2" />
            Kirim Komentar
          </Button>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              {/* Original Comment */}
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <div className="space-y-1">
                    <h5 className="font-semibold text-purple-800">{comment.name}</h5>
                    <div className="flex items-center space-x-3">
                      <p className="text-sm text-purple-600">{comment.date}</p>
                      {comment.rating && renderStars(comment.rating)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLikeComment(comment.id)}
                      className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-all duration-300"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                    >
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
              </div>

              {/* Author Response */}
              {comment.response ? (
                <div className="ml-8 bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 p-2 rounded-full flex-shrink-0">
                      <Reply className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h6 className="font-semibold text-purple-800">Mochatsu (Penulis)</h6>
                        <p className="text-sm text-purple-600">{comment.responseDate}</p>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{comment.response}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="ml-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Respon Penulis:</label>
                    <Textarea
                      placeholder="Tulis respon untuk komentar ini..."
                      value={responseText[comment.id] || ''}
                      onChange={(e) => setResponseText(prev => ({ ...prev, [comment.id]: e.target.value }))}
                      className="border-purple-200 focus:border-purple-500"
                      rows={3}
                    />
                    <Button 
                      onClick={() => handleSendResponse(comment.id)}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Kirim Respon
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-12 text-purple-600">
            <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Belum ada komentar. Jadilah yang pertama berkomentar!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CommentSection;
