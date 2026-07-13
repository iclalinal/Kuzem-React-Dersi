import Button from "./components/Button";
import Item from "./components/Item";

function App() {
  function handleClick(){
    console.log("Butona tıklandı");
  }


  return(
    <>
    <Item id={1} name="Kalem" onDelete={(id) => console.log("Silindi:", id)} />
    <Button label="Tıkla" onClick={handleClick} />
    </>
  )
}
export default App;
