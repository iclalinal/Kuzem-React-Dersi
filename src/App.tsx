import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AnaSayfa from './pages/AnaSayfa';
import GorevYoneticisi from './pages/GorevYoneticisi';
import KullaniciRehberi from './pages/KullaniciRehberi';
import KullaniciDetay from './pages/KullaniciDetay';
import BulunamadiSayfasi from './pages/BulunamadiSayfasi';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AnaSayfa />} />
        <Route path="gorevler" element={<GorevYoneticisi />} />
        <Route path="kullanicilar" element={<KullaniciRehberi />} />
        <Route path="kullanicilar/:id" element={<KullaniciDetay />} />
        <Route path="*" element={<BulunamadiSayfasi />} />
      </Route>
    </Routes>
  );
}