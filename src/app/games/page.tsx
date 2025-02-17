'use client'

import Image from 'next/image';
import Link from 'next/link';
import gamesImg from '../images/gamesImg.png';
import { usePathname } from 'next/navigation';
import OrangeButton from "../components/OrangeButton";

export default function Games() {


    const pathname = usePathname()
    console.log(pathname === '/')

    return (
        <div className="-mt-5">
            <div className="bg-white mt-5 font-druk font-bold text-[20px] leading-[20px] text-[#000000] mix-blend-normal mb-5">
                Игры
            </div>
            <div className="justify-center">
                <Link href="/findPair"><OrangeButton className="w-full">Найди пару</OrangeButton></Link>
                <Link href="/popBurgers"><OrangeButton className="w-full">Лопай бургеры</OrangeButton></Link>
            </div>
            <div className="mt-[37px] -mx-10">
                <Image
                    src={gamesImg}
                    alt="rules"
                />
            </div>
        </div >
    )
}