import {Outlet, NavLink} from "react-router-dom";

function Layout() {
    return(
        <>
            <nav>
                <NavLink to="/"
                className={({isActive}) => isActive ? "aktif-link" : ""}>Ana Sayfa</NavLink>
                <NavLink to="/hakkimizda"
                className={({isActive}) => isActive ? "aktif-link" : ""}>Hakkımızda</NavLink>
                <NavLink to="/kullanici"
                className={({isActive}) => isActive ? "aktif-link" : ""}>Kullanıcılar</NavLink>
            </nav>
            <Outlet />
        </>
    )
} export default Layout;