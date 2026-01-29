import { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setDialogVisibility } from '../store/reducers/dialog-visible-slice'

import useCursorSize from '../lib/use-cursor-size'
import HamburgerMenu from './hamburger-menu'
import MobileDrawer from './mobile-drawer'

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const drawerRef = useRef(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const links = [
    { title: 'About the Course', to: '/' },
    { title: 'Survival Guide', to: '/' },
    { title: 'Schedule', to: '/' },
    { title: 'Apply Now', to: '/' },
    { title: 'Contacts', to: '/' }
    // { title: 'Schedul', onClick: () => dispatch(setDialogVisibility()) }
  ]

  return (
    <header className="w-screen absolute z-40 transform-gpu">
      <div className="max-w-[1400px] h-[75px] mx-auto xl:px-[75px] px-[18px] text-black flex justify-between items-center transition-[padding] duration-500">
        <div className="sm:static absolute left-0 sm:w-auto w-screen text-center">
          <Link
            to="/"
            className="text-black/60 sm:hover:text-black text-[50px] font-humane font-bold leading-normal tracking-normal sm:hover:tracking-wider transition-[letter-spacing]"
            onMouseOver={() => setCursorSize(100)}
            onMouseLeave={() => setCursorSize(40)}
          >
            MEDIA UNBOTHERED
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
              <Link
                to={link.to ? link.to : '#'}
                className="hover:opacity-70 transition-all"
                onMouseOver={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
                onClick={() => dispatch(setDialogVisibility())}
              >
                {t(link.title)}
              </Link>

              {index !== links.length - 1 && (
                <img
                  src="./src/assets/ellipse.svg"
                  alt=""
                  className="-z-50"
                  loading="lazy"
                />
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
