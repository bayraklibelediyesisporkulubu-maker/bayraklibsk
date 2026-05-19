import Link from "next/link";

export default function CerezAydinlatmaMetniPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="relative bg-gray-900 py-24 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/kurumsal-bg.webp')" }}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider">ÇEREZ AYDINLATMA METNİ</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <div className="prose max-w-none text-gray-700 space-y-6 leading-relaxed">
            <p>
              <strong>Bayraklı Belediyesi Spor Kulübü</strong> olarak, web sitemizi ziyaretleriniz sırasında deneyiminizi geliştirmek, sitemizin verimli çalışmasını sağlamak ve sizlere daha iyi bir hizmet sunabilmek amacıyla çerezler (cookies) kullanmaktayız. İşbu Çerez Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, web sitemizde kullanılan çerezlerin türleri, kullanım amaçları ve bu çerezleri nasıl yönetebileceğiniz konusunda sizleri bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mt-8">1. Çerez (Cookie) Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, cep telefonu, tablet vb.) depolanan küçük metin dosyalarıdır. Çerezler, web sitesinin daha kullanıcı dostu bir deneyim sunmasına ve siteye tekrar giriş yaptığınızda sizi tanımasına yardımcı olur.
            </p>

            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mt-8">2. Kullanılan Çerez Türleri ve Amaçları</h2>
            <p>Web sitemizde kullanım amacına göre aşağıdaki çerez türleri kullanılmaktadır:</p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Zorunlu (Temel) Çerezler:</strong> Web sitemizin düzgün şekilde çalışması, temel işlevlerin yerine getirilmesi ve güvenliğin sağlanması için kesinlikle gerekli olan çerezlerdir. Bu çerezlerin kullanımı onayınıza tabi değildir; devre dışı bırakılmaları halinde sitenin bazı bölümleri çalışmayabilir.
              </li>
              <li>
                <strong>Performans ve Analitik Çerezleri:</strong> Sitemizi nasıl kullandığınızı analiz etmek, ziyaretçi sayısını tespit etmek ve site performansını ölçerek sizlere daha iyi bir deneyim sunmak amacıyla kullanılır. (Örn: Hangi sayfaların daha çok ziyaret edildiği bilgisi).
              </li>
              <li>
                <strong>İşlevsel Çerezler:</strong> Web sitesini tekrar ziyaret ettiğinizde dil tercihleri veya bölge gibi seçimlerinizi hatırlayarak size daha kişiselleştirilmiş bir deneyim sunmak için kullanılır.
              </li>
              <li>
                <strong>Reklam ve Pazarlama Çerezleri:</strong> İlgi alanlarınıza uygun içerik ve kampanyaları sunmak, reklam etkinliklerinin etkinliğini ölçmek amacıyla, açık rızanız dahilinde kullanılan çerezlerdir.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mt-8">3. Çerezlerin Yönetimi ve Reddedilmesi</h2>
            <p>
              Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkanına sahipsiniz. Çerezleri tamamen engelleyebilir, sadece belirli siteler için engelleyebilir veya bir çerez yerleştirildiğinde uyarı alabilirsiniz. Ancak, zorunlu çerezleri engellemeniz durumunda web sitemizin bazı fonksiyonlarının düzgün çalışmayabileceğini hatırlatmak isteriz.
            </p>
            <p>Sık kullanılan tarayıcılarda çerez yönetimini aşağıdaki bağlantılardan öğrenebilirsiniz:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Chrome: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve diğer site verileri</li>
              <li>Mozilla Firefox: Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
              <li>Apple Safari: Tercihler &gt; Gizlilik &gt; Çerezleri Engelle</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 border-b pb-2 mt-8">4. İlgili Kişinin Hakları</h2>
            <p>
              KVKK’nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.
            </p>
            <p>
              Haklarınıza ilişkin taleplerinizi <Link href="/iletisim" className="text-red-600 font-bold hover:underline">İletişim</Link> sayfamızda yer alan kanallar üzerinden kulübümüze iletebilirsiniz.
            </p>

          </div>
          
        </div>
      </div>
    </div>
  );
}