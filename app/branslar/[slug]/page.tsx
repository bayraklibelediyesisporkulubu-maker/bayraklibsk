import { notFound } from "next/navigation";
import Link from "next/link";

const bransVerileri: Record<string, { baslik: string; aciklama: string; yasGrubu: string; antrenor: string; resim: string }> = {
  "atletizm": { baslik: "Atletizm", aciklama: "Tüm sporların temeli olan atletizm branşımızda...", yasGrubu: "7 - 15 Yaş", antrenor: "Ahmet Yılmaz", resim: "/images/branslar/atletizm.jpg" },
  "badminton": { baslik: "Badminton", aciklama: "Refleksleri, hızı ve el-göz koordinasyonunu...", yasGrubu: "8 - 16 Yaş", antrenor: "Ayşe Kaya", resim: "/images/branslar/badminton.jpg" },
  "basketbol": { baslik: "Basketbol", aciklama: "Takım ruhunu ve atletik performansı...", yasGrubu: "6 - 17 Yaş", antrenor: "Mehmet Demir", resim: "/images/branslar/basketbol.jpg" },
  "gures": { baslik: "Güreş", aciklama: "Ata sporumuz güreşte; zeka, güç ve çevikliği...", yasGrubu: "9 - 18 Yaş", antrenor: "Mustafa Yılmaz", resim: "/images/branslar/gures.jpg" },
  "futbol": { baslik: "Futbol", aciklama: "Bayraklı BSK futbol altyapımızda...", yasGrubu: "6 - 15 Yaş", antrenor: "Ali Öztürk", resim: "/images/branslar/futbol.jpg" },
  "karate": { baslik: "Karate", aciklama: "Uzak doğu dövüş sanatlarının en disiplinlilerinden...", yasGrubu: "6 - 16 Yaş", antrenor: "Hasan Yıldız", resim: "/images/branslar/karate.jpg" },
  "kick-boks": { baslik: "Kick Boks", aciklama: "Yüksek kalori harcaması, güç ve kondisyon...", yasGrubu: "10 - 25 Yaş", antrenor: "Caner Aydın", resim: "/images/branslar/kick-boks.jpg" },
  "muay-thai": { baslik: "Muay Thai", aciklama: "Geleneksel Tayland boksu Muay Thai branşımızda...", yasGrubu: "12 - 30 Yaş", antrenor: "Murat Kurt", resim: "/images/branslar/muay-thai.jpg" },
  "taekwondo": { baslik: "Taekwondo", aciklama: "Olimpik bir branş olan taekwondo eğitimlerimizde...", yasGrubu: "6 - 16 Yaş", antrenor: "Zeynep Çelik", resim: "/images/branslar/taekwondo.jpg" },
  "voleybol": { baslik: "Voleybol", aciklama: "Filenin sultanları ve efendilerinin yetiştiği...", yasGrubu: "7 - 16 Yaş", antrenor: "Selin Şahin", resim: "/images/branslar/voleybol.jpg" },
  "hentbol": { baslik: "Hentbol", aciklama: "Hız, güç ve takım oyununun en dinamik...", yasGrubu: "9 - 16 Yaş", antrenor: "Bülent Avcı", resim: "/images/branslar/hentbol.jpg" },
  "tenis": { baslik: "Tenis", aciklama: "Modern tenis kortlarımızda; forehand, backhand...", yasGrubu: "6 - 50 Yaş", antrenor: "Deniz Yılmaz", resim: "/images/branslar/tenis.jpg" },
  "masa-tenisi": { baslik: "Masa Tenisi", aciklama: "Yüksek odaklanma, hız ve strateji gerektiren...", yasGrubu: "7 - 70 Yaş", antrenor: "Eren Can", resim: "/images/branslar/masa-tenisi.jpg" }
};

export default function BransDetay({ params }: { params: { slug: string } }) {
  const brans = bransVerileri[params.slug];

  if (!brans) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/branslar" className="inline-flex items-center text-red-600 font-bold mb-6 hover:underline">
          ← Tüm Branşlara Dön
        </Link>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div 
            className="h-64 md:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${brans.resim})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <h1 className="absolute bottom-6 left-6 text-3xl md:text-5xl font-black text-white uppercase tracking-wide">
              {brans.baslik}
            </h1>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-red-100">Branş Hakkında</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{brans.aciklama}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-50 p-6 rounded-xl border border-red-100">
              <div>
                <span className="block text-sm text-red-600 font-bold uppercase tracking-wider mb-1">Yaş Grubu</span>
                <span className="text-xl font-extrabold text-gray-800">{brans.yasGrubu}</span>
              </div>
              <div>
                <span className="block text-sm text-red-600 font-bold uppercase tracking-wider mb-1">Sorumlu Antrenör</span>
                <span className="text-xl font-extrabold text-gray-800">{brans.antrenor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}