type OrangeButtonProps = {
    children: any,
    className?: string,
    onClick?: Function
}

export default ({ children, className, ...props }: OrangeButtonProps) => {
    return <button className={`font-flame font-regular bg-[#FFCC1B] hover:text-[#FFCC1B] hover:bg-[#502314] transition active:top-px relative rounded-lg px-3 py-4 h-16 flex justify-center items-center text-[#502314] mt-[10px] className="p-4  text-center text-[24px]   leading-tight items-center" ${className ?? ''}`}>
        <span>{children}</span>
    </button>
}