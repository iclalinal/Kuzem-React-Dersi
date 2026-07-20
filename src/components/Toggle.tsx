import {useState} from 'react';

function Toggle(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <button onClick={()=> setIsOpen(p => !p)}>
            { isOpen ? "Kapat" : "Aç" } 
            </button>
            {isOpen && <p>gizli içerik</p>}
        </div>
    )
}export default Toggle