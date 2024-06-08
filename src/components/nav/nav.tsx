"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MENU_LINKS } from '@/consts/menu-links'

export interface NavProps {
  type?: "mobile" | "desktop"
}

export function Nav({ type = "desktop" }: NavProps) {
  const pathname = usePathname()

  return (
    <nav className={`flex gap-8 ${type === "mobile" && 'flex-col justify-center items-center'}`}>
      {MENU_LINKS.map((link) => {
        return <Link
          key={link.id}
          href={link.path}
          className={`${pathname === link.path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      })}
    </nav>
  )
}
