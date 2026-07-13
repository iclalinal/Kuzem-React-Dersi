import Button from "./components/Button";

function App() {
  function handleClick(){
    console.log("Butona tıklandı");
  }


  return(
    <>
    <Button label="Tıkla" onClick={handleClick}/>
    </>
  )
}
export default App;
