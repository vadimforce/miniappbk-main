'use client'

import Game from "../components/Game";

export default function Home() {

  return (
    <div className="flex grow flex-col items-center justify-center">
      <div className="font-druk text-center mt-5 text-[#1e1f1f] text-xl font-bold leading-none">Собери <br/>съедобные<br/>предметы</div>
      <Game />
    </div>
  );
}
