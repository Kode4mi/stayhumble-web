import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './globalicon.css'
import {UserProvider} from "@/context/UserContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'stayHumble',
  description: 'Created by kode4mi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
