"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    id: "1",
    name: 'home',
    path: '/'
  },
  {
    id: "2",
    name: 'services',
    path: '/services'
  },
  {
    id: "3",
    name: 'resume',
    path: '/resume'
  },
  {
    id: "4",
    name: 'work',
    path: '/work'
  },
  {
    id: "5",
    name: 'contact',
    path: '/contact'
  },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className='flex gap-8'>
      {links.map((link) => {
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
