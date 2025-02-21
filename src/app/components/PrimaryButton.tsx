import React from 'react';
type PrimaryButtonProps = {
  children: React.ReactNode; // Use React.ReactNode for children
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Use a specific function signature
  disabled?: boolean
};

const PrimaryButton = ({ children, className, ...props }: PrimaryButtonProps) => {
  return <button {...props} className={`font-flame font-medium bg-[#f5ebdc] hover:text-[#f5ebdc] hover:bg-[#502314] transition active:top-px relative rounded-lg px-3 py-4 h-16 flex justify-center items-center text-[#502314] leading-none  disabled:opacity-50 ${className ?? ''} `}>
    <span>{children}</span>
  </button>
}
export default PrimaryButton