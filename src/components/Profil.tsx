import {useState} from 'react';

function Profil(){
    const [bilgi, setBilgi] = useState({isim:"",yas:""});

    return(
        <div>
            <input
            placeholder='İsminizi giriniz'
            value = {bilgi.isim}
            onChange = {e => setBilgi(p => ({...p,isim:e.target.value}))}
            />
            <input
            placeholder='Yaşınızı giriniz'
            value = {bilgi.yas}
            onChange = {e => setBilgi(p => ({...p,yas:e.target.value}))}
            />  
            <p>Merhaba {bilgi.isim || "-"}</p>
            <p>Yaşınız: {bilgi.yas || "-"}</p>
        </div>
    )
}
export default Profil;