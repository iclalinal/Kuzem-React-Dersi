import {useState} from "react";

function AdInput(){
    const [ad, setAd] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAd(e.target.value);
    }

    return(
        <div>
            <input value={ad} onChange={handleChange} placeholder="Adınızı girin" />
            <p>Merhaba {ad || "Ziyaretçi"}</p>
        </div>
    )
}
export default AdInput;