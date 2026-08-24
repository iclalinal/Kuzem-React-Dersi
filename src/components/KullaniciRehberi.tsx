import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

type Kullanici = { id: number; name: string; email: string };

function KullaniciRehberi() {
    const { veri : kullanicilar, yukleniyor, hata, yenidenDene } = useFetch<Kullanici[]>("https://jsonplaceholder.typicode.com/users");
    const [secili, setSecili] = useState<number | null>(null);

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
            {kullanicilar?.map((k) => (
                <div
                    key={k.id}
                    onClick={() => setSecili(k.id)}
                    className={`p-4 rounded-lg shadow-md bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-600 dark:text-white hover:bg-gray-100 ${
                        secili === k.id ? "ring-2 ring-blue-500" : ""}`}>
                    <Link to={`/kullanici/${k.id}`}>
                        <strong>{k.name}</strong> - {k.email}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default KullaniciRehberi;