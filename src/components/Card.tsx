interface CardProps {
    baslik?: string;
    aciklama?: string;
}

function Card({baslik, aciklama}: CardProps){
    return(
        <div className = "p-6 rounded-lg shadow-md bg-white border border-gray-200 pt-4">
            <h2 className="text-xl font-bold mb-2">{baslik}</h2>
            <p className="text-gray-700">{aciklama}</p>
        </div>
    )
}
export default Card;