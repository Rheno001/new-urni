import heroImage from '../../../assets/donate-hero.png'
import { ArrowRightIcon, PlayIcon } from '../shared/icons'

type HeroProps = {
  tagline?: string
  headlineStart?: string
  headlineAccent?: string
  headlineEnd?: string
  description?: string
  primaryCta?: string
  onPlay?: () => void
  image?: string
  showNavbar?: boolean
}

export function Hero({
  tagline = 'Who We Are',
  headlineStart = 'Showcasing',
  headlineAccent = 'Nigeria',
  headlineEnd = 'in her true light',
  description = 'Unveiling and Rebranding Nigeria Initiative is a nonprofit organization committed to showcasing Nigeria’s true potential; its people, heritage, and promise. Using technology and media, we present a vibrant and dynamic Nigeria to the world.',
  primaryCta = 'Learn More',
  onPlay,
  image = heroImage,
  showNavbar = false,
}: HeroProps) {
  return (
    <section className="relative mx-auto w-full max-w-340 overflow-hidden bg-[linear-gradient(180deg,rgba(241,255,239,0.96),rgba(168,212,184,0.15))] px-4 pb-0 pt-8 md:px-5">
      {showNavbar ? <div className="hidden" aria-hidden="true" /> : null}

      <div className="absolute inset-0 z-0 opacity-80" aria-hidden="true">
        <div className="flex h-full items-center justify-center text-[10rem] text-[#025836]/10">✋</div>
      </div>

      <div className="relative z-10 grid min-h-190 items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="max-w-165 lg:pl-7">
          <p className="mb-4 inline-flex items-center gap-4 text-[clamp(1.8rem,2vw,2.5rem)] font-bold italic tracking-[-0.04em] text-[#025836]">
            <span className="inline-block h-0.5 w-18 rounded-full bg-[#025836]/70" aria-hidden="true" />
            {tagline}
          </p>

          <h1 className="text-[clamp(3.1rem,6vw,7rem)] font-black leading-[0.95] tracking-[-0.08em] text-[#0b1511]">
            {headlineStart} <span className="text-[#025836]">{headlineAccent}</span>
            <br />
            {headlineEnd}
          </h1>

          <p className="mt-6 max-w-155 text-lg leading-8 text-[#3d514c]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="inline-flex items-center gap-3 rounded-full bg-[#025836] px-5 py-3 text-base font-black text-white shadow-[0_12px_24px_rgba(2,88,54,0.18)] transition hover:-translate-y-0.5" href="https://www.unveilingnigeria.ng/about-us" target="_blank" rel="noreferrer">
              {primaryCta}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffd700] text-[#014421]">
                <ArrowRightIcon />
              </span>
            </a>

            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-b from-[#ffd700] to-[#e29f1d] text-xl text-[#014421] shadow-[0_12px_25px_rgba(245,177,61,0.28)] transition hover:-translate-y-0.5" type="button" aria-label="Make a donation" onClick={onPlay}>
              <PlayIcon />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-center pt-10 lg:pt-0">
          <div className="relative w-full max-w-155">
            <div className="absolute inset-[12%_6%_0_8%] -rotate-6 rounded-[32%_38%_20%_28%/34%_30%_52%_44%] bg-[linear-gradient(135deg,rgba(245,177,61,0.65),rgba(245,177,61,0.18))]" aria-hidden="true" />
            <img src={image} alt="URNI volunteers engaging with communities" className="relative z-10 w-full rounded-[34%_36%_28%_30%/30%_34%_42%_40%] object-cover shadow-[0_18px_45px_rgba(1,68,33,0.12)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
