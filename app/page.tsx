import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#F5EDE0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <div style={{ fontSize: '48px', marginBottom: '24px' }}>☕</div>

      <h1 style={{ 
        fontFamily: "'Noto Serif JP', serif",
        fontSize: '64px', 
        color: '#2C1A0E',
        fontWeight: '400',
        letterSpacing: '-1px',
        marginBottom: '6px'
      }}>
        Hot Queue
      </h1>

      <p style={{ 
        color: '#A07850', 
        fontSize: '13px', 
        letterSpacing: '3px',
        marginBottom: '52px'
      }}>
        TORRE NORTE
      </p>

      <Link href="/menu">
        <button style={{
          background: '#2C1A0E',
          color: '#F5EDE0',
          border: 'none',
          padding: '16px 52px',
          borderRadius: '100px',
          fontSize: '15px',
          fontFamily: "'Noto Serif JP', serif",
          cursor: 'pointer',
          letterSpacing: '1px'
        }}>
          Entrar
        </button>
      </Link>

    </main>
  )
}