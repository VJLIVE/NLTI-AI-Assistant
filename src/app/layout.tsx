// src/app/layout.tsx
import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'NEETI-CLAT AI ASSISTANT',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
