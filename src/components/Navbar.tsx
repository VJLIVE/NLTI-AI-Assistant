// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-sm border-b border-white/10 shadow">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
        <h1 className="text-xl font-bold tracking-wide">NLTI</h1>
        <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-md">NEETI-1.0</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-purple-300 cursor-pointer">
        Vijay Guttula ▾
      </div>
    </header>
  )
}
