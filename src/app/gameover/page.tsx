'use client';

import Link from 'next/link';
import RedButton from '../components/RedButton';
import gameover1 from '../images/gameover1.png'

export default function GameOver() {
    return (
        <div className="relative grow flex flex-col items-center justify-center gap-6">
            <img src={gameover1.src} className="w-[310px] h-auto mx-auto" alt="" />
            <Link href="/find-pair">
                <RedButton className="w-full">Попробовать снова</RedButton>
            </Link>
        </div>
    )
}