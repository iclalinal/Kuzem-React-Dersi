import {useState, useEffect} from "react";

type Gonderi = {id: number, title: string, body: string};

function GonderiPanosu(){
    const [gonderiler, setGonderiler] = useState<Gonderi[]>([]);
    const [yukleniyor, setYukleniyor] = useState<boolean>(true);
    const [hata, setHata] = useState<string>("");

    useEffect(() => {
        const getir = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
                if (!res.ok) throw new Error("Sunucu hatası.");
                const data: Gonderi[] = await res.json();
                setGonderiler(data);
            }catch{
            setHata("Gönderiler yüklenemedi.")}
            finally {setYukleniyor(false);}
        }
        getir();
    },[]);

    if(yukleniyor) {
        return <p>Gönderiler yükleniyor...</p>;
    }

    if(hata) {
        return <p>{hata}</p>;
    }

    return(
        <div>
            <h2>Gönderi Panosu</h2>
            {gonderiler.map(gonderi => (
                <div key={gonderi.id}>
                    <h3>{gonderi.title}</h3>
                    <p>{gonderi.body}</p>
                </div>
            ))}
        </div>
    )
} export default GonderiPanosu;