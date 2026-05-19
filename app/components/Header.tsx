"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Bayraklı BSK Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <span className="text-sm sm:text-lg md:text-xl font-black tracking-wider uppercase leading-tight">
            Bayraklı Belediyesi<br className="sm:hidden" /> Spor Kulübü
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6 font-semibold items-center">
          <Link href="/" className="hover:text-red-200 transition-colors">Ana Sayfa</Link>
          
          <div className="group relative">
            <button className="hover:text-red-200 transition-colors py-2">Kurumsal</button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-0 p-2 rounded shadow-xl w-48 border-t-4 border-red-600">
              <Link href="/kurumsal/vizyon-misyon" className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors">Vizyon - Misyon</Link>
              <Link href="/kurumsal/yonetim" className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors">Yönetim</Link>
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-red-200 transition-colors py-2">Branşlar</button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-0 p-4 rounded shadow-2xl w-[400px] border-t-4 border-red-600 -ml-24">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <Link href="/branslar/atletizm" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Atletizm</Link>
                <Link href="/branslar/badminton" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Badminton</Link>
                <Link href="/branslar/basketbol" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Basketbol</Link>
                <Link href="/branslar/gures" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Güreş</Link>
                <Link href="/branslar/futbol" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Futbol</Link>
                <Link href="/branslar/karate" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Karate</Link>
                <Link href="/branslar/kick-boks" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Kick Boks</Link>
                <Link href="/branslar/muay-thai" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Muay Thai</Link>
                <Link href="/branslar/taekwondo" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Taekwondo</Link>
                <Link href="/branslar/voleybol" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Voleybol</Link>
                <Link href="/branslar/hentbol" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Hentbol</Link>
                <Link href="/branslar/tenis" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Tenis</Link>
                <Link href="/branslar/masa-tenisi" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Masa Tenisi</Link>
                <Link href="/branslar/yuzme" className="block px-3 py-2 hover:bg-red-50 hover:text-red-600 transition-colors rounded">Yüzme</Link>
              </div>
              <Link href="/branslar" className="block text-center mt-3 pt-3 text-red-600 font-bold border-t border-gray-100 hover:bg-red-50 rounded">Tüm Branşlar</Link>
            </div>
          </div>

          <Link href="/tesislerimiz" className="hover:text-red-200 transition-colors">Tesislerimiz</Link>
          <Link href="/iletisim" className="hover:text-red-200 transition-colors">İletişim</Link>
        </nav>

        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-red-700 pb-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4 font-semibold pt-4 text-white">
            <Link href="/" onClick={() => setIsOpen(false)}>Ana Sayfa</Link>
            
            <div className="flex flex-col space-y-2 border-t border-red-500 pt-2">
              <span className="text-red-200 text-sm">Kurumsal</span>
              <Link href="/kurumsal/vizyon-misyon" className="pl-4" onClick={() => setIsOpen(false)}>Vizyon - Misyon</Link>
              <Link href="/kurumsal/yonetim" className="pl-4" onClick={() => setIsOpen(false)}>Yönetim</Link>
            </div>

            <div className="flex flex-col space-y-1 border-t border-red-500 pt-2">
              <span className="text-red-200 text-sm mb-1">Branşlar</span>
              <div className="grid grid-cols-2 gap-1 pl-4">
                <Link href="/branslar/atletizm" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Atletizm</Link>
                <Link href="/branslar/badminton" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Badminton</Link>
                <Link href="/branslar/basketbol" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Basketbol</Link>
                <Link href="/branslar/gures" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Güreş</Link>
                <Link href="/branslar/futbol" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Futbol</Link>
                <Link href="/branslar/karate" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Karate</Link>
                <Link href="/branslar/kick-boks" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Kick Boks</Link>
                <Link href="/branslar/muay-thai" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Muay Thai</Link>
                <Link href="/branslar/taekwondo" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Taekwondo</Link>
                <Link href="/branslar/voleybol" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Voleybol</Link>
                <Link href="/branslar/hentbol" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Hentbol</Link>
                <Link href="/branslar/tenis" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Tenis</Link>
                <Link href="/branslar/masa-tenisi" className="py-1 text-sm" onClick={() => setIsOpen(false)}>Masa Tenisi</Link>
                <Link href="/branslar/yuzme" className="py-1 text-sm font-bold text-white" onClick={() => setIsOpen(false)}>Yüzme</Link>
              </div>
              <Link href="/branslar" className="pl-4 mt-2 font-bold text-red-200" onClick={() => setIsOpen(false)}>Tüm Branşlar</Link>
            </div>

            <div className="flex flex-col space-y-4 border-t border-red-500 pt-4">
              <Link href="/tesislerimiz" onClick={() => setIsOpen(false)}>Tesislerimiz</Link>
              <Link href="/iletisim" onClick={() => setIsOpen(false)}>İletişim</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}