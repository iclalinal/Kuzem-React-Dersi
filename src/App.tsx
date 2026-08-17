import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import KullaniciRehberi from "./components/KullaniciRehberi";
import KullaniciDetay from "./components/KullaniciDetay";

function AnaSayfa() {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white border border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600">
      <h2>Ana Sayfa</h2>
      <p>Hoş geldiniz! Bu, ana sayfadır.</p>
    </div>
  );
}

function Hakkimizda() {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white border border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600">
      <h2>Hakkımızda</h2>
      <p>Biz, kullanıcı rehberi uygulaması geliştiren bir ekibiz.</p>
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AnaSayfa />} />
        <Route path="hakkimizda" element={<Hakkimizda />} />
        <Route path="kullanici" element={<KullaniciRehberi />} />
        <Route path="kullanici/:id" element={<KullaniciDetay />} />
      </Route>
    </Routes>
  );
}
export default App;