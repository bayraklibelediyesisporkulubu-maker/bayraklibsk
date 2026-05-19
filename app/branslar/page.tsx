import Link from "next/link";

const tumBranslar = [
  { baslik: "Atletizm", slug: "atletizm" },
  { baslik: "Badminton", slug: "badminton" },
  { baslik: "Basketbol", slug: "basketbol" },
  { baslik: "Güreş", slug: "gures" },
  { baslik: "Futbol", slug: "futbol" },
  { baslik: "Karate", slug: "karate" },
  { baslik: "Kick Boks", slug: "kick-boks" },
  { baslik: "Muay Thai", slug: "muay-thai" },
  { baslik: "Taekwondo", slug: "taekwondo" },
  { baslik: "Voleybol", slug: "voleybol" },
  { baslik: "Hentbol", slug: "hentbol" },
  { baslik: "Tenis", slug: "tenis" },
  { baslik: "Masa Tenisi", slug: "masa-tenisi" },
  { baslik: "Yüzme", slug: "yuzme" }
];

export default function BranslarSayfasi() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">TÜM BRANŞLARIMIZ</h1>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Bayraklı Belediyesi Spor Kulübü olarak 14 farklı branşta eğitim veriyoruz. Detaylı bilgi almak için ilgilendiğiniz branşı seçin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {tumBranslar.map((brans, index) => (
            <Link href={`/branslar/${brans.slug}`} key={index}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-transparent hover:border-red-600">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(/images/branslar/${brans.slug}.webp)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    {brans.baslik}
                  </h2>
                  <span className="text-red-300 text-sm font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    İNCELE <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}