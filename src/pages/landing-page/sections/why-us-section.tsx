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
      const spanElements = gsap.utils.toArray('#span')

      spanElements.forEach((span: any) => {
        gsap.fromTo(
          span,
          {
            opacity: 0.05
          },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: span,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1, // Lower number = smoother, more responsive
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, rootRef.current!)

    return () => context.revert()
  }, [])

  const spans = [
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
        "No prior AI experience is required – only curiosity and a willingness to explore how tomorrow's software systems think, decide, and act."
    }
  ]

  return (
    <section ref={rootRef} className="leading-5 md:py-[110px] py-[50px]">
      <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {/* {t('Why us')} */}
        About
      </h2>
      <p
        className="text-black md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {spans.map((span, index) => (
          <span key={index}>
            <span id="span" className="opacity-5 inline-block">
              {t(span.innerText)}{' '}
            </span>
            <br />
            <br />
          </span>
        ))}
      </p>
    </section>
  )
}

export default WhyUsSection
