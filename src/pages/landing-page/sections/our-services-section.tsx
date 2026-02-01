import { useRef, Fragment } from 'react'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const OurServicesSection = () => {
  const rootRef = useRef(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const services = [
    {
      title: 'Schedule',
      sideText: 'Check it out!',
      to: 'https://docs.google.com/spreadsheets/d/1WUZorezxAZhlZnev8Gn-ex7etubPynr6wcZAazcuzk8/edit?usp=sharing'
    },
    {
      title: 'Survival Guide',
      sideText: 'Have a look!',
      to: 'https://drive.google.com/file/d/1pq3V-Grn6suJcNlS-xME9c9y_NWD-fJC/view?usp=drive_link'
    }
    // {
    //   title: 'Maintenance',
    //   sideText: 'Explore!',
    //   to: '/maintenance-&-support'
    // },
    // {
    //   title: 'SEO',
    //   sideText: 'Peek in!',
    //   to: '/seo'
    // }
  ]

  return (
    <section ref={rootRef} className="md:py-[130px] py-[50px]" id="more-info">
      <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        Need more information?
      </h2>

      {services.map((service, index) => (
        <Fragment key={service.title}>
          <Link
            to={service.to}
            id={`service-${index}`}
            className="group flex gap-4 hover:text-black hover:bg-gradient-to-r from-[#EB7400]/60 via-[#EB7400] to-[#EB7400]/60 md:hover:pl-16 hover:pl-6 transition-all md:pt-4 pt-2"
            onMouseOver={() => setCursorSize(180)}
            onMouseLeave={() => setCursorSize(40)}
          >
            <h1 className="xl:text-[100px] text-[7.14vw] leading-none py-4 whitespace-nowrap">
              {t(service.title)}
            </h1>
            <p className="text-black/60 md:text-[20px] text-[10px] self-end  font-normal underline md:mb-[2vw] mb-[3vw] group-hover:opacity-0">
              {t(service.sideText)}
            </p>
          </Link>
          {index !== services.length - 1 && (
            <hr className="w-full h-[2px] bg-black opacity-40 rounded-full" />
          )}
        </Fragment>
      ))}
    </section>
  )
}

export default OurServicesSection
