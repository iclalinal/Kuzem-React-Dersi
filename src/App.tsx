import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GirisForm from './components/GirisForm';
import Panel from './components/Panel';
import ProtectedRoute from './components/ProtectedRoute';

function BulunamaddiSayfa() {
  return(
    <div>
      <h1>404</h1>
      <p>Sayfa bulunamadı.</p>
    </div>
  )
}

function App(){
  const [girisYapildi, setGirisYapildi] = useState<boolean>(false);
  return(
    <>
      <Routes>
        <Route path="/" element={<GirisForm setGirisYapildi={setGirisYapildi} />} />
        <Route path="/panel" element={
          <ProtectedRoute 
            girisYapildi={girisYapildi}>
          <Panel />
          </ProtectedRoute>} />
        <Route path="*" element={<BulunamaddiSayfa />
      } 
      />
      </Routes>
    </>
  )
}
export default App;