import {useState} from "react";

function useToggle(baslangic:boolean = false){
    const [deger, setDeger] = useState(baslangic);

    function toggle(){
        setDeger((p) => !p);
    }

    return [deger, toggle] as const;
}
export default useToggle;