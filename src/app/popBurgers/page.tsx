import Image from "next/image";
import burgerImg from '../images/burger.png'
import vladbk from '../images/vladbk.png'

export default function Home() {
    return <div className="relative">
        <div className=" grid items-center -mb-[5px] justify-center grid-cols-3 grid-rows-1 gap-x-[8px]">
            <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] py-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Счет</div></div>
            <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] py-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Время</div></div>
            <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] py-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Уровень</div></div>
        </div>
        <div className=" mt-[47px] grid items-center justify-center grid-cols-3 grid-rows-4 gap-x-4 gap-y-4">
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
            <Image
                src={burgerImg}
                alt="burgerImg" />
        </div>
        <div className="-mx-10 w-[390px] mt-[90px] h-[17px] bg-[#d7c7b5]">
            <Image
                src={vladbk}
                alt="vladbk"
                className="absolute top-[550px] left-[-32px] w-[169.85px] h-[147.54px]"
            />
        </div>
        <div className="-mx-10 w-[390px] h-32 bg-[#87604f]"></div>
    </div>
}
