"use client"

import { db } from '@/lib/prisma';
import { createContext, ReactNode, useContext, useEffect, useState} from 'react';

// Definindo a interface para o contexto
interface AuthContextProps {
 
}
interface Clients {
  id: string;
  client: string;
  date: string;
}
// Criando o contexto com valor padrão
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Componente provider que vai envolver o app
export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [data, setData] = useState<Clients[] | null>(null)

  const getClients = async () => {
    try {
      const response = await db.clients.findMany();
      
      setData(response);
    } catch (error:any) {
    } finally {
    }
  };
    
useEffect(()=>{},[
  getClients()
])

  return (
    <AuthContext.Provider value={[data, setData]}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
