'use client'

import burger from '../images/game2/burger.png'
import drink from '../images/game2/drink.png'
import potato from '../images/game2/potato.png'
import pan from '../images/game2/pan.png'
import spoon from '../images/game2/spoon.png'
import shovel from '../images/game2/shovel.png'
import vladbk from '../images/vladbk.png'
import React, { useState, useEffect, useRef } from 'react';

// Массивы съедобных и несъедобных предметов (замените на свои изображения)
const edibleItems = [
    { src: burger, id: 1 },
    { src: drink, id: 2 },
    { src: potato, id: 3 },
    // ... другие съедобные предметы
];

const inedibleItems = [
    { src: pan, id: 4 },
    { src: spoon, id: 5 },
    { src: shovel, id: 6 },
    // ... другие несъедобные предметы
];

export default function Home() {
    const [items, setItems] = useState<any[]>([]); // Предметы на экране
    const [score, setScore] = useState(0); // Счет
    const [lives, setLives] = useState(3); // Жизни
    const [level, setLevel] = useState(1); // Уровень
    const [isGameOver, setIsGameOver] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);


    const gameAreaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!isGameStarted) return;
  
      let interval: any;
      let spawnInterval: any;
  
      const spawnItems = () => {
        const isEdible = Math.random() < 0.7; // 70% съедобных
        const newItem = {
          ...((isEdible ? edibleItems : inedibleItems)[
            Math.floor(Math.random() * (isEdible ? edibleItems.length : inedibleItems.length))
          ]),
          x: Math.random() * (gameAreaRef.current?.offsetWidth ?? 500 - 50),
          y: 0,
          speed: level * 2 + Math.random() * 2, // Скорость падения
        };
        setItems((prevItems) => [...prevItems, { ...newItem, id: newItem.id + Date.now() }]); // Использование уникального id
      };
  
      const updateItems = () => {
        setItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            y: item.y + item.speed, // Движение только по оси Y
          }))
        );
      };
  
      const checkCollisions = () => {
        setItems((prevItems) =>
          prevItems.filter((item) => {
            if (item.y > (gameAreaRef.current?.offsetHeight ?? 700)) {
              if (edibleItems.find((edible) => edible.id === item.id)) {
                setScore((prevScore) => prevScore - 10); // Штраф за пропуск съедобного
              }
              return false;
            }
            return true;
          })
        );
      };
  
      const checkLevel = () => {
        if (score >= level * 20) {
          setLevel((prevLevel) => prevLevel + 1);
        }
      };
  
      spawnInterval = setInterval(spawnItems, 1000 / (level + 2)); // Увеличение скорости появления
      interval = setInterval(() => {
        updateItems();
        checkCollisions();
        checkLevel();
      }, 50);
  
      return () => {
        clearInterval(interval);
        clearInterval(spawnInterval);
      };
    }, [level, isGameStarted, score]);
  
    const handleItemClick = (itemId: number) => {
      if (isGameOver) return;
  
      const clickedItem = items.find((item) => item.id === itemId);
  
      if (clickedItem) {
        if (edibleItems.find((edible) => edible.id === itemId)) {
          setScore((prevScore) => prevScore + 10);
        } else {
          setLives((prevLives) => {
            const newLives = prevLives - 1;
            if (newLives <= 0) {
              setIsGameOver(true);
            }
            return newLives;
          });
        }
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      }
    };
  
    const startGame = () => {
      setIsGameStarted(true);
      setScore(0);
      setLives(3);
      setLevel(1);
      setIsGameOver(false);
      setItems([]); // Очистка предметов при запуске новой игры
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {!isGameStarted ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={startGame}
          >
            Начать игру
          </button>
        ) : (
          <>
            <div className="flex justify-between w-full p-4">
              <div>Счет: {score}</div>
              <div>Жизни: {lives}</div>
              <div>Уровень: {level}</div>
            </div>
            <div
              ref={gameAreaRef}
              className="relative w-96 h-96 border border-gray-400 overflow-hidden"
            >
              {items.map((item) => (
                <img
                  key={item.id}  // Используем уникальный ID для ключа
                  src={item.src}
                  alt="item"
                  className="absolute"
                  style={{
                    left: item.x,
                    top: item.y,
                    width: '50px',
                    cursor: 'pointer',
                    userSelect: 'none',
                    pointerEvents: 'auto', // Убедитесь, что клик по элементу работает
                  }}
                  onClick={() => handleItemClick(item.id)}
                />
              ))}
            </div>
            {isGameOver && (
              <div className="mt-4 text-red-500 font-bold">
                Игра окончена! Счет: {score}
              </div>
            )}
          </>
        )}
      </div>
    );
  }
// return <div className="relative">
//     <div className=" grid items-center -mb-[5px] justify-center grid-cols-3 grid-rows-1 gap-x-[8px]">
//         <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] py-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Счет</div></div>
//         <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] py-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Время</div></div>
//         <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] py-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Уровень</div></div>
//     </div>
//     <div>

//     </div>
//     <div className="-mx-10 w-[390px] mt-[90px] h-[17px] bg-[#d7c7b5]">
//         <img
//             src={vladbk.src}
//             alt=""
//             className="absolute top-[80%] left-[-32px] w-[169.85px] h-[147.54px]"
//         />
//     </div>
//     <div className="-mx-10 w-[390px] h-32 bg-[#87604f]"></div>
// </div>
// }
