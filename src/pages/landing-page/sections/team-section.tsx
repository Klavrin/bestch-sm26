import CoreTeamMember from '../../../components/core-team-member'
import useCursorSize from '../../../lib/use-cursor-size'

const TeamSection = () => {
  const { setCursorSize } = useCursorSize()
  const teamMembers = [
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    },
    {
      image: './src/assets/gabi.png',
      title: 'Main Organizer',
      name: 'Gabriela Bîtca',
      email: 'gabriela.bitca@best-eu.org',
      phone: '+373 76 706 219'
    }
  ]

  return (
    <section className="md:py-[130px] py-[50px]">
      <h2 className="text-[#EB7400]/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5 block md:hidden">
        Meet the Team
      </h2>

      <div className="hidden md:block font-nohemi">
        <div className="flex items-center xl:gap-8 gap-4">
          <h1
            className="text-[#EB7400] xl:text-[240px] sm:text-[18.85vw] text-[80px] leading-none flex-shrink-0 mt-[1.5vw]"
            onMouseOver={() => setCursorSize(180)}
            onMouseLeave={() => setCursorSize(40)}
          >
            Meet
          </h1>
          <div className="flex gap-2 flex-1 justify-end">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div
                key={index}
                onMouseOver={() => setCursorSize(10)}
                onMouseLeave={() => setCursorSize(40)}
              >
                <CoreTeamMember
                  {...member}
                  className="xl:w-[250px] xl:h-[250px] sm:w-[20vw] sm:h-[20vw] w-[100px] h-[100px] flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center xl:gap-8 gap-4">
          <div className="flex gap-2 flex-1">
            {teamMembers.slice(2, 5).map((member, index) => (
              <div
                key={index}
                onMouseOver={() => setCursorSize(10)}
                onMouseLeave={() => setCursorSize(40)}
              >
                <CoreTeamMember
                  {...member}
                  className="xl:w-[250px] xl:h-[250px] sm:w-[20vw] sm:h-[20vw] w-[100px] h-[100px] flex-shrink-0"
                />
              </div>
            ))}
          </div>
          <h1
            className="text-[#EB7400] xl:text-[240px] sm:text-[18.85vw] text-[80px] leading-none flex-shrink-0 mt-[1.5vw]"
            onMouseOver={() => setCursorSize(180)}
            onMouseLeave={() => setCursorSize(40)}
          >
            The
          </h1>
        </div>

        <div className="flex items-center xl:gap-8 gap-4">
          <h1
            className="text-[#EB7400] xl:text-[240px] sm:text-[18.85vw] text-[80px] leading-none flex-shrink-0 mt-[1.5vw]"
            onMouseOver={() => setCursorSize(180)}
            onMouseLeave={() => setCursorSize(40)}
          >
            Team
          </h1>
          <div className="flex gap-2 flex-1 justify-end">
            {teamMembers.slice(5, 7).map((member, index) => (
              <div
                key={index}
                onMouseOver={() => setCursorSize(10)}
                onMouseLeave={() => setCursorSize(40)}
              >
                <CoreTeamMember
                  {...member}
                  className="xl:w-[250px] xl:h-[250px] sm:w-[20vw] sm:h-[20vw] w-[100px] h-[100px] flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-4">
          {teamMembers.slice(7, 11).map((member, index) => (
            <div
              key={index}
              onMouseOver={() => setCursorSize(10)}
              onMouseLeave={() => setCursorSize(40)}
            >
              <CoreTeamMember
                {...member}
                className="xl:w-[250px] xl:h-[250px] sm:w-[20vw] sm:h-[20vw] w-[100px] h-[100px] flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden grid grid-cols-2 gap-4">
        {teamMembers.map((member, index) => (
          <CoreTeamMember key={index} {...member} className="w-full aspect-square" />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
