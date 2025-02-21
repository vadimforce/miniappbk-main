'use client';

import Link from 'next/link';
import RedButton from '../components/RedButton';
import win2 from '../images/win2.png'

export default function Win() {
    return (
        <div className="relative grow flex flex-col items-center justify-center gap-6">
            <div className="absolute top-1/3 -left-10 -right-10 -bottom-5 bg-[#87604F] border-t-[17px] border-[#D7C7B5]"></div>
            <img src={win2.src} className="relative w-[310px] h-auto mx-auto" alt="" />
            <Link className="relative w-full" href="/achievements">
                <RedButton className="w-full">Посмотреть</RedButton>
            </Link>
        </div>
    )
}