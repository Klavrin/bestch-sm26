import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

import CustomButtonArrow from '../assets/custom-button-arrow.svg'

type CustomButtonProps = {
  innerText: string
  styles?: string
  imgStyles?: string
  hideForWideScreens?: boolean
  onClick?: () => void
}

const CustomButton = ({
  innerText,
  styles,
  imgStyles,
  hideForWideScreens,
  onClick
}: CustomButtonProps) => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  return (
    <>
      <div className={`flex ${hideForWideScreens && 'md:hidden'}`} onClick={onClick}>
        <div className="flex items-center relative">
          <button
            className={`bg-[#FF9800] text-black rounded-[56px] whitespace-nowrap flex items-center ${styles}`}
            onMouseOver={() => setCursorSize(180)}
            onMouseLeave={() => setCursorSize(40)}
          >
            {t(innerText)}
          </button>

          <img
            src={CustomButtonArrow}
            className={`absolute -right-[5%] pointer-events-none h-[70%] w-auto ${imgStyles}`}
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}

export default CustomButton
