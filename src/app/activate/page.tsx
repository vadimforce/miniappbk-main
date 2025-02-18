
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
import vladprison from '../images/vladprison.png'
import NameBrick from '../components/NameBrick';

export default function Activate() {
    return (
        <>
            <div className="w-[278px] text-[#1e1f1f] text-xl font-bold font-druk leading-none mb-[10px] ">Загружай в&nbsp;наш чат селфи&#8209;фото с&nbsp;челобриком, открывай крутые ачивки и&nbsp;получай призы!</div>
            <div className="w-[266px] h-10 text-[#1e1f1f] font-medium leading-tight">Главное, чтобы на&nbsp;фотографии тебя с&nbsp;челобриком было хорошо видно!</div>
            <ul className="mt-[33px] grid grid-cols-3 grid-rows-4 gap-x-[16px] gap-y-[14.5px] mb-[20px]">
                <NameBrick className="row-span-2" name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={vladking} />
                <NameBrick name="ВЛАД" bg="#76CAE5" img={vlad} />
                <NameBrick name="РИВИ В&nbsp;БУРГЕР КИНГ" bg="#EA5045" img={rivi} />
                <NameBrick name="РАБОТНИК ВЛАД" bg="#52AE32" img={vladworker} />
                <NameBrick name="ВЛАД ПОЛИЦЕЙСКИЙ" bg="#FFCC1B" img={vladpoliceman} />
                <NameBrick name="КЛОУН&#8209;А4" bg="#F28A3D" img={a4clown} />
                <NameBrick name="КРАСОТКА РИВИ" bg="#FFCC1B" img={rivi2} />
                <NameBrick className="row-span-2" name="ВЛАД ЗАКЛЮЧЕННЫЙ" bg="#76CAE5" img={vladprison} />
                <NameBrick name="ЛАМА&#8209;СЫН" bg="#76CAE5" img={lamason} />
                <NameBrick name="МАРК" bg="#52AE32" img={vlad} />
            </ul >
            <RedButton className="w-full">Загрузить фото</RedButton>
        </>
    )
}