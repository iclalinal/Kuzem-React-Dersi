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
        return <p>Kullanıcı yükleniyor...</p>;
    }

    return(
    <> 
        <h2>Kullanıcı Detayları</h2>
        <p><strong>Ad:</strong> {kullanici.name}</p>
        <p><strong>Email:</strong> {kullanici.email}</p>
    </>
)
}
export default KullaniciDetay;