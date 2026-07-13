import Button from "./components/Button";
import Item from "./components/Item";

function App() {
  const count = 0;
  function handleClick(){
    console.log("Butona tıklandı");
  }

  function handleIncrement(){
    console.log("sayac arttırıldı", count + 1);
  }

  return(
    <>
    <p> sayac: {count}</p>
    <Button label = "sayac" onClick={handleIncrement} />
    <Item id={1} name="Kalem" onDelete={(id) => console.log("Silindi:", id)} />
    <Button label="Tıkla" onClick={handleClick} />
    </>
  )
}
export default App;
