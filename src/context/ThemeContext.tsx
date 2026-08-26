import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Tema } from '../types';
import type { ReactNode } from 'react';

interface ThemeContextTipi {
  tema: Tema;
  temaDegistir: () => void;
}

const ThemeContext = createContext<ThemeContextTipi | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useLocalStorage<Tema>('tema', 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'dark');
  }, [tema]);

  function temaDegistir() {
    setTema(tema === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ tema, temaDegistir }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme, ThemeProvider içinde kullanılmalı');
  return context;
}