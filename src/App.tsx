import Kart from "./components/Selamla";

function App() {
  return(
    <div>
      <Kart baslik = "Kalem" fiyat ={5} aciklama = "Bu bir kalemdir." />
      <Kart baslik = "Klavye" fiyat ={500} aciklama = "Bu bir klavyedir." />
      <Kart baslik = "Monitör" fiyat ={500} aciklama = "Bu bir monitördür." />
      <Kart baslik = "Bilgisayar" fiyat ={500} aciklama = "Bu bir bilgisayardır." />
    </div>
  )
}
export default App;
