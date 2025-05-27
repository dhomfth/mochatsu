import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatPenulis from '@/components/ChatPenulis';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, Send, Linkedin, Calendar, Clock, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  timestamp: string;
  response?: string;
  responseTimestamp?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [responseText, setResponseText] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      category: formData.get('category') as string,
      message: formData.get('message') as string,
      timestamp: new Date().toLocaleString('id-ID')
    };

    setContactMessages([newMessage, ...contactMessages]);
    (e.target as HTMLFormElement).reset();
    
    toast({
      title: "Berhasil!",
      description: "Pesan Anda telah terkirim"
    });
  };

  const handleSendResponse = (messageId: string) => {
    const response = responseText[messageId];
    if (!response?.trim()) {
      toast({
        title: "Peringatan",
        description: "Mohon isi respon terlebih dahulu",
        variant: "destructive"
      });
      return;
    }

    setContactMessages(contactMessages.map(msg => 
      msg.id === messageId 
        ? { 
            ...msg, 
            response,
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 purple-blue-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Jangan ragu untuk menghubungi kami. Kami selalu senang mendengar dari para pembaca
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-playfair font-bold mb-6">
                    <span className="hero-text">Mari Terhubung</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Saya selalu terbuka untuk berdiskusi tentang karya, mendapat feedback, 
                    atau sekadar berbagi cerita dengan sesama pecinta literatur. 
                    Jangan ragu untuk menghubungi saya melalui berbagai channel yang tersedia.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">Email</h3>
                          <a 
                            href="mailto:ridhohusna02@gmail.com" 
                            className="text-purple-600 hover:text-indigo-600 transition-colors duration-300"
                          >
                            ridhohusna02@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">Telepon</h3>
                          <a 
                            href="tel:+6289510275568" 
                            className="text-green-600 hover:text-emerald-600 transition-colors duration-300"
                          >
                            +62 895 1027 5568
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-3 rounded-full">
                          <Instagram className="h-6 w-6 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">Instagram</h3>
                          <a 
                            href="https://instagram.com/dhomfth" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-rose-600 transition-colors duration-300"
                          >
                            @dhomfth
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-full">
                          <Linkedin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">LinkedIn</h3>
                          <a 
                            href="https://linkedin.com/in/ridho-miftah-husna" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-indigo-600 transition-colors duration-300"
                          >
                            linkedin.com/in/ridho-miftah-husna
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">Lokasi</h3>
                          <p className="text-gray-600">Indramayu, Indonesia</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-3 rounded-full">
                          <MessageCircle className="h-6 w-6 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">Wattpad</h3>
                          <a 
                            href="https://www.wattpad.com/user/Mochatsuu" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-rose-600 transition-colors duration-300"
                          >
                            @Mochatsuu
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Features */}
                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">Jam Respon</h3>
                          <p className="text-gray-600">Senin - Jumat: 09:00 - 17:00 WIB</p>
                          <p className="text-sm text-gray-500">Biasanya membalas dalam 24 jam</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 card-hover purple-blue-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-3 rounded-full">
                          <Calendar className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-purple-800">Konsultasi</h3>
                          <p className="text-gray-600">Tersedia untuk diskusi karya dan kolaborasi</p>
                          <Button size="sm" className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                            Jadwalkan Meeting
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-xl purple-blue-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold mb-6 text-purple-800">Kirim Pesan</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-purple-700 mb-2">
                            Nama Lengkap
                          </label>
                          <Input 
                            type="text" 
                            name="name"
                            placeholder="Masukkan nama Anda"
                            className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500/20"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-purple-700 mb-2">
                            Email
                          </label>
                          <Input 
                            type="email" 
                            name="email"
                            placeholder="nama@email.com"
                            className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500/20"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-purple-700 mb-2">
                          Subjek
                        </label>
                        <Input 
                          type="text" 
                          name="subject"
                          placeholder="Subjek pesan"
                          className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500/20"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-purple-700 mb-2">
                          Kategori
                        </label>
                        <select 
                          name="category"
                          className="w-full px-3 py-2 border border-purple-200 rounded-md focus:border-purple-500 focus:ring-purple-500/20"
                        >
                          <option value="">Pilih kategori</option>
                          <option value="feedback">Feedback Karya</option>
                          <option value="collaboration">Kolaborasi</option>
                          <option value="general">Pertanyaan Umum</option>
                          <option value="business">Kerjasama Bisnis</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-purple-700 mb-2">
                          Pesan
                        </label>
                        <Textarea 
                          name="message"
                          placeholder="Tuliskan pesan Anda di sini..."
                          className="w-full h-32 resize-none border-purple-200 focus:border-purple-500 focus:ring-purple-500/20"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                        size="lg"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Chat with Author Section */}
            <div className="mt-16">
              <ChatPenulis />
            </div>

            {/* Contact Messages Management */}
            {contactMessages.length > 0 && (
              <div className="mt-16">
                <Card className="shadow-xl border-purple-200">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-playfair font-bold mb-6 text-purple-800">Pesan Masuk</h3>
                    <div className="space-y-6">
                      {contactMessages.map((msg) => (
                        <div key={msg.id} className="space-y-4">
                          <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                            <div className="mb-4">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-purple-800">{msg.name}</h4>
                                <span className="text-sm text-purple-600">{msg.timestamp}</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{msg.email} • {msg.category}</p>
                              <h5 className="font-medium text-gray-800 mb-2">{msg.subject}</h5>
                              <p className="text-gray-700">{msg.message}</p>
                            </div>
                          </div>

                          {msg.response ? (
                            <div className="ml-8 bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl border border-purple-200">
                              <div className="flex justify-between items-start mb-2">
                                <h6 className="font-semibold text-purple-800">Respon Anda</h6>
                                <span className="text-sm text-purple-600">{msg.responseTimestamp}</span>
                              </div>
                              <p className="text-gray-700">{msg.response}</p>
                            </div>
                          ) : (
                            <div className="ml-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                              <div className="space-y-3">
                                <Textarea
                                  placeholder="Tulis respon untuk pesan ini..."
                                  value={responseText[msg.id] || ''}
                                  onChange={(e) => setResponseText(prev => ({ ...prev, [msg.id]: e.target.value }))}
                                  className="border-purple-200 focus:border-purple-500"
                                  rows={3}
                                />
                                <Button 
                                  onClick={() => handleSendResponse(msg.id)}
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
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Bergabunglah dengan Komunitas
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ikuti perjalanan literasi kami dan jadilah bagian dari komunitas 
            yang mengapresiasi keindahan kata-kata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.wattpad.com/user/Mochatsuu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300"
            >
              Follow di Wattpad
            </a>
            <a 
              href="https://linkedin.com/in/ridho-miftah-husna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Connect di LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
