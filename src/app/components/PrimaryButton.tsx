type PrimaryButtonProps = {
  children: any,
  className?: string,
  onClick?: Function
}

export default ({ children, className, ...props }: PrimaryButtonProps) => {
  return <button className={`font-flame font-medium bg-[#f5ebdc] hover:text-[#f5ebdc] hover:bg-[#502314] transition active:top-px relative rounded-lg px-3 py-4 h-16 flex justify-center items-center text-[#502314] leading-none ${className ?? ''}`}>
    <span>{children}</span>
  </button>
}
