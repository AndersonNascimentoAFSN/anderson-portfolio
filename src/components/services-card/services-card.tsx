'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Our web development service offers tailored solutions for creating high-quality websites and web applications. We use the latest technologies to ensure a responsive, intuitive, and secure product. Focusing on user experience and client goals, we develop scalable platforms that meet both current and future needs.',
    href: "",
  },
  {
    num: '02',
    title: 'SEO',
    description: 'Our SEO service enhances website visibility and search rankings through on-page optimization, quality content, and link building. We identify relevant keywords to attract targeted traffic. By analyzing performance and adapting to search algorithms, we drive growth and improve online presence, increasing conversions and achieving business goals.',
    href: "",
  },
]

export function ServicesCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
    >
      {services.map((service, index) => {
        return (
          <div key={index} className='flex-1 flex-col justify-center gap-6 group'>
            <div className='w-full flex justify-between items-center'>
              <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
              <Link
                href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                <BsArrowDownRight className="text-primar text-3xl" />
              </Link>
            </div>
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
            <p className='text-white/60'>{service.description}</p>
            <div className='border-b border-white/20 w-full'></div>
          </div>
        )
      })}
    </motion.div>
  )
}
