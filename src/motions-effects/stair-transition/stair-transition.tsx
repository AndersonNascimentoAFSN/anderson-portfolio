'use client'

import { AnimatePresence, easeIn, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Stairs } from "@/motions-effects/stairs/stairs";

export function StairTransition() {
  const pathname = usePathname()

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div
            className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
          >
            <Stairs />
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" }

            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  )
}
