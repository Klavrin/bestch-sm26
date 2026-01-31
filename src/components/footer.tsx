import { Link } from 'react-router-dom'
import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

import MediaUnbothered from '../assets/media-unbothered.svg'
import Facebook from '../assets/footer/Facebook.svg'
import Instagram from '../assets/footer/Instagram.svg'
import LinkedIn from '../assets/footer/LinkedIn.svg'

const Footer = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const links = [
    { title: 'ABOUT THE COURSE', to: '#about' },
    //{ title: 'PRIVACY POLICY', to: '/privacy-policy' },
    { title: 'APPLY NOW', to: '#apply' },
    { title: 'CONTACTS', to: '#contacts' }
  ]

  const socials = [
    {
      alt: 'Facebook',
      imageSrc: Facebook,
      to: 'https://www.facebook.com/BEST.Chisinau/'
    },
    {
      alt: 'Instagram',
      imageSrc: Instagram,
      to: 'https://www.instagram.com/best_chisinau/?hl=en'
    },
    {
      alt: 'LinkedIn',
      imageSrc: LinkedIn,
      to: 'https://www.linkedin.com/company/best-chisinau/posts/?feedView=all'
    }
  ]

  const handleHashClick = (e: React.MouseEvent, to: string) => {
    if (to.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(to)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="max-w-[1400px] mx-auto xl:px-[75px] px-[18px] pt-10 pb-5 text-black transform-gpu">
      <img
        src={MediaUnbothered}
        alt="Media Unbothered"
        className="w-screen -z-50"
        onMouseOver={() => setCursorSize(300)}
        onMouseLeave={() => setCursorSize(40)}
        loading="lazy"
      />

      <div className="mt-[50px] flex md:flex-row flex-col justify-between items-center gap-[10px]">
        <nav className="flex max-[500px]:flex-col flex-row lg:gap-[50px] gap-[20px] text-center">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              className="text-[15px] hover:opacity-70 transition-all"
              onMouseOver={() => setCursorSize(60)}
              onMouseLeave={() => setCursorSize(40)}
              onClick={(e) => handleHashClick(e, link.to ? link.to : '#')}
            >
              {t(link.title)}
            </Link>
          ))}
        </nav>

        <div className="flex gap-[50px]">
          {socials.map((social) => (
            <Link
              key={social.alt}
              to={social.to}
              className="w-[25px] h-[25px] hover:opacity-70 transition-all"
              onMouseOver={() => setCursorSize(60)}
              onMouseLeave={() => setCursorSize(40)}
            >
              <img src={social.imageSrc} alt={social.alt} loading="lazy" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
