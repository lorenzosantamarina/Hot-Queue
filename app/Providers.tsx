'use client'
import { SessionProvider } from 'next-auth/react'
import { CarritoProvider } from './CarritoContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CarritoProvider>
        {children}
      </CarritoProvider>
    </SessionProvider>
  )
}