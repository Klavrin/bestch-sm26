import { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useCursorSize from '../lib/use-cursor-size'
import HamburgerMenu from './hamburger-menu'
import MobileDrawer from './mobile-drawer'

import Ellipse from '../assets/ellipse.svg'
import BestCh from '../assets/bestch.png'

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const drawerRef = useRef(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const handleHashClick = (e: React.MouseEvent, to: string) => {
    if (to.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(to)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scheduleUrl = new URL('../assets/Schedule.xlsx', import.meta.url).href
  const survivalGuideUrl = new URL("../assets/Survival Guide SC'26.pdf", import.meta.url)
    .href

  const links = [
    { title: 'About the Course', to: '#about' }, // matches id="about"
    { title: 'Survival Guide', download: survivalGuideUrl },
    { title: 'Schedule', download: scheduleUrl },
    { title: 'Apply Now', to: '#apply' },
    { title: 'Contacts', to: '#contacts' }
    // { title: 'Schedul', onClick: () => dispatch(setDialogVisibility()) }
  ]

  return (
    <header className="w-screen absolute z-40 transform-gpu">
      <div className="max-w-[1400px] h-[120px] mx-auto xl:px-[75px] px-[18px] text-black flex justify-between items-center transition-[padding] duration-500">
        <div className="sm:static absolute left-0 sm:w-auto w-screen text-center">
          <Link
            to="/"
            className="inline-block hover:opacity-80 transition-opacity"
            onMouseOver={() => setCursorSize(100)}
            onMouseLeave={() => setCursorSize(40)}
          >
            <img
              src={BestCh}
              alt="Best Summer Course"
              className="xl:h-[100px] h-[70px]"
            />
          </Link>
        </div>

        <MobileDrawer
          links={links}
          drawerOpened={drawerOpened}
          closeDrawer={() => setDrawerOpened(false)}
          drawerRef={drawerRef}
        />
        <HamburgerMenu drawerRef={drawerRef} openDrawer={() => setDrawerOpened(true)} />
        <nav className="sm:flex hidden gap-[15px] items-center text-[15px]">
          {links.map((link, index) => (
            <Fragment key={link.title}>
              {link.download ? (
                <a
                  href={link.download}
                  download
                  className="hover:opacity-70 transition-all"
                  onMouseOver={() => setCursorSize(60)}
                  onMouseLeave={() => setCursorSize(40)}
                >
                  {t(link.title)}
                </a>
              ) : (
                <Link
                  to={link.to ? link.to : '#'}
                  className="hover:opacity-70 transition-all"
                  onMouseOver={() => setCursorSize(60)}
                  onMouseLeave={() => setCursorSize(40)}
                  onClick={(e) => handleHashClick(e, link.to ? link.to : '#')}
                >
                  {t(link.title)}
                </Link>
              )}

              {index !== links.length - 1 && (
                <img src={Ellipse} alt="" className="-z-50" loading="lazy" />
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
