interface KartProps {
    baslik: string;
    fiyat: number;
    aciklama?: string;
}

function Kart({baslik,fiyat,aciklama = "acıklama yoktur"}: KartProps) {
    return(
        <div>
            <h2>{baslik}</h2>
            <p> Fiyatı: {fiyat} TL</p>
            {aciklama && <p> Açıklama: {aciklama}</p>}
        </div>
    )
}
export default Kart;