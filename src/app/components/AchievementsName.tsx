import { StaticImageData } from "next/image"

type AchievementsNameProps = {
    name: string,
    bg: string,
    img: StaticImageData,
    className?: string
}

const AchievementsName = ({ name, bg, img, className = `` }: AchievementsNameProps) => {
    return <li className={`relative rounded ${className}`}>
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
            <img
                src={img.src}
                alt="" />
        </div>
        <div className="pointer-events-none top-15 left-0 right-0 bottom-0 absolute">
            <svg className="w-auto h-auto absolute bottom-[-12px] left-0 top-25" viewBox="0 0 76 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2895 0.0606489L19.0599 16.6191L12.61 14.782L20.2895 0.0606489Z" fill="white" />
                <rect y="14.6958" width="73.2918" height="20.3098" rx="1.32455" transform="rotate(-7.69435 0 14.6958)" fill="white" />
            </svg>
            <span className="font-druk absolute text-center font-bold text-[#1e1f1f] text-[5.612px] leading-[6.51px] bottom-[-4px] left-1 right-1 top-[-14px] rotate-[-7.694deg]">{name}</span>
        </div>
    </li>
}
export default AchievementsName


