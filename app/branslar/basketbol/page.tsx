import Link from "next/link";

export default function BasketbolPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/basketbol.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">BASKETBOL</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Potanın Gelecekteki Yıldızları Bayraklı'da Yetişiyor
          </p>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Basketbol Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Basketbol branşı, ilçemizdeki çocukları ve gençleri basketbolun dinamik dünyasıyla tanıştırmak, onlara temel teknik becerilerin ötesinde bir spor kültürü aşılamak amacıyla faaliyet göstermektedir. Basketbol, sadece bir oyun değil; yardımlaşmanın, stratejinin ve saniyelerin önemini kavratan bir yaşam biçimidir.
                </p>
                <p>
                  Modern kapalı spor salonlarımızda, FIBA standartlarına uygun ekipmanlarla gerçekleştirdiğimiz antrenmanlarımızda, her sporcumuzun bireysel gelişimini yakından takip ediyoruz. Altyapı liglerinde mücadele eden takımlarımızla, yetenekli gençlerimizi profesyonel düzeye hazırlıyor ve disiplinli bir çalışma programıyla başarıya odaklanıyoruz.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Basketbol?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🏀</span> Tam Fiziksel Kapasite
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Boy uzamasını destekler, vücut koordinasyonunu geliştirir ve patlayıcı güç ile dayanıklılığı artırır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🤝</span> Takım Ruhu
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Birlikte başarma duygusunu, paylaşmayı ve zor anlarda arkadaşına güvenmeyi öğreterek sosyal zekayı geliştirir.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">⏲️</span> Hızlı Karar Verme
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Oyunun akışında saniyeler içinde karar verme zorunluluğu, çocukların analitik düşünme yetisini güçlendirir.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🛡️</span> Karakter Gelişimi
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Hatalardan ders çıkarmayı, pes etmemeyi ve hem kazanmayı hem de kaybetmeyi erdemle karşılamayı öğretir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eğitim Kategorilerimiz</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
                  <div className="text-orange-600 font-black text-xl mb-1">7 - 9 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Basketbol Okulu</div>
                  <p className="text-gray-600 text-xs">Temel top sürme, pas ve şut çalışmalarının eğlenceli oyunlarla sevilmesi.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-black text-xl mb-1">10 - 12 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Gelişim Ligi</div>
                  <p className="text-gray-600 text-xs">Teknik fundamentalların derinleşmesi ve takım oyununa geçiş süreci.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">13 - 15 Yaş</div>
                  <div className="text-white font-bold mb-2">Yarışmacı Gruplar</div>
                  <p className="text-gray-400 text-xs">Lisanslı sporcu olarak resmi liglerde mücadele ve profesyonel antrenmanlar.</p>
                </div>
              </div>
            </section>

          </div>

          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/basketbol.webp')" }}></div>
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
                        M. Kemal Atatürk & Ekrem Akurgal Salonları
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📅</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Antrenman Günleri</span>
                      <span className="font-medium text-gray-900">Hafta Sonu & Hafta İçi (Yaş grubuna göre)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📝</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Kayıt Durumu</span>
                      <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold mt-1">
                        Kayıtlar Devam Ediyor
                      </span>
                    </div>
                  </li>
                </ul>

                <Link href="/iletisim" className="block w-full text-center bg-red-600 text-white font-black px-6 py-4 rounded-xl hover:bg-gray-900 transition-all shadow-md uppercase tracking-wider text-sm">
                  Kayıt Formu İçin Bize Ulaşın
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}