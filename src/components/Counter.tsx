import {useState} from 'react';
import {useEffect} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `sayac: ${count}`;
    }, [count]);

    return(
        <div>
            <p> deger : {count} </p>
            <button onClick={()=>setCount(p => p+1)}>Arttır</button>
            <button disabled={count === 0} onClick={()=>setCount(p => Math.max(0, p-1))}>Azalt</button>
            <button onClick={()=>setCount(0)}>Sıfırla</button>
        </div>
    )
}
export default Counter;