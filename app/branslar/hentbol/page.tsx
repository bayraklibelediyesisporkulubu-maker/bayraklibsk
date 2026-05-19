import Link from "next/link";

export default function HentbolPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Üst Kısım (Hero Section) */}
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/hentbol.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">HENTBOL</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Hız, Güç ve Kusursuz Takım Stratejisinin Parkelerdeki Mücadelesi
          </p>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="container mx-auto px-4 mt-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Sol ve Orta Sütun: Detaylı Bilgiler */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Hentbol Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Hentbol branşı, dinamizmi, yüksek temposu ve fiziksel gücü harmanlayan yapısıyla ilçemizdeki gençleri salon sporlarının en heyecanlı dallarından biriyle buluşturmaktadır. Hentbol; atletik yeteneklerin, hızlı pas trafiğinin, havada yön değiştiren şutların ve sarsılmaz bir takım savunmasının bir arada sergilendiği olimpik bir takım sporudur.
                </p>
                <p>
                  Türkiye Hentbol Federasyonu (THF) standartlarına uygun kapalı spor salonlarımızda, profesyonel antrenör kadromuz gözetiminde altyapı çalışmalarımızı yürütüyoruz. Sporcularımıza temel pas teknikleri, top sürme, kaleye yönelme, sıçrayarak şut atma ve alan savunması gibi teknik-taktik donanımları bilimsel antrenman programlarıyla aktarıyoruz. Kulüp altyapımızdan yetişen sporcularımız, lisanslı olarak resmi liglerde mücadele etme ve profesyonel spor hayatına adım atma şansı yakalamaktadır.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Hentbol?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🤾‍♂️</span> Çok Yönlü Atletizm
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Koşu, sıçrama, fırlatma ve ani yön değiştirmeleri bir arada barındırdığı için tüm kas gruplarını geliştirir, üst düzey güç ve dayanıklılık sağlar.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">👥</span> Üst Düzey Takımdaşlık
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Saha içi sürekli paslaşma ve yardımlaşma zorunluluğu, çocukların sosyalleşmesini, sorumluluk almasını ve paylaşım bilincini geliştirir.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">⚡</span> Reaksiyon ve Hız
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Hızlı hücumlar (fast-break) ve anlık savunma yerleşimleri sayesinde, çocukların el-göz koordinasyonu ve karar verme hızı maksimuma ulaşır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🛡️</span> Mental Direnç ve Mücadele
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fiziksel mücadelenin yüksek olduğu bir branş olması sebebiyle, çocukların zorluklar karşısında yılmama, pes etmeme ve oyun disiplinine sadık kalma iradesi güçlenir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yaş Grupları ve Eğitim Kategorileri</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
                  <div className="text-red-600 font-black text-xl mb-1">7 - 9 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Mini Hentbol Okulu</div>
                  <p className="text-gray-600 text-xs">Temel top tutma, paslaşma ve koordinasyon becerilerinin eğlenceli oyun formlarıyla sevdirilmesi.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-black text-xl mb-1">10 - 12 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Gelişim Grupları</div>
                  <p className="text-gray-600 text-xs">Temel teknik fundamentalların (kaleye şut, pozisyon alma) oturtulması ve oyun kurallarının öğrenilmesi.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">13 - 15 Yaş</div>
                  <div className="text-white font-bold mb-2">Yarışmacı Altyapı Takımları</div>
                  <p className="text-gray-400 text-xs">Resmi kulüp liglerinde lisanslı mücadele, ileri düzey taktiksel formasyonlar, güç ve kondisyon antrenmanları.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sağ Sütun: Hızlı Bilgiler ve Aksiyon */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/hentbol.webp')" }}></div>
              </div>
              
              <div className="p-8">
                <h3 className="font-black text-xl text-gray-900 mb-6 uppercase tracking-wide border-b pb-4">
                  Hızlı Bilgiler
                </h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">👤</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Yaş Aralığı</span>
                      <span className="font-medium text-gray-900">7 - 15 Yaş Erkek / Kız</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📍</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Çalışma Tesisleri</span>
                      <Link href="/tesislerimiz" className="font-medium text-red-600 hover:underline">
                        Modern Kapalı Spor Salonlarımız
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📅</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Antrenman Günleri</span>
                      <span className="font-medium text-gray-900">Hafta Sonu & Hafta İçi Akşam (Gruplara göre)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📝</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Kayıt Durumu</span>
                      <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold mt-1">
                        Kayıtlar Açık
                      </span>
                    </div>
                  </li>
                </ul>

                <Link href="/iletisim" className="block w-full text-center bg-red-600 text-white font-black px-6 py-4 rounded-xl hover:bg-gray-900 transition-all shadow-md uppercase tracking-wider text-sm">
                  Kayıt ve Bilgi İçin Bize Ulaşın
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}