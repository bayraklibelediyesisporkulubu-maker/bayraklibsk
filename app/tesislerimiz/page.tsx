interface Tesis {
  baslik: string;
  detay: string;
  resim: string;
}

const tesisler: Tesis[] = [
  { 
    baslik: "Ferdi Zeyrek Spor Kompleksi", 
    detay: "Çok amaçlı kapalı spor salonu, modern antrenman alanları ve idari birimleri barındıran kulübümüzün vizyon tesislerinden biridir.", 
    resim: "/images/tesisler/ferdi-zeyrek.webp" 
  },
  { 
    baslik: "Mustafa Kemal Atatürk Spor Salonu", 
    detay: "T.C. Bayraklı Belediyesi bünyesinde yer alan, modern altyapısı ve yüksek kapasitesiyle çok sayıda spor branşına ve resmi müsabakaya ev sahipliği yapan ana spor komplekslerimizdendir.", 
    resim: "/images/tesisler/mustafa-kemal-ataturk.webp" 
  },
  { 
    baslik: "Ord. Prof. Dr. Ekrem Akurgal Kapalı Spor Salonu", 
    detay: "Gençlerimizin profesyonel eğitmenler eşliğinde güvenle spor yapabileceği, modern donanıma sahip kapalı spor salonu ve antrenman merkezimizdir.", 
    resim: "/images/tesisler/ekrem-akurgal.webp" 
  },
  { 
    baslik: "Bayraklı Belediyesi Şehit Ümit Boz Sosyal Tesisleri", 
    detay: "İlçemizdeki modern stadyumumuz, profesyonel müsabakalara, resmi törenlere ve altyapı antrenmanlarına ev sahipliği yapmaktadır.", 
    resim: "/images/tesisler/stadyumlar.webp" 
  },
  { 
    baslik: "Yüzme Havuzları", 
    detay: "Hijyen ve güvenlik standartlarının en üst seviyede tutulduğu yarı olimpik havuzlarımızda 4 mevsim yüzme eğitimi verilmektedir.", 
    resim: "/images/tesisler/yuzme-havuzlari.webp" 
  },
  { 
    baslik: "Futbol Sahaları", 
    detay: "Sentetik çim zeminli sahalarımız, futbol altyapımızın gelişimi ve amatör sporseverlerin kullanımı için standartlara uygun dizayn edilmiştir.", 
    resim: "/images/tesisler/futbol-sahalari.webp" 
  },
  { 
    baslik: "Basketbol Sahaları", 
    detay: "Açık ve kapalı alanlarda bulunan yenilenmiş potalarımız ve zeminlerimizle gençlerimize güvenli spor alanları sunuyoruz.", 
    resim: "/images/tesisler/basketbol-sahalari.webp" 
  },
  { 
    baslik: "Tenis Kortları", 
    detay: "Farklı mahallelerimizde bulunan standartlara uygun kortlarımız, tenis tutkunları ve spor okulu öğrencilerimiz için kesintisiz hizmet vermektedir.", 
    resim: "/images/tesisler/tenis-kortlari.webp" 
  },
  { 
    baslik: "Bisiklet Yolları", 
    detay: "İlçemizi saran güvenli bisiklet ağı ile sağlıklı yaşamı, hareketliliği ve çevreci ulaşımı destekleyen özel parkurlarımız.", 
    resim: "/images/tesisler/bisiklet-yolu.webp" 
  }
];

export default function TesislerimizPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gray-900 py-24 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/kurumsal-bg.webp')" }}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider">TESİSLERİMİZ</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Bayraklı Belediyesi Spor Kulübü olarak, ilçemizin dört bir yanına yayılmış modern, güvenli ve uluslararası standartlara uygun tesislerimizde binlerce sporsevere hizmet vermekten gurur duyuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tesisler.map((tesis, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-56 relative overflow-hidden bg-gray-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  style={{ backgroundImage: `url('${tesis.resim}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-start">
                <h2 className="text-xl font-black text-gray-900 uppercase tracking-wide mb-3 group-hover:text-red-600 transition-colors">
                  {tesis.baslik}
                </h2>
                <div className="w-12 h-1 bg-red-100 mb-4 group-hover:bg-red-600 transition-colors"></div>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                  {tesis.detay}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}