import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

const WhyUsSection = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.to('#span', {
        scrollTrigger: {
          trigger: '#span',
          scrub: true,
          start: 'bottom bottom',
          end: 'bottom +=500'
        },
        stagger: 2,
        opacity: 1
      })
    }, rootRef.current!)

    return () => context.revert()
  }, [])

  const spans = [
    // { innerText: 'At Media Unbothered, we redefine the narrative.' },
    // {
    //   innerText:
    //     'Choose us for campaigns that demand attention, where every pixel carries purpose.'
    // },
    // {
    //   innerText:
    //     'Unleash the unbothered spirit—your journey to an unforgettable story starts here.'
    // }

    {
      innerText:
        'Generative AI has taken the world by storm, changing how we write, code, and interact with technology. But a new paradigm is emerging that promises to go even further: agentic systems – software entities that can make decisions, take actions, and pursue goals autonomously.'
    },
    {
      innerText:
        'Join us on a hands-on journey into the world of agentic systems. Participants will explore how intelligent agents perceive their environment, reason about goals, and act to solve real-world problems.'
    },
    {
      innerText:
        'No prior AI experience is required – only curiosity and a willingness to explore how tomorrow’s software systems think, decide, and act.'
    }
  ]

  return (
    <section ref={rootRef} className="leading-5 md:py-[110px] py-[50px]">
      <h2 className="text-black/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t('Why us')}
      </h2>

      <p
        className="text-black md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {spans.map((span) => (
          <>
            <span key={span.innerText} id="span" className="opacity-10">
              {t(span.innerText)}{' '}
            </span>
            <br />
            <br />
          </>
        ))}
      </p>
    </section>
  )
}

export default WhyUsSection
