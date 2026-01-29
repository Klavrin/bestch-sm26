import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useCursorSize from '../../../lib/use-cursor-size'

gsap.registerPlugin(ScrollTrigger)

const LearningObjectives = () => {
  const { setCursorSize } = useCursorSize()
  const listContainerRef = useRef<HTMLDivElement>(null)
  const listTitleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  const objectives = [
    'Explain what is an agentic system and how it differs from traditional programs',
    'Identify the core components of an agent (environment, goals, actions, feedback)',
    'Design simple agent behaviors using basic logic and state',
    'Understand how large language models can be used as reasoning agents',
    'Build and test a small agentic system that performs a practical task'
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (listTitleRef.current) {
        gsap.fromTo(
          listTitleRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listTitleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      itemsRef.current.forEach((item) => {
        if (!item) return

        const number = item.querySelector('.objective-number')
        const line = item.querySelector('.objective-line')
        const text = item.querySelector('.objective-text')

        gsap.set(item, { opacity: 0 })
        gsap.set(number, { scale: 0, rotation: -180 })
        gsap.set(line, { scaleX: 0, transformOrigin: 'left' })
        gsap.set(text, { x: -30, opacity: 0 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })

        tl.to(item, {
          opacity: 1,
          duration: 0.01
        })
          .to(number, {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: 'back.out(2)'
          })
          .to(
            line,
            {
              scaleX: 1,
              duration: 0.5,
              ease: 'power2.out'
            },
            '-=0.3'
          )
          .to(
            text,
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out'
            },
            '-=0.4'
          )
      })
    }, listContainerRef)

    return () => ctx.revert()
  }, [])

  const handleItemHover = (index: number) => {
    const item = itemsRef.current[index]
    if (!item) return

    const number = item.querySelector('.objective-number')
    const line = item.querySelector('.objective-line')

    gsap.to(number, {
      scale: 1.2,
      backgroundColor: '#EB7400',
      color: '#fff',
      duration: 0.3,
      ease: 'power2.out'
    })

    gsap.to(line, {
      scaleY: 2,
      backgroundColor: '#EB7400',
      duration: 0.3,
      ease: 'power2.out'
    })

    setCursorSize(70)
  }

  const handleItemLeave = (index: number) => {
    const item = itemsRef.current[index]
    if (!item) return

    const number = item.querySelector('.objective-number')
    const line = item.querySelector('.objective-line')

    gsap.to(number, {
      scale: 1,
      backgroundColor: 'transparent',
      color: '#EB7400',
      duration: 0.3,
      ease: 'power2.out'
    })

    gsap.to(line, {
      scaleY: 1,
      backgroundColor: '#EB7400',
      duration: 0.3,
      ease: 'power2.out'
    })

    setCursorSize(40)
  }

  return (
    <section className="md:py-[130px] py-[50px]">
      <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        Learning objectives of the course
      </h2>

      <p
        className="md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        By the end of this course, you will understand what are agentic systems and why
        they matter, how software agents can perceive, decide, and act, and how modern AI
        systems use agents to solve tasks autonomously. Participants will gain confidence
        exploring AI concepts through hands-on experimentation, even with minimal prior
        programming experience.
      </p>

      <div ref={listContainerRef} className="mt-16">
        <h3
          ref={listTitleRef}
          className="md:text-[28px] text-[22px] font-normal mb-12 text-black/80"
        >
          After completing the course, you will be able to:
        </h3>

        <div className="space-y-4">
          {objectives.map((objective, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex items-start gap-4 group cursor-pointer"
              onMouseEnter={() => handleItemHover(index)}
              onMouseLeave={() => handleItemLeave(index)}
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="objective-number w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#EB7400] flex items-center justify-center text-[#EB7400] font-bold md:text-xl text-lg transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="objective-line w-3 md:w-12 h-[2px] bg-[#EB7400]/60" />
              </div>
              <p className="objective-text md:text-[22px] text-[16px] font-normal leading-[140%] text-black/90 pt-2 flex-1 mt-1.5">
                {objective}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningObjectives
