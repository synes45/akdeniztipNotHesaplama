'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HesaplamaSistemiPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('akdeniz_tip_theme');
    if (savedTheme === 'dark') setDarkMode(true);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('akdeniz_tip_theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode, isLoaded]);

  if (!isLoaded) return null;

  const weights = [
    { label: 'Komite 1', d1: '%22', d2: '%14' },
    { label: 'Komite 2', d1: '%18', d2: '%22' },
    { label: 'Komite 3', d1: '%30', d2: '%32' },
    { label: 'Komite 4', d1: '%16', d2: '%18' },
    { label: 'DSBB', d1: '%10', d2: '%10' },
    { label: 'TDP', d1: '%4', d2: '%4' },
  ];

  const cardClass = darkMode
    ? 'bg-zinc-900/50 border-zinc-800'
    : 'bg-white border-zinc-100 shadow-sm';

  const codeClass = darkMode
    ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
    : 'bg-zinc-50 border-zinc-200 text-zinc-800';

  return (
    <main
      className={`min-h-screen transition-all duration-700 flex flex-col items-center justify-center p-6 text-[13px] ${
        darkMode ? 'bg-black text-zinc-100' : 'bg-zinc-50 text-zinc-900'
      }`}
    >
      <div className="fixed top-6 right-6 flex items-center gap-2 z-50">
        <Link
          href="/"
          className={`px-4 py-3 rounded-full transition-all active:scale-90 text-[10px] font-bold uppercase tracking-[0.2em] ${
            darkMode
              ? 'bg-zinc-900 text-zinc-400 border border-zinc-800'
              : 'bg-white shadow-sm text-zinc-600 border border-zinc-100'
          }`}
        >
          ← Geri
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full transition-all active:scale-90 ${
            darkMode
              ? 'bg-zinc-900 text-zinc-400 border border-zinc-800'
              : 'bg-white shadow-sm text-zinc-600 border border-zinc-100'
          }`}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>

      <div className="w-full max-w-md flex-grow flex flex-col justify-center py-10 transition-all duration-500">
        <header className="mb-10 text-center">
          <h1 className={`text-3xl font-light tracking-tight ${darkMode ? 'text-white' : 'text-zinc-800'}`}>
            Akdeniz <span className={`font-semibold ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Tıp D'1</span>
          </h1>
          <p className="text-zinc-500 text-[10px] mt-2 font-medium uppercase tracking-[0.3em]">
            Hesaplama Sistemi
          </p>
        </header>

        <div className="w-full px-1 space-y-4 text-left">
          <section className={`p-5 rounded-2xl border transition-colors ${cardClass}`}>
            <p className="text-[9px] font-black text-zinc-500 uppercase mb-2 tracking-widest">
              1. Önce komite puanları oluşur
            </p>
            <p className="text-[12px] leading-relaxed text-zinc-500">
              K1 doğrudan teorik sınav notundan gelir. K2 ve K4’te ise teorik sınav ile PDÖ birlikte değerlendirilir.
            </p>

            <div className={`mt-4 border rounded-2xl p-4 font-mono text-[11px] leading-relaxed ${codeClass}`}>
              K1 = teorik not
              <br />
              K2 = (teorik × 0.85) + (PDÖ × 0.15)
              <br />
              K4 = (teorik × 0.85) + (PDÖ × 0.15)
            </div>
          </section>

          <section className={`p-5 rounded-2xl border transition-colors ${cardClass}`}>
            <p className="text-[9px] font-black text-zinc-500 uppercase mb-2 tracking-widest">
              2. K3 biraz farklı hesaplanır
            </p>
            <p className="text-[12px] leading-relaxed text-zinc-500">
              K3’te önce teorik sınavın %75’i alınır. Sonra anatomi ve histoloji pratik puanları eklenir. Çıkan sonucun
              %85’i ile PDÖ’nün %15’i birleştirilir.
            </p>

            <div className={`mt-4 border rounded-2xl p-4 font-mono text-[11px] leading-relaxed ${codeClass}`}>
              k3SinavNotu = (K3 teorik × 0.75) + anatomi + histo
              <br />
              K3 = (k3SinavNotu × 0.85) + (K3 PDÖ × 0.15)
            </div>

            <p className="mt-3 text-[10px] leading-relaxed text-zinc-500">
              Şu an hesaplayıcıda K3 için anatomi ve histoloji pratik ayrı girilir. K4 için ileride eklenecek pratik yapı
              da aynı genel mantığa uygun şekilde sisteme dahil edilebilir.
            </p>
          </section>

          <section className={`p-5 rounded-2xl border transition-colors ${cardClass}`}>
            <p className="text-[9px] font-black text-zinc-500 uppercase mb-3 tracking-widest">
              3. Sonra dönem içi ağırlıklar uygulanır
            </p>

            <div className={`rounded-2xl overflow-hidden border ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
              <table className="w-full text-left text-[11px]">
                <thead>
                  <tr className={`${darkMode ? 'bg-zinc-950/70' : 'bg-zinc-50'} text-zinc-500 uppercase text-[9px] font-black`}>
                    <th className="py-3 px-3">Bileşen</th>
                    <th className="py-3 px-3 text-center">'25</th>
                    <th className="py-3 px-3 text-center">'24</th>
                  </tr>
                </thead>
                <tbody>
                  {weights.map((item) => (
                    <tr
                      key={item.label}
                      className={`border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}
                    >
                      <td className="py-3 px-3 text-zinc-500 font-medium">{item.label}</td>
                      <td className="py-3 px-3 text-center font-bold">{item.d1}</td>
                      <td className="py-3 px-3 text-center font-bold">{item.d2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[12px] leading-relaxed text-zinc-500">
              Yani her komite önce kendi içinde hesaplanır, sonra bu tabloya göre yıl içi ortalamaya katkı verir.
            </p>
          </section>

          <section className={`p-5 rounded-2xl border transition-colors ${cardClass}`}>
            <p className="text-[9px] font-black text-zinc-500 uppercase mb-2 tracking-widest">
              4. Genel not nasıl bulunur?
            </p>
            <p className="text-[12px] leading-relaxed text-zinc-500">
              Yıl içi puanın tamamı değil, %60’ı alınır. Final sınavının da %40’ı eklenir. Ekrandaki ortalama bu formülle oluşur.
            </p>

            <div className={`mt-4 border rounded-2xl p-4 font-mono text-[11px] leading-relaxed ${codeClass}`}>
              genelNot = (yilIciAgirlikli × 0.6) + (final × 0.4)
            </div>
          </section>

          <section className={`p-5 rounded-2xl border transition-colors ${cardClass}`}>
            <p className="text-[9px] font-black text-zinc-500 uppercase mb-2 tracking-widest">
              5. Gereken final nasıl hesaplanır?
            </p>
            <p className="text-[12px] leading-relaxed text-zinc-500">
              Araç, geçme eşiğini 59.5 kabul ederek finalde minimum kaç puan gerektiğini hesaplar.
            </p>

            <div className={`mt-4 border rounded-2xl p-4 font-mono text-[11px] leading-relaxed ${codeClass}`}>
              gerekenFinal = (59.5 - (yilIciAgirlikli × 0.6)) / 0.4
            </div>

            <p className="mt-3 text-[10px] leading-relaxed text-zinc-500">
              Hesaplanan değer 40’ın altına düşerse sistem bunu 40 olarak gösterir.
            </p>
          </section>

          <div
            className={`mt-6 rounded-[32px] p-8 transition-all duration-500 ${
              darkMode
                ? 'bg-zinc-900/80 text-white border border-zinc-700 shadow-2xl'
                : 'bg-white text-zinc-900 shadow-xl border border-zinc-50'
            }`}
          >
            <div className="flex flex-col items-start justify-center">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-zinc-500">Kısaca</p>
              <p className={`text-2xl font-black tracking-tight leading-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-800'}`}>
                Önce komiteler hesaplanır, sonra dönem içi ağırlıklar uygulanır, en sonda yıl içinin %60’ı ile finalin %40’ı toplanır.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-md mt-10 mb-6 flex items-center justify-center gap-4">
        <div className={`h-[1px] flex-grow ${darkMode ? 'bg-zinc-900' : 'bg-zinc-200'}`}></div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] opacity-50">🖤</span>
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
            <p className={`text-[9px] font-medium uppercase tracking-[0.4em] whitespace-nowrap ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
              made by
            </p>
            <p className={`text-[9px] font-bold ${darkMode ? 'text-zinc-500' : 'text-zinc-900'} group-hover:text-zinc-100 transition-colors uppercase tracking-[0.4em]`}>
              efe küçükoğlu
            </p>
          </a>
        </div>
        <div className={`h-[1px] flex-grow ${darkMode ? 'bg-zinc-900' : 'bg-zinc-200'}`}></div>
      </footer>
    </main>
  );
}