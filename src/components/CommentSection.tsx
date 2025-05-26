
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: string;
  name: string;
  content: string;
  date: string;
  likes: number;
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
      likes: 5
    },
    {
      id: '2',
      name: 'Sarah Kusuma',
      content: 'Plotnya tidak terduga, benar-benar membuat saya terbawa suasana dari awal hingga akhir.',
      date: '5 hari yang lalu',
      likes: 3
    },
    {
      id: '3',
      name: 'Budi Santoso',
      content: 'Karakternya sangat hidup, seolah-olah saya bisa merasakan emosi yang mereka alami.',
      date: '1 minggu yang lalu',
      likes: 7
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [commenterName, setCommenterName] = useState('');

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
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setCommenterName('');
    
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

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-amber-800">
          <MessageCircle className="h-5 w-5" />
          <span>Komentar ({comments.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Comment Form */}
        <div className="space-y-4 p-4 bg-amber-50 rounded-lg">
          <h4 className="font-semibold text-amber-800">Tulis Komentar</h4>
          <Input
            placeholder="Nama Anda"
            value={commenterName}
            onChange={(e) => setCommenterName(e.target.value)}
            className="border-amber-200 focus:border-amber-500"
          />
          <Textarea
            placeholder="Bagikan pendapat Anda tentang karya ini..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border-amber-200 focus:border-amber-500"
            rows={3}
          />
          <Button 
            onClick={handleSubmitComment}
            className="bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
          >
            <Send className="h-4 w-4 mr-2" />
            Kirim Komentar
          </Button>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-amber-100 pb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h5 className="font-semibold text-amber-800">{comment.name}</h5>
                  <p className="text-sm text-amber-600">{comment.date}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLikeComment(comment.id)}
                  className="text-amber-600 hover:text-amber-800 hover:bg-amber-50"
                >
                  <Heart className="h-4 w-4 mr-1" />
                  {comment.likes}
                </Button>
              </div>
              <p className="text-gray-700 leading-relaxed">{comment.content}</p>
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-8 text-amber-600">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Belum ada komentar. Jadilah yang pertama berkomentar!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CommentSection;
