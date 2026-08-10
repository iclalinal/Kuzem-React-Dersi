import {useState} from "react";
import { useNavigate } from "react-router-dom";
import type React from "react";

function GirisForm() {
    const [kullaniciAdi, setKullaniciAdi] = useState<string>("");
    const navigate = useNavigate();

    function girisYap(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Giriş yapılıyor:", kullaniciAdi);
        navigate("/panel");
    }

    return(
        <form onSubmit={girisYap}>
            <input 
            value={kullaniciAdi}
            onChange={(e) => setKullaniciAdi(e.target.value)}
            type="text" 
            placeholder="Kullanıcı Adı"
            />
            <button type="submit">Giriş Yap</button>
        </form>
    )
}
export default GirisForm;