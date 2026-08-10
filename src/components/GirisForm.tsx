import {useState} from "react";
import { useNavigate } from "react-router-dom";
import type React from "react";

interface GirisFormProps {
    setGirisYapildi: (girisYapildi: boolean) => void;
}

function GirisForm({ setGirisYapildi }: GirisFormProps) {
    const [kullaniciAdi, setKullaniciAdi] = useState<string>("");
    const navigate = useNavigate();

    function girisYap(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Giriş yapılıyor:", kullaniciAdi);
        setGirisYapildi(true);
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