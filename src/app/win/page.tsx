'use client';

import Link from 'next/link';
import RedButton from '../components/RedButton';
import vlad from '../images/win1.png'

export default function Win() {
    return (
        <div className="relative grow flex flex-col items-center justify-center gap-6">
            <img src={vlad.src} className="w-[310px] h-auto mx-auto" alt="" />
            <Link href="/achievements">
                <RedButton className="w-full">Посмотреть</RedButton>
            </Link>
        </div>
    )
}