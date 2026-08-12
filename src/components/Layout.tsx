import {Outlet, NavLink} from "react-router-dom";

function Layout() {
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
            </nav>
            <Outlet />
        </>
    )
} export default Layout;