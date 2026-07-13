import type {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
}

function Card({children}: CardProps){
    return(
        <div style={{border:"1px solid black",padding:"10px",backgroundColor:"lightgray",margin:"10px"}}>
            {children}
        </div>
    )
}
export default Card;