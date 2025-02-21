import React from 'react';
type OrangeButtonProps = {
    children: React.ReactNode; // Use React.ReactNode for children
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Use a specific function signature
    disabled?: boolean
};

 const OrangeButton = ({ children, className, ...props }: OrangeButtonProps) => {
    return <button {...props} className={`font-flame font-regular bg-[#FFCC1B] hover:text-[#FFCC1B] hover:bg-[#502314] transition active:top-px relative rounded-lg px-1 h-16 flex justify-center items-center text-[#502314] p-4  text-normal text-[24px] leading-none items-center  disabled:opacity-50 ${className ?? ''}`}>
        <span>{children}</span>
    </button>
}
export default OrangeButton