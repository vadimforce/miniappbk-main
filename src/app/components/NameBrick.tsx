import { StaticImageData } from "next/image"

type NameBrickProps = {
       name: string
       bg: string
       img: StaticImageData
       className?: string
       rows?: number
       active: boolean
}

const NameBrick = ({ name, bg, img, className = ``, rows = 1, active }: NameBrickProps) => {
       return <li className={`relative ${className} ${rows === 2 ? `row-span-2` : `h-[23.6vw] max-h-[121px]`}  `}>
              <div className=" rounded overflow-hidden pointer-events-none absolute inset-0">
                     <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11,0 h32 a3,3 0 0 1 3,3 v5 a3,3 0 0 0 3,3 h2 a3,3 0 0 0 3,-3 v-5 a3,3 0 0 1 3,-3 h32 a3,3 0 0 1 3,3 v5 a3,3 0 0 0 3,3 h2 a3,3 0 0 1 3,3 L100,97 a3,3 0 0 1 -3,3 L3,100 a3,3 0 0 1 -3,-3 L0,14 a3,3 0 0 1 3,-3 h2 a3,3 0 0 0 3,-3 v-5 a3,3 0 0 1 3,-3 z" fill={active === false ? `#F5EBDC` : bg} />
                     </svg>
                     <div className=" top-8 left-0 right-0 bottom-0 absolute " style={{ backgroundColor: active === false ? `#F5EBDC` : bg }}>
                     </div>
              </div>
              <div style={active === true ? {} : {
                     filter: `grayscale(1) sepia(0.6) contrast(0.7) brightness(1.1)`
              }} className=" flex items-center justify-center top-0 left-0 right-0 bottom-0 absolute ">
                     <img src={img.src} alt="" />
              </div>
              <div className="right-2 -bottom-2 absolute origin-bottom-right rotate-[-7.694deg]">
                     <svg className="w-[72px] h-auto" viewBox="0 0 67 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5406 1.61627L17.4886 16.0471L12.029 13.6627L20.5406 1.61627Z" fill="white" />
                            <rect x="0.938599" y="12.0874" width="65.108" height="18.042" rx="1.17665" fill="white" />
                     </svg>
                     <span className="px-1 h-[10px] font-druk absolute text-center font-bold text-[#1e1f1f] text-[5px] leading-none left-0 right-0 bottom-1">{name}</span>
              </div>
       </li>
}
export default NameBrick

