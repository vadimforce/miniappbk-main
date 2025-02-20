'use client';

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
import { useEffect, useRef, useState } from "react";
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

    const video = useRef<HTMLVideoElement>(null)
    const canvas = useRef<HTMLCanvasElement>(null)
    const stream = useRef<MediaProvider>(null)
    const [processSelfie, setProcessSelfie] = useState<boolean>(false)
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

    const takeSelfie = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        setItems([])

        if (canvas.current && video.current) {
            const context = canvas.current.getContext('2d');
            canvas.current.width = video.current.videoWidth;
            canvas.current.height = video.current.videoHeight;
            if (context) {
                context.drawImage(video.current, 0, 0, canvas.current.width, canvas.current.height);
                video.current.pause();
                try {
                    const response = await fetch('https://a4-box.ru/profile/photo', {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            photo: canvas.current.toDataURL('image/jpeg'),
                            initData: window.Telegram?.WebApp?.initData
                        })
                    });
                    const json = await response.json();
                    console.log(json)
                    // if (json.status === "Success") {
                    //     setItems((prev) => {
                    //         const c = [...prev]
                    //         for (const item of c) {
                    //             if (json.chelobriks.indexOf(item.match) > -1) {
                    //                 item.active = true
                    //             }
                    //         }
                    //         return c
                    //     })
                    // }
                } catch (error) {
                    console.error("Error:", error);
                }

            }
        }

        setProcessSelfie(false)

    }

    const removeStream = () => {
        if (video.current && video.current.srcObject) {
            const tracks = (video.current.srcObject as MediaStream).getTracks();
            tracks.forEach((track) => {
                track.stop()
            });
            video.current.srcObject = null;
            stream.current = null;
        }
    }

    const setCamera = async () => {
        removeStream();
        try {
            stream.current = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user"
                }
            })
            if (video.current) {
                video.current.srcObject = stream.current;
                video.current.play();
            }
        } catch (error) {
            console.error(error)
        } finally {

        }
    }

    useEffect(() => {
        if (processSelfie) setCamera()
        else removeStream()
        return () => {
            removeStream()
        }
    }, [processSelfie])

    return (
        <div className="relative grow flex flex-col justify-between gap-4">
            <div className="grow flex flex-col gap-4">
                <div className="text-xl font-bold font-druk leading-none ">Загружай в&nbsp;наш чат селфи&#8209;фото с&nbsp;челобриком, открывай крутые ачивки и&nbsp;получай призы!</div>
                <div className="font-medium leading-[120%]">Главное, чтобы на&nbsp;фотографии тебя с&nbsp;челобриком было хорошо видно!</div>
                <ul className="grid grid-cols-3 grid-rows-4 gap-x-4 gap-y-[15px] pb-3">
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
            </div>
            <RedButton className="w-full" onClick={e => {
                e.preventDefault()
                setProcessSelfie(true)
            }}>Загрузить фото</RedButton>
            <div className={`fixed inset-0 ${processSelfie ? `` : `hidden`}`}>
                <video ref={video} className="bg-black w-full h-full"></video>
                <canvas ref={canvas} className="hidden" ></canvas>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[59px] h-[59px] shrink-0 flex items-center justify-center rounded-full border-4 border-white" onClick={e => takeSelfie(e)}>
                    <div className="w-[45px] h-[45px] bg-white rounded-full border-4"></div>
                </button>
            </div>
        </div>
    )
}