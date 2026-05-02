import type { Metadata } from "next";
import { CarritoProvider } from "./CarritoContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hot Queue",
  description: "Cafetería Corporativa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "'Noto Serif JP', serif", margin: 0 }}>
        <CarritoProvider>
          {children}
        </CarritoProvider>
      </body>
    </html>
  );
}