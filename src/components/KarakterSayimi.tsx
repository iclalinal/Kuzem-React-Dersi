import {useState} from "react";

function KarakterSayimi(){
    const [metin, setMetin] = useState("");

    return(
        <div>
            <textarea value={metin}
            onChange={(e : React.ChangeEvent<HTMLTextAreaElement>) => setMetin(e.target.value)} />
            <p>Kalan Karakter sayısı: {280 - metin.length}</p>
        </div> 
    )
}
export default KarakterSayimi;