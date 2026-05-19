import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/logo.svg" 
                alt="Bayraklı BSK Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain bg-white rounded-full p-1"
              />
              <span className="text-lg md:text-xl font-bold text-white tracking-wider uppercase">
                Bayraklı Belediyesi Spor Kulübü
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Sporda ahlak, disiplin ve başarıyı ilke edinen kulübümüz, 14 farklı branşta binlerce gencimize spor yapma imkanı sunmaktadır.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Hızlı Menü</h3>
            <ul className="space-y-3">
              <li><Link href="/kurumsal/vizyon-misyon" className="hover:text-red-500 transition-colors">Vizyon & Misyon</Link></li>
              <li><Link href="/kurumsal/yonetim" className="hover:text-red-500 transition-colors">Yönetim Kurulu</Link></li>
              <li><Link href="/branslar" className="hover:text-red-500 transition-colors">Tüm Branşlar</Link></li>
              <li><Link href="/iletisim" className="hover:text-red-500 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-red-500 mt-0.5">📍</span>
                <span>Osmangazi, 592. Sk. No:1 D:1C<br/>35535 Bayraklı / İzmir</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-red-500">📞</span>
                <a href="tel:+905330311835" className="hover:text-red-500 transition-colors">+90 (533) 031 18 35</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-red-500">✉️</span>
                <a href="mailto:bayraklibelediyespr@gmail.com" className="hover:text-red-500 transition-colors">bayraklibelediyespr@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="bg-black py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Bayraklı Belediyesi Spor Kulübü. Tüm Hakları Saklıdır.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1 font-medium italic">
            Designed & Coded by <a href="https://wa.me/905322830628" target="_blank" rel="noopener noreferrer" className="text-red-600 font-black tracking-[0.2em] hover:text-white transition-colors ml-1 uppercase not-italic">VOLKAN</a>
          </p>
        </div>
      </div>
    </footer>
  );
}