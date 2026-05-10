import CustomButton from '../../../components/custom-button'
import DashedButton from '../../../components/dashed-button'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

const ReadyToChatSection = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  return (
    <section className="md:py-[130px] py-[50px] font-nohemi" id="apply">
      <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t('Need more information?')}
      </h2>

      <p
        className="md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {/* {t(
          "Eager to transform your digital aspirations into a tangible online presence? We're at your service. Whether you have a specific project in mind or are keen on exploring potential opportunities, the Media Unbothered team is prepared for a meaningful discussion."
        )} */}
        Start your Agentic AI journey today! Whether you have a specific project in mind
        or are keen on exploring potential opportunities, this Course is designed to guide
        you every step of the way.
        <br />
        <br />
        Local applications are open from May 11th to May 24th!
      </p>

      <div className="flex justify-center md:gap-[46px] gap-[18px] mt-[66px]">
        <DashedButton
          innerText="Apply Now!"
          onClick={() =>
            window.open('https://forms.gle/11rPZ7sdsEr4Cw9z7')
          }
        />
        <CustomButton
          innerText="Apply Now!"
          styles="xl:px-[117px] md:px-[8.35vw] px-[53px] py-[10px] xl:text-[60px] text-[4.28vw]"
          imgStyles="xl:min-w-[70px] sm:min-w-[5vw] min-w-[30px]"
          onClick={() =>
            window.open('https://forms.gle/11rPZ7sdsEr4Cw9z7')
          }
        />
        <DashedButton
          innerText="Apply Now!"
          onClick={() =>
            window.open('https://forms.gle/11rPZ7sdsEr4Cw9z7')
          }
        />
      </div>
    </section>
  )
}

export default ReadyToChatSection
