import MeyveListesi from "./components/MeyveListesi";
import SehirSec from "./components/SehirSec";
import IsimListesi from "./components/IsimListesi";
import AdInput from "./components/AdInput";
import KarakterSayimi from "./components/KarakterSayimi";
import MiniForm from "./components/MiniForm";

function App(){
  return(
    <>
    <MiniForm />
    <AdInput />
    <IsimListesi />
    <SehirSec />
    <MeyveListesi />
    <KarakterSayimi />
    </>
  )
}
export default App;