import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/nav/nav"
import { MobileNav } from "@/components/mobile-nav/mobile-nav"

export function Header() {
  return (
    <header className="py-8 xl:py-12 text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Anderson<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me button*/}
        <div className="hidden sm:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="ml-4">Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
