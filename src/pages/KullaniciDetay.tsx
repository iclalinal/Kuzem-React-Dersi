import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import type { Kullanici } from '../types';

export default function KullaniciDetay() {
  const { id } = useParams();
  const { veri: kullanici, yukleniyor, hata } = useFetch<Kullanici>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (yukleniyor) return <p className="dark:text-white">Yükleniyor...</p>;
  if (hata) return <p className="text-red-500">Hata: {hata}</p>;
  if (!kullanici) return null;

  return (
    <div className="dark:text-white max-w-md">
      <Link to="/kullanicilar" className="text-marka text-sm">← Rehbere dön</Link>
      <h1 className="text-2xl font-bold mt-2 mb-4">{kullanici.name}</h1>
      <p><strong>Kullanıcı adı:</strong> {kullanici.username}</p>
      <p><strong>E-posta:</strong> {kullanici.email}</p>
      <p><strong>Telefon:</strong> {kullanici.phone}</p>
      <p><strong>Şirket:</strong> {kullanici.company.name}</p>
    </div>
  );
}