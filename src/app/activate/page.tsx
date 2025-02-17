
import Image from 'next/image';
import RedButton from "../components/RedButton";
export default function Activate() {
    return (
        <>
            <div className="w-[278px] text-[#1e1f1f] text-xl font-bold font-druk leading-tight mb-[10px] ">Загружай в&nbsp;наш чат селфи&#8209;фото с&nbsp;челобриком, открывай крутые ачивки и&nbsp;получай призы!</div>
            <div className="w-[266px] h-10 text-[#1e1f1f] text-[16px]  font-medium leading-tight">Главное, чтобы на&nbsp;фотографии тебя с&nbsp;челобриком было хорошо видно!</div>
            <div className=" grid items-center -mb-[5px] justify-center grid-cols-3 grid-rows-4 gap-x-[8px]">

            </div>
            <RedButton className="w-full">Загрузить фото</RedButton>
        </>
    )
}