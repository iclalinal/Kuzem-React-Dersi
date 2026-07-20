import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    console.log("render count", count);
    return(
        <div>
            <p> deger : {count} </p>
            <button onClick={()=>setCount(count+1)}>Arttır</button>
        </div>
    )
}
export default Counter;