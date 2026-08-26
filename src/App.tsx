import {Routes, Route} from "react-router-dom";
import KullaniciRehberi from "./components/KullaniciRehberi";
import Layout from "./components/Layout";
import Spinner from './components/Spinner';

function AnaSayfa() {
  return (
    <div>
      <h1>Ana Sayfa</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AnaSayfa />} />
        <Route path="kullanicirehberi" element={<KullaniciRehberi />} />
        <Route path="hakkimizda" element={<h1>Hakkımızda</h1>} />
        <Route path="spinner" element={<Spinner />} />
      </Route>
    </Routes>
  );
}
export default App;