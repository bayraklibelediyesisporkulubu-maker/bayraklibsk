import Link from "next/link";

export default function MuayThaiPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Üst Kısım (Hero Section) */}
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/muay-thai.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">MUAY THAI</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Sekiz Uzvun Bilgeliği, Karakter ve Dayanıklılığın Zirvesi
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
                Muay Thai Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Muay Thai branşı, çocuklarımıza ve gençlerimize Tayland kökenli binlerce yıllık bir savunma sanatı ve disiplini olan Muay Thai’yi en doğru felsefeyle aktarmaktadır. "Sekiz uzvun sanatı" olarak bilinen bu spor; yumruk, tekme, diz ve dirseklerin senkronize bir şekilde kullanıldığı, olimpik statüde kabul gören dünyanın en etkili savunma branşlarından biridir.
                </p>
                <p>
                  Türkiye Muay Thai Federasyonu onaylı, yüksek khan (kuşak) derecelerine sahip ve pedagojik formasyonlu uzman antrenör kadromuz eşliğinde antrenmanlarımızı gerçekleştiriyoruz. Önceliğimiz her zaman sporcularımızın can güvenliğidir; bu doğrultuda derslerimizde kask, gövde koruyucu, eldiven ve kaval koruyucu gibi tüm güvenlik ekipmanları eksiksiz olarak sunulur. Altyapımızda yetişen gençlerimiz, hem mental bir sakinlik kazanmakta hem de resmi turnuvalarda kulübümüzü lisanslı olarak temsil etme hakkına sahip olmaktadır.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Muay Thai?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🫁</span> Olağanüstü Kardiyo Gücü
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Yüksek yoğunluklu antrenman yapısı sayesinde dayanıklılığı artırır, akciğer kapasitesini geliştirir ve mükemmel bir atletik form kazandırır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🧠</span> Mental Direnç ve Saygı
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Geleneksel Muay Thai kültürünün getirdiği "Wai Kru" (antrenöre ve rakibe saygı) felsefesiyle çocuklara derin bir otokontrol ve alçakgönüllülük aşılar.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">⚡</span> Kusursuz Defans ve Refleks
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kombinasyonlu atak ve savunma varyasyonları sayesinde, çocukların tehlikeleri saniyeler öncesinden sezmesini ve doğru refleksleri vermesini sağlar.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🛡️</span> Akran Zorbalığına Karşı Kalkan
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kendi gücünün farkında olan çocukların özgüveni artar; bu sayede dış dünyadaki zorbalıklara karşı hem zihinsel hem de bedensel bir duruş geliştirirler.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yaş Grupları ve Khan (Kuşak) Gelişimi</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
                  <div className="text-red-600 font-black text-xl mb-1">8 - 10 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Minikler Temel Eğitim</div>
                  <p className="text-gray-600 text-xs">Vücut esnekliği, denge koordinasyonu, temel duruş ve yumruk-tekme mekaniğinin oyunlarla öğretilmesi.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-black text-xl mb-1">11 - 13 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Yıldızlar Gelişim Grubu</div>
                  <p className="text-gray-600 text-xs">Diz, dirsek ve klinç (yakın dövüş) teknikleri, lapa çalışmaları ve taktik kombinasyon uygulamaları.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">14 - 16 Yaş</div>
                  <div className="text-white font-bold mb-2">Gençler Performans</div>
                  <p className="text-gray-400 text-xs">Torba ve güç antrenmanları, müsabaka stratejileri, resmi federasyon khan sınavları ve turnuva hazırlıkları.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sağ Sütun: Hızlı Bilgiler ve Aksiyon */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/muay-thai.webp')" }}></div>
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
                  Kayıt ve Khan Sınavları İçin Ulaşın
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}