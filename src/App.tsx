import { Routes, Route } from 'react-router-dom';
import GirisForm from './components/GirisForm';
import Panel from './components/Panel';

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
        <Route path="/" element={<GirisForm />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="*" element={<BulunamaddiSayfa />} />
      </Routes>
    </>
  )
}
export default App;