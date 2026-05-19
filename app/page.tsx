import Slider from "./components/Slider";
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

export default function Home() {
  return (
    <div>
      <Slider />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 uppercase">
            BAYRAKLI BELEDİYESİ SPOR KULÜBÜ'NE HOŞ GELDİNİZ
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sporda ahlak, disiplin ve başarıyı ilke edinen kulübümüz, 14 farklı branşta binlerce gencimize spor yapma imkanı sunmaktadır. Alanında uzman antrenörlerimizle geleceğin şampiyonlarını yetiştiriyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase">Branşlarımız</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
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
      </section>

      <section className="py-16 bg-red-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Ailemize Katılmak İster Misiniz?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Kış dönemi spor okulu kayıtlarımız tüm branşlarda devam etmektedir. Detaylı bilgi ve kayıt için tesislerimize bekliyoruz.
          </p>
          <Link href="/iletisim" className="inline-block px-8 py-4 bg-white text-red-600 font-extrabold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
            İLETİŞİME GEÇİN
          </Link>
        </div>
      </section>
    </div>
  );
}