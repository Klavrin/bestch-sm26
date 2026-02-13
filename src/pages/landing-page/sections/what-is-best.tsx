import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

const WhatIsBestCourse = () => {
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
            'BEST Courses are educational events designed to provide European students of technology with knowledge and skills that complement their academic studies. They embody the concept of complementary education, enhancing learning and building skills beyond the traditional curriculum.'
        },
        {
            innerText:
            'BEST Courses are conducted in English and delivered by professionals who either hold an academic certification and at least a university-level degree in the course’s subject or have significant industry experience. Learning involves interaction, hands-on activities, and knowledge sharing, balancing theory and practice.'
        }
    ]

    return (
        <section ref={rootRef} className="leading-5 md:py-[110px] py-[50px]" id="what-is-best">
        <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {/* {t('Why us')} */}
        What is a BEST Course?
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

export default WhatIsBestCourse
