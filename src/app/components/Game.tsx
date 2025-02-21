"use client";

import ShortUniqueId from 'short-unique-id';
import { useEffect, useRef, useState } from "react";

import Drink from "../images/game2/drink.png";
import Burger from "../images/game2/burger.png";
import Potato from "../images/game2/potato.png";
import Spoon from "../images/game2/spoon.png";
import Shovel from "../images/game2/shovel.png";
import Pan from "../images/game2/pan.png";
import DrinkClick from "../images/game2/drinkClick.png";
import BurgerClick from "../images/game2/burgerClick.png";
import PotatoClick from "../images/game2/potatoClick.png";
import SpoonClick from "../images/game2/spoonClick.png";
import ShovelClick from "../images/game2/shovelClick.png";
import vladbk from "../images/vladbk.png";
import PanClick from "../images/game2/panClick.png";
import { useRouter } from "next/navigation";

interface GameObject {
    x: number;
    y: number;
    size: number;
    type: "food" | "trash";
    speed: number;
    direction: number;
    image: HTMLImageElement | null;
    imageIndex: number;
    uid?: string;
}

const uid = new ShortUniqueId();

const GameCanvas = () => {
    const router = useRouter()
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const level = useRef<number>(1)
    const [timeLeft, setTimeLeft] = useState(300); // Таймер от 5 мин
    const objects = useRef<GameObject[]>([]);
    const clickedObjects = useRef<GameObject[]>([]);
    const refAnimationFrame = useRef<number | null>(null);
    const refInterval = useRef<NodeJS.Timeout | null>(null);

    // Спавн объектов
    const spawnObject = () => {
        if (canvasRef.current) {
            const foodImages = [Drink.src, Burger.src, Potato.src];
            const trashImages = [Spoon.src, Shovel.src, Pan.src];

            const isFood = Math.random() > 0.5;

            const newObject: GameObject = {
                imageIndex: Math.floor(Math.random() * (isFood ? foodImages.length : trashImages.length)),
                x: Math.random() * (canvasRef.current.width - 100),
                y: 0,
                size: 100,
                type: isFood ? "food" : "trash",
                speed: 0.5 + level.current * 0.4,
                direction: Math.random() > 0.5 ? 0.5 : -0.5,
                image: null,
            };

            const img = new Image();
            img.src = isFood ? foodImages[newObject.imageIndex] : trashImages[newObject.imageIndex];

            img.onload = () => {
                newObject.image = img;
                objects.current = [...objects.current, newObject];
            };
        }
    };

    // Обновление игры
    const updateGame = () => {
        if (!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        if (canvasRef.current) {
            const c = canvasRef.current;
            if (objects.current
                .filter((obj) => obj.y >= c.height && obj.type === "food").length) {
                setScore((prevScore) => prevScore - 10);

            }
            objects.current = objects.current
                .filter((obj) => obj.y < c.height)
                .map((obj) => ({
                    ...obj,
                    y: obj.y + obj.speed,
                    x: obj.x + Math.sin(obj.y / 50) * 2 * obj.direction,
                }));
        }

        objects.current.forEach((obj) => {
            if (obj.image) {
                ctx.drawImage(obj.image, obj.x, obj.y, obj.size, obj.size);
            }
        });

        clickedObjects.current.forEach((obj) => {
            if (obj.image) {
                ctx.drawImage(obj.image, obj.x, obj.y, obj.size, obj.size);
            }
        });

        refAnimationFrame.current = requestAnimationFrame(updateGame);

    };

    // Обработка кликов
    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (!canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        objects.current = objects.current.filter((obj) => {
            const isClicked =
                x >= obj.x && x <= obj.x + obj.size && y >= obj.y && y <= obj.y + obj.size;

            if (isClicked) {
                if (obj.type === "food") {
                    setScore((prevScore) => prevScore + 10);
                } else {
                    setLives((prevLives) => prevLives - 1);
                }

                // Замена изображения на версию с Click
                const clickedImage = new Image();
                if (obj.type === "food") {
                    const foodClickImages = [DrinkClick.src, BurgerClick.src, PotatoClick.src];
                    clickedImage.src = foodClickImages[obj.imageIndex];
                } else {
                    const trashClickImages = [SpoonClick.src, ShovelClick.src, PanClick.src];
                    clickedImage.src = trashClickImages[obj.imageIndex];
                }

                const uuid = uid.rnd();
                clickedObjects.current.push({ ...obj, image: clickedImage, uid: uuid });

                setTimeout(() => {
                    const odx = clickedObjects.current.findIndex((obj) => obj.uid === uuid);
                    clickedObjects.current.splice(odx, 1);
                }, 500);
            }

            return !isClicked;
        });
    };
    useEffect(() => {
        if (score <= -200) {
            gameOver();
        }
        else if (score >= 300) {
            gameOver("win");
        } else if (score >= 200) {
            level.current = 3;
        } else if (score >= 100) {
            level.current = 2;
        }
    }, [score])
    // Проверка на проигрыш
    useEffect(() => {
        if (lives <= 0) {
            gameOver();
        }
    }, [lives])
    // Завершение игры
    const gameOver = (result?: "win" | "lose") => {
        if(result==="win"){
            fetch('https://a4-box.ru/profile/game2', {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  initData: window.Telegram?.WebApp?.initData
                })
              });
        }
        router.push(result === "win" ? "/win2" : "/gameover2")
    };

    // Старт игры
    const startGame = () => {
        if (!canvasRef.current) return;

        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;

        refInterval.current = setInterval(spawnObject, 1000 / level.current);
        updateGame();
    };

    // Таймер обратного отсчета
    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerInterval = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(0, prevTime - 1));
        }, 1000);

        return () => clearInterval(timerInterval); // Очистка интервала при остановке игры
    }, [timeLeft]);

    // Форматирование времени
    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    useEffect(() => {
        if (!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        startGame();
        return () => {
            if (refAnimationFrame.current)
                cancelAnimationFrame(refAnimationFrame.current);
            if (refInterval.current)
                clearInterval(refInterval.current);
        };
    }, []);

    return (
        <div className="grow flex flex-col w-full">
            <canvas
                ref={canvasRef}
                id="gameCanvas"
                className="w-calc(100%+5rem) grow -mx-10"
                onClick={(e) => handleClick(e)}
            ></canvas>
            <div className="relative">
                <div className=" -mx-10  h-[17px] bg-[#d7c7b5]"></div>
            </div>
            <div className=" -mx-10 h-40 bg-[#87604f]">
                <div className=" px-4 flex items-end pb-6 justify-center gap-4 h-full">
                    <div className="relative h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3 flex-1 max-w-[150px]">
                        <div className="text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Счет</div>
                        <div className="text-center font-druk font-bold text-[17px]">{score}</div>
                        <img
                    src={vladbk.src}
                    alt=""
                    className="absolute max-w-none w-[169px] h-[147px] bottom-full mb-3 -left-3 pointer-events-none"
                />
                    </div>
                    <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3 flex-1 max-w-[150px]">
                        <div className="text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Время</div>
                        <div className="text-center font-druk font-bold text-[17px]">{formatTime(timeLeft)}</div>
                    </div>
                    <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3 flex-1 max-w-[150px]">
                        <div className="text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Уровень</div>
                        <div className="text-center font-druk font-bold text-[17px]">{level.current}</div>
                    </div>
                    <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3 flex-1 max-w-[150px]">
                        <div className="text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Жизни</div>
                        <div className="text-center font-druk font-bold text-[17px]">{lives}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCanvas;