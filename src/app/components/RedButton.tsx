import React from 'react';
type RedButtonProps = {
    children: React.ReactNode; // Use React.ReactNode for children
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Use a specific function signature
};

 const RedButton = ({ children, className, ...props }: RedButtonProps) => {
    return <button {...props} className={`font-flame font-regular bg-[#D62300] hover:text-[#D62300] hover:bg-[#F7F7F3] transition active:top-px relative rounded-lg px-3 py-4 h-16 flex justify-center items-center text-[#F7F7F3] mt-[10px] p-4 text-center text-[24px] leading-tight hover:outline hover:outline-4 hover:outline-[#D62300] ${className ?? ''}`}>
        <span>{children}</span>
    </button>
}
export default RedButton