import MeyveListesi from "./components/MeyveListesi";
import SehirSec from "./components/SehirSec";
import IsimListesi from "./components/IsimListesi";
import AdInput from "./components/AdInput";
import KarakterSayimi from "./components/KarakterSayimi";
import MiniForm from "./components/MiniForm";
import KayitFormu from "./components/KayitFormu";

function App(){
  return(
    <>
    <MiniForm />
    <KayitFormu />
    <AdInput />
    <IsimListesi />
    <SehirSec />
    <MeyveListesi />
    <KarakterSayimi />
    </>
  )
}
export default App;