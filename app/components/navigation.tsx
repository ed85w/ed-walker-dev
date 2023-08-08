'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  return (
    <div className="flex flex-row items-center justify-between p-24 border border-indigo-600">
      <Link href="/" className={pathname === "/" ? 'text-red-900' : 'text-black'}>Home</Link>
      <Link href="/work" className={pathname === "/work" ? 'text-red-900' : 'text-black'}>Work</Link>
    </div>
  )
}