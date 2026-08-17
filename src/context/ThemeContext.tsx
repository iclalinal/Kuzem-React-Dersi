import {createContext, useState, useEffect, useContext} from "react";
import type {ReactNode} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext =
    createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({children}: {children: ReactNode}){
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    function toggleTheme(){
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    } 

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        )
    }

export function useTheme(){
    const ctx = useContext(ThemeContext)
    if(!ctx){
        throw new Error("useTheme, ThemeProvider içine kullanılmalı")
} return ctx
}