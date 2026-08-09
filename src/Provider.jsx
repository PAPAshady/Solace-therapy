'use client';
import { createContext } from 'react';
import { useParams } from 'next/navigation';

export const ClientContext = createContext();

export default function Provider({ children }) {
  const params = useParams();
  return <ClientContext.Provider value={params.client}>{children}</ClientContext.Provider>;
}
