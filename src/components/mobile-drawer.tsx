import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

import MobileDrawerClose from '../assets/mobile-drawer-close.svg'

type MobileDrawerProps = {
  links: { title: string; to?: string; download?: string }[]
  drawerOpened: boolean
  closeDrawer: () => void
  drawerRef: React.RefObject<HTMLDivElement>
}

const MobileDrawer = ({
  links,
  drawerOpened,
  closeDrawer,
  drawerRef
}: MobileDrawerProps) => {
  const { t } = useTranslation()

  useEffect(() => {
    const handleResize = () => {
      if (drawerOpened && window.innerWidth < 640) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
    window.addEventListener('resize', handleResize)

    if (drawerOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = 'auto'
    }
  }, [drawerOpened])

  const closeDrawerWithAnimation = async () => {
    await gsap.to(drawerRef.current, {
      y: -window.innerHeight,
      ease: 'expo.inOut',
      duration: 1
    })
    closeDrawer()
  }

  return (
    <div
      ref={drawerRef}
      className={`w-screen h-[100dvh] bg-black text-white text-center flex lg:hidden flex-col fixed right-0 top-0 z-40 overflow-y-auto`}
      // style={{ transform: `translateY(-${window.innerHeight}px)` }}
      style={{ transform: `translateY(-100dvh)` }}
    >
      <div className="sticky top-0 bg-black z-10 py-6 pr-4 flex justify-end">
        <img
          src={MobileDrawerClose}
          onClick={closeDrawerWithAnimation}
          className="w-[30px] cursor-pointer"
          loading="lazy"
        />
      </div>

      <div className="h-full flex flex-col justify-start gap-4 pt-28">
        {links.map((link) => (
          <Fragment key={link.title}>
            {link.download ? (
              <a
                href={link.download}
                download
                className="sm:text-6xl text-4xl font-semibold opacity-80 hover:opacity-100 transition-all"
                onClick={() => {
                  closeDrawerWithAnimation()
                }}
              >
                {t(link.title)}
              </a>
            ) : link.to && link.to.startsWith('#') ? (
              <a
                href={link.to}
                className="sm:text-6xl text-4xl font-semibold opacity-80 hover:opacity-100 transition-all"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(link.to ? link.to : '#')
                  element?.scrollIntoView({ behavior: 'smooth' })
                  closeDrawerWithAnimation()
                }}
              >
                {t(link.title)}
              </a>
            ) : (
              <Link
                to={link.to ? link.to : '#'}
                className="sm:text-6xl text-4xl font-semibold opacity-80 hover:opacity-100 transition-all"
                onClick={() => closeDrawerWithAnimation()}
              >
                {t(link.title)}
              </Link>
            )}
          </Fragment>
        ))}
        {/* <MobileLanguageDropdownMenu /> */}
      </div>
    </div>
  )
}

export default MobileDrawer
