const HeaderItem = ({title, Icon}) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-10 sm:w-14 hover:text-white">
        <Icon className="h-5 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}
export default HeaderItem