import {Navigate} from 'react-router-dom';
import type {ReactNode} from 'react';

interface ProtectedRouteProps {
    girisYapildi: boolean;
    children: ReactNode;
}

function ProtectedRoute({girisYapildi, children}: ProtectedRouteProps) {    
    if(!girisYapildi) return <Navigate to="/" replace />;
    return <>{children}</>;
}
export default ProtectedRoute;