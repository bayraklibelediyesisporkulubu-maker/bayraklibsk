"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [goster, setGoster] = useState(false);

  useEffect(() => {
    const cerezOnayi = localStorage.getItem('cerezOnayi');
    if (!cerezOnayi) {
      setGoster(true);
    }
  }, []);

  const islemYap = (durum: string) => {
    localStorage.setItem('cerezOnayi', durum);
    setGoster(false);
  };

  if (!goster) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#2a2b36] border-t-2 border-red-600 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] p-4 transform transition-transform duration-500">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-4 lg:gap-8 justify-between">
        
        <div className="flex-1 text-gray-300 text-xs leading-relaxed space-y-1">
          <strong className="text-white text-sm block mb-1">Gizlilik Tercihi Merkezi</strong>
          <p>
            İnternet Sitesi'nin sağlanması ve bilgi toplumu hizmetlerinin sunulması için zorunlu çerezler kullanmaktayız. Ayrıca, İnternet Sitesi'ni daha işlevsel kullanabilmeniz ve deneyiminizin iyileştirilmesi kapsamında performans ve analitik çerezleri, size yönelik kişiselleştirilmiş ürün ve hizmet tanıtımı kapsamında ise reklam ve pazarlama çerezleri kullanılmak istenmektedir.
          </p>
          <p>
            Detaylı bilgiler için <Link href="/cerez-aydinlatma-metni" className="text-red-400 underline hover:text-white transition-colors">Çerez Aydınlatma Metni</Link>'ni inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full lg:w-auto shrink-0 justify-center">
          <button 
            onClick={() => islemYap('yonet')}
            className="bg-transparent border border-gray-500 text-gray-300 px-3 py-2 rounded hover:bg-gray-700 hover:text-white transition-colors text-xs font-semibold whitespace-nowrap"
          >
            Tercihleri Yönet
          </button>
          <button 
            onClick={() => islemYap('reddet')}
            className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-500 transition-colors text-xs font-semibold whitespace-nowrap"
          >
            Tümünü Reddet
          </button>
          <button 
            onClick={() => islemYap('kabul')}
            className="bg-[#fa4343] text-white px-4 py-2 rounded hover:bg-[#d93838] transition-colors text-xs font-semibold whitespace-nowrap"
          >
            Tümünü Kabul Et
          </button>
        </div>

      </div>
    </div>
  );
}