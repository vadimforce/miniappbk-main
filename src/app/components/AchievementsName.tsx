import { StaticImageData } from "next/image"
import Image from "next/image"

type AchievementsNameProps = {
  name: string,
  bg: string,
  img: StaticImageData,
  className?: string
}

const AchievementsName = ({ name, bg, img, className = `` }: AchievementsNameProps) => {
  return <li className={`relative overflow-hidden rounded ${className}`}>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M11,0 
       h32 
       a3,3 0 0 1 3,3
    v5
       a3,3 0 0 0 3,3
h2
       a3,3 0 0 0 3,-3
v-5
       a3,3 0 0 1 3,-3
       h32 
       a3,3 0 0 1 3,3
    v5
       a3,3 0 0 0 3,3
h2
       a3,3 0 0 1 3,3
L100,97
       a3,3 0 0 1 -3,3
L3,100
       a3,3 0 0 1 -3,-3
L0,14
       a3,3 0 0 1 3,-3
h2
       a3,3 0 0 0 3,-3
v-5
       a3,3 0 0 1 3,-3
       z"
    fill={bg}
  />
</svg>
    <div className="pointer-events-none top-8 left-0 right-0 bottom-0 absolute " style={{ backgroundColor: bg }}>
    </div>
    <div className=" flex items-center justify-center top-0 left-0 right-0 bottom-0 absolute ">
      <Image
        src={img}
        alt="" />
    </div>
    <div className="pointer-events-none top-18 left-0 right-0 bottom-0 absolute">
             <svg className="absolute bottom-0 left-5 top-22 "width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20.6585 8.04995L19.5566 22.8881L13.7768 21.2419L20.6585 8.04995Z" fill="white" />
                     <rect x="2.47717" y="21.1652" width="65.6776" height="18.1998" rx="1.18694" transform="rotate(-7.69435 2.47717 21.1652)" fill="white" />
                 </svg>
      <span className="font-druk absolute text-center font-bold text-[#1e1f1f] text-[4.968px] top-15 left-10 bottom-0 rotate-[-8deg]">{name}</span>
      </div>
  </li>
}
export default AchievementsName
