'use client';

import Link from 'next/link';
import RedButton from '../components/RedButton';
import gameover2 from '../images/gameover2.png'

export default function GameOver() {
    return (
        <div className="relative grow flex flex-col items-center justify-center gap-6">
            <div className="absolute top-1/3 -left-10 -right-10 -bottom-5 bg-[#87604F] border-t-[17px] border-[#D7C7B5]"></div>
            <img src={gameover2.src} className="relative w-[310px] h-auto mx-auto" alt="" />
            <Link className="relative w-full" href="/pop-burgers">
                <RedButton className="w-full">Попробовать снова</RedButton>
            </Link>
        </div>
    )
}