import {useState, useEffect} from 'react';

function PencereBoyutu(){
    const [genislik, setGenislik] = useState(window.innerWidth);

    useEffect(()=>{
        const olcu = () => setGenislik(window.innerWidth);
        window.addEventListener('resize', olcu);

        return () => window.removeEventListener('resize', olcu);
    }, []);

    return(
        <div>
            <p> Pencere genişliği : {genislik} </p>
        </div>
    )
}export default PencereBoyutu;