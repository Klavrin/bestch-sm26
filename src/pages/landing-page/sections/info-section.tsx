const InfoSection = () => {
  return (
    <section className="md:py-[130px] py-[50px]">
      <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        Important Info
      </h2>

      <div className="flex flex-col md:flex-row w-full md:gap-12 gap-0">
        <div className="w-full md:w-1/2">
          <div className="flex items-end border-b-2 border-[#8D9B00] justify-between pb-4">
            <h2 className="xl:text-5xl md:text-[3.6vw] text-2xl">Chișinău, Moldova</h2>
            <p className="text-[#8D9B00] md:text-base text-sm">Location</p>
          </div>

          <div className="flex items-end border-b-2 border-[#8D9B00] justify-between md:py-6 py-3">
            <h2 className="xl:text-5xl md:text-[3.6vw] text-2xl">22 Hours</h2>
            <p className="text-[#8D9B00] md:text-base text-sm">Hours</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-end border-b-2 border-[#8D9B00] justify-between md:pb-3 pb-4 md:py-0 md:pt-1 pt-3">
            <h2 className="xl:text-5xl md:text-[3.6vw] text-2xl">8 Days</h2>
            <p className="text-[#8D9B00] md:text-base text-sm">Duration</p>
          </div>

          <div className="flex items-end border-b-2 border-[#8D9B00] justify-between md:py-6 py-3">
            <h2 className="xl:text-5xl md:text-[3.6vw] text-2xl">Beginner Level</h2>
            <p className="text-[#8D9B00] md:text-base text-sm">Difficulty</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
