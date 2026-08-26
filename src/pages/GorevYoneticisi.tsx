import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Gorev } from '../types';
import type { FormEvent } from 'react';

export default function GorevYoneticisi() {
  const [gorevler, setGorevler] = useLocalStorage<Gorev[]>('gorevler', []);
  const [yeniBaslik, setYeniBaslik] = useState('');

  function gorevEkle(e: FormEvent) {
    e.preventDefault();
    const temizBaslik = yeniBaslik.trim();
    if (!temizBaslik) return;

    const yeniGorev: Gorev = {
      id: Date.now(),
      baslik: temizBaslik,
      tamamlandi: false,
    };

    setGorevler([...gorevler, yeniGorev]);
    setYeniBaslik('');
  }

  function tamamlandiDegistir(id: number) {
    setGorevler(
      gorevler.map((g) => (g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g))
    );
  }

  function gorevSil(id: number) {
    setGorevler(gorevler.filter((g) => g.id !== id));
  }

  return (
    <div className="dark:text-white max-w-md">
      <h1 className="text-2xl font-bold mb-4">Görevler</h1>

      <form onSubmit={gorevEkle} className="flex gap-2 mb-4">
        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}
          placeholder="Yeni görev..."
          className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-800"
        />
        <button type="submit" className="bg-marka text-white px-4 py-2 rounded">
          Ekle
        </button>
      </form>

      {gorevler.length === 0 && (
        <p className="text-gray-500">Henüz görev eklenmedi.</p>
      )}

      <ul className="space-y-2">
        {gorevler.map((g) => (
          <li key={g.id} className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={g.tamamlandi}
                onChange={() => tamamlandiDegistir(g.id)}
              />
              <span className={g.tamamlandi ? 'line-through text-gray-400' : ''}>
                {g.baslik}
              </span>
            </label>
            <button onClick={() => gorevSil(g.id)} className="text-red-500 text-sm">
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}