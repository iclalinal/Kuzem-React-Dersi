import type {ReactNode} from "react";

interface SectionCardProps {
    title: ReactNode;
    children: ReactNode;
}

function SectionCard({title, children}: SectionCardProps){
    return(
        <div style={{border:"3px solid black",padding:"10px",backgroundColor:"lightgray",margin:"10px"}}>
            <div style={{fontWeight:"bold",marginBottom:"10px"}}>{title}</div>
            {children}
        </div>
    )
}
export default SectionCard;