import Image from "next/image";
import Link from 'next/link';
import promo from './images/promo.png'
import PrimaryButton from "./components/PrimaryButton";
import OrangeButton from "./components/OrangeButton";


export default function Home() {
  return <>
    <div className="-mx-10">
      <Image
        src={promo}
        alt="promo"
        className="relative" />
      <div className="absolute  left-[40px] top-[208px] font-druk font-bold text-[20px] w-[216px] leading-none">Настроение чики&#8209;брики!</div>
    </div>
    <div className="grid items-center justify-center grid-cols-2 grid-rows-4 gap-2.5 -mt-7">
      <Link href="/rules"><PrimaryButton className="w-full">Правила 📢</PrimaryButton></Link>
      <Link href="/"><PrimaryButton className="w-full">Написать в&nbsp;поддержку 🧐</PrimaryButton></Link>
      <Link className="p-4 bg-[#ffcc1b] text-[#502314] rounded-[8px] col-span-2 hover:bg-[#ad912b] text-center text-xl font-normal font-['Flame'] leading-tight" href="/activate"><button>Активировать челобрика 📸</button></Link>
      <Link href="/awards"><PrimaryButton className="w-full">Призы 🎁</PrimaryButton></Link>
      <Link href="/"><PrimaryButton className="w-full pl-0 pr-0">В&nbsp;Бургер Кинг&nbsp;👀</PrimaryButton></Link>
      <Link href="/games"><PrimaryButton className="w-full">Игры 🎮</PrimaryButton></Link>
      <Link href="/achievements"><PrimaryButton className="w-full">Ачивки 🥇</PrimaryButton></Link>
    </div>
  </>
}
