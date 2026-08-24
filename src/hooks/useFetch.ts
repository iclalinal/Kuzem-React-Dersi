import {useState, useEffect} from "react";

function useFetch<T>(url: string){
    const [veri, setVeri] = useState<T | null>(null);
    const [yukleniyor, setYukleniyor] = useState<boolean>(true);
    const [hata, setHata] = useState<string>("");
    const [denemeNo, setDenemeNo] = useState<number>(0);

    useEffect(()=> {
        async function veriGetir(){
            setYukleniyor(true);
            setHata("");
            try {
                const yanit = await fetch(url);
                if (!yanit.ok) {
                    throw new Error("Http hatası: " + yanit.status);
                }
                const sonuc = await yanit.json();
                setVeri(sonuc);
            } catch (error) {
                if (error instanceof TypeError) {
                    setHata("İnternet bağlantısı yok!");
                } else if (error instanceof Error) {
                    setHata(error.message);
                } else {
                    setHata("Bilinmeyen bir hata oluştu!");
                }
            } finally {
                setYukleniyor(false);
            }
        }
        veriGetir();
    }, [url, denemeNo]);

    function yenidenDene() {
        setHata("");
        setYukleniyor(true);
        setDenemeNo((p) => p + 1);
    }

    return { veri, yukleniyor, hata, yenidenDene };
}
export default useFetch;

