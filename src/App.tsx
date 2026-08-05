import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import KullaniciDetay from './components/KullaniciDetay.tsx';
import KullaniciRehberi from './components/KullaniciRehberi.tsx';


function AnaSayfa() {
  return(
    <div>
      <h1>Ana Sayfa</h1>
      <p>Hoş geldiniz!</p>
    </div>
  )
}

function Hakkimizda() {
  return(
    <div>
      <h1>Hakkımızda</h1>
      <p>Biz bir yazılım şirketiyiz.</p>
    </div>
  )
}

function BulunamaddiSayfa() {
  return(
    <div>
      <h1>404</h1>
      <p>Sayfa bulunamadı.</p>
    </div>
  )
}

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AnaSayfa />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
          <Route path="kullanici" element={<KullaniciRehberi />} />
          <Route path="kullanici/:id" element={<KullaniciDetay />} />
        </Route>
        <Route path="*" element={<BulunamaddiSayfa />} />
      </Routes>
    </>
  )
}
export default App;