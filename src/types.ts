export interface Gorev {
    id: number;
    baslik: string;
    tamamlandi: boolean;
}

export interface Kullanici {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

export type Tema = 'light' | 'dark';