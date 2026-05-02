'use client'
import Link from 'next/link'
import { useCarrito } from '../CarritoContext'

export default function Carrito() {
  const { carrito, productos, agregar, sacar, total, totalItems } = useCarrito()

  const items = Object.entries(carrito).map(([id, qty]) => ({
    ...productos.find(p => p.id === Number(id))!,
    qty
  }))

  return (
    <main style={{ minHeight: '100vh', background: '#F5EDE0', padding: '40px 24px 120px' }}>
      
      <Link href="/menu" style={{ color: '#A07850', fontSize: '14px', textDecoration: 'none' }}>
        ← Volver
      </Link>

      <h1 style={{
        fontFamily: "'Noto Serif JP', serif",
        fontSize: '36px',
        color: '#2C1A0E',
        fontWeight: '400',
        margin: '24px 0 32px'
      }}>
        Tu pedido
      </h1>

      {items.length === 0 ? (
        <p style={{ color: '#A07850' }}>No hay nada todavía.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{
              background: '#FFF8F0',
              borderRadius: '20px',
              padding: '16px 20px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '28px' }}>{item.emoji}</span>
                <div>
                  <div style={{ fontFamily: "'Noto Serif JP', serif", color: '#2C1A0E', fontSize: '15px' }}>{item.nombre}</div>
                  <div style={{ color: '#A07850', fontSize: '13px' }}>${item.precio.toLocaleString('es-AR')} c/u</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button onClick={() => sacar(item.id)} style={{ background: '#E8D5C0', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', fontSize: '16px' }}>−</button>
                <span style={{ fontFamily: "'Noto Serif JP', serif", color: '#2C1A0E', fontWeight: '600' }}>{item.qty}</span>
                <button onClick={() => agregar(item.id)} style={{ background: '#2C1A0E', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', fontSize: '16px', color: '#F5EDE0' }}>+</button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '24px', padding: '20px', background: '#FFF8F0', borderRadius: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'Noto Serif JP', serif", color: '#2C1A0E', fontSize: '18px' }}>Total</span>
            <span style={{ fontFamily: "'Noto Serif JP', serif", color: '#2C1A0E', fontSize: '18px', fontWeight: '700' }}>${total.toLocaleString('es-AR')}</span>
          </div>
        </>
      )}

      {totalItems > 0 && (
  <Link href="/pago" style={{ textDecoration: 'none' }}>
    <div style={{
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
      <span style={{ color: '#F5EDE0', fontFamily: "'Noto Serif JP', serif", fontSize: '16px' }}>Confirmar pedido →</span>
    </div>
  </Link>
)}

    </main>
  )
}