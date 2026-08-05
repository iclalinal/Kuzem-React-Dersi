import { Routes, Route, Link } from 'react-router-dom';
import KullaniciDetay from './components/KullaniciDetay.tsx';
import KullaniciRehberi from './components/KullaniciRehberi.tsx';


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
      <nav>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/hakkimizda">Hakkımızda</Link>
      </nav>
      <Routes>
        <Route path="/" element={<KullaniciRehberi />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/kullanici/:id" element={<KullaniciDetay />} />
        <Route path="*" element={<BulunamaddiSayfa />} />
      </Routes>
    </>
  )
}
export default App;