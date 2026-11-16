import logo from '../../../assets/URNI-logo.png'

type NavbarProps = {
  items?: string[]
  ctaLabel?: string
  ctaHref?: string
}

export function Navbar({
  items = ['Home', 'About Us', 'Programmes', 'Impact', 'Stories', 'Contact Us'],
  ctaLabel = 'Donate Now',
  ctaHref = 'https://www.unveilingnigeria.ng/donate',
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 mx-auto mt-5 flex w-[min(100%,1360px)] items-center justify-between gap-2 rounded-[26px] border border-white/20 p-4 text-[#014421]  shadow-[0_18px_45px_rgba(1,68,33,0.18)] backdrop-blur-xl backdrop-saturate-150 md:px-4">
      <div className="inline-flex shrink-0 items-center justify-center" aria-label="URNI home">
        <img src={logo} alt="URNI logo" className="block h-auto w-24 md:w-40 drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]" />
      </div>

      <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center lg:flex" aria-label="Main navigation">
        {items.map((item) => (
          <a key={item} href="#" className="text-[0.72rem] font-extrabold tracking-[-0.02em] text-white/85 transition hover:-translate-y-0.5 hover:text-white xl:text-[0.78rem]">
            {item}
          </a>
        ))}
      </nav>

      <div className="flex flex-wrap items-center justify-end gap-2.5">
        <a href={ctaHref} className="inline-flex items-center justify-center rounded-full bg-linear-to-b from-[#ffd700] to-[#e0b700] px-4 py-2 text-[0.72rem] font-black text-[#014421] shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 sm:px-5 sm:text-sm">
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
