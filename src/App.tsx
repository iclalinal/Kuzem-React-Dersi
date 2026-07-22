import MeyveListesi from "./components/MeyveListesi";
import SehirSec from "./components/SehirSec";
import IsimListesi from "./components/IsimListesi";
import AdInput from "./components/AdInput";
import KarakterSayimi from "./components/KarakterSayimi";

function App(){
  return(
    <>
    <AdInput />
    <IsimListesi />
    <SehirSec />
    <MeyveListesi />
    <KarakterSayimi />
    </>
  )
}
export default App;