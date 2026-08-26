import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import type { Kullanici } from '../types';

export default function KullaniciRehberi() {
  const { veri: kullanicilar, yukleniyor, hata } = useFetch<Kullanici[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (yukleniyor) return <p className="dark:text-white">Yükleniyor...</p>;
  if (hata) return <p className="text-red-500">Hata: {hata}</p>;

  return (
    <div className="dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Kullanıcılar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {kullanicilar?.map((k) => (
          <Link
            key={k.id}
            to={`/kullanicilar/${k.id}`}
            className="border border-gray-200 dark:border-gray-700 rounded p-4 hover:shadow"
          >
            <p className="font-semibold">{k.name}</p>
            <p className="text-sm text-gray-500">{k.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}