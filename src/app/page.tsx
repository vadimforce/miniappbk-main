'use client';

import Link from 'next/link';
import promo from './images/promo.jpg'
import PrimaryButton from "./components/PrimaryButton";
import OrangeButton from './components/OrangeButton';

export default function Home() {
  return <>
    <div className="-mx-10 relative">
      <img
        src={promo.src}
        alt=""
        className="relative" />
    </div>
    <div className="grid items-center justify-center grid-cols-2 grid-rows-4 gap-2.5 -mt-3">
      <Link href="/rules"><PrimaryButton className="w-full">Правила&nbsp;📢</PrimaryButton></Link>
      <Link href="https://t.me/A4box_support"><PrimaryButton className="w-full">Написать в&nbsp;поддержку&nbsp;🧐</PrimaryButton></Link>
      <Link className="col-span-2" href="/activate"><OrangeButton className="w-full "><span className="text-[20px]">Активировать челобрика&nbsp;📸</span></OrangeButton></Link>
      <Link href="/awards"><PrimaryButton className="w-full">Призы&nbsp;🎁</PrimaryButton></Link>
      <Link href="https://burgerkingapp.onelink.me/220f/neej7q9b" target="_blank" ><PrimaryButton className="w-full pl-0 pr-0">В&nbsp;Бургер Кинг&nbsp;👀</PrimaryButton></Link>
      <Link href="/games"><PrimaryButton className="w-full" >Игры&nbsp;🎮</PrimaryButton></Link>
      <Link href="/achievements"><PrimaryButton className="w-full">Ачивки&nbsp;🥇</PrimaryButton></Link>
    </div>
  </>
}