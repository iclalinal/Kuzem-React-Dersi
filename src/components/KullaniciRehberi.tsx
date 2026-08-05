import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Kullanici = {id: number, name: string, email: string};

function KullaniciRehberi() {
    const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([]);
    const [yukleniyor, setYukleniyor] = useState<boolean>(true);
    const [hata, setHata] = useState<string>("");

    useEffect(() => {
        const getir = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) {
                    throw new Error("Http hatası: " + res.status);
                }
                setKullanicilar(await res.json());
            }catch {setHata("Kullanıcılar yüklenemedi!")}
            finally {setYukleniyor(false);}
        }
            getir();
        },[]);

    if(yukleniyor) {
        return <p>Hazırlanıyor...</p>;
    }

    if(hata) {
        return <p>{hata}</p>;
    }

    return (
        <div>
            <h2>Kullanıcılar</h2>
            <ul>
                {kullanicilar.map(kullanici => (
                    <li key={kullanici.id}>
                        <Link to={`/kullanici/${kullanici.id}`}>
                            <strong>{kullanici.name}</strong> - {kullanici.email}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KullaniciRehberi;