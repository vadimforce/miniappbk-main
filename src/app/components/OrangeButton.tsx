import React from 'react';
type OrangeButtonProps = {
    children: React.ReactNode; // Use React.ReactNode for children
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Use a specific function signature
};

 const OrangeButton = ({ children, className, ...props }: OrangeButtonProps) => {
    return <button {...props} className={`font-flame font-regular bg-[#FFCC1B] hover:text-[#FFCC1B] hover:bg-[#502314] transition active:top-px relative rounded-lg px-3 py-4 h-16 flex justify-center items-center text-[#502314] mt-[10px] className="p-4  text-center text-[24px]   leading-tight items-center" ${className ?? ''}`}>
        <span>{children}</span>
    </button>
}
export default OrangeButton