import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/URNI-logo.png'
import lightLogo from '../../../assets/URNI-logo-light.png'

const navLinks: Record<string, string> = {
  Home: '/',
  'About Us': '/about-us',
  'Who We Are': '/about-us#who-we-are',
  'Mission/Vision': '/about-us#mission',
  Leadership: '/about-us#leadership-section',
  'Our Patron': '/about-us#our-patron',
}

type NavbarProps = {
  items?: string[]
  ctaLabel?: string
  ctaHref?: string
  overlapsHero?: boolean
}

export function Navbar({
  items = ['Home', 'About Us', 'Programmes', 'Impact', 'Stories', 'Contact Us'],
  ctaLabel = 'Volunteer',
  ctaHref = 'https://www.unveilingnigeria.ng/volunteer',
  overlapsHero = false,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(overlapsHero)

  useEffect(() => {
    if (!overlapsHero) return

    const updateHeroVisibility = () => {
      const hero = document.getElementById('about-hero')
      const header = document.querySelector('header')
      setIsHeroVisible(
        Boolean(
          hero &&
            header &&
            hero.getBoundingClientRect().bottom > header.getBoundingClientRect().height + 12,
        ),
      )
    }

    updateHeroVisibility()
    window.addEventListener('scroll', updateHeroVisibility, { passive: true })
    window.addEventListener('resize', updateHeroVisibility)

    return () => {
      window.removeEventListener('scroll', updateHeroVisibility)
      window.removeEventListener('resize', updateHeroVisibility)
    }
  }, [overlapsHero])

  const isOverHero = overlapsHero && isHeroVisible

  return (
    <header className={`sticky top-0 z-40 mx-auto mt-4 sm:mt-5 flex w-[calc(100%-1.5rem)] max-w-[1360px] items-center justify-between gap-2 rounded-[26px] border p-3 sm:p-4 transition-shadow duration-300 md:px-5 ${overlapsHero ? '-mb-[84px] sm:-mb-[108px]' : ''} ${isOverHero ? 'border-white/35 bg-transparent text-white shadow-none backdrop-blur-none' : overlapsHero ? 'border-[#014421]/10 bg-white/95 text-[#014421] shadow-[0_10px_30px_rgba(1,68,33,0.12)] backdrop-blur-xl backdrop-saturate-150' : 'border-white/20 text-[#014421] shadow-[0_18px_45px_rgba(1,68,33,0.18)] backdrop-blur-xl backdrop-saturate-150'}`}>
      <div className="inline-flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105">
        <img
          src={isOverHero ? lightLogo : logo}
          alt="URNI logo"
          className={`block h-auto ${overlapsHero ? 'w-36 md:w-48' : 'w-24 md:w-44'} ${isOverHero ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]' : 'drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]'}`}
        />
      </div>

      <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center lg:flex" aria-label="Main navigation">
        {items.map((item) => {
          const href = navLinks[item] ?? '#'
          return (
            <Link key={item} to={href} className={`relative py-1 text-[0.78rem] font-black uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 xl:text-[0.82rem] ${isOverHero ? 'text-white hover:text-[#f3ca69]' : 'text-[#014421] hover:text-[#025836]'}`}>
              {item}
            </Link>
          )
        })}
      </nav>

      <div className="hidden items-center justify-end gap-2.5 lg:flex">
        <a href={ctaHref} className="btn-bounce inline-flex items-center justify-center rounded-full bg-linear-to-b from-[#ffd700] to-[#e0b700] px-5 py-2 text-[0.75rem] font-black uppercase tracking-wider text-[#014421] shadow-[0_4px_14px_rgba(255,215,0,0.35)] transition-all sm:px-6 sm:text-sm">
          {ctaLabel}
        </a>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-xl font-bold lg:hidden ${isOverHero ? 'border-white/50 bg-black/20 text-white' : 'border-[#014421]/20 bg-white/10 text-[#014421]'}`}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>

      {isMenuOpen && (
        <div className="absolute inset-x-3 top-[calc(100%+0.5rem)] rounded-[22px] border border-[#014421]/20 bg-[rgba(241,255,239,0.96)] p-4 shadow-[0_18px_45px_rgba(1,68,33,0.2)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {items.map((item) => {
              const href = navLinks[item] ?? '#'
              return (
                <Link key={item} to={href} onClick={() => setIsMenuOpen(false)} className="rounded-full px-3 py-2 text-sm font-black text-[#014421] hover:bg-[#014421]/10">
                  {item}
                </Link>
              )
            })}
            <a href={ctaHref} className="mt-2 inline-flex items-center justify-center rounded-full bg-linear-to-b from-[#ffd700] to-[#e0b700] px-4 py-2.5 text-sm font-black text-[#014421] shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)]">
              {ctaLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
