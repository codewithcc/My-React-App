const HamburgerIcon = ({ open, setOpen }) => {
  const base = "h-1 w-full bg-black rounded-full transition-all ease-linear duration-150"
  const line1 = `${open ? 'rotate-45 translate-y-4' : ''} ${base}`
  const line2 = `${open ? 'opacity-0' : ''} ${base}`
  const line3 = `${open ? '-rotate-45 -translate-y-4' : ''} ${base}`

  return (
    <div className="px-4 lg:hidden" onClick={() => setOpen(!open)}>
      <div className="w-[38px] h-[32px] flex flex-col items-center justify-between">
        <span className={line1}></span>
        <span className={line2}></span>
        <span className={line3}></span>
      </div>
    </div>
  )
}

export default HamburgerIcon