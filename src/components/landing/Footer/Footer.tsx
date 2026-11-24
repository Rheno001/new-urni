import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import eagleImage from '../../../assets/URNI-eagle.png'
import logoImage from '../../../assets/URNI-logo.png'
import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon } from '../shared/icons'

type SocialLink = {
  label: string
  href: string
}

type FooterProps = {
  description?: string
  phone?: string
  email?: string
  location?: string
  quickLinks?: string[]
  programmes?: string[]
  socials?: SocialLink[]
  organisationName?: string
  onSubscribe?: (email: string) => void
}

const CURRENT_YEAR = new Date().getFullYear()

export function Footer({
  description = 'We support practical action, inclusive development and community-led change across Nigeria.',
  phone = '+234 800 000 0000',
  email = 'hello@urni.org',
  location = 'Nigeria',
  quickLinks = ['About', 'Impact', 'Partners', 'Stories'],
  programmes = ['Education', 'Health', 'Women & Youth', 'Resilience'],
  socials = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
  ],
  organisationName = 'URNI',
  onSubscribe = () => undefined,
}: FooterProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!value.trim()) return
    onSubscribe(value)
    setValue('')
  }

  return (
    <footer className="relative mx-auto mt-8 w-full max-w-370 overflow-hidden bg-[linear-gradient(180deg,rgba(1,38,30,0.98),rgba(1,30,23,0.98))] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(1, 30, 23, 0.9) 0%, rgba(1, 30, 23, 0.72) 38%, rgba(1, 30, 23, 0.3) 100%), url(${eagleImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />

      <div className="relative z-10">
        <div className="mx-auto w-full max-w-305 px-5 pb-12 pt-16 md:px-6">
          <div className="grid gap-7 md:grid-cols-[1.25fr_1fr_1fr_1fr_1.2fr]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex min-h-18 items-center justify-start">
                <img src={logoImage} alt="URNI logo" className="max-w-42.5 drop-shadow-[0_10px_14px_rgba(255,255,255,0.08)]" />
              </div>

              <p className="m-0 max-w-80 text-[1.01rem] leading-7 text-white/80">{description}</p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="m-0 text-[1.4rem] font-black tracking-tighter text-white">Contact</h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-white/90">
                <li className="inline-flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#f5b13d] text-[0.8rem] font-black text-[#014421]"><PhoneIcon /></span><span>{phone}</span></li>
                <li className="inline-flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#f5b13d] text-[0.8rem] font-black text-[#014421]"><MailIcon /></span><span>{email}</span></li>
                <li className="inline-flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#f5b13d] text-[0.8rem] font-black text-[#014421]"><MapPinIcon /></span><span>{location}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[1.4rem] font-black tracking-tighter text-white">Quick links</h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {quickLinks.map((item) => (
                  <li key={item}>
                    {item === 'About' ? (
                      <Link to="/about-us" className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">{item}</Link>
                    ) : (
                      <a href="#" className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">{item}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[1.4rem] font-black tracking-tighter text-white">Programmes</h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {programmes.map((item) => (
                  <li key={item}>
                    <a href="#" className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[1.4rem] font-black tracking-tighter text-white">Keep in touch</h3>
              <p className="m-0 mb-4 max-w-85 text-white/80">Join our newsletter to hear about campaigns, impact stories and opportunities to support communities across Nigeria.</p>

              <form className="mb-5 flex items-center overflow-hidden rounded-full border border-white/15 bg-white/10" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="urni-newsletter-email">Email address</label>
                <input
                  id="urni-newsletter-email"
                  type="email"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-white placeholder:text-white/55 focus:outline-none"
                />
                <button type="submit" className="flex h-13 w-13 items-center justify-center bg-linear-to-b from-[#f5b13d] to-[#e39f20] text-[#014421]">
                  <ArrowRightIcon />
                </button>
              </form>

              <div className="flex flex-wrap items-center gap-3">
                {socials.map(({ label, href }) => (
                  <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-black text-white transition hover:bg-white/15">
                    {label.slice(0, 1).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/10 bg-linear-to-b from-[#056c53] to-[#055944] px-5 py-4 text-center text-sm font-bold text-white/90">
          © {CURRENT_YEAR} {organisationName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
