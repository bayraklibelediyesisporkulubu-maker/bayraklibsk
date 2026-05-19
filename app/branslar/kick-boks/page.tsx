import Link from "next/link";

export default function KickBoksPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Üst Kısım (Hero Section) */}
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/kick-boks.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">KİCK BOKS</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Disiplin, Güç ve Yüksek Enerjinin Ringdeki Buluşması
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
                Kick Boks Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Kick Boks branşı, çocuklarımıza ve gençlerimize hem zihinsel hem de fiziksel anlamda tam bir otokontrol, yüksek kondisyon ve savunma becerileri kazandırmayı amaçlar. Kick Boks, sadece yumruk ve tekmelerin kullanıldığı bir dövüş sporu değil; yüksek odaklanma, strateji ve sarsılmaz bir disiplin gerektiren olimpik bir disiplindir.
                </p>
                <p>
                  Türkiye Kick Boks Federasyonu onaylı, siyah kuşak sahibi ve pedagojik formasyona sahip uzman antrenörlerimiz gözetiminde, sporcularımızın güvenliğini en ön planda tutarak eğitim veriyoruz. Gerekli tüm koruyucu ekipmanların (kask, eldiven, kaval koruyucu vb.) eksiksiz kullanıldığı antrenmanlarımızda, her yaş grubunun anatomik yapısına uygun modern teknikler aktarılmaktadır. Altyapımızdan yetişen sporcularımız, kuşak sınavlarında başarı göstererek lisanslı sporcu olma ve kulübümüzü ulusal şampiyonalarda temsil etme hakkı kazanmaktadır.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Kick Boks?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🥊</span> Üst Düzey Kondisyon ve Güç
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vücuttaki tüm kasları çalıştıran yoğun kardiyo temposu sayesinde yağ yakımını hızlandırır, dayanıklılığı ve atletik performansı zirveye çıkarır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🧘‍♂️</span> Stres Yönetimi ve Otokontrol
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Çocukların içsel enerjilerini ve streslerini doğru bir kanala aktarmalarını sağlayarak, günlük hayatta sakin ve soğukkanlı bir karakter sunar.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">⚡</span> Çeviklik ve Hızlı Refleksler
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Saha içi ani yön değiştirmeler, gard alma ve refleksif savunma hamleleri el-göz-ayak koordinasyonunu kusursuz hale getirir.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">✨</span> Sarsılmaz Özgüven
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kendini savunmayı öğrenen ve sınırlarını keşfeden çocukların özgüvenleri artar, akran zorbalığı gibi durumlara karşı mental direnç kazanırlar.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yaş Grupları ve Kuşak Dereceleri</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
                  <div className="text-red-600 font-black text-xl mb-1">8 - 10 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Alt Minikler Gelişim</div>
                  <p className="text-gray-600 text-xs">Temel duruş (gard), denge çalışmaları, temel yumruk-tekme teknikleri ve eğlenceli koordinasyon parkurları.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-black text-xl mb-1">11 - 13 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Teknik & Kombinasyon</div>
                  <p className="text-gray-600 text-xs">Gelişmiş teknik kombinasyonlar, lapa (pad) çalışmaları, savunma teknikleri ve kontrollü taktik uygulamalar.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">14 - 16 Yaş</div>
                  <div className="text-white font-bold mb-2">Performans & Müsabaka</div>
                  <p className="text-gray-400 text-xs">Torba antrenmanları, yüksek yoğunluklu dayanıklılık çalışmaları ve resmi şampiyonalara yönelik ring taktikleri.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sağ Sütun: Hızlı Bilgiler ve Aksiyon */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/kick-boks.webp')" }}></div>
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
                      <span className="font-medium text-gray-900">8 - 16 Yaş Erkek / Kız</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📍</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Çalışma Tesisleri</span>
                      <Link href="/tesislerimiz" className="font-medium text-red-600 hover:underline">
                        Dövüş Sporları Özel Salonu
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📅</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Antrenman Günleri</span>
                      <span className="font-medium text-gray-900">Hafta Sonu & Hafta İçi Akşam (Kategorilere göre)</span>
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