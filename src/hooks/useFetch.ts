import { useState, useEffect } from 'react';

interface FetchDurumu<T> {
  veri: T | null;
  yukleniyor: boolean;
  hata: string | null;
}

export function useFetch<T>(url: string): FetchDurumu<T> {
  const [veri, setVeri] = useState<T | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    let iptalEdildi = false;

    async function veriGetir() {
      setYukleniyor(true);
      setHata(null);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Sunucu hatası: ${res.status}`);
        }
        const json = await res.json();
        if (!iptalEdildi) setVeri(json);
      } catch (err) {
        if (!iptalEdildi) {
          setHata(err instanceof Error ? err.message : 'Bilinmeyen hata');
        }
      } finally {
        if (!iptalEdildi) setYukleniyor(false);
      }
    }

    veriGetir();
    return () => { iptalEdildi = true; };
  }, [url]);

  return { veri, yukleniyor, hata };
}