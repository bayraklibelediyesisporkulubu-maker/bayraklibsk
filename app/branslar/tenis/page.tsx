import Link from "next/link";

export default function TenisPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Üst Kısım (Hero Section) */}
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/tenis.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">TENİS</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Zarafet, Odaklanma ve Disiplinin Kortlardaki Buluşması
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
                Tenis Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Tenis branşı, ilçemizdeki çocukları, gençleri ve her yaştan sporseveri tenisin elit, dinamik ve disiplin dolu dünyasıyla buluşturmaktadır. Tenis; sadece fiziksel gücün değil, aynı zamanda yüksek odaklanmanın, anlık stratejik kararların ve sarsılmaz bir mental direncin kortta sergilendiği yaşam boyu sürdürülebilecek evrensel bir spor dalıdır.
                </p>
                <p>
                  Uluslararası standartlara uygun olarak dizayn edilmiş modern açık ve kapalı tenis kortlarımızda, Türkiye Tenis Federasyonu (TTF) lisanslı uzman antrenörlerimiz görev yapmaktadır. Spor okulu seviyesinden başlayan eğitimlerimizde raket tutuşu (grip), forehand, backhand, servis ve vole gibi temel teknikleri modern ve bilimsel antrenman metotlarıyla aktarıyoruz. Altyapı takımlarımız ve kulüp performans gruplarımız aracılığıyla yetenekli sporcularımızı lisanslı hale getirerek yerel ve ulusal turnuvalarda kulübümüzü gururla temsil etmelerini sağlıyoruz.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Tenis?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🎾</span> Üst Düzey Motor Beceriler
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sürekli top takibi, ani deparlar ve vuruş mekaniği sayesinde el-göz koordinasyonunu, çevikliği, dengeyi ve genel vücut kontrolünü mükemmel düzeye ulaştırır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🧠</span> Mental Güç ve Odaklanma
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bireysel bir spor olması sebebiyle, çocukların kortta tamamen kendi sorumluluklarını almasını, yüksek dikkat süresi kazanmasını ve baskı altında doğru kararlar vermesini sağlar.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🫀</span> Aerobik ve Kardiyo Sağlığı
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kort içindeki sürekli git-geller ve ralliler, kardiyovasküler (kalp-damar) sistemi güçlendirir, yüksek enerji seviyesi ve dayanıklılık kazandırır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🏆</span> Fair-Play ve Karakter
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tenis kültürünün en temel parçası olan rakibe saygı, çizgi kararlarında dürüstlük ve centilmenlik değerlerini çocukların karakterine kalıcı olarak işler.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yaş Grupları ve Eğitim Seviyeleri</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
                  <div className="text-red-600 font-black text-xl mb-1">6 - 8 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Mini Tenis (Kırmızı Top)</div>
                  <p className="text-gray-600 text-xs">Daha yavaş toplar ve küçük kortlar ile çocukların topla buluşmasını kolaylaştırma, temel vuruş eğlenceleri.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-black text-xl mb-1">9 - 11 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Gelişim Seviyesi (Turuncu/Yeşil Top)</div>
                  <p className="text-gray-600 text-xs">Teknik vuruşların derinleşmesi, kort içi yerleşim, basit maç kuralları ve ralli sürekliliği sağlama çalışmaları.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">12 - 16 Yaş</div>
                  <div className="text-white font-bold mb-2">Performans Grubu (Sarı Top)</div>
                  <p className="text-gray-400 text-xs">Standart turnuva toplarıyla ileri düzey taktikler, servis varyasyonları, kondisyon antrenmanları ve TTF turnuva hazırlıkları.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sağ Sütun: Hızlı Bilgiler ve Aksiyon */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/tenis.webp')" }}></div>
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
                      <span className="font-medium text-gray-900">6 - 16 Yaş Erkek / Kız</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📍</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Çalışma Tesisleri</span>
                      <Link href="/tesislerimiz" className="font-medium text-red-600 hover:underline">
                        Belediye Standart Tenis Kortları
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
                  Kayıt ve Seviye Tespiti İçin Ulaşın
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}