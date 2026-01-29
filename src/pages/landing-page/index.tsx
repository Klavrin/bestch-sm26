import CoverSection from './sections/cover-section'
import WhyUsSection from './sections/why-us-section'
import ReadyToChatSection from './sections/ready-to-chat-section'
import LearningObjectives from './sections/learning-objectives'
import TeamSection from './sections/team-section'

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-black xl:px-[75px] px-[18px] transform-gpu">
        <CoverSection />
        <hr className="w-full h-[2px] bg-black opacity-40 rounded-full" />
        <WhyUsSection />
        <hr className="w-full h-[2px] bg-black opacity-40 rounded-full" />
        <LearningObjectives />
        {/* <OurServicesSection /> */}
        <hr className="w-full h-[2px] bg-black opacity-40 rounded-full" />
        <ReadyToChatSection />
        <hr className="w-full h-[2px] bg-black opacity-40 rounded-full" />
        <TeamSection />
        <hr className="w-full h-[2px] bg-black opacity-40 rounded-full" />
      </div>
    </div>
  )
}

export default LandingPage
