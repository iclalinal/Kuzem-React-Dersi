import useToggle from "../hooks/useToggle"; 

function Ornek(){
    const [acik, toggleAcik] = useToggle()

    return(
        <div>
            <button onClick={toggleAcik}> {acik ? "Kapa" : "Aç"}</button>
            {acik && <p>Bu içerik açıldığında görünür.</p>}
        </div>
    )
}export default Ornek;