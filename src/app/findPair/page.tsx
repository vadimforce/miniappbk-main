'use client'

import { useState, useEffect } from 'react';

import pair1 from '../images/game1/1.png';
import pair2 from '../images/game1/2.png';
import pair3 from '../images/game1/3.png';
import pair4 from '../images/game1/4.png';
import pair5 from '../images/game1/5.png';
import pair6 from '../images/game1/6.png';
import pair7 from '../images/game1/7.png';
import pair8 from '../images/game1/8.png';
import pair9 from '../images/game1/9.png';
import pair10 from '../images/game1/10.png';
import cardBack from '../images/pairClose.png';
import OrangeButton from '../components/OrangeButton';

// Тип для карточки
type Card = {
  id: number;
  img: string;
  isOpen: boolean;
  isMatched: boolean;
};

// Уровни игры
const levels = [
  { cards: 4, pairs: 2, cardsPerRow: 2 }, // Уровень 1
  { cards: 8, pairs: 4, cardsPerRow: 4 }, // Уровень 2
  { cards: 12, pairs: 6, cardsPerRow: 3 }, // Уровень 3
  { cards: 16, pairs: 8, cardsPerRow: 4 }, // Уровень 4
  { cards: 20, pairs: 10, cardsPerRow: 4 }, // Уровень 5
];

export default function Home() {
  // Все картинки
  const allImages = [
    pair1,
    pair2,
    pair3,
    pair4,
    pair5,
    pair6,
    pair7,
    pair8,
    pair9,
    pair10,
  ];

  // Состояние игры
  const [currentLevel, setCurrentLevel] = useState(0); // Текущий уровень
  const [cards, setCards] = useState<Card[]>([]); // Карточки
  const [openCards, setOpenCards] = useState<number[]>([]); // Открытые карточки
  const [score, setScore] = useState(0); // Счет
  const [isWin, setIsWin] = useState(false); // Победа
  const [timeLeft, setTimeLeft] = useState(60); // Таймер
  const [isGameOver, setIsGameOver] = useState(false); // Конец игры

  // Выбираем случайные картинки для уровня
  const getRandomImages = (count: number) => {
    const shuffled = allImages.sort(() => Math.random() - 0.5); // Перемешиваем массив
    return shuffled.slice(0, count); // Берем нужное количество картинок
  };

  // Создаем карточки для уровня
  const createCards = (level: number) => {
    const { pairs: pairCount } = levels[level];
    const selectedImages = getRandomImages(pairCount); // Выбираем случайные картинки
    const pairs = [...selectedImages, ...selectedImages]; // Дублируем картинки для пар
    return pairs
      .map((img, index) => ({
        id: index,
        img: img.src,
        isOpen: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5); // Перемешиваем карточки
  };

  // Инициализация игры
  useEffect(() => {
    setCards(createCards(currentLevel));
    setTimeLeft(60); // Сброс таймера
    setIsWin(false);
    setIsGameOver(false);
    setScore(0); // Сброс счета
  }, [currentLevel]);

  // Таймер
  useEffect(() => {
    if (timeLeft === 0 || isWin) {
      setIsGameOver(timeLeft === 0);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Обработчик клика по карточке
  const handleCardClick = (index: number) => {
    if (cards[index].isOpen || cards[index].isMatched || isGameOver) return;

    // Открываем карточку
    const newCards = [...cards];
    newCards[index].isOpen = true;
    setCards(newCards);

    // Добавляем карточку в список открытых
    const newOpenCards = [...openCards, index];
    setOpenCards(newOpenCards);

    // Если открыто две карточки, проверяем на совпадение
    if (newOpenCards.length === 2) {
      const [firstIndex, secondIndex] = newOpenCards;

      if (cards[firstIndex].img === cards[secondIndex].img) {
        // Если карточки совпали
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setCards(newCards);
        setScore((prev) => prev + 1); // Увеличиваем счет за пару
      } else {
        // Если карточки не совпали, закрываем их через 1 секунду
        setTimeout(() => {
          newCards[firstIndex].isOpen = false;
          newCards[secondIndex].isOpen = false;
          setCards(newCards);
        }, 300);
      }

      // Сбрасываем открытые карточки
      setOpenCards([]);
    }

    // Проверяем, все ли карточки совпали
    if (newCards.every((card) => card.isMatched)) {
      if (currentLevel === levels.length - 1) {
        setIsWin(true); // Последний уровень завершен
      } else {
        setTimeout(() => {
          setCurrentLevel((prev) => prev + 1);
        }, 500)
        // Переход на следующий уровень
      }
    }
  };

  // Сброс игры
  const resetGame = () => {
    setCurrentLevel(0);
    setCards(createCards(0));
    setOpenCards([]);
    setScore(0);
    setIsWin(false);
    setTimeLeft(60);
    setIsGameOver(false);
  };

  // Форматирование времени
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <div className=" flex grow flex-col gap-8 pb-10 justify-between">
    <div className="flex flex-col grow gap-8">
      <div className="text-[#1e1f1f] text-center text-[20px] font-bold font-druk leading-none">
        Найди двух<br />одинаковых<br />челобриков
      </div>
      <div
        className="grid items-center justify-center w-auto gap-4"
        style={{
          gridTemplateColumns: `repeat(${levels[currentLevel].cardsPerRow}, 1fr)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-full cursor-pointer transition-transform duration-500 ease-in-out ${card.isOpen || card.isMatched ? ' rotate-0' : ' rotate-y-180'
              }`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={
                card.isOpen || card.isMatched
                  ? card.img // Если карточка открыта или пара найдена, показываем изображение
                  : cardBack.src // Иначе показываем рубашку
              }
              alt=""
              className="w-full object-cover transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

    </div>
    <div>

      {/* Сообщения */}
      {isWin && (
        <div className="text-[#1e1f1f] text-center text-[20px] font-bold font-druk leading-none">
          Поздравляем! Ты прошёл игру!
        </div>
      )}
      {isGameOver && (
        <div className="text-[#1e1f1f] text-center text-[20px] font-bold font-druk leading-none">
          Время вышло! Игра окончена.
        </div>
      )}

      {/* Кнопка сброса */}
      <OrangeButton
        onClick={resetGame}
        className="w-full mt-5">
        Начать заново
      </OrangeButton>
    </div>
    <div className=" grid items-center justify-center grid-cols-3 grid-rows-1 gap-x-4">
      <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Счет</div><div className=" text-center font-druk font-bold text-[17px]">{score}</div></div>
      <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Время</div><div className=" text-center font-druk font-bold text-[17px]">{formatTime(timeLeft)}</div></div>
      <div className="h-[60px] bg-[#f5ebdc] rounded-lg border-4 border-[#decaad] pt-3"><div className=" text-center text-[#1e1f1f] text-[10px] font-bold font-druk leading-none">Уровень</div><div className=" text-center font-druk font-bold text-[17px]">{currentLevel + 1}</div></div>
    </div>
  </div>
}
