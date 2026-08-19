import {useState, useEffect} from "react";


function useLocalStorage<T>(anahtar: string, baslangicDegeri: T){

    const[deger, setDeger] = useState<T>(() => {
        const kayitli = localStorage.getItem(anahtar)
        if (!kayitli) return baslangicDegeri;
        try {
            return JSON.parse(kayitli);
        } catch {
            return baslangicDegeri;
        }
    })

    useEffect(()=>{
        localStorage.setItem(anahtar, JSON.stringify(deger))
    }, [anahtar, deger])

return [deger, setDeger] as const
}
export default useLocalStorage;

