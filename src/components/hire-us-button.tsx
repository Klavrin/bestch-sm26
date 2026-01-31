import useCursorSize from '../lib/use-cursor-size'
import GsapMagnetic from './gsap-magnetic'

import HireUsButtonImage from '../assets/hire-us-button.png'
import HireUsArrow from '../assets/hire-us-arrow.svg'

type HireUsButtonProps = {
  onClick?: () => void
}

const HireUsButton = ({ onClick }: HireUsButtonProps) => {
  const { setCursorSize } = useCursorSize()

  return (
    <div
      className="w-full min-w-[150px] min-h-[150px] md:flex hidden justify-center items-center"
      onClick={onClick}
    >
      <GsapMagnetic>
        <img
          src={HireUsButtonImage}
          className="w-[150px] h-[150px] hover:rotate-180 transition-all duration-500 ease-in-out cursor-pointer"
          alt="Hire us"
          onMouseOver={() => setCursorSize(0)}
          onMouseLeave={() => setCursorSize(40)}
          loading="lazy"
        />
        <img src={HireUsArrow} className="absolute pointer-events-none" loading="lazy" />
      </GsapMagnetic>
    </div>
  )
}

export default HireUsButton
