import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
  const { tema, temaDegistir } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded ${isActive ? 'bg-marka text-white' : 'text-gray-700 dark:text-gray-200'}`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <NavLink to="/" className={linkClass} end>Ana Sayfa</NavLink>
          <NavLink to="/gorevler" className={linkClass}>Görevler</NavLink>
          <NavLink to="/kullanicilar" className={linkClass}>Kullanıcılar</NavLink>
        </div>
        <button
          onClick={temaDegistir}
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 dark:text-white"
        >
          {tema === 'light' ? '🌙 Karanlık' : '☀️ Aydınlık'}
        </button>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}