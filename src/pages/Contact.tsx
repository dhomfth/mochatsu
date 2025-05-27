
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatPenulis from '@/components/ChatPenulis';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, Send, Linkedin, Calendar, Clock, Instagram, CheckCircle } from 'lucide-react';
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
  status?: 'sent' | 'read' | 'replied';
}

const Contact = () => {
  const { toast } = useToast();
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [responseText, setResponseText] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      category: formData.get('category') as string,
      message: formData.get('message') as string,
      timestamp: new Date().toLocaleString('id-ID'),
      status: 'sent'
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setContactMessages([newMessage, ...contactMessages]);
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
    
    toast({
      title: "Berhasil!",
      description: "Pesan Anda telah terkirim dan akan segera direspon"
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ridhohusna02@gmail.com',
      href: 'mailto:ridhohusna02@gmail.com',
      color: 'from-purple-100 to-indigo-100',
      iconColor: 'text-purple-600',
      linkColor: 'text-purple-600 hover:text-indigo-600'
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '+62 895 1027 5568',
      href: 'tel:+6289510275568',
      color: 'from-green-100 to-emerald-100',
      iconColor: 'text-green-600',
      linkColor: 'text-green-600 hover:text-emerald-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@dhomfth',
      href: 'https://instagram.com/dhomfth',
      color: 'from-pink-100 to-rose-100',
      iconColor: 'text-pink-600',
      linkColor: 'text-pink-600 hover:text-rose-600'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'ridho-miftah-husna',
      href: 'https://linkedin.com/in/ridho-miftah-husna',
      color: 'from-blue-100 to-indigo-100',
      iconColor: 'text-blue-600',
      linkColor: 'text-blue-600 hover:text-indigo-600'
    },
    {
      icon: MessageCircle,
      title: 'Wattpad',
      value: '@Mochatsuu',
      href: 'https://www.wattpad.com/user/Mochatsuu',
      color: 'from-orange-100 to-yellow-100',
      iconColor: 'text-orange-600',
      linkColor: 'text-orange-600 hover:text-yellow-600'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      value: 'Indramayu, Indonesia',
      color: 'from-blue-100 to-sky-100',
      iconColor: 'text-blue-600',
      linkColor: 'text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 purple-blue-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-indigo-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-bold text-white mb-4 sm:mb-6 leading-tight">
              Mari Terhubung
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Jangan ragu untuk menghubungi kami. Kami selalu senang mendengar dari para pembaca 
              dan siap berdiskusi tentang karya, feedback, atau sekadar berbagi cerita.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm">✨ Respon dalam 24 jam</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-white text-sm">💬 Chat langsung tersedia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 sm:mb-6">
                    <span className="hero-text">Informasi Kontak</span>
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Saya selalu terbuka untuk berdiskusi tentang karya, mendapat feedback, 
                    atau sekadar berbagi cerita dengan sesama pecinta literatur.
                  </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="group hover:shadow-xl transition-all duration-300 card-hover purple-blue-card border-0 shadow-lg">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`bg-gradient-to-r ${info.color} p-2.5 sm:p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${info.iconColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-base sm:text-lg text-purple-800 mb-1">{info.title}</h3>
                              {info.href ? (
                                <a 
                                  href={info.href}
                                  target={info.href.startsWith('http') ? '_blank' : undefined}
                                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className={`${info.linkColor} transition-colors duration-300 text-sm sm:text-base break-all hover:underline`}
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className={`${info.linkColor} text-sm sm:text-base`}>{info.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="purple-blue-card border-0 shadow-lg card-hover">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-2.5 sm:p-3 rounded-full">
                          <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-purple-800">Jam Respon</h3>
                          <p className="text-gray-600 text-sm">Senin - Jumat: 09:00 - 17:00</p>
                          <p className="text-xs text-gray-500">Biasanya membalas dalam 24 jam</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="purple-blue-card border-0 shadow-lg card-hover">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-2.5 sm:p-3 rounded-full">
                          <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-purple-800">Konsultasi</h3>
                          <p className="text-gray-600 text-sm mb-2">Diskusi karya & kolaborasi</p>
                          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-xs">
                            Jadwalkan
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:sticky lg:top-8">
                <Card className="shadow-2xl purple-blue-card border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-2">Kirim Pesan</h3>
                    <p className="text-purple-100 text-sm sm:text-base">Kami akan merespon secepat mungkin</p>
                  </div>
                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-purple-700 mb-2">
                            Nama Lengkap *
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
                            Email *
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
                          Subjek *
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
                          className="w-full px-3 py-2 border border-purple-200 rounded-md focus:border-purple-500 focus:ring-purple-500/20 bg-white"
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
                          Pesan *
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
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Kirim Pesan
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Chat Section */}
            <div className="mt-12 lg:mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4">
                  <span className="hero-text">Chat Langsung</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Ingin berbicara langsung? Gunakan fitur chat di bawah untuk komunikasi yang lebih interaktif.
                </p>
              </div>
              <ChatPenulis />
            </div>

            {/* Contact Messages Management */}
            {contactMessages.length > 0 && (
              <div className="mt-12 lg:mt-16">
                <Card className="shadow-xl border-purple-200">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                    <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-2">Pesan Masuk</h3>
                    <p className="text-purple-100">Kelola dan respon pesan dari pengunjung</p>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {contactMessages.map((msg) => (
                        <div key={msg.id} className="space-y-4">
                          <div className="bg-white p-4 sm:p-6 rounded-xl border border-purple-100 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                              <div>
                                <h4 className="font-semibold text-purple-800 text-lg">{msg.name}</h4>
                                <p className="text-sm text-gray-600">{msg.email} • {msg.category}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                {msg.status === 'replied' ? (
                                  <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full flex items-center">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Dibalas
                                  </span>
                                ) : (
                                  <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                                    Menunggu Respon
                                  </span>
                                )}
                                <span className="text-sm text-purple-600">{msg.timestamp}</span>
                              </div>
                            </div>
                            <h5 className="font-medium text-gray-800 mb-2">{msg.subject}</h5>
                            <p className="text-gray-700">{msg.message}</p>
                          </div>

                          {msg.response ? (
                            <div className="ml-0 sm:ml-8 bg-gradient-to-r from-purple-100 to-indigo-100 p-4 sm:p-6 rounded-xl border border-purple-200">
                              <div className="flex justify-between items-start mb-2">
                                <h6 className="font-semibold text-purple-800">Respon Anda</h6>
                                <span className="text-sm text-purple-600">{msg.responseTimestamp}</span>
                              </div>
                              <p className="text-gray-700">{msg.response}</p>
                            </div>
                          ) : (
                            <div className="ml-0 sm:ml-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
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
                                  className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
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

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-indigo-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-playfair font-bold text-white mb-4 sm:mb-6">
              Bergabunglah dengan Komunitas
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Ikuti perjalanan literasi kami dan jadilah bagian dari komunitas 
              yang mengapresiasi keindahan kata-kata
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://www.wattpad.com/user/Mochatsuu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl"
              >
                Follow di Wattpad
              </a>
              <a 
                href="https://linkedin.com/in/ridho-miftah-husna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl"
              >
                Connect di LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
