import Image from 'next/image';
import awardsImg from '../images/awardsImg.png';
export default function Awards() {
    return <>
        <div className="w-[292px] text-[#1e1f1f] text-[20px] font-bold font-druk leading-none mb-5">
            Призы, которые ты можешь получить за&nbsp;челобриков:
        </div>
        <div>
            <div className="mb-3 relative">
                <svg width="310" height="310" viewBox="0 0 310 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="310" height="310" rx="8" fill="#FFCC1B" />
                </svg>
                <div className="absolute text-red-500 bottom-0">
                    124124
                </div>
            </div>
            <div className="h-20 w-full bg-[#FFCC1B] text-[#1E1E1E] rounded-lg mb-[13px]">
                <span>🎁 10 разных челобриков</span><br />
                <span>доступ к розыгрышу крутого мерч-бокса с подарками от Влада А4!</span>
            </div>
            <div className="bg-[#1E1F1F] px-[14] w-full h-[95px] rounded-lg text-[#FFCC1B]">
                <span className="">📱 iPhone 16</span><br />
                <span className="text-[16px] leading-none">розыгрыш проходит среди всех участников, загрузивших хотя бы одного челобрика.</span>
            </div>
            <Image
                src={awardsImg}
                alt="awards"
                className="mt-[10px]"
            />
        </div>
    </>
}