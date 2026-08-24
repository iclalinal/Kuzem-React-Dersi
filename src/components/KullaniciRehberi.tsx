import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

type Kullanici = { id: number; name: string; email: string };

function KullaniciRehberi() {
    const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([]);
    const [yukleniyor, setYukleniyor] = useState<boolean>(true);
    const [hata, setHata] = useState<string>("");
    const [secili, setSecili] = useState<number | null>(null);
    const [denemeNo, setDenemeNo] = useState<number>(0);

    useEffect(() => {
        const getir = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) {
                    throw new Error("Http hatası: " + res.status);
                }
                setKullanicilar(await res.json());
            } catch (err) {
                if (err instanceof TypeError) {
                    setHata("İnternet bağlantısı yok!");
                } else if (err instanceof Error) {
                    setHata(err.message);
                } else {
                    setHata("Bilinmeyen bir hata oluştu!"); 
                }
            } finally {
                setYukleniyor(false);
            }
        };
        getir();
    }, [denemeNo]);

    function yenidenDene() {
        setHata("");
        setYukleniyor(true);
        setDenemeNo((p) => p + 1);
    }

    if (yukleniyor) {
        return <Spinner />;
    }

    if (hata) {
        return (
            <div>
                <button onClick={yenidenDene} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Yeniden Dene
                </button>
                <p className="text-red-500">{hata}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kullanicilar.map((kullanici) => (
                <div
                    key={kullanici.id}
                    onClick={() => setSecili(kullanici.id)}
                    className={`p-4 rounded-lg shadow-md bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-white hover:bg-gray-100 ${
                        secili === kullanici.id ? "ring-2 ring-blue-500" : ""}`}>
                    <Link to={`/kullanici/${kullanici.id}`}>
                        <strong>{kullanici.name}</strong> - {kullanici.email}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default KullaniciRehberi;