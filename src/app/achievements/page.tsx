import RedButton from "../components/RedButton";
import ach1 from '../images/ach1.png'
import ach2 from '../images/ach2.png'
import ach3 from '../images/ach3.png'
import ach4 from '../images/ach4.png'
import ach5 from '../images/ach5.png'
import ach6 from '../images/ach6.png'
import ach7 from '../images/ach7.png'
import ach8 from '../images/ach8.png'
import ach9 from '../images/ach9.png'
import ach10 from '../images/ach10.png'
import ach11 from '../images/ach11.png'
import ach12 from '../images/ach12.png'
import ach13 from '../images/ach13.png'
import ach14 from '../images/ach14.png'
import AchievementsName from '../components/AchievementsName';

export default function Achievments() {
    return (<>
        <div className="font-druk font-bold text-[20px] leading-none text-[#000000] mix-blend-normal mb-5">
            Ачивки
        </div>
        <ul className="mt-[35px] grid grid-cols-3 grid-rows-5 gap-x-[22px] gap-y-5 mb-[20px]">
            <AchievementsName name="ПЕРВЫЙ ЧЕЛОБРИК" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="ПЕРВАЯ СЫГРАННАЯ МИНИ&#8209;ИГРА" bg="#76CAE5" img={ach2} />
            <AchievementsName name="НАЙДЕН ЧЕЛОБРИК В&nbsp;КОРОНЕ" bg="#FFCC1B" img={ach3} />
            <AchievementsName name="3&nbsp;СОБРАННЫХ ЧЕЛОБРИКА" bg="#EA5045" img={ach4} />
            <AchievementsName name="2&nbsp;СЫГРАННЫХ МИНИ&#8209;ИГР" bg="#52AE32" img={ach5} />
            <AchievementsName name="5&nbsp;СОБРАННЫХ ЧЕЛОБРИКОВ" bg="#76CAE5" img={ach6} />
            <AchievementsName name="СЕЛФИ НА&nbsp;КАНИКУЛАХ" bg="#F28A3D" img={ach7} />
            <AchievementsName name="СЕЛФИ В&nbsp;МАРТОВСКИЕ ПРАЗДНИКИ" bg="#EA5045" img={ach8} />
            <AchievementsName name="СЕЛФИ В&nbsp;ФЕВРАЛЬСКИЕ ПРАЗДНИКИ" bg="#52AE32" img={ach9} />
            <AchievementsName name="7 СОБРАННЫХ ЧЕЛОБРИКОВ" bg="#76CAE5" img={ach10} />
            <AchievementsName name="10 СОБРАННЫХ ЧЕЛОБРИКОВ" bg="#F28A3D" img={ach11} />
            <AchievementsName name="СЕЛФИ В&nbsp;ПОСЛЕДНЮЮ НЕДЕЛЮ&nbsp;АКЦИИ" bg="#FFCC1B" img={ach12} />
            <AchievementsName name="ПРОЙДЕН ТЕСТ «КАКОЙ ТЫ ЧЕЛОБРИК?»" bg="#52AE32" img={ach13} />
            <AchievementsName name="ВСЕ СОБРАННЫЕ АЧИВКИ" bg="#FFCC1B" img={ach14} />
        </ul >
        <RedButton className="mt-[55px] w-full">Поделиться</RedButton>
    </>
    )
}