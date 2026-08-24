import {useParams} from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";

type Kullanici = {id: number, name: string, email: string};

function KullaniciDetay() {
    const {id} = useParams();
    const {veri : kullanici, yukleniyor, hata, yenidenDene} = useFetch<Kullanici>(`https://jsonplaceholder.typicode.com/users/${id}`);


    if (yukleniyor) {<Spinner />;}

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

    if (!kullanici) {
        return <p className="text-gray-500 dark:text-white">Kullanıcı yükleniyor...</p>;
    }

    return(
    <div className="p-4 rounded-lg shadow-md bg-white border border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600"> 
        <h2>Kullanıcı Detayları</h2>
        <p className="mb-2 font-bold"><strong>Ad:</strong> {kullanici.name}</p>
        <p className="mb-2 font-bold dark:text-gray-300" ><strong>Email:</strong> {kullanici.email}</p>
    </div>
)
}
export default KullaniciDetay;