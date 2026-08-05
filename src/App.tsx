import { Routes, Route, Link } from 'react-router-dom';

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
      <nav>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/hakkimizda">Hakkımızda</Link>
      </nav>
      <Routes>
        <Route path="/AnaSayfa" element={<AnaSayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="*" element={<BulunamaddiSayfa />} />
      </Routes>
    </>
  )
}
export default App;