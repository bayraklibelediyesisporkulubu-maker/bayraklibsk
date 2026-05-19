import Link from "next/link";

export default function TaekwondoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Üst Kısım (Hero Section) */}
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/taekwondo.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">TAEKWONDO</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Tekme ve Yumrukların Sanatı, Zihinsel ve Bedensel Uyumun Zirvesi
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
                Taekwondo Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Taekwondo branşı, Kore kökenli bir savunma sanatı ve küresel bir olimpik spor dalı olan taekwondoyu gençlerimize en doğru teknik ve felsefi altyapıyla sunmaktadır. Kelime anlamı olarak "Ayak ve yumrukla yapılan savunma yolu" olan taekwondo, sporcularımıza üstün bir fiziksel beceri kazandırmanın yanı sıra nezaket, dürüstlük, sabır ve özdenetim gibi sarsılmaz ahlaki değerler aşılar.
                </p>
                <p>
                  Türkiye Taekwondo Federasyonu onaylı, yüksek dan (kuşak) derecelerine sahip, ulusal ve uluslararası tecrübesi bulunan uzman antrenör kadromuz eşliğinde eğitim vermekteyiz. Güvenli tatami zeminlerimizde, modern koruyucu ekipmanlar (safeguard, kask vb.) eşliğinde yürütülen derslerimizde; temel teknikler, hayali dövüş formları (Poomsae) ve olimpik kurallara uygun müsabaka (Gyeorugi) eğitimleri bir bütün olarak işlenir. Şubemizden yetişen sporcular, lisans alarak kulübümüz adına resmi şampiyonalarda mücadele etme hakkı kazanırlar.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Taekwondo?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🤸‍♂️</span> Üstün Esneklik ve Denge
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Özellikle bacak kaslarını ve eklemlerini yoğun çalıştırarak vücuda olağanüstü bir esneklik, estetik, denge ve hız kazandırır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🎯</span> Yüksek Odaklanma ve Disiplin
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Poomsae (form) hareketlerinin getirdiği ezber ve dikkat gereksinimi, çocukların konsantrasyon sürelerini ve zihinsel disiplinlerini geliştirir.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🛡️</span> Güvenli ve Etkili Savunma
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Çocuklara olası fiziksel tehditlere karşı kendilerini nasıl koruyacaklarını öğretirken, bu gücü asla saldırganlık amacıyla kullanmamayı aşılar.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">✨</span> Do Felsefesi ve Karakter
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "Do" (doğru yol) felsefesi sayesinde büyüklere saygı, küçüklere sevgi, yenilgiyi kabullenme ve rakibe değer verme erdemlerini kazandırır.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yaş Grupları ve Kuşak Dereceleri</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
                  <div className="text-red-600 font-black text-xl mb-1">7 - 9 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Başlangıç Seviyesi</div>
                  <p className="text-gray-600 text-xs">Temel duruşlar, temel tekme ve yumruk teknikleri, esneklik egzersizleri ve eğlenceli denge parkurları.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-bold mb-2">Gelişim (Ara Kuşaklar)</div>
                  <div className="text-gray-900 font-black text-xl mb-1">10 - 12 Yaş</div>
                  <p className="text-gray-600 text-xs">Poomsae kombinasyonları, hedef (lapa) vuruşları, karşılıklı kontrollü teknik uygulamalar ve savunma blokları.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">13 - 15 Yaş</div>
                  <div className="text-white font-bold mb-2">Olimpik Müsabık Grup</div>
                  <p className="text-gray-400 text-xs">Hız, güç ve kondisyon antrenmanları, maç stratejileri, resmi federasyon kuşak sınavları ve turnuva hazırlıkları.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sağ Sütun: Hızlı Bilgiler ve Aksiyon */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/taekwondo.webp')" }}></div>
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
                        Uzak Doğu Sporları Özel Salonu
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

                <Link href="/letisim" className="block w-full text-center bg-red-600 text-white font-black px-6 py-4 rounded-xl hover:bg-gray-900 transition-all shadow-md uppercase tracking-wider text-sm">
                  Kayıt ve Kuşak Sınavı Bilgisi İçin Ulaşın
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}