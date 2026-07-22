import {useState} from "react";

type Gorev = {id: number, baslik: string};

function ToDoApp(){
    const [gorevler,setGorevler] = useState<Gorev[]>([{id: 1, baslik: "Alışverişe git"}, {id: 2, baslik: "Ödevleri yap"}]);
    const [baslik, setBaslik] = useState("");

    const ekle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(baslik.trim() === "") return;
        setGorevler([...gorevler, {id: Date.now(), baslik}]);
        setBaslik("");
    }

    const sil = (id: number) => {
        setGorevler(gorevler.filter(g => g.id !== id));
    }

    return(
        <div>
            <h1>Yapılacaklar Listesi</h1>
            <form onSubmit={ekle}>
                <input value={baslik} 
                onChange={e => setBaslik(e.target.value)} 
                placeholder="Görev başlığı" />
                <button type="submit">Ekle</button>
            </form>
            <ul>
                {gorevler.map(g =>
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