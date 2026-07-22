import {useState} from "react";

function IsimListesi(){
    const [isimler, setIsimler] = useState<string[]>([]);

    return(
        <div>
            <button onClick={() => setIsimler([...isimler, "Ahmet"])}>Ekle</button>
            <button onClick={() => setIsimler(["Mehmet", ...isimler])}>Ekle</button>
            <button onClick={() => setIsimler([])}>Temizle</button>
            <ul>
                {isimler.map((i, index)=> <li key={index}>{i}</li>)}
            </ul>
        </div>    )
}
export default IsimListesi;