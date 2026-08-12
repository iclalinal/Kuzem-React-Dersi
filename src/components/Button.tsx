import type { ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

function Button({ children = "Buton", onClick = () => {}, disabled }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300"
        >
            {children}
        </button>
    );
}
export default Button;