'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useCarrito } from '../CarritoContext'
import { useRouter } from 'next/navigation'

export default function Pago() {
  const { total, carrito } = useCarrito()
  const [metodo, setMetodo] = useState('mp')
  const router = useRouter()

  const metodos = [
    { id: 'mp', emoji: '📱', nombre: 'Mercado Pago' },
    { id: 'tarjeta', emoji: '💳', nombre: 'Tarjeta corporativa' },
    { id: 'saldo', emoji: '⚡', nombre: 'Saldo Hot Queue' },
  ]

  const confirmar = () => {
    router.push('/confirmacion')
  }

  return (
    <main style={{ minHeight: '100vh', background: '#F5EDE0', padding: '40px 24px 120px' }}>

      <Link href="/carrito" style={{ color: '#A07850', fontSize: '14px', textDecoration: 'none' }}>
        ← Volver
      </Link>

      <h1 style={{
        fontFamily: "'Noto Serif JP', serif",
        fontSize: '36px',
        color: '#2C1A0E',
        fontWeight: '400',
        margin: '24px 0 8px'
      }}>
        Pago
      </h1>

      <div style={{
        background: '#FFF8F0',
        borderRadius: '20px',
        padding: '24px',
        marginBottom: '32px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#A07850', fontSize: '13px', letterSpacing: '2px', marginBottom: '8px' }}>TOTAL</p>
        <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '48px', color: '#2C1A0E', fontWeight: '700' }}>
          ${total.toLocaleString('es-AR')}
        </p>
      </div>

      <p style={{ color: '#A07850', fontSize: '13px', letterSpacing: '2px', marginBottom: '16px' }}>
        MÉTODO DE PAGO
      </p>

      {metodos.map(m => (
        <div key={m.id} onClick={() => setMetodo(m.id)} style={{
          background: metodo === m.id ? '#2C1A0E' : '#FFF8F0',
          borderRadius: '16px',
          padding: '18px 20px',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}>
          <span style={{ fontSize: '24px' }}>{m.emoji}</span>
          <span style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '16px',
            color: metodo === m.id ? '#F5EDE0' : '#2C1A0E'
          }}>
            {m.nombre}
          </span>
        </div>
      ))}

      <div onClick={confirmar} style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        right: '24px',
        background: '#2C1A0E',
        borderRadius: '100px',
        padding: '18px 28px',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <span style={{ color: '#F5EDE0', fontFamily: "'Noto Serif JP', serif", fontSize: '16px' }}>
          Pagar ${total.toLocaleString('es-AR')} →
        </span>
      </div>

    </main>
  )
}