
import Image from 'next/image';
import RedButton from "../components/RedButton";
import vladking from '../images/vladking.png'
import vlad from '../images/vlad.png'
import rivi from '../images/rivi.png'
import vladworker from '../images/vladworker.png'
import vladpoliceman from '../images/vladpoliceman.png'
import a4clown from '../images/a4clown.png'
import rivi2 from '../images/rivi2.png'
import lamason from '../images/lamason.png'
import mark from '../images/mark.png'
import vladprison from '../images/vladprison.png'
import NameBrick from '../components/NameBrick';



export default function Activate() {
    return (
        <>
            <div className="w-[278px] text-[#1e1f1f] text-xl font-bold font-druk leading-tight mb-[10px] ">Загружай в&nbsp;наш чат селфи&#8209;фото с&nbsp;челобриком, открывай крутые ачивки и&nbsp;получай призы!</div>
            <div className="w-[266px] h-10 text-[#1e1f1f] text-[16px]  font-medium leading-tight">Главное, чтобы на&nbsp;фотографии тебя с&nbsp;челобриком было хорошо видно!</div>
            <div className="mt-[33px] grid items-center justify-center grid-cols-3 grid-rows-4 gap-x-[16px] gap-y-[14.5px] mb-[30px]">
                <Image
                    src={vladking}
                    alt="vladking"
                    className="row-span-2 h-full"
                />
                <Image
                    src={vlad}
                    alt="vlad"
                />
                <Image
                    src={rivi}
                    alt="rivi"
                />
                <Image
                    src={vladworker}
                    alt="vladworker"
                />
                <Image
                    src={vladpoliceman}
                    alt="vladpoliceman"
                />
                <Image
                    src={a4clown}
                    alt="a4clown"
                />
                <Image
                    src={rivi2}
                    alt="rivi2"
                />
                <Image
                    src={vladprison}
                    alt="valdprison"
                    className="row-span-2 h-full"
                />
                                <div className=" relative">
                <Image
                    src={lamason}
                    alt="lamason"
                />
                    <NameBrick>ЛАМА-СЫН</NameBrick>
                    </div>
                <div className=" relative">
                    <Image
                        src={mark}
                        alt="mark"
                    />
                    <div className="absolute top-[74px] left-[22px] flex justify-center">
                        <svg width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9769 0.81978L17.8845 15.5293L12.1548 13.8973L18.9769 0.81978Z" fill="white" />
                            <rect x="0.953613" y="13.8212" width="65.108" height="18.042" rx="1.17665" transform="rotate(-7.69435 0.953613 13.8212)" fill="white" />
                        </svg>
                        <span className="absolute bottom-1.5 rotate-[-8deg] "><span className="font-druk font-bold text-[4.986px] text-center text-[#1e1f1f] leading-[5.783px]">МАРК</span></span>
                    </div>
                </div>
            </div >
            <RedButton className="w-full">Загрузить фото</RedButton>
        </>
    )
}