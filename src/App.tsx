import Button from "./components/Button";
import Item from "./components/Item";
import Card from "./components/Card";

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
    <Card>
      <h2>İclal İnal</h2>
      <p>React öğreniyorum</p>
    </Card>
    <p> sayac: {count}</p>
    <Button label = "sayac" onClick={handleIncrement} />
    <Item id={1} name="Kalem" onDelete={(id) => console.log("Silindi:", id)} />
    <Button label="Tıkla" onClick={handleClick} />
    <Card>
      <h2>Diğer Kart</h2>
      <p>Bu bir başka karttır</p>
    </Card>
    </>
  )
}
export default App;
