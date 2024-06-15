import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './globalicon.css'
import {UserProvider} from "@/context/UserContext";
import { Providers } from './providers';

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
        <Providers>
          <UserProvider>
            <div className='text-black dark:text-white'>
              {children}
            </div>
          </UserProvider>
        </Providers>
      </body>
    </html>
  )
}
