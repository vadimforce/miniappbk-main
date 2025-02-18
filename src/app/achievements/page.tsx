import Image from "next/image";
import Link from 'next/link';
import RedButton from "../components/RedButton";
import ach1 from '../images/ach1.png'
import ach2 from '../images/ach2.png'
import ach3 from '../images/ach3.png'
import AchievementsName from '../components/AchievementsName';

export default function Achievments() {
    return (<>
        <div className="font-druk font-bold text-[20px] leading-none text-[#000000] mix-blend-normal mb-5">
            Ачивки
        </div>
        <ul className="mt-[33px] grid grid-cols-3 grid-rows-5 gap-x-[16px] gap-y-[14.5px] mb-[20px]">
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
            <AchievementsName name="КОРОЛЬ ВЛАД" bg="#FFCC1B" img={ach1} />
        </ul >
        <RedButton className="mt-[44px] w-full">Поделиться</RedButton>
    </>
    )
}