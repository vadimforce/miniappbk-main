'use client';

import Link from 'next/link';
import RedButton from '../components/RedButton';
import vlad from '../images/gameover1.png'

export default function GameOver() {
    return (
        <div className="relative grow flex flex-col items-center justify-center gap-6">
            <img src={vlad.src} className="w-[310px] h-auto mx-auto" alt="" />
            <Link href="/findPair">
                <RedButton className="w-full">Попробовать снова</RedButton>
            </Link>
        </div>
    )
}