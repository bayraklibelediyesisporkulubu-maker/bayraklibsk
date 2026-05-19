import Link from "next/link";

export default function YuzmePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Üst Kısım (Hero Section) */}
      <div className="relative bg-gray-900 py-24 md:py-32 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/yuzme.webp')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">YÜZME</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
            Su Üstündeki Güç, Sağlık ve Özgüvenin Kulvarlardaki Buluşması
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
                Yüzme Şubemiz Hakkında
              </h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-4">
                  Bayraklı Belediyesi Spor Kulübü Yüzme branşı, ilçemizdeki çocukları ve gençlerimizi suyun iyileştirici, güçlendirici ve eğlenceli dünyasıyla buluşturmaktadır. Yüzme; yer çekiminin vücut üzerindeki baskısını minimuma indirerek tüm büyük kas gruplarını aynı anda çalıştıran, omurga sağlığından kalp-damar sistemine kadar insan anatomisine en çok fayda sağlayan eşsiz bir olimpik spor dalıdır.
                </p>
                <p>
                  Hijyen ve güvenlik standartlarının en üst seviyede tutulduğu modern yarı olimpik yüzme havuzlarımızda, Türkiye Yüzme Federasyonu (TYF) lisanslı ve cankurtaranlık brövelerine sahip uzman antrenörlerimiz görev yapmaktadır. Spor okulu gruplarımızda su üstünde kalma ve doğru nefes tekniklerinden başlayarak; serbest, sırtüstü, kurbağalama ve kelebek gibi olimpik yüzme stillerini bilimsel metotlarla öğretiyoruz. Altyapı takımlarımız aracılığıyla yetenekli çocuklarımızı lisanslandırarak resmi yüzme yarışlarında kulübümüzü gururla temsil etmelerini sağlıyoruz.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Neden Yüzme?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🫁</span> Akciğer ve Kalp Sağlığı
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Doğru nefes alma koordinasyonu sayesinde akciğer kapasitesini artırır, kalbi güçlendirir ve kardiyovasküler dayanıklılığı maksimuma taşır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🤸‍♂️</span> Kusursuz Postür ve Gelişim
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eklemlere yük bindirmeden tüm kasları simetrik olarak çalıştırdığı için çocuklarda duruş (postür) bozukluklarını engeller ve sağlıklı uzamayı destekler.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🛡️</span> Su Güvenliği ve Hayat Bilgisi
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Çocukların suyla barışık olmasını sağlarken, olası acil durumlarda suda nasıl hayatta kalacaklarını öğreterek ömür boyu sürecek bir güvenlik becerisi kazandırır.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-red-600 mb-2 flex items-center">
                    <span className="text-xl mr-2">🧘‍♂️</span> Stres Azaltıcı & Mental Rahatlık
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Suyun rahatlatıcı etkisiyle çocukların kas gerginliğini azaltır, uyku kalitelerini artırır ve okul stresinden uzaklaşmalarını sağlar.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yaş Grupları ve Eğitim Seviyeleri</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                  <div className="text-blue-600 font-black text-xl mb-1">5 - 7 Yaş</div>
                  <div className="text-gray-900 font-bold mb-2">Suya Alışma ve Temel Eğitim</div>
                  <p className="text-gray-600 text-xs">Suyun üstünde kalma, nefes kontrolü, ayak çırpma mekaniğinin eğlenceli materyallerle öğretilmesi.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-gray-900 font-bold mb-2">Stil Gelişim Seviyesi</div>
                  <div className="text-gray-900 font-black text-xl mb-1">8 - 11 Yaş</div>
                  <p className="text-gray-600 text-xs">Serbest ve sırtüstü stillerinin koordinasyonlu kombinasyonu, kurbağalama tekniğine giriş ve kulvar disiplini.</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <div className="text-red-500 font-black text-xl mb-1">12 - 15 Yaş</div>
                  <div className="text-white font-bold mb-2">Müsabık Performans Altyapısı</div>
                  <p className="text-gray-400 text-xs">Dört olimpik stilin (kelebek dahil) profesyonel uygulanması, dönüş ve çıkış (depar) teknikleri, TYF yarış hazırlıkları.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Sağ Sütun: Hızlı Bilgiler ve Aksiyon */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
              <div className="h-48 relative bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/branslar/yuzme.webp')" }}></div>
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
                      <span className="font-medium text-gray-900">5 - 15 Yaş Erkek / Kız</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📍</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Çalışma Tesisleri</span>
                      <Link href="/tesislerimiz" className="font-medium text-red-600 hover:underline">
                        Yarı Olimpik Yüzme Havuzlarımız
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📅</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Antrenman Günleri</span>
                      <span className="font-medium text-gray-900">Hafta Sonu & Hafta İçi (Seans planlamasına göre)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-0.5">📝</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Kayıt Durumu</span>
                      <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold mt-1">
                        Kayıtlar Dönemsel / Açık
                      </span>
                    </div>
                  </li>
                </ul>

                <Link href="/iletisim" className="block w-full text-center bg-red-600 text-white font-black px-6 py-4 rounded-xl hover:bg-gray-900 transition-all shadow-md uppercase tracking-wider text-sm">
                  Seanslar ve Kayıt Bilgisi İçin Ulaşın
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}