'use client';

import "./globals.css";
import Header from "./components/Header";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Drink from "./images/game2/drink.png";
import Burger from "./images/game2/burger.png";
import Potato from "./images/game2/potato.png";
import Spoon from "./images/game2/spoon.png";
import Shovel from "./images/game2/shovel.png";
import Pan from "./images/game2/pan.png";
import DrinkClick from "./images/game2/drinkClick.png";
import BurgerClick from "./images/game2/burgerClick.png";
import PotatoClick from "./images/game2/potatoClick.png";
import SpoonClick from "./images/game2/spoonClick.png";
import ShovelClick from "./images/game2/shovelClick.png";
import vladbk from "./images/vladbk.png";
import PanClick from "./images/game2/panClick.png";
import win1 from './images/win1.png'
import win2 from './images/win2.png'
import gameover1 from './images/gameover1.png'
import gameover2 from './images/gameover2.png'
import success from './images/common.png'
import rulesImg from './images/rulesImg.png';
import gamesImg from './images/gamesImg.png';
import pair1 from './images/game1/1.png';
import pair2 from './images/game1/2.png';
import pair3 from './images/game1/3.png';
import pair4 from './images/game1/4.png';
import pair5 from './images/game1/5.png';
import pair6 from './images/game1/6.png';
import pair7 from './images/game1/7.png';
import pair8 from './images/game1/8.png';
import pair9 from './images/game1/9.png';
import pair10 from './images/game1/10.png';
import cardBack from './images/pairClose.png';
import awardsImg from './images/awardsImg.png';
import vladking from './images/vladking.png'
import vlad from './images/vlad.png'
import rivi from './images/rivi.png'
import vladworker from './images/vladworker.png'
import vladpoliceman from './images/vladpoliceman.png'
import a4clown from './images/a4clown.png'
import rivi2 from './images/rivi2.png'
import lamason from './images/lamason.png'
import vladprison from './images/vladprison.png'
import mark from './images/mark.png'
import ach1 from './images/Achievements/ach1.png'
import ach2 from './images/Achievements/ach2.png'
import ach3 from './images/Achievements/ach3.png'
import ach4 from './images/Achievements/ach4.png'
import ach5 from './images/Achievements/ach5.png'
import ach6 from './images/Achievements/ach6.png'
import ach7 from './images/Achievements/ach7.png'
import ach8 from './images/Achievements/ach8.png'
import ach9 from './images/Achievements/ach9.png'
import ach10 from './images/Achievements/ach10.png'
import ach11 from './images/Achievements/ach11.png'
import ach12 from './images/Achievements/ach12.png'
import ach13 from './images/Achievements/ach13.png'
import ach14 from './images/Achievements/ach14.png'
import ach1Close from './images/Achievements/ach1Close.png'
import ach2Close from './images/Achievements/ach2Close.png'
import ach3Close from './images/Achievements/ach3Close.png'
import ach4Close from './images/Achievements/ach4Close.png'
import ach5Close from './images/Achievements/ach5Close.png'
import ach6Close from './images/Achievements/ach6Close.png'
import ach7Close from './images/Achievements/ach7Close.png'
import ach8Close from './images/Achievements/ach8Close.png'
import ach9Close from './images/Achievements/ach9Close.png'
import ach10Close from './images/Achievements/ach10Close.png'
import ach11Close from './images/Achievements/ach11Close.png'
import ach12Close from './images/Achievements/ach12Close.png'
import ach13Close from './images/Achievements/ach13Close.png'
import ach14Close from './images/Achievements/ach14Close.png'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  useEffect(() => {
    (new Image()).src = DrinkClick.src;
    (new Image()).src = PotatoClick.src;
    (new Image()).src = BurgerClick.src;
    (new Image()).src = ShovelClick.src;
    (new Image()).src = PanClick.src;
    (new Image()).src = SpoonClick.src;
    (new Image()).src = Pan.src;
    (new Image()).src = Spoon.src;
    (new Image()).src = Potato.src;
    (new Image()).src = Shovel.src;
    (new Image()).src = Drink.src;
    (new Image()).src = Burger.src;
    (new Image()).src = vladbk.src;
    (new Image()).src = win1.src;
    (new Image()).src = win2.src;
    (new Image()).src = gameover1.src;
    (new Image()).src = gameover2.src;
    (new Image()).src = success.src;
    (new Image()).src = rulesImg.src;
    (new Image()).src = gamesImg.src;
    (new Image()).src = pair1.src;
    (new Image()).src = pair2.src;
    (new Image()).src = pair3.src;
    (new Image()).src = pair4.src;
    (new Image()).src = pair5.src;
    (new Image()).src = pair6.src;
    (new Image()).src = pair7.src;
    (new Image()).src = pair8.src;
    (new Image()).src = pair9.src;
    (new Image()).src = pair10.src;
    (new Image()).src = cardBack.src;
    (new Image()).src = awardsImg.src;
    (new Image()).src = vladking.src;
    (new Image()).src = vlad.src;
    (new Image()).src = rivi.src;
    (new Image()).src = vladworker.src;
    (new Image()).src = vladpoliceman.src;
    (new Image()).src = a4clown.src;
    (new Image()).src = rivi2.src;
    (new Image()).src = lamason.src;
    (new Image()).src = vladprison.src;
    (new Image()).src = mark.src;
    (new Image()).src = ach1.src;
    (new Image()).src = ach2.src;
    (new Image()).src = ach3.src;
    (new Image()).src = ach4.src;
    (new Image()).src = ach5.src;
    (new Image()).src = ach6.src;
    (new Image()).src = ach7.src;
    (new Image()).src = ach8.src;
    (new Image()).src = ach9.src;
    (new Image()).src = ach10.src;
    (new Image()).src = ach11.src;
    (new Image()).src = ach12.src;
    (new Image()).src = ach13.src;
    (new Image()).src = ach14.src;
    (new Image()).src = ach1Close.src;
    (new Image()).src = ach2Close.src;
    (new Image()).src = ach3Close.src;
    (new Image()).src = ach4Close.src;
    (new Image()).src = ach5Close.src;
    (new Image()).src = ach6Close.src;
    (new Image()).src = ach7Close.src;
    (new Image()).src = ach8Close.src;
    (new Image()).src = ach9Close.src;
    (new Image()).src = ach10Close.src;
    (new Image()).src = ach11Close.src;
    (new Image()).src = ach12Close.src;
    (new Image()).src = ach13Close.src;
    (new Image()).src = ach14Close.src;

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Telegram WebApp SDK загружен");

      if (window.Telegram?.WebApp) {
        console.log(window.Telegram)
        // const tg = window.Telegram.WebApp;
        // tg.expand(); // Разворачиваем WebApp на весь экран
        // tg.enableClosingConfirmation(); // Включаем подтверждение выхода
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <html lang="ru">
      <body
        className={`font-sans text-[#1e1f1f] bg-white`}
      >
        <div className=" min-w-[375px] max-w-[475px] mx-auto relative flex flex-col min-h-screen">
          <Header />
          <div className={`container ${pathname.indexOf("/pop-burgers") > -1 ? `` : `py-5`} flex flex-col grow`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}