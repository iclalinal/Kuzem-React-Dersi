import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

type Kullanici = {id: number, name: string, email: string};

function KullaniciDetay() {
    const {id} = useParams();
    const [kullanici, setKullanici] = useState<Kullanici | null>(null);

    useEffect(() => {
        const getir = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            setKullanici(await res.json());
        }
        getir();
    }, [id]);

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