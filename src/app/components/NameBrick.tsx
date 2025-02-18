import { StaticImageData } from "next/image"
import Image from "next/image"

type NameBrickProps = {
       name: string,
       bg: string,
       img: StaticImageData,
       className?: string
}

const NameBrick = ({ name, bg, img, className = `` }: NameBrickProps) => {
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
                     <Image
                            src={img}
                            alt="" />
              </div>
              <div className="pointer-events-none top-15 left-5 right-0 bottom-0 absolute">
                     <svg className="w-auto h-auto absolute bottom-[-12px] left-0 top-25" width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8404 0.47249L17.7481 15.182L12.0183 13.55L18.8404 0.47249Z" fill="white" />
                            <rect x="0.816895" y="13.4739" width="65.108" height="18.042" rx="1.17665" transform="rotate(-7.69435 0.816895 13.4739)" fill="white" />
                     </svg>
                     <span className="font-druk absolute text-center font-bold text-[#1e1f1f] text-[4.98px] leading-[6.51px] bottom-[-4px] left-1 right-2 top-[-7px] rotate-[-7.694deg]">{name}</span>
              </div>
       </li>
}
export default NameBrick

