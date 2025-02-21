import Link from 'next/link';
import gamesImg from '../images/gamesImg.png';
import OrangeButton from "../components/OrangeButton";

export default function Games() {

    return (
        <div className="-mt-5">
            <div className="bg-white mt-5 font-druk font-bold text-[20px] leading-[20px] text-[#000000] mix-blend-normal mb-5">
                Игры
            </div>
            <div className="flex flex-col gap-[10px]">
                <Link href="/findPair"><OrangeButton className="w-full">Найди пару</OrangeButton></Link>
                <Link href="/popBurgers"><OrangeButton className="w-full" disabled={true}>Лопай бургеры</OrangeButton></Link>
            </div>
            <div className="mt-[37px] -mx-10">
                <img src={gamesImg.src} alt="" />
            </div>
        </div >
    )
}