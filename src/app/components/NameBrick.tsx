type NameBrickProps = {
  children: any,
  className?: string,
  onClick?: Function
}

export default ({ children, className, ...props }: NameBrickProps) => {
  return <div className={`absolute top-[74px] left-[22px] flex justify-center" ${className ?? ''}`}>
    <svg width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9769 0.81978L17.8845 15.5293L12.1548 13.8973L18.9769 0.81978Z" fill="white" />
      <rect x="0.953613" y="13.8212" width="65.108" height="18.042" rx="1.17665" transform="rotate(-7.69435 0.953613 13.8212)" fill="white" />
    </svg>
    <span className={`absolute bottom-1.5 rotate-[-8deg] font-druk font-bold text-[4.986px] text-center text-[#1e1f1f] leading-[5.783px] ${className ?? ''}`}><span>{children}</span></span>
  </div>
}
