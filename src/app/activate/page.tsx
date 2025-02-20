'use client'

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
import mark from '../images/mark.png'
import NameBrick from '../components/NameBrick';
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

type ChelobrickProps = {
    name: string
    bg: string
    img: StaticImageData
    rows: number
    active: boolean
    match: string
}

export default function Activate() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://a4-box.ru/profile/chelobriks', { method: "POST", });
                const json = await response.json();
                if (json.status === "Success") {
                    setItems((prev) => {
                        const c = [...prev]
                        for (const item of c) {
                            if (json.chelobriks.indexOf(item.match) > -1) {
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

    const [items, setItems] = useState<ChelobrickProps[]>([
        {
            rows: 2,
            name: "КОРОЛЬ ВЛАД",
            bg: "#FFCC1B",
            img: vladking,
            active: false,
            match: "Король Влад!"
        },
        {
            rows: 1,
            name: "ВЛАД",
            bg: "#76CAE5",
            img: vlad,
            active: false,
            match: "Влад!"
        },
        {
            rows: 1,
            name: "РИВИ В БУРГЕР КИНГ",
            bg: "#76CAE5",
            img: rivi,
            active: false,
            match: "Риви в Бургер Кинге!"
        },
        {
            rows: 1,
            name: "РАБОТНИК ВЛАД",
            bg: "#76CAE5",
            img: vladworker,
            active: false,
            match: "Работник Влад!"
        },
        {
            rows: 1,
            name: "ВЛАД ПОЛИЦЕЙСКИЙ",
            bg: "#76CAE5",
            img: vladpoliceman,
            active: false,
            match: "Влад полицейский!"
        },
        {
            rows: 1,
            name: "КЛОУН-А4",
            bg: "#76CAE5",
            img: a4clown,
            active: false,
            match: "Клоун-А4!"
        },
        {
            rows: 1,
            name: "КРАСОТКА РИВИ",
            bg: "#76CAE5",
            img: rivi2,
            active: false,
            match: "Красотка Риви!"
        },
        {
            rows: 2,
            name: "ВЛАД ЗАКЛЮЧЕННЫЙ",
            bg: "#76CAE5",
            img: vladprison,
            active: false,
            match: "Влад заключенный!"
        },
        {
            rows: 1,
            name: "ЛАМА-СЫН",
            bg: "#76CAE5",
            img: lamason,
            active: false,
            match: "Лама-сын!"
        },
        {
            rows: 1,
            name: "МАРК",
            bg: "#76CAE5",
            img: mark,
            active: false,
            match: "Марк!"
        }
    ])

    return (
        <>
            <div className="w-[278px] text-[#1e1f1f] text-xl font-bold font-druk leading-none mb-[10px] ">Загружай в&nbsp;наш чат селфи&#8209;фото с&nbsp;челобриком, открывай крутые ачивки и&nbsp;получай призы!</div>
            <div className="w-[266px] h-10 text-[#1e1f1f] font-medium leading-tight">Главное, чтобы на&nbsp;фотографии тебя с&nbsp;челобриком было хорошо видно!</div>
            <ul className="mt-[33px] grid grid-cols-3 grid-rows-4 gap-x-[16px] gap-y-[14.5px] mb-[20px]">
                {items.map((item, index) => <NameBrick
                    key={index}
                    rows={item.rows}
                    name={item.name}
                    bg={item.bg}
                    img={item.img}
                    active={item.active}
                />
                )}
            </ul >
            <RedButton className="w-full">Загрузить фото</RedButton>
        </>
    )
}