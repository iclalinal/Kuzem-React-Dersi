import {useState} from 'react';

function KosulluDemo(){
    const [giris, setGiris] = useState(false);

    return(
    <>
      <button onClick={() => setGiris(!giris)}>Giriş/Çıkış</button> 
      {giris ? (<p>Hoşgeldiniz</p>) : (<p>Lütfen giriş yapınız</p>)} 
    </>
    )
}export default KosulluDemo;