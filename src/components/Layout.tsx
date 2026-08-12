import {Outlet, NavLink} from "react-router-dom";

function Layout() {
    return(
        <>
            <nav className = "flex items-center justify-between px-6 py-4 bg-white shadow-md">
                <span className = "text-lg font-bold">KUZEM</span>
                <NavLink to="/"
                className="hover:text-blue-500">Ana Sayfa</NavLink>
                <NavLink to="/hakkimizda"
                className="hover:text-blue-500">Hakkımızda</NavLink>
                <NavLink to="/kullanici"
                className="hover:text-blue-500">Kullanıcılar</NavLink>
            </nav>
            <Outlet />
        </>
    )
} export default Layout;