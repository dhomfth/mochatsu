
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, User, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ChatMessage {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  isAuthor?: boolean;
  response?: string;
  responseTimestamp?: string;
}

const ChatPenulis = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      name: 'Andi Pratama',
      message: 'Halo kak, saya sangat menyukai karya-karya Anda. Kapan akan ada karya terbaru lagi?',
      timestamp: '2024-01-15 14:30',
      isAuthor: false,
      response: 'Halo Andi! Terima kasih atas dukungannya. Karya terbaru sedang dalam proses dan akan segera dipublikasikan minggu depan di Wattpad.',
      responseTimestamp: '2024-01-15 15:45'
    },
    {
      id: '2',
      name: 'Sarah Kusuma',
      message: 'Kak, saya ingin tahu inspirasi di balik novel "Jejak Langkah di Musim Hujan"?',
      timestamp: '2024-01-14 10:20',
      isAuthor: false,
      response: 'Halo Sarah! Novel itu terinspirasi dari pengalaman pribadi saat menghadapi masa-masa sulit. Hujan menjadi metafora untuk tantangan hidup yang harus kita lalui.',
      responseTimestamp: '2024-01-14 16:30'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [responseText, setResponseText] = useState<{ [key: string]: string }>({});

  const handleSendMessage = () => {
    if (!newMessage.trim() || !senderName.trim()) {
      toast({
        title: "Peringatan",
        description: "Mohon isi nama dan pesan Anda",
        variant: "destructive"
      });
      return;
    }

    const message: ChatMessage = {
      id: Date.now().toString(),
      name: senderName,
      message: newMessage,
      timestamp: new Date().toLocaleString('id-ID'),
      isAuthor: false
    };

    setMessages([message, ...messages]);
    setNewMessage('');
    setSenderName('');
    
    toast({
      title: "Berhasil!",
      description: "Pesan Anda telah terkirim ke penulis"
    });
  };

  const handleSendResponse = (messageId: string) => {
    const responseMessage = responseText[messageId];
    if (!responseMessage?.trim()) {
      toast({
        title: "Peringatan",
        description: "Mohon isi respon terlebih dahulu",
        variant: "destructive"
      });
      return;
    }

    setMessages(messages.map(msg => 
      msg.id === messageId 
        ? { 
            ...msg, 
            response: responseMessage,
            responseTimestamp: new Date().toLocaleString('id-ID')
          }
        : msg
    ));

    setResponseText(prev => ({ ...prev, [messageId]: '' }));
    
    toast({
      title: "Berhasil!",
      description: "Respon telah disimpan dan dikirim"
    });
  };

  return (
    <Card className="shadow-xl border-purple-200 card-hover">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
        <CardTitle className="flex items-center space-x-2 text-purple-800">
          <MessageCircle className="h-5 w-5" />
          <span>Chat dengan Penulis</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {/* Message Form */}
        <div className="space-y-4 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
          <h4 className="font-semibold text-purple-800 text-lg">Kirim Pesan ke Penulis</h4>
          <Input
            placeholder="Nama Anda"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="border-purple-200 focus:border-purple-500 bg-white/80"
          />
          <Textarea
            placeholder="Tulis pesan Anda untuk penulis..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="border-purple-200 focus:border-purple-500 bg-white/80"
            rows={4}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            <Send className="h-4 w-4 mr-2" />
            Kirim Pesan
          </Button>
        </div>

        {/* Messages List */}
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="space-y-4">
              {/* Original Message */}
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-purple-800">{message.name}</h5>
                      <div className="flex items-center space-x-1 text-sm text-purple-600">
                        <Clock className="h-4 w-4" />
                        <span>{message.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{message.message}</p>
                  </div>
                </div>
              </div>

              {/* Response Section */}
              {message.response ? (
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl border border-purple-200 ml-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 p-2 rounded-full">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-purple-800">Mochatsu (Penulis)</h5>
                        <div className="flex items-center space-x-1 text-sm text-purple-600">
                          <Clock className="h-4 w-4" />
                          <span>{message.responseTimestamp}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{message.response}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="ml-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Tulis respon untuk pesan ini..."
                      value={responseText[message.id] || ''}
                      onChange={(e) => setResponseText(prev => ({ ...prev, [message.id]: e.target.value }))}
                      className="border-purple-200 focus:border-purple-500"
                      rows={3}
                    />
                    <Button 
                      onClick={() => handleSendResponse(message.id)}
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

        {messages.length === 0 && (
          <div className="text-center py-12 text-purple-600">
            <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Belum ada pesan. Mulai percakapan dengan penulis!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatPenulis;
