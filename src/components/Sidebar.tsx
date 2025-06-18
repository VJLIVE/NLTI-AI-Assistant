'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Generate Sectional Tests', path: '/generate-tests' },
  { name: 'Practice Mode', path: '/practice' },
  { name: 'Study Plan', path: '/study-plan' },
  { name: 'Progress Tracker', path: '/progress-tracker' },
  { name: 'Daily Planner', path: '/daily-planner' },
  { name: 'User Info', path: '/user-info' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 min-h-screen bg-white/5 backdrop-blur-md shadow-md p-6 space-y-4 hidden md:block">
      <div className="text-2xl font-semibold text-white mb-6">Navigation</div>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${
            pathname === item.path
              ? 'bg-indigo-600 text-white'
              : 'bg-white/10 hover:bg-white/20 text-white/80'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </aside>
  )
}
