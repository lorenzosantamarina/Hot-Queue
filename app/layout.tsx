import Providers from './Providers'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}