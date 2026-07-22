import {useState} from "react";

function MiniForm(){
    const [ad, setAd] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAd(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Merhaba ${ad}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={ad} onChange={handleChange} placeholder="Adınızı girin" />
            <button type="submit">Gönder</button>
        </form>
    )
}
export default MiniForm;