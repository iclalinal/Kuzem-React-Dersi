import { Link } from 'react-router-dom';

export default function BulunamadiSayfasi() {
  return (
    <div className="dark:text-white text-center">
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="mb-4">Aradığınız sayfa bulunamadı.</p>
      <Link to="/" className="text-marka underline">Ana sayfaya dön</Link>
    </div>
  );
}