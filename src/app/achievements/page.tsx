import Image from "next/image";
import Link from 'next/link';
import RedButton from "../components/RedButton";
import ach1 from '../images/ach1.png'
import ach2 from '../images/ach2.png'
import ach3 from '../images/ach3.png'

export default function Achievments() {
    return (<>
        <div className="font-druk font-bold text-[20px] leading-[20px] text-[#000000] mix-blend-normal mb-5">
            Ачивки
        </div>
        <div className="grid items-center justify-center grid-cols-3 grid-rows-5 gap-x-[22px]">
        <Image
        src={ach1}
        alt="promo" />
        <Image
        src={ach2}
        alt="promo" />
        <Image
        src={ach3}
        alt="promo" />
        <Image
        src={ach1}
        alt="promo" />
        <Image
        src={ach1}
        alt="promo" />
        </div>
        <div>
        <Link href=""><RedButton className="w-full">Поделиться</RedButton> </Link>
        </div>
        </>
    )
}