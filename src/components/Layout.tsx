import {Outlet, NavLink} from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Layout() {
    const { theme, toggleTheme } = useTheme();

    return(
        <>
            <nav className = "flex items-center justify-between px-6 py-4 bg-white shadow-md">
                <span className = "text-lg font-bold">KUZEM</span>
                <NavLink to="/"
                className={({ isActive }) => `hover:text-primary ${isActive ? 'text-secondary font-bold' : 'text-gray-700'}`}>
                    Ana Sayfa
                </NavLink>
                <NavLink to="/hakkimizda"
                className={({ isActive }) => `hover:text-primary ${isActive ? 'text-secondary font-bold' : 'text-gray-700'}`}>
                    Hakkımızda
                </NavLink>
                <NavLink to="/kullanici"
                className={({ isActive }) => `hover:text-primary ${isActive ? 'text-secondary font-bold' : 'text-gray-700'}`}>
                    Kullanıcılar
                </NavLink>
                <button onClick={toggleTheme}
                className="px-3 py-1 rounded-md border text-sm dark:text-white dark:border-gray-600 dark:bg-black">
                {theme == "light" ? "Koyu": "Açık"}
                </button>
            </nav>
            <Outlet />
        </>
    )
} export default Layout;