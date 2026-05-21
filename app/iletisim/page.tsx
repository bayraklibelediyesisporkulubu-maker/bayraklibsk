const IletisimPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gray-900 py-24 text-center text-white">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/kurumsal-bg.webp')" }}></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider">İLETİŞİM</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📍</div>
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">Adresimiz</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Manavkuyu Mah. Fatih Sultan Mehmet Cad.<br />
              No: 65/A Bayraklı / İzmir / Türkiye
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📞</div>
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">Telefon</h3>
            <a href="tel:+905330311835" className="text-gray-600 font-medium text-lg hover:text-red-600 transition-colors">
              +90 (533) 031 18 35
            </a>
            <p className="text-gray-400 text-sm mt-2 font-medium">Hafta içi: 09:00 - 18:00</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✉️</div>
            <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">E-Posta</h3>
            <a href="mailto:bayraklibelediyesisporkulubu@gmail.com" className="text-gray-600 font-medium hover:text-red-600 transition-colors break-all">
              bayraklibelediyesisporkulubu@gmail.com
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-8">
            <h2 className="text-2xl font-black text-gray-900 uppercase mb-8">Bize Mesaj Gönderin</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">E-Posta Adresiniz</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Konu</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"></textarea>
              </div>
              <button type="button" className="w-full bg-red-600 text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg">
                GÖNDER
              </button>
            </form>
          </div>

          <div className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[400px] lg:h-auto min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.639434857419!2d27.1706691!3d38.4613271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962b9a7164cc7%3A0x6b7724213705bf1d!2sManavkuyu%2C%20Fatih%20Sultan%20Mehmet%20Cd.%20No%3A65%2FA%2C%2035535%20Bayrakl%C4%B1%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1716223500000!5m2!1str!2str"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IletisimPage;