'use client'
import Link from 'next/link'
import { useCarrito } from '../CarritoContext'
import { useEffect, useState } from 'react'

export default function Confirmacion() {
  const { total } = useCarrito()
  const [orden] = useState(() => Math.floor(Math.random() * 900) + 100)
  const [minutos, setMinutos] = useState(10)
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos(s => {
        if (s === 0) {
          setMinutos(m => {
            if (m === 0) { clearInterval(timer); return 0 }
            return m - 1
          })
          return 59
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      background: '#F5EDE0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      textAlign: 'center'
    }}>

      <div style={{ fontSize: '72px', marginBottom: '24px' }}>✅</div>

      <h1 style={{
        fontFamily: "'Noto Serif JP', serif",
        fontSize: '36px',
        color: '#2C1A0E',
        fontWeight: '400',
        marginBottom: '8px'
      }}>
        ¡Pedido confirmado!
      </h1>

      <p style={{ color: '#A07850', fontSize: '14px', marginBottom: '40px' }}>
        Bajá cuando esté listo
      </p>

      <div style={{
        background: '#FFF8F0',
        borderRadius: '24px',
        padding: '32px',
        width: '100%',
        maxWidth: '380px',
        marginBottom: '32px'
      }}>
        <p style={{ color: '#A07850', fontSize: '12px', letterSpacing: '2px', marginBottom: '6px' }}>ORDEN</p>
        <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '48px', color: '#2C1A0E', fontWeight: '700', marginBottom: '24px' }}>
          #{orden}
        </p>

        <div style={{ borderTop: '1px solid #E8D5C0', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: '#A07850', fontSize: '14px' }}>Retiro</span>
            <span style={{ color: '#2C1A0E', fontSize: '14px', fontWeight: '600' }}>Cafetería · PB</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: '#A07850', fontSize: '14px' }}>Total pagado</span>
            <span style={{ color: '#2C1A0E', fontSize: '14px', fontWeight: '600' }}>${total.toLocaleString('es-AR')}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#A07850', fontSize: '14px' }}>Tiempo estimado</span>
            <span style={{ color: '#2C1A0E', fontSize: '14px', fontWeight: '600' }}>
              {String(minutos).padStart(2,'0')}:{String(segundos).padStart(2,'0')}
            </span>
          </div>
        </div>
      </div>

      <Link href="/menu" style={{ textDecoration: 'none' }}>
        <div style={{
          background: '#2C1A0E',
          borderRadius: '100px',
          padding: '16px 48px',
          cursor: 'pointer',
        }}>
          <span style={{ color: '#F5EDE0', fontFamily: "'Noto Serif JP', serif", fontSize: '15px' }}>
            Hacer otro pedido
          </span>
        </div>
      </Link>

    </main>
  )
}