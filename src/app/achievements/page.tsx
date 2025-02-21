'use client'

import RedButton from "../components/RedButton";
import ach1 from '../images/Achievements/ach1.png'
import ach2 from '../images/Achievements/ach2.png'
import ach3 from '../images/Achievements/ach3.png'
import ach4 from '../images/Achievements/ach4.png'
import ach5 from '../images/Achievements/ach5.png'
import ach6 from '../images/Achievements/ach6.png'
import ach7 from '../images/Achievements/ach7.png'
import ach8 from '../images/Achievements/ach8.png'
import ach9 from '../images/Achievements/ach9.png'
import ach10 from '../images/Achievements/ach10.png'
import ach11 from '../images/Achievements/ach11.png'
import ach12 from '../images/Achievements/ach12.png'
import ach13 from '../images/Achievements/ach13.png'
import ach14 from '../images/Achievements/ach14.png'
import ach1Close from '../images/Achievements/ach1Close.png'
import ach2Close from '../images/Achievements/ach2Close.png'
import ach3Close from '../images/Achievements/ach3Close.png'
import ach4Close from '../images/Achievements/ach4Close.png'
import ach5Close from '../images/Achievements/ach5Close.png'
import ach6Close from '../images/Achievements/ach6Close.png'
import ach7Close from '../images/Achievements/ach7Close.png'
import ach8Close from '../images/Achievements/ach8Close.png'
import ach9Close from '../images/Achievements/ach9Close.png'
import ach10Close from '../images/Achievements/ach10Close.png'
import ach11Close from '../images/Achievements/ach11Close.png'
import ach12Close from '../images/Achievements/ach12Close.png'
import ach13Close from '../images/Achievements/ach13Close.png'
import ach14Close from '../images/Achievements/ach14Close.png'
import AchievementsName from '../components/AchievementsName';
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";


type AchievementsProps = {
    name: string
    bg: string
    img: StaticImageData
    imgClose: StaticImageData
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
                    body: JSON.stringify({
                        initData: window.Telegram?.WebApp?.initData
                    }),
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
            imgClose: ach1Close,
            active: false,
            match: "c1"
        },
        {
            name: "ПЕРВАЯ СЫГРАННАЯ МИНИ-ИГРА",
            bg: "#76CAE5",
            img: ach2,
            imgClose: ach2Close,
            active: false,
            match: "g1"
        },
        {
            name: "НАЙДЕН ЧЕЛОБРИК В&nbsp;КОРОНЕ",
            bg: "#FFCC1B",
            img: ach3,
            imgClose: ach3Close,
            active: false,
            match: "crown"
        },
        {
            name: "3 СОБРАННЫХ ЧЕЛОБРИКА",
            bg: "#EA5045",
            img: ach4,
            imgClose: ach4Close,
            active: false,
            match: "c3"
        },
        {
            name: "2 СЫГРАННЫХ МИНИ-ИГР",
            bg: "#52AE32",
            img: ach5,
            imgClose: ach5Close,
            active: false,
            match: "g2"
        },
        {
            name: "5 СОБРАННЫХ ЧЕЛОБРИКОВ",
            bg: "#76CAE5",
            img: ach6,
            imgClose: ach6Close,
            active: false,
            match: "c5"
        },
        {
            name: "СЕЛФИ НА КАНИКУЛАХ",
            bg: "#F28A3D",
            img: ach7,
            imgClose: ach7Close,
            active: false,
            match: "s1"
        },
        {
            name: "СЕЛФИ В МАРТОВСКИЕ ПРАЗДНИКИ",
            bg: "#EA5045",
            img: ach8,
            imgClose: ach8Close,
            active: false,
            match: "s2"
        },
        {
            name: "СЕЛФИ В ФЕВРАЛЬСКИЕ ПРАЗДНИКИ",
            bg: "#52AE32",
            img: ach9,
            imgClose: ach9Close,
            active: false,
            match: "s3"
        },
        {
            name: "7 СОБРАННЫХ ЧЕЛОБРИКОВ",
            bg: "#76CAE5",
            img: ach10,
            imgClose: ach10Close,
            active: false,
            match: "c7"
        },
        {
            name: "10 СОБРАННЫХ ЧЕЛОБРИКОВ",
            bg: "#F28A3D",
            img: ach11,
            imgClose: ach11Close,
            active: false,
            match: "c10"
        },
        {
            name: "СЕЛФИ В ПОСЛЕДНЮЮ НЕДЕЛЮ АКЦИИ",
            bg: "#FFCC1B",
            img: ach12,
            imgClose: ach12Close,
            active: false,
            match: "s4"
        },
        {
            name: "ПРОЙДЕН ТЕСТ «КАКОЙ ТЫ ЧЕЛОБРИК?»",
            bg: "#52AE32",
            img: ach13,
            imgClose: ach13Close,
            active: false,
            match: "test"
        },
        {
            name: "ВСЕ СОБРАННЫЕ АЧИВКИ",
            bg: "#FFCC1B",
            img: ach14,
            imgClose: ach14Close,
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
                    imgClose={item.imgClose}
                    active={item.active}
                />
                )}
            </ul >
        </div>
        <Link href={`https://t.me/share/url?text=${encodeURI(`Я уже начал собирать ачивки с челобриками, присоединяйся ко мне: https://t.me/A4Box_bot`)}`} target="_blank"><RedButton className="w-full">Поделиться</RedButton></Link>
    </div>
}