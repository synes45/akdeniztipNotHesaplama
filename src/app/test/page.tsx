'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`min-h-screen transition-all duration-700 flex flex-col items-center p-6 text-[13px] ${darkMode ? 'bg-black text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      
      {/* Üst Navigasyon */}
      <div className="w-full max-w-md flex justify-between items-center mb-12">
        <Link href="/" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-50 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
          ← Hesaplayıcıya Dön
        </Link>
        <button onClick={() => setDarkMode(!darkMode)} className={`p-3 rounded-full transition-all active:scale-90 ${darkMode ? 'bg-zinc-900 text-zinc-400 border border-zinc-800' : 'bg-white shadow-sm text-zinc-600 border border-zinc-100'}`}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>

      <div className="w-full max-w-md space-y-10">
        <header className="text-center">
          <h1 className={`text-3xl font-light tracking-tight ${darkMode ? 'text-white' : 'text-zinc-800'}`}>
            Hesaplama <span className="font-semibold italic text-zinc-500 text-2xl tracking-tighter">Logi'x</span>
          </h1>
          <p className="text-zinc-500 text-[10px] mt-2 font-medium uppercase tracking-[0.4em]">Sistem Nasıl Çalışıyor?</p>
        </header>

        {/* Formül Kartı 1: Komite Genel */}
        <section className={`p-8 rounded-[32px] border transition-all ${darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-100 shadow-sm'}`}>
          <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6">1. Standart Komiteler (K1, K2, K4)</h2>
          <div className="space-y-4">
            <p className="opacity-70 leading-relaxed text-[12px]">Komitelerde PDÖ etkisi %15'tir. Puanın şu şekilde kristalize edilir:</p>
            <div className={`p-5 rounded-2xl font-mono text-[11px] border ${darkMode ? 'bg-black/40 border-zinc-800 text-emerald-500/80' : 'bg-zinc-50 border-zinc-200 text-zinc-800'}`}>
               Komite Puanı = (Teorik × 0.85) + (PDÖ × 0.15)
            </div>
          </div>
        </section>

        {/* Formül Kartı 2: K3 Özel */}
        <section className={`p-8 rounded-[32px] border transition-all ${darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-100 shadow-sm'}`}>
          <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6 underline underline-offset-8">2. K3 - Pratik Lab Etkisi</h2>
          <div className="space-y-4">
            <p className="opacity-70 leading-relaxed text-[12px]">K3'te işler değişir. Teorik sınavın %75'i alınır ve üzerine pratik doğruların (1 soru = 1 puan) eklenir:</p>
            <div className={`p-5 rounded-2xl font-mono text-[11px] border ${darkMode ? 'bg-black/40 border-zinc-800 text-blue-500/80' : 'bg-zinc-50 border-zinc-200 text-zinc-800'}`}>
               K3 Sınav Notu = (Teorik × 0.75) + Anatomi(max 17) + Histo(max 8)
            </div>
            <p className="text-[10px] italic opacity-50 font-medium">* Çıkan bu sonucun yine %85'i alınır ve üzerine %15 PDÖ eklenir.</p>
          </div>
        </section>

        {/* Ağırlık Tablosu */}
        <section className={`p-8 rounded-[32px] border transition-all ${darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-100 shadow-sm'}`}>
          <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6">3. Dönem Ağırlıkları</h2>
          <div className="w-full overflow-hidden">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="opacity-40 uppercase text-[9px] font-black">
                  <th className="pb-4 px-2">Bileşen</th>
                  <th className="pb-4 px-2 text-center">'25 (D1)</th>
                  <th className="pb-4 px-2 text-center">'24 (D2)</th>
                </tr>
              </thead>
              <tbody className="font-medium">
                {[
                  ['Komite 1', '%22', '%14'],
                  ['Komite 2', '%18', '%22'],
                  ['Komite 3', '%30', '%32'],
                  ['Komite 4', '%16', '%18'],
                  ['DSBB', '%10', '%10'],
                  ['TDP', '%4', '%4'],
                ].map(([name, d1, d2], idx) => (
                  <tr key={idx} className={`border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-100'}`}>
                    <td className="py-3 px-2 opacity-60 italic">{name}</td>
                    <td className="py-3 px-2 text-center font-bold">{d1}</td>
                    <td className="py-3 px-2 text-center font-bold">{d2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Golü */}
        <div className={`p-8 rounded-[40px] text-center transition-all ${darkMode ? 'bg-zinc-100 text-black' : 'bg-zinc-900 text-white'}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-50">Son Dokunuş</p>
          <p className="text-lg font-light leading-snug">
            Yıl İçi Ortalamanın <span className="font-bold">%60</span>'ı ile Finalin <span className="font-bold">%40</span>'ı toplanarak kaderin belirlenir.
          </p>
        </div>
      </div>

      <footer className="mt-20 mb-10 opacity-30 text-[9px] font-bold uppercase tracking-[0.5em]">
        Akdeniz Tıp Matematik Modeli v1.0
      </footer>
    </main>
  );
}