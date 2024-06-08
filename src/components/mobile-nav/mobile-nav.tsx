"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries } from 'react-icons/ci'

import { MENU_LINKS } from '@/consts/menu-links'
import { Nav } from "../nav/nav"


export function MobileNav() {
  const pathname = usePathname()

  return (

    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href='/'>
            <h1
              className="text-4xl front-semibold"
            >
              Anderson
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}

        <Nav type="mobile" />

        {/* <nav className="flex flex-col justify-center items-center gap-8">
          {MENU_LINKS.map((link) => {
            return <Link
              key={link.id}
              href={link.path}
              className={`${pathname === link.path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          })}
        </nav> */}
      </SheetContent>
    </Sheet>

  )
}
