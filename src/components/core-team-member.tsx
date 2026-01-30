interface CoreTeamMemberProps {
  image: string
  title: string
  name: string
  email?: string
  phone?: string
  className?: string
}

const CoreTeamMember = ({
  image,
  title,
  name,
  email,
  phone,
  className = ''
}: CoreTeamMemberProps) => {
  return (
    <div
      className={`relative w-full aspect-square rounded-full overflow-hidden ${className}`}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 text-center text-white pb-3 px-3 flex flex-col items-center">
        <p className="xl:text-[0.8vw] md:text-[1.5vw] text-[9px] font-light mb-0.5 opacity-90">
          {title}
        </p>
        <h3 className="xl:text-[1.15vw] md:text-[2.2vw] text-[13px] font-bold mb-1 w-[60%] leading-[1.2]">
          {name}
        </h3>
        {email && (
          <p className="xl:text-[0.65vw] md:text-[1.3vw] text-[8px] font-light opacity-90 mb-0.5">
            {email}
          </p>
        )}
        {phone && (
          <p className="xl:text-[0.8vw] md:text-[1.5vw] text-[9px] font-light opacity-90">
            {phone}
          </p>
        )}
      </div>
    </div>
  )
}

export default CoreTeamMember
