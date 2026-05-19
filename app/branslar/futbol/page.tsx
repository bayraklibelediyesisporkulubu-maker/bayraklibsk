import Link from "next/link";

export default function FutbolPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Üst Kısım (Hero Section) */}
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/futbol.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">FUTBOL</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Yeşil Sahaların Gelecekteki Yıldızları Bayraklı Altyapısında Yetişiyor
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
                Futbol Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Futbol branşı, ilçemizdeki çocukları ve gençleri futbolun birleştirici ve dinamik dünyasıyla buluşturmaktadır. Temel amacımız, sadece yetenekli futbolcular yetiştirmek değil; aynı zamanda spor ahlakına sahip, takımdaşlık ruhunu özümsemiş, disiplinli ve sağlıklı bireyleri topluma kazandırmaktır.
                </p>
                <p>
                  Modern standartlara uygun, sentetik çim zeminli futbol sahalarımızda ve stadyumlarımızda gerçekleştirdiğimiz antrenmanlarda, UEFA ve TFF lisanslı profesyonel antrenörlerimiz görev yapmaktadır. Yaş gruplarına özel hazırlanan bilimsel antrenman programlarımızla, her sporcumuzun teknik, taktik ve fiziksel gelişimini maksimum seviyeye çıkarmayı hedefliyoruz. Altyapı akademimizden yetişen yetenekler, kulübümüz bünyesinde resmi liglerde mücadele etme şansı bulmaktadır.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Futbol?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">⚽</span> Atletik Performans
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sürat, dayanıklılık, çeviklik ve denge yetilerini geliştirirken, kardiyovasküler sağlığı ve kas yapısını güçlendirir.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">👥</span> Maksimum Takım Daşlık
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Birlikte mücadele etmeyi, rol paylaşımını, arkadaşına yardım etmeyi ve ortak bir hedef için kenetlenmeyi öğretir.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🧠</span> Saha İçi Strateji
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Oyun kurma, alan savunması ve pozisyon alma gibi gereklilikler çocukların uzamsal algısını ve hızlı karar verme yeteneğini artırır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🏆</span> Disiplin ve Saygı
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Oyun kurallarına, hakeme, rakibe ve takım arkadaşlarına saygı duymayı aşılayarak karakter gelişimini destekler.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yaş Grupları ve Futbol Akademisi</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
                  <div className="text-red-600 font-black text-xl mb-1">7 - 9 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Temel Eğitim (Futbol Okulu)</div>
                  <p className="text-gray-600 text-xs">Topla tanışma, temel top kontrolü, pas çeşitleri ve koordinasyonun eğlenceli oyunlarla verilmesi.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-black text-xl mb-1">10 - 12 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Hazırlık Grupları</div>
                  <p className="text-gray-600 text-xs">Bireysel tekniklerin pekiştirilmesi, pozisyon bilgisi ve küçük saha maçlarıyla oyun zekasının geliştirilmesi.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">13 - 15 Yaş</div>
                  <div className="text-white font-bold mb-2">Yarışmacı Altyapı Takımları</div>
                  <p className="text-gray-400 text-xs">TFF yerel liglerinde kulübümüz adına lisanslı mücadele, taktiksel formasyonlar ve yüksek tempo.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sağ Sütun: Hızlı Bilgiler ve Aksiyon */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/futbol.webp')" }}></div>
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
                        Şehit Ümit Boz Tesisleri & Futbol Sahaları
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
                  Kayıt ve Detaylı Bilgi İçin Bize Ulaşın
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}