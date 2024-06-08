import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/AndersonNascimentoAFSN',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/andersonnascimentoafsn',
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/anderson.nascimentoafsn',
  },
]

export function Social({ containerStyles, iconStyles }: { containerStyles?: string, iconStyles?: string }) {
  return (
    <div className={containerStyles}>
      {
        socials.map((social, index) => (
          <Link
            key={index}
            href={social.path}
            target="_blank"
            rel="noreferrer"
            className={iconStyles}
          >
            {social.icon}
          </Link>
        ))
      }
    </div>
  )
}
