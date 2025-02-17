import { StaticImageData } from "next/image"
import  Image  from "next/image"

type NameBrickProps = {
  name: string,
  bg: string,
  img: StaticImageData,
  className?: string
}

const NameBrick = ({ name, bg, img, className = `` }: NameBrickProps) => {
  return <li className={`relative overflow-hidden rounded ${className}`}>
    <svg className="w-full" viewBox="0 0 88 91" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M80.7136 7.65378V2.74106C80.7136 1.23149 79.4424 0 77.8666 0H50.3766C48.8008 0 47.5296 1.23149 47.5296 2.74106V7.65378C47.5296 9.16334 46.2584 10.3948 44.6826 10.3948H43.0671C41.4913 10.3948 40.2201 9.16334 40.2201 7.65378V2.74106C40.2201 1.23149 38.9489 0 37.3731 0H9.86985C8.29408 0 7.02286 1.23149 7.02286 2.74106V7.65378C7.02286 9.16334 5.75165 10.3948 4.17587 10.3948H3.11652C1.54075 10.3948 0.269531 11.6263 0.269531 13.1359V87.7801C0.269531 89.2896 1.54075 90.5211 3.11652 90.5211H84.6332C86.209 90.5211 87.4802 89.2896 87.4802 87.7801V13.1491C87.4802 11.6396 86.209 10.4081 84.6332 10.4081H83.5739C81.9981 10.4081 80.7269 9.17658 80.7269 7.66702L80.7136 7.65378Z" fill={bg} />
    </svg>
    <div className="pointer-events-none  top-8 left-0 right-0 bottom-0 absolute " style={{ backgroundColor: bg }}>
    </div>
    <div className=" flex items-center justify-center top-0 left-0 right-0 bottom-0 absolute ">
      <Image 
      src={img}
      alt=""/> 
      <svg className="absolute bottom-0 left-0 " viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.977 0.506425L17.8847 15.2159L12.1549 13.584L18.977 0.506425Z" fill="white"/>
<rect x="0.953491" y="13.5077" width="65.108" height="18.042" rx="1.17665" transform="rotate(-7.69435 0.953491 13.5077)" fill="white"/>
</svg>
    </div>


  </li>
  // <div className={`absolute top-[74px] left-[22px] flex justify-center" ${className ?? ''}`}>
  //   <svg width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M18.9769 0.81978L17.8845 15.5293L12.1548 13.8973L18.9769 0.81978Z" fill="white" />
  //     <rect x="0.953613" y="13.8212" width="65.108" height="18.042" rx="1.17665" transform="rotate(-7.69435 0.953613 13.8212)" fill="white" />
  //   </svg>
  //   <span className={`absolute bottom-1.5 rotate-[-8deg] font-druk font-bold text-[4.986px] text-center text-[#1e1f1f] leading-[5.783px] ${className ?? ''}`}><span></span></span>
  // </div>
}
export default NameBrick
