import {useState} from 'react';

function NameInput(){
    const [name, setName] = useState("");

    return(
        <div>
            <input
            value = {name}
            onChange = {e => setName(e.target.value)}
            placeholder = "İsminizi giriniz"
            />
            <p>Merhaba {name || "Ziyaretçi"}</p>
        </div>
    )
}
export default NameInput;