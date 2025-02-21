"use client";

import { useEffect, useRef, useState } from "react";
import Burger from "../images/game2/burger.png"
import Drink from "../images/game2/drink.png"
import Spoon from "../images/game2/spoon.png"
import { StaticImageData } from "next/image";

interface GameObject {
    x: number;
    y: number;
    size: number;
    type: 'food' | 'trash';
    speed: number;
    direction: number;
    image: null | HTMLImageElement;
}

const GameCanvas = () => {
    const spoonPattern = useRef<CanvasPattern | null>(null)
    const drinkPattern = useRef<CanvasPattern | null>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [level, setLevel] = useState(1);
    const [gameRunning, setGameRunning] = useState(true);
    const objects = useRef<GameObject[]>([]);

    const restartGame = () => {
        objects.current = [];
        setScore(0);
        setLives(3);
        setLevel(1);
        setGameRunning(true);
    };

    const spawnObject = () => {
        if (canvasRef.current) {
            const newObject: GameObject = {
                x: Math.random() * (canvasRef.current.width - 60),
                y: 0,
                size: 60,
                type: Math.random() > 0.5 ? 'food' : 'trash',
                speed: 0.1 + level * 0.5,
                direction: Math.random() > 0.5 ? 0.5 : -0.5,
                image: null
            };
            let im = new Image();
            im.src = newObject.type === "food" ? Drink.src : Spoon.src
            newObject.image = im;
            objects.current = [...objects.current, newObject];
        }
    };

    const updateGame = () => {
        if (!gameRunning || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);


        if (canvasRef.current) {
            let c = canvasRef.current
            objects.current = objects.current
                .filter((obj) => obj.y < c.height)
                .map((obj) => ({
                    ...obj,
                    y: obj.y + obj.speed,
                    x: obj.x + Math.sin(obj.y / 50) * 2 * obj.direction,
                }))
        }

        objects.current.forEach((obj) => {
            if (obj.image) ctx.drawImage(obj.image, obj.x, obj.y, obj.size, obj.size);
        });
        requestAnimationFrame(updateGame)
        // setTimeout(() => requestAnimationFrame(updateGame), 1000/60);
    };

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!gameRunning || !canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        let clicked = false;

        objects.current = objects.current.filter((obj) => {
            const isClicked = x > obj.x && x < obj.x + obj.size && y > obj.y && y < obj.y + obj.size;
            if (isClicked) {
                clicked = true;
                if (obj.type === 'food') {
                    setScore((prevScore) => prevScore + 10);
                } else {
                    setLives((prevLives) => prevLives - 1);
                }
            }
            return !isClicked;
        })

        if (!clicked) {
            setScore((prevScore) => prevScore - 10);
        }

        if (lives <= 0) {
            gameOver();
        }
    };

    const gameOver = () => {
        setGameRunning(false);
    };

    const startGame = () => {
        if (!canvasRef.current) return;
        canvasRef.current.width = canvasRef.current.offsetWidth
        canvasRef.current.height = canvasRef.current.offsetHeight

        console.log(canvasRef.current.width, canvasRef.current.height)


        const interval = setInterval(spawnObject, 3000 / level);
        updateGame();

        return () => clearInterval(interval);
    };

    useEffect(() => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const spoon = new Image();
        spoon.src = Spoon.src;
        spoon.onload = () => {
            spoonPattern.current = ctx.createPattern(spoon, "no-repeat");
        };

        const drink = new Image();
        drink.src = Drink.src;
        drink.onload = () => {
            drinkPattern.current = ctx.createPattern(drink, "no-repeat");
        };
        startGame()
    }, [])

    return (
        <div className="grow flex flex-col w-full">
            <h1>🍏 Лови еду, избегай мусора 🚀</h1>
            <p>
                Очки: <span id="score">{score}</span> | Жизни: <span id="lives">{lives}</span>
            </p>
            <canvas ref={canvasRef} id="gameCanvas" className="w-calc(100%+5rem) grow -mx-10" onClick={e => handleClick(e)}></canvas>
            {!gameRunning && (
                <div className="game-over">
                    <h2>Игра окончена!</h2>
                    <p id="finalScore">Ваш счет: {score}</p>
                    <button onClick={restartGame}>Играть снова</button>
                </div>
            )}
        </div>
    );
};

export default GameCanvas