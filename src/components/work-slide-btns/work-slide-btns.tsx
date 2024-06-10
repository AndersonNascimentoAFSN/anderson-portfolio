"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

export function WorkSlideBtns({
  containerStyles,
  btnStyles,
  iconStyles,
}: {
  containerStyles: string
  btnStyles: string
  iconStyles: string
}) {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button className={btnStyles} title="left" type="button" onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} title="right" type="button" onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  )
}
