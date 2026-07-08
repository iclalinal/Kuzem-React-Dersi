import Kart from "./components/Selamla";

function App() {
  return(
    <div>
      <Kart baslik = "Kalem" fiyat ={5} aciklama = "Bu bir kalemdir." />
      <Kart baslik = "Klavye" fiyat ={500} />
    </div>
  )
}
export default App;
