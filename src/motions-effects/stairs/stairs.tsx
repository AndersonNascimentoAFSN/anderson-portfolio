'use client'

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ["100%", "0%"]
  }
}

// calculate the reverse index for started delay

const reverseIndex = (index: number) => {
  const totalSteps = 6
  return totalSteps - index
}

export function Stairs() {
  return (
    /* Render 6 motion divs, each  representing a step of the stairs.
    Each div will have the some animation defined by the stairsAnimation object.
    The delay for each div is calculated dynamically based on it's reversed index, creating a staggered effect with decreasing delay for each subsequent step.
    */
    <>
      {[...Array(6)].map((_, index: number) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        )
      })}
    </>
  )
}
