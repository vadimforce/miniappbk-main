'use client';

import vlad from '../images/common.png'

export default function PhotoSuccess() {
    return (
        <div className="relative grow flex flex-col items-center justify-center gap-6">
            <img src={vlad.src} className="w-[154px] h-auto mx-auto" alt="" />
            <div className="flex flex-col gap-[15px] text-center">
                <div className="text-2xl font-bold font-druk uppercase leading-none">СПАСИБО!</div>
                <div className="font-bold font-druk uppercase leading-none">фотO ПРИНЯТО<br />И ПРОХОДИТ МОДЕРАЦИЮ</div>
            </div>
        </div>
    )
}