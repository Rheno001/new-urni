import { useState } from 'react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 mx-auto mt-5 flex w-[min(100%,1360px)] items-center justify-between gap-2 rounded-[26px] border border-white/20 p-3 text-green-800 shadow-[0_18px_45px_rgba(1,68,33,0.18)] backdrop-blur-xl backdrop-saturate-150 md:px-4">
      <div className="inline-flex shrink-0 items-center justify-center" aria-label="URNI home">
        <img src={logo} alt="URNI logo" className="block h-auto w-24 md:w-44 drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]" />
      </div>

      <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center lg:flex" aria-label="Main navigation">
        {items.map((item) => (
          <a key={item} href="#" className="text-[0.72rem] font-extrabold tracking-[-0.02em] text-white/85 transition hover:-translate-y-0.5 hover:text-white xl:text-[0.78rem]">
            {item}
          </a>
        ))}
      </nav>

      <div className="hidden items-center justify-end gap-2.5 lg:flex">
        <a href={ctaHref} className="inline-flex items-center justify-center rounded-full bg-linear-to-b from-[#ffd700] to-[#e0b700] px-4 py-2 text-[0.72rem] font-black text-[#014421] shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 sm:px-5 sm:text-sm">
          {ctaLabel}
        </a>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white lg:hidden"
      >
        {isMenuOpen ? '×' : '☰'}
      </button>

      {isMenuOpen && (
        <div className="absolute inset-x-3 top-[calc(100%+0.5rem)] rounded-[22px] border border-white/20 bg-[rgba(3,87,52,0.9)] p-3 shadow-[0_18px_45px_rgba(1,68,33,0.2)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {items.map((item) => (
              <a key={item} href="#" className="rounded-full px-3 py-2 text-sm font-extrabold text-white/90 hover:bg-white/10 hover:text-white">
                {item}
              </a>
            ))}
            <a href={ctaHref} className="mt-2 inline-flex items-center justify-center rounded-full bg-linear-to-b from-[#ffd700] to-[#e0b700] px-4 py-2.5 text-sm font-black text-[#014421] shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)]">
              {ctaLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
