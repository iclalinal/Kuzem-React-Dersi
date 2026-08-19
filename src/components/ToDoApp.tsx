import {useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Gorev = {id: number, baslik: string};

function ToDoApp(){
    const [gorevler, setGorevler] = useLocalStorage<Gorev[]>("gorevler", [{id: 1, baslik: "Alışverişe git"}, {id: 2, baslik: "Ödevleri yap"}]);
    const [baslik, setBaslik] = useState("");
    const [arama, setArama] = useState("");
    const [sirala, setSirala] = useState(false);

    const ekle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(baslik.trim() === "") return;
        setGorevler([...gorevler, {id: Date.now(), baslik}]);
        setBaslik("");
    }

    const sil = (id: number) => {
        setGorevler(gorevler.filter(g => g.id !== id));
    }

    const filtrelenmis = gorevler.filter( g =>
        g.baslik.toLowerCase().includes(arama.toLowerCase())
    )

    const gosterilecek =sirala
    ? [...filtrelenmis].sort((a,b) =>
    a.baslik.localeCompare(b.baslik))
    : filtrelenmis;

    return(
        <div>
            <h1>Yapılacaklar Listesi</h1>
            <form onSubmit={ekle}>
                <input value={baslik} 
                onChange={e => setBaslik(e.target.value)} 
                placeholder="Görev başlığı" />
                <button type="submit">Ekle</button>
            </form>
            <button onClick={() => setSirala(!sirala)}>
                {sirala ? "Sıralamayı Kapat" : "Sırala"}
            </button>
            <br />
            <input value={arama} 
                onChange={e => setArama(e.target.value)} 
                placeholder="Görev ara" />
            <ul>
                {gosterilecek.map(g =>
                    <li key={g.id}>
                        {g.baslik}
                        <button onClick={() => sil(g.id)}>Sil</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
    export default ToDoApp;