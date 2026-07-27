import {useState, useEffect} from 'react';

function Kronometre(){
    const [saniye, setSaniye] = useState(0);
    const [calisiyor, setCalisiyor] = useState(true);

    useEffect(()=>{
        if (!calisiyor)return
        const id = setInterval(() => {
            setSaniye(p => p + 1) 
        }, 1000);

        return () => clearInterval(id);
    }, [calisiyor]);

    const dakika = String(Math.floor(saniye / 60)).padStart(2, '0');
    const kalanSaniye = String(saniye % 60).padStart(2, '0');


    return(
        <div>
            <p> Kronometre : {dakika}:{kalanSaniye} </p>
            <button onClick={()=> setCalisiyor(!calisiyor)}>
                {calisiyor ? 'Durdur' : 'Başlat'}
            </button>

            <button onClick={()=>{setCalisiyor(false); setSaniye(0);}}>Sıfırla</button>
        </div>
    )
} export default Kronometre;