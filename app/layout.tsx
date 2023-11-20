import { ThemeProvider } from '@/components/Theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/forApp/Navbar/Navbar'
import { cn } from '@/lib/utils'
import Footer from '@/components/forApp/Footer/Footer'



const roboto = Roboto({
      weight: '400',
      subsets: ['latin'],
    })

export const metadata: Metadata = {
      title: 'Japanese culture-web Japan',
      description: 'Generated by create next app',
}

export default function RootLayout({
      children,
}: {
      children: React.ReactNode
}) {
      return (
            <html lang="en">
                  <body className={cn(roboto.className,"scroll-smooth")}>
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                              <Navbar/>
                              {children}
                              <Footer />
                        </ThemeProvider>
                  </body>
            </html>
      )
}
