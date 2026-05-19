export default function VizyonMisyon() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gray-900 py-24 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/kurumsal-bg.webp')" }}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider">VİZYON & MİSYON</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border-t-8 border-red-600 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-6 text-red-600">🎯</div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-wide">Vizyonumuz</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium mb-4">
              İzmir’in köklü dinamiklerini modern spor disiplinleriyle harmanlayarak, sporu sadece belirli odakların değil, toplumun tüm tabanının doğal bir yaşam kültürü haline getirmektir. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Uluslararası standartlara sahip sürdürülebilir tesisleşme hamlelerimizle; olimpiyat podyumlarında, dünya arenalarında ve milli takımların her kademesinde ay-yıldızlı bayrağımızı gururla taşıyacak elit sporcular yetiştiren, Türk sporuna yön veren öncü ve model bir kulüp vizyonu taşımaktır.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border-t-8 border-gray-800 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-6 text-gray-800">💪</div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-wide">Misyonumuz</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium mb-4">
              Bayraklı Belediyesi Spor Kulübü olarak; modern altyapı olanaklarımız ve alanında uzman teknik kadrolarımız eşliğinde, çocuklarımızı ve gençlerimizi erken yaşta sporun birleştirici gücüyle buluşturmaktır. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Nesillerimizi dijital bağımlılıkların ve zararlı alışkanlıkların olumsuz etkilerinden koruyarak; fiziksel olarak güçlü, mental olarak dayanıklı, fair-play ruhunu ruhuna kazımış, yüksek ahlaki değerlere bağlı ve özgüven sahibi sağlıklı bireyleri topluma kazandırmayı en asli görevimiz kabul ediyoruz.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-red-500">Temel Değerlerimiz</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-bold tracking-wider uppercase">
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">Ahlak & Disiplin</div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">Takım Ruhu</div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">Eşit İmkanlar</div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">Sürekli Gelişim</div>
          </div>
        </div>
      </div>
    </div>
  );
}