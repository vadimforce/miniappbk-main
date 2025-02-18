import Image from "next/image";
import pair from '../images/pairClose.png'

export default function Home() {
    return <>
        <div className="text-[#1e1f1f] h-[60px] text-center text-[20px] font-bold font-druk leading-none">
            Найди двух<br />одинаковых<br />челобриков
        </div>
        <div className=" mt-[82px] grid items-center justify-center grid-cols-3 grid-rows-4 gap-x-[15.5px] gap-y-4">
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
            <Image
                src={pair}
                alt="pair" />
        </div>
        <div className="mt-[82px] grid items-center justify-center grid-cols-3 grid-rows-1 gap-x-[15.5px]">
            <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Счет</div></div>
            <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Время</div></div>
            <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Уровень</div></div>
        </div>
    </>
}
