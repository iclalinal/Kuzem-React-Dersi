import type {ReactNode} from 'react';

interface LayoutProps {
    header : ReactNode;
    footer ?: ReactNode;
    children : ReactNode;
}

function Layout({header,footer,children}:LayoutProps){
    return(
        <div>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    );
}

export default Layout;