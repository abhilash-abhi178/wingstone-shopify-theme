import './styles/globals.css'
import { PropsWithChildren } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import BottomNav from '../components/BottomNav'
import CartDrawer from '../components/CartDrawer'

export const metadata = {
  title: 'Wingstone — Premium Streetwear',
  description: 'A Next.js starter inspired by premium streetwear aesthetics.'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <div className="min-h-screen bg-white text-black">{children}</div>
        <CartDrawer />
        <BottomNav />
      </body>
    </html>
  )
}
