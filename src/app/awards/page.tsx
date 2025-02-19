import awardsImg from '../images/awardsImg.png';

export default function Awards() {
    return <>
        <div className="w-[292px] text-[#1e1f1f] text-[20px] font-bold font-druk leading-none mb-5">
            Призы, которые ты можешь получить за&nbsp;челобриков:
        </div>
        <div>
            <div className="mb-3 relative">
                <svg className="rounded-lg" viewBox="0 0 298 326" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0,24 a8,8 0 0 1 8,-8 a8,8 0 0 0 8,-8 a8,8 0 0 1 8,-8 h62 a8,8 0 0 1 8,8 a8,8 0 0 0 8,8 a8,8 0 0 0 8,-8 a8,8 0 0 1 8,-8 h62 a8,8 0 0 1 8,8 a8,8 0 0 0 8,8 a8,8 0 0 0 8,-8 a8,8 0 0 1 8,-8 h62 a8,8 0 0 1 8,8 a8,8 0 0 0 8,8 a8,8 0 0 1 8,8 v318 a8,8 0 0 1 -8,8 h-282 a8,8 0 0 1 -8,-8 z" fill="#FFCC1B" />
                </svg>
                <div className="absolute top-[11px] leading-none px-[19px] py-4">
                    <div className="font-bold text-[20px]">🍔 1 челобрик </div>
                    <div className="mb-4">промокод со&nbsp;скидкой на&nbsp;А4 Бокс;</div>
                    <div className="font-bold text-[20px] ">🎁 3 разных челобрика </div>
                    <div className="mb-4">доступ к&nbsp;участию в&nbsp;розыгрыше сертификатов в&nbsp;&quot;А4 Шоп&quot; на&nbsp;1500 ₽;</div>
                    <div className="font-bold text-[20px]">🎒5 разных челобриков </div>
                    <div className="mb-4">доступ к участию в&nbsp;розыгрыше фирменных рюкзаков с&nbsp;автографом Влада&nbsp;А4;</div>
                    <div className="font-bold text-[20px]">🚘 7 разных челобриков
                        или все собранные ачивки</div>
                    <div className="mb-4">доступ к розыгрышу конструкторов &quot;Ресторан Бургер Кинг&quot; и&nbsp;&quot;Вопперджип А4&quot;;</div>
                </div>
            </div>
            <div className="px-[19px] py-[14.5px] bg-[#FFCC1B] text-[#1E1E1E] rounded-lg leading-none mb-[13px]">
                <div className="font-bold text-[20px]">🎁 10 разных челобриков</div>
                <div>доступ к розыгрышу крутого мерч-бокса с&nbsp;подарками от&nbsp;Влада А4!</div>
            </div>
            <div className="bg-[#1E1F1F] px-6 py-3.5 w-full rounded-lg text-[#FFCC1B] leading-none">
                <div className="font-bold text-[20px]">📱 iPhone 16</div>
                <div className=" leading-none">розыгрыш проходит среди всех участников, загрузивших хотя бы одного челобрика.</div>
            </div>
            <img
                src={awardsImg.src}
                alt=""
                className="mt-[10px]"
            />
        </div>
    </>
}