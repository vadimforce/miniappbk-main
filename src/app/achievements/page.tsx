'use client'

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
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

type AchievementsProps = {
    name: string
    bg: string
    img: StaticImageData
    active: boolean
    match: string
}

export default function Achievments() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://a4-box.ru/profile/achivki', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const json = await response.json();
                if (json.status === "Success") {
                    setItems((prev) => {
                        const c = [...prev]
                        for (const item of c) {
                            if (json.achivki.indexOf(item.match) > -1) {
                                item.active = true
                            }
                        }
                        return c
                    })
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, [])

    const [items, setItems] = useState<AchievementsProps[]>([
        {
            name: "ПЕРВЫЙ ЧЕЛОБРИК",
            bg: "#FFCC1B",
            img: ach1,
            active: false,
            match: "c1"
        },
        {
            name: "ПЕРВАЯ СЫГРАННАЯ МИНИ-ИГРА",
            bg: "#76CAE5",
            img: ach2,
            active: false,
            match: "g1"
        },
        {
            name: "НАЙДЕН ЧЕЛОБРИК В&nbsp;КОРОНЕ",
            bg: "#FFCC1B",
            img: ach3,
            active: false,
            match: "crown"
        },
        {
            name: "3 СОБРАННЫХ ЧЕЛОБРИКА",
            bg: "#EA5045",
            img: ach4,
            active: false,
            match: "c3"
        },
        {
            name: "2 СЫГРАННЫХ МИНИ-ИГР",
            bg: "#52AE32",
            img: ach5,
            active: false,
            match: "g2"
        },
        {
            name: "5 СОБРАННЫХ ЧЕЛОБРИКОВ",
            bg: "#76CAE5",
            img: ach6,
            active: false,
            match: "c5"
        },
        {
            name: "СЕЛФИ НА КАНИКУЛАХ",
            bg: "#F28A3D",
            img: ach7,
            active: false,
            match: "s1"
        },
        {
            name: "СЕЛФИ В МАРТОВСКИЕ ПРАЗДНИКИ",
            bg: "#EA5045",
            img: ach8,
            active: false,
            match: "s2"
        },
        {
            name: "СЕЛФИ В ФЕВРАЛЬСКИЕ ПРАЗДНИКИ",
            bg: "#52AE32",
            img: ach9,
            active: false,
            match: "s3"
        },
        {
            name: "7 СОБРАННЫХ ЧЕЛОБРИКОВ",
            bg: "#76CAE5",
            img: ach10,
            active: false,
            match: "c7"
        },
        {
            name: "10 СОБРАННЫХ ЧЕЛОБРИКОВ",
            bg: "#F28A3D",
            img: ach11,
            active: false,
            match: "c10"
        },
        {
            name: "СЕЛФИ В ПОСЛЕДНЮЮ НЕДЕЛЮ АКЦИИ",
            bg: "#FFCC1B",
            img: ach12,
            active: false,
            match: "s4"
        },
        {
            name: "ПРОЙДЕН ТЕСТ «КАКОЙ ТЫ ЧЕЛОБРИК?»",
            bg: "#52AE32",
            img: ach13,
            active: false,
            match: "test"
        },
        {
            name: "ВСЕ СОБРАННЫЕ АЧИВКИ",
            bg: "#FFCC1B",
            img: ach14,
            active: false,
            match: "all"
        }
    ])

    return <div className="grow flex flex-col gap-4 justify-between">
        <div className="grow flex flex-col gap-4">
            <div className="font-druk font-bold text-[20px] leading-none">
                Ачивки
            </div>
            <ul className="pb-6 grid grid-cols-3 grid-rows-4 gap-x-4 gap-y-[15px]">
                {items.map((item, index) => <AchievementsName
                    key={index}
                    name={item.name}
                    bg={item.bg}
                    img={item.img}
                    active={item.active}
                />
                )}
            </ul >
        </div>
        <RedButton className="w-full">Поделиться</RedButton>
    </div>
}