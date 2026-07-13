interface ItemProps {
    id : number;
    name : string;
    onDelete : (id : number) => void;
}

function Item ({id,name,onDelete}: ItemProps) {
    return(
        <div>
            <span>{name}</span>
            <button onClick={() => onDelete(id)}>Sil</button>
        </div>
    )
}
export default Item;