export default function YonetimKurulu() {
  const belediyeBaskani = { 
    unvan: "Bayraklı Belediye Başkanı", 
    isim: "İrfan Önal", 
    foto: "belediye-baskan.webp" 
  };

  const kulupBaskani = { 
    unvan: "Kulüp Başkanı", 
    isim: "Levent Öztürk", 
    foto: "kulup-baskan.webp" 
  };

  const yonetimListesi = [
    { unvan: "Kulüp Başkan Yardımcısı", isim: "Hüseyin Keç", foto: "uye-1.webp" },
    { unvan: "Kulüp Başkan Yardımcısı", isim: "Sevil Durgun", foto: "baskan-yardimcisi.webp" },
    { unvan: "Sekreter", isim: "Cem Köymen", foto: "sekreter.webp" },
    { unvan: "Sayman", isim: "İzzettin Akıncı", foto: "sayman.webp" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gray-900 py-24 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/kurumsal-bg.webp')" }}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider">YÖNETİM KURULU</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border-t-8 border-red-600 text-center p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 bg-cover bg-center" style={{ backgroundImage: `url('/images/yonetim/${belediyeBaskani.foto}')` }}></div>
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">{belediyeBaskani.unvan}</h2>
            <p className="text-2xl font-black text-gray-900">{belediyeBaskani.isim}</p>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border-t-8 border-red-600 text-center p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 bg-cover bg-center" style={{ backgroundImage: `url('/images/yonetim/${kulupBaskani.foto}')` }}></div>
            <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">{kulupBaskani.unvan}</h2>
            <p className="text-2xl font-black text-gray-900">{kulupBaskani.isim}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {yonetimListesi.map((uye, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden border-t-4 border-gray-800 text-center p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 bg-cover bg-center" style={{ backgroundImage: `url('/images/yonetim/${uye.foto}')` }}></div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{uye.unvan}</h3>
              <p className="text-xl font-extrabold text-gray-900">{uye.isim}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}