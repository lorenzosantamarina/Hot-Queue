'use client'
import Link from 'next/link'
import { useCarrito } from '../CarritoContext'

export default function Menu() {
  const { productos, carrito, agregar, sacar, total, totalItems } = useCarrito()

  return (
    <main style={{ minHeight: '100vh', background: '#F5EDE0', padding: '40px 24px 120px' }}>
      
      <h1 style={{
        fontFamily: "'Noto Serif JP', serif",
        fontSize: '36px',
        color: '#2C1A0E',
        fontWeight: '400',
        marginBottom: '32px'
      }}>
        Menú
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {productos.map(p => (
          <div key={p.id} style={{
            background: '#FFF8F0',
            borderRadius: '20px',
            padding: '20px',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{p.emoji}</div>
            <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '16px', color: '#2C1A0E', marginBottom: '12px' }}>{p.nombre}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '14px', color: '#A07850' }}>${p.precio.toLocaleString('es-AR')}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {carrito[p.id] && (
                  <>
                    <button onClick={() => sacar(p.id)} style={{ background: '#E8D5C0', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', fontSize: '16px' }}>−</button>
                    <span style={{ fontSize: '14px', color: '#2C1A0E', fontWeight: '600' }}>{carrito[p.id]}</span>
                  </>
                )}
                <button onClick={() => agregar(p.id)} style={{ background: '#2C1A0E', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', fontSize: '16px', color: '#F5EDE0' }}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalItems > 0 && (
        <Link href="/carrito" style={{ textDecoration: 'none' }}>
          <div style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            right: '24px',
            background: '#2C1A0E',
            borderRadius: '100px',
            padding: '18px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
          }}>
            <span style={{ color: '#F5EDE0', fontFamily: "'Noto Serif JP', serif" }}>{totalItems} items</span>
            <span style={{ color: '#F5EDE0', fontFamily: "'Noto Serif JP', serif" }}>Ver pedido →</span>
            <span style={{ color: '#A07850', fontFamily: "'Noto Serif JP', serif" }}>${total.toLocaleString('es-AR')}</span>
          </div>
        </Link>
      )}

    </main>
  )
}