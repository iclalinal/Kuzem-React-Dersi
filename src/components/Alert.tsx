import type {ReactNode} from "react";

interface AlertProps {
    children: ReactNode;   
    onDismiss: () => void;
    variant: "info" | "warning" | "error";
}

function Alert({children, onDismiss, variant}: AlertProps) {
    return(
        <div className={`alert alert-${variant}`}>
            {children}
            <button onClick={onDismiss}>Buton</button>
        </div>
    )
}
export default Alert;