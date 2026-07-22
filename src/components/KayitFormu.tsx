import {useState} from "react";

function KayitFormu(){
    const[form, setForm] = useState({ad: "", email: ""});
    const [hata, setHata] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(form.ad.trim() === "" || form.email.trim() === ""){
            setHata("Lütfen tüm alanları doldurun");
            return;
        }
        setHata("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="ad" value={form.ad} onChange={handleChange} placeholder="Adınızı girin" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Emailinizi girin" />
            {hata !== "" && <p style={{color: "red"}}>{hata}</p>}
        <p>Merhaba {form.ad || "Ziyaretçi"} - {form.email}</p>
        <button type="submit">Gönder</button>
        </form>
    )
}
export default KayitFormu;