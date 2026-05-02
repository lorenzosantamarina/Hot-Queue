'use client'
import { createContext, useContext, useState } from 'react'

const productos = [
  { id: 1, emoji: '☕', nombre: 'Espresso', precio: 850 },
  { id: 2, emoji: '🥛', nombre: 'Latte', precio: 1350 },
  { id: 3, emoji: '🫖', nombre: 'Cappuccino', precio: 1200 },
  { id: 4, emoji: '🧊', nombre: 'Cold Brew', precio: 1500 },
  { id: 5, emoji: '🥐', nombre: 'Medialuna', precio: 650 },
  { id: 6, emoji: '🥪', nombre: 'Tostado', precio: 1900 },
]

type CarritoContextType = {
  carrito: {[key: number]: number}
  productos: typeof productos
  agregar: (id: number) => void
  sacar: (id: number) => void
  total: number
  totalItems: number
}

const CarritoContext = createContext<CarritoContextType | null>(null)

export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [carrito, setCarrito] = useState<{[key: number]: number}>({})

  const agregar = (id: number) => {
    setCarrito(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const sacar = (id: number) => {
    setCarrito(prev => {
      const nuevo = { ...prev }
      if (nuevo[id] > 1) nuevo[id]--
      else delete nuevo[id]
      return nuevo
    })
  }

  const total = Object.entries(carrito).reduce((sum, [id, qty]) => {
    const p = productos.find(p => p.id === Number(id))
    return sum + (p ? p.precio * qty : 0)
  }, 0)

  const totalItems = Object.values(carrito).reduce((a, b) => a + b, 0)

  return (
    <CarritoContext.Provider value={{ carrito, productos, agregar, sacar, total, totalItems }}>
      {children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  const ctx = useContext(CarritoContext)
  if (!ctx) throw new Error('useCarrito debe usarse dentro de CarritoProvider')
  return ctx
}