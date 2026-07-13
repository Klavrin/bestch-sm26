// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import useCursorSize from '../../../lib/use-cursor-size'
// import { useTranslation } from 'react-i18next'
import PartnerSection, { PartnerItem } from '../../../components/partner-section'
// media
import allied from '../../../assets/allied.png'
import utm from '../../../assets/utm.png'
import isd from '../../../assets/isd.png'
import victoria from '../../../assets/victoria.png'
import simpals from '../../../assets/simpals.png'
import stiri from '../../../assets/stiri.png'
import point from '../../../assets/point.png'

const diamondItems: PartnerItem[] = [
    {
        logo: allied,
        alt: "Allied Testing",
        description:
        "Allied Testing, a company founded in 2000, is a leading QA and testing specialist firm with the main focus on the capital markets, trading and finance industry.",
        link: "https://www.alliedtesting.com/"
    },
]
const generalItems: PartnerItem[] = [{ logo: utm, alt: "UTM", link: "https://utm.md/" }]
const silverItems: PartnerItem[] = [
    {
        logo: isd,
        alt: "ISD",
        link: "https://isd-soft.com/"
    },
    {
        logo: victoria,
        alt: "Victoriabank",
        link: "https://www.victoriabank.md/"
    },
]
const mediaItems: PartnerItem[] = [
    {
        logo: simpals,
        alt: "Simpals",
        imgClassName: "md:translate-y-1",
        link: "https://simpals.com/en"
    },
    {
        logo: stiri,
        alt: "Stiri MD",
        imgClassName: "md:translate-y-4",
        link: "https://stiri.md/" },
    {
        logo: point,
        alt: "Point",
        imgClassName: "md:translate-y-1",
        link: "https://point.md/ro/"
    },
]

const PartnerPage = () => {
    return (
        <div className="flex flex-col flex-wrap gap-8 w-full md:py-[110px] py-[50px]">
            <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal">
                Meet our Partners
            </h2>
            <div className="flex flex-wrap gap-16">
                <PartnerSection title="General Partners" items={generalItems} />
                <PartnerSection title="Diamond Partners" items={diamondItems} />
                <PartnerSection title="Silver Partners" items={silverItems} />
                <PartnerSection title="Media partners" items={mediaItems} />
            </div>
        </div>
    )
}

export default PartnerPage
