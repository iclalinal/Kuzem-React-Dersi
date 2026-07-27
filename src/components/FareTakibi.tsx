import {useState, useEffect} from 'react';

function FareTakibi(){
    const [konum, setKonum] = useState({x : 0, y: 0});

    useEffect(() => {
        function konumGuncelle(e : MouseEvent){
            setKonum({x: e.clientX, y: e.clientY});
    }
    window.addEventListener('mousemove', konumGuncelle)

    return () => 
        window.removeEventListener('mousemove', konumGuncelle)
    }, [])

    
    return(
        <div>
            <p> Fare konumu : {konum.x} , {konum.y} </p>
        </div>
    )
}  export default FareTakibi;