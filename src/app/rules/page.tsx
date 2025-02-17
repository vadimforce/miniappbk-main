import Image from 'next/image';
import rulesImg from '../images/rulesImg.png';


export default function Rules() {
    return <>
        <div className="text-xl font-bold font-druk leading-none mb-[15px] -ml-2.5">
            Выигрывай крутые призы, собирая челобриков из&nbsp;А4&#8209;Бокса!
        </div>
        <div className="font-medium leading-none mb-4">
            Покупай А4&#8209;Бокс в&nbsp;Бургер Кинге, <br />делай классные селфи-фото с&nbsp;разными челобриками, загружай их&nbsp;в&nbsp;это приложение и&nbsp;собирай награды!
        </div>
        <div className="-mx-10">
            <Image
                src={rulesImg}
                alt='rules'
            />
        </div>
    </>
}