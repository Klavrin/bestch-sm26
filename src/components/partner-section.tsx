// partner-section.tsx
import useCursorSize from '../lib/use-cursor-size'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface PartnerSectionProps {
    title: string;
    items: PartnerItem[];
}
export interface PartnerItem {
    logo: string;
    alt?: string;
    link?: string;
    description?: string;
    imgClassName?: string;
}

export function PartnerCard({ logo, alt = "", link, description, imgClassName = "", onEnter, onLeave }: PartnerItem & { onEnter?: () => void; onLeave?: () => void }) {
    const content = (
        <div
        onMouseOver={onEnter}
        onMouseLeave={onLeave}
        className="group flex flex-col md:flex-row items-center gap-4 w-full md:w-auto bg-[#FFF8F0] border border-[#EB7400]/25 shadow-sm shadow-[#EB7400]/10 rounded-xl px-8 py-7 transition-colors duration-300 hover:bg-[#EB7400]/30"
        >
        <img src={logo} alt={alt} className={`h-20 md:h-24 object-contain ${imgClassName}`} />
        {description && (
            <p id="span" className="max-w-md text-sm md:text-base text-neutral-700 text-center md:text-left">
                {description}
            </p>
        )}
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            {content}
            </a>
        );
    }

    return content;
}

function PartnerSection({ title, items }: PartnerSectionProps) {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const { setCursorSize } = useCursorSize()
    return (
        <div ref={rootRef} className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-[#EB7400]/30" />
        <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal whitespace-nowrap">
        {title}
        </h2>
        <div className="flex-1 h-px bg-[#EB7400]/30" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full">
        {items.map((item, i) => (
            <PartnerCard
            key={i}
            {...item}
            onEnter={() => setCursorSize(80)}
            onLeave={() => setCursorSize(40)}
            />
        ))}
        </div>
        </div>
    );
}

export default PartnerSection
