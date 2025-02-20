import Link from 'next/link';
import promo from './images/promo.png'
import PrimaryButton from "./components/PrimaryButton";
import OrangeButton from './components/OrangeButton';

export default function Home() {
  return <>
    <div className="-mx-10 relative">
      <img
        src={promo.src}
        alt=""
        className="relative" />
      <div className="absolute  left-[10%] top-[23%] font-druk font-bold text-[20px] w-[216px] leading-none">Настроение чики&#8209;брики!</div>
    </div>
    <div className="grid items-center justify-center grid-cols-2 grid-rows-4 gap-2.5 -mt-7">
      <Link href="/rules"><PrimaryButton className="w-full">Правила&nbsp;📢</PrimaryButton></Link>
      <Link href="https://t.me/A4box_support"><PrimaryButton className="w-full">Написать в&nbsp;поддержку&nbsp;🧐</PrimaryButton></Link>
      <Link className="col-span-2" href="/activate"><OrangeButton className="w-full "><span className="text-[20px]">Активировать челобрика&nbsp;📸</span></OrangeButton></Link>
      <Link href="/awards"><PrimaryButton className="w-full">Призы&nbsp;🎁</PrimaryButton></Link>
      <Link href="https://burgerkingapp.onelink.me/220f/neej7q9b"><PrimaryButton className="w-full pl-0 pr-0">В&nbsp;Бургер Кинг&nbsp;👀</PrimaryButton></Link>
      <Link href="/games"><PrimaryButton className="w-full disabled:opacity-70" disabled={true} >Игры&nbsp;🎮</PrimaryButton></Link>
      <Link href="/achievements"><PrimaryButton className="w-full">Ачивки&nbsp;🥇</PrimaryButton></Link>
    </div>
  </>
}