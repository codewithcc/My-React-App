const HamburgerIcon = ({ open, setOpen }) => {
  const base = "h-1 w-full bg-black rounded-full transition-all ease-linear duration-150"
  const lines = [
    `${open ? 'rotate-45 translate-y-4' : ''} ${base}`,
    `${open ? 'opacity-0' : ''} ${base}`,
    `${open ? '-rotate-45 -translate-y-4' : ''} ${base}`
  ]

  return (
    <div className="px-4 lg:hidden" onClick={() => setOpen(!open)}>
      <div className="w-[38px] h-[32px] flex flex-col items-center justify-between">
        {
          lines.map(
            (item) => (
              <span className={item}></span>
            )
          )
        }
      </div>
    </div>
  )
}

export default HamburgerIcon