
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, User, Clock, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ChatMessage {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  isAuthor?: boolean;
  response?: string;
  responseTimestamp?: string;
  status?: 'sent' | 'read' | 'replied';
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
      responseTimestamp: '2024-01-15 15:45',
      status: 'replied'
    },
    {
      id: '2',
      name: 'Sarah Kusuma',
      message: 'Kak, saya ingin tahu inspirasi di balik novel "Jejak Langkah di Musim Hujan"?',
      timestamp: '2024-01-14 10:20',
      isAuthor: false,
      response: 'Halo Sarah! Novel itu terinspirasi dari pengalaman pribadi saat menghadapi masa-masa sulit. Hujan menjadi metafora untuk tantangan hidup yang harus kita lalui.',
      responseTimestamp: '2024-01-14 16:30',
      status: 'replied'
    },
    {
      id: '3',
      name: 'Budi Santoso',
      message: 'Bagaimana cara Anda mengatasi writer\'s block? Saya sering mengalaminya.',
      timestamp: '2024-01-16 09:15',
      isAuthor: false,
      status: 'read'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [responseText, setResponseText] = useState<{ [key: string]: string }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'replied'>('all');
  const [expandedMessages, setExpandedMessages] = useState<Set<string>>(new Set());
  const [showMessageForm, setShowMessageForm] = useState(false);

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
      isAuthor: false,
      status: 'sent'
    };

    setMessages([message, ...messages]);
    setNewMessage('');
    setSenderName('');
    setShowMessageForm(false);
    
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
            responseTimestamp: new Date().toLocaleString('id-ID'),
            status: 'replied'
          }
        : msg
    ));

    setResponseText(prev => ({ ...prev, [messageId]: '' }));
    
    toast({
      title: "Berhasil!",
      description: "Respon telah disimpan dan dikirim"
    });
  };

  const toggleExpanded = (messageId: string) => {
    const newExpanded = new Set(expandedMessages);
    if (newExpanded.has(messageId)) {
      newExpanded.delete(messageId);
    } else {
      newExpanded.add(messageId);
    }
    setExpandedMessages(newExpanded);
  };

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'unread' && msg.status !== 'replied') ||
                         (filterStatus === 'replied' && msg.status === 'replied');
    
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'sent':
        return <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Terkirim</span>;
      case 'read':
        return <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Dibaca</span>;
      case 'replied':
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Dibalas</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="shadow-2xl border-purple-200 card-hover overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Chat dengan Penulis</h3>
              <p className="text-purple-100 text-sm">Terhubung langsung dengan Mochatsu</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-sm">
            <div className="bg-white/20 px-3 py-1 rounded-full">
              {filteredMessages.length} pesan
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        {/* Search and Filter Bar */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-purple-100">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
              <Input
                placeholder="Cari pesan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-purple-200 focus:border-purple-500 bg-white/80"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-3 py-2 border border-purple-200 rounded-md focus:border-purple-500 bg-white text-sm"
              >
                <option value="all">Semua</option>
                <option value="unread">Belum Dibalas</option>
                <option value="replied">Sudah Dibalas</option>
              </select>
              <Button 
                onClick={() => setShowMessageForm(!showMessageForm)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-sm"
              >
                <Send className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Pesan Baru</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Message Form */}
        {showMessageForm && (
          <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-b border-purple-200 animate-fade-in">
            <h4 className="font-semibold text-purple-800 text-lg mb-4">Kirim Pesan Baru</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Nama Anda"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="border-purple-200 focus:border-purple-500 bg-white/80"
              />
            </div>
            <Textarea
              placeholder="Tulis pesan Anda untuk penulis..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border-purple-200 focus:border-purple-500 bg-white/80 mb-4"
              rows={4}
            />
            <div className="flex gap-2">
              <Button 
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Kirim Pesan
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowMessageForm(false)}
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                Batal
              </Button>
            </div>
          </div>
        )}

        {/* Messages List */}
        <div className="max-h-96 sm:max-h-[500px] overflow-y-auto">
          {filteredMessages.length > 0 ? (
            <div className="divide-y divide-purple-100">
              {filteredMessages.map((message) => (
                <div key={message.id} className="p-4 sm:p-6 hover:bg-purple-50/50 transition-colors">
                  {/* Original Message */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3 flex-1 min-w-0">
                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-2 rounded-full flex-shrink-0">
                          <User className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h5 className="font-semibold text-purple-800 truncate">{message.name}</h5>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(message.status)}
                              <div className="flex items-center space-x-1 text-xs sm:text-sm text-purple-600">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{message.timestamp}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm sm:text-base">
                            <p className={`text-gray-700 leading-relaxed ${
                              !expandedMessages.has(message.id) && message.message.length > 100 
                                ? 'line-clamp-2' 
                                : ''
                            }`}>
                              {message.message}
                            </p>
                            {message.message.length > 100 && (
                              <button
                                onClick={() => toggleExpanded(message.id)}
                                className="text-purple-600 hover:text-purple-800 text-xs sm:text-sm mt-1 flex items-center"
                              >
                                {expandedMessages.has(message.id) ? (
                                  <>Lebih sedikit <ChevronUp className="h-3 w-3 ml-1" /></>
                                ) : (
                                  <>Selengkapnya <ChevronDown className="h-3 w-3 ml-1" /></>
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Response Section */}
                    {message.response ? (
                      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-xl border border-purple-200 ml-0 sm:ml-12 animate-fade-in">
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-600 p-2 rounded-full flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h6 className="font-semibold text-purple-800">Mochatsu (Penulis)</h6>
                              <div className="flex items-center space-x-1 text-xs sm:text-sm text-purple-600">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{message.responseTimestamp}</span>
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{message.response}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="ml-0 sm:ml-12 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="space-y-3">
                          <Textarea
                            placeholder="Tulis respon untuk pesan ini..."
                            value={responseText[message.id] || ''}
                            onChange={(e) => setResponseText(prev => ({ ...prev, [message.id]: e.target.value }))}
                            className="border-purple-200 focus:border-purple-500 text-sm"
                            rows={3}
                          />
                          <Button 
                            onClick={() => handleSendResponse(message.id)}
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Kirim Respon
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                {searchTerm || filterStatus !== 'all' ? 'Tidak ada pesan yang ditemukan' : 'Belum ada pesan'}
              </h3>
              <p className="text-purple-600">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Coba ubah kata kunci pencarian atau filter'
                  : 'Mulai percakapan dengan penulis!'
                }
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatPenulis;
