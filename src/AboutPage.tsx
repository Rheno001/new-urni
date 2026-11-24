import { useEffect, useState } from "react";
import { Footer } from "./components/landing/Footer/Footer";
import { Navbar } from "./components/landing/Navbar/Navbar";
import { Reveal } from "./components/animations/ScrollReveal";
import cursorIcon from "./assets/URNI LOGO - ICON.svg";
import nigeriaMap from "./assets/Nigeria Map.png";
import aboutHero from "./assets/hero-about.png";
import aboutHero1 from "./assets/About-hero-1.png";
import aboutHero2 from "./assets/About-hero-2.png";
import aboutHero3 from "./assets/About-hero-3.png";
import aboutStory from "./assets/About-us-2.jpg";
import abdulkadirImage from "./assets/Mr-Abdul.png";
import obiageriImage from "./assets/Mrs-Oby.png";
import naomiImage from "./assets/mrs-naomi.png";
import joshuaImage from "./assets/Mr-Joshua.png";
import confidenceImage from "./assets/Ms-Confidence.png";
import patronImage from "./assets/Patron-img.png";

const heroSlides = [
  { image: aboutHero, alt: "URNI team members working together" },
  { image: aboutHero1, alt: "URNI volunteers greeting one another at a community event" },
  { image: aboutHero2, alt: "Young Nigerians holding flags at a URNI event" },
  { image: aboutHero3, alt: "Nigerian leaders and community representatives at an event" },
];

const team = [
  {
    name: "Abdulkadir Lawal",
    role: "Convener",
    image: abdulkadirImage,
  },
  {
    name: "Obiageri Ndulue",
    role: "Lead Strategist",
    image: obiageriImage,
  },
  {
    name: "Naomi Muoh",
    role: "Project Lead, Rise Up Patriot Conference",
    image: naomiImage,
  },
  {
    name: "Joshua Emegha",
    role: "Project Lead, NTML",
    image: joshuaImage,
  },
  {
    name: "Confidence Omoregbe",
    role: "Project Lead, FOP Book Distribution",
    image: confidenceImage,
  },
];

const pillars = [
  {
    number: "01",
    category: "What we do",
    title: "Our mission",
    description:
      "To project the positive image of Nigeria, using technology and community engagement to inspire patriotism in Nigerians.",
    icon: "mission",
  },
  {
    number: "02",
    category: "What we see",
    title: "Our vision",
    description:
      "To foster a nation where Nigerians, at home and abroad, celebrate their heritage and actively contribute to the country’s development.",
    icon: "vision",
  },
  {
    number: "03",
    category: "How we act",
    title: "Our core values",
    description:
      "The principles at the heart of our work and the way we engage with one another.",
    icon: "values",
    points: ["Patriotism", "Unity", "Empathy"],
  },
  {
    number: "04",
    category: "Who we serve",
    title: "Our target audience",
    description:
      "Nigerians as individuals—at home and abroad—with a role in shaping our shared future.",
    icon: "audience",
  },
] as const;

type PillarIconName = (typeof pillars)[number]["icon"];

function PillarIcon({ name }: { name: PillarIconName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      className="h-14 w-14 drop-shadow-[0_2px_3px_rgba(255,255,255,0.8)]"
    >
      {name === "mission" && (
        <>
          <circle cx="21" cy="27" r="15" />
          <circle cx="21" cy="27" r="8" />
          <circle cx="21" cy="27" r="2" />
          <path d="m22.5 25.5 15-15M29 10h9v9" stroke="#c8952e" />
        </>
      )}
      {name === "vision" && (
        <>
          <path d="M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24Z" />
          <circle cx="24" cy="24" r="6" />
          <circle cx="24" cy="24" r="2" stroke="#c8952e" />
        </>
      )}
      {name === "values" && (
        <>
          <path d="M24 39S6 29 6 17a9 9 0 0 1 17-4 9 9 0 0 1 19 4c0 12-18 22-18 22Z" />
          <path d="m17 24 5 5 10-11" stroke="#c8952e" />
        </>
      )}
      {name === "audience" && (
        <>
          <circle cx="24" cy="15" r="6" />
          <path d="M12 39v-3a12 12 0 0 1 24 0v3" stroke="#c8952e" />
          <path d="M10 19a5 5 0 1 0 0-10M5 34v-2a9 9 0 0 1 6-8M38 9a5 5 0 1 1 0 10M37 24a9 9 0 0 1 6 8v2" />
        </>
      )}
    </svg>
  );
}

function PillarArtwork({
  name,
}: {
  name: PillarIconName;
}) {
  return (
    <div className="relative grid h-48 w-48 place-items-center transition-transform duration-300 group-hover:-translate-y-1">
      <img
        aria-hidden="true"
        src={nigeriaMap}
        className="absolute h-[164px] w-[196px] object-contain contrast-[1.5] drop-shadow-[0_5px_12px_rgba(1,68,33,0.12)]"
      />
      <span className="relative grid h-[96px] w-[96px] place-items-center text-[#064b38]">
        <PillarIcon name={name} />
      </span>
    </div>
  );
}

export function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const intervalId = window.setInterval(() => {
      setPreviousSlide(activeSlide);
      setActiveSlide((activeSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeSlide]);

  useEffect(() => {
    if (previousSlide === null) return;

    const timeoutId = window.setTimeout(() => setPreviousSlide(null), 900);
    return () => window.clearTimeout(timeoutId);
  }, [previousSlide]);

  const showSlide = (index: number) => {
    const nextSlide = (index + heroSlides.length) % heroSlides.length;
    if (nextSlide === activeSlide) return;

    setPreviousSlide(activeSlide);
    setActiveSlide(nextSlide);
  };

  return (
    <div
      className="w-full overflow-x-clip bg-white text-[#333]"
      style={{ cursor: `url(${cursorIcon}) 8 8, auto` }}
    >
      <Navbar overlapsHero />

      <main>
        <section id="about-hero" className="relative isolate h-[100svh] min-h-[560px] overflow-hidden bg-[#102e25]">
          {previousSlide !== null && (
            <img
              key={heroSlides[previousSlide].image}
              src={heroSlides[previousSlide].image}
              alt=""
              aria-hidden="true"
              className="hero-slide-out absolute inset-0 h-full w-full object-cover object-center"
            />
          )}
          <img
            key={heroSlides[activeSlide].image}
            src={heroSlides[activeSlide].image}
            alt={heroSlides[activeSlide].alt}
            className="hero-slide-in absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#081d16]/90 via-[#081d16]/60 to-[#081d16]/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#081d16]/45 via-transparent to-[#081d16]/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#061810]/70 via-[#061810]/25 to-transparent"
          />
          <div className="relative mx-auto flex h-full max-w-[1360px] items-center px-5 pb-14 pt-12 sm:px-8 lg:px-12">
            <Reveal
              direction="left"
              duration={900}
              className="max-w-3xl motion-reduce:transition-none"
            >
              <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#f3ca69] sm:text-sm">
                <span className="h-px w-9 bg-[#f3ca69]" />
                About the initiative
              </p>
              <h1 className="mt-5 text-[clamp(3rem,7vw,6.4rem)] font-black leading-[0.95] tracking-[-0.075em] text-white">
                A fuller story
                <span className="block text-[#f3ca69]">of Nigeria.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                We project the positive image of Nigeria through technology
                and community engagement, celebrating our people, heritage
                and potential.
              </p>
              <a
                href="#who-we-are"
                className="btn-bounce mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#075b49] shadow-lg transition hover:bg-[#f3ca69]"
              >
                Discover our story
                <span aria-hidden="true" className="text-lg">→</span>
              </a>
            </Reveal>
          </div>
          <div className="absolute inset-x-5 bottom-6 z-10 flex items-center justify-between sm:inset-x-8 lg:inset-x-12">
            <span className="text-xs font-black tracking-[0.18em] text-white/80">
              0{activeSlide + 1} <span className="mx-1 text-white/45">/</span>{" "}
              0{heroSlides.length}
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => showSlide(activeSlide - 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 text-xl font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#075b49]"
              >
                ‹
              </button>
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === activeSlide}
                  onClick={() => showSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-7 bg-white"
                      : "w-2.5 bg-white/55 hover:bg-white/90"
                  }`}
                />
              ))}
              <button
                type="button"
                aria-label="Next image"
                onClick={() => showSlide(activeSlide + 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-black/20 text-xl font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#075b49]"
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <section
          id="who-we-are"
          className="scroll-mt-28 px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal direction="left" className="relative">
              <div className="absolute -bottom-5 -left-4 h-28 w-28 rounded-[30px] bg-[#edc76e]/50 sm:-left-7 sm:h-36 sm:w-36" />
              <img
                src={aboutStory}
                alt="Community members working together"
                className="relative h-[330px] w-full rounded-[34px] object-cover shadow-[0_22px_55px_rgba(24,43,37,0.13)] sm:h-[450px]"
              />
              <div className="absolute -right-3 top-6 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#075b49] shadow-md sm:-right-5 sm:top-9">
                Our story
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <p className="font-['Caveat'] text-3xl font-bold text-[#c8952e] sm:text-4xl">
                Who we are
              </p>
              <h2 className="mt-1 text-[clamp(2.5rem,4.6vw,4.2rem)] font-black leading-[0.96] tracking-[-0.07em] text-[#17211d]">
                A fuller picture of Nigeria,{" "}
                <span className="text-[#0b755b]">shared with the world.</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#52615b]">
                URNI is a non-governmental organization dedicated to
                showcasing Nigeria&apos;s true potential—its people and
                heritage. We use information technology and community
                engagement to share a dynamic, rich and multifaceted picture
                of our country.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[24px] border border-[#e9e3d6] bg-[#fbf8f0] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(24,43,37,0.08)]">
                  <span className="font-['Caveat'] text-2xl font-bold text-[#c8952e]">
                    01 / Technology
                  </span>
                  <p className="mt-2 text-sm leading-6 text-[#52615b]">
                    Sharing information about Nigeria supported by verifiable
                    facts and figures.
                  </p>
                </article>
                <article className="rounded-[24px] border border-[#dcebe1] bg-[#eef8f1] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(24,43,37,0.08)]">
                  <span className="font-['Caveat'] text-2xl font-bold text-[#0b755b]">
                    02 / Community
                  </span>
                  <p className="mt-2 text-sm leading-6 text-[#52615b]">
                    Creating spaces for nation-building through town halls,
                    skills meetings, opinion polls and resource tours.
                  </p>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="mission"
          className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal direction="up" className="mx-auto max-w-3xl text-center">
              <p className="font-['Caveat'] text-3xl font-bold text-[#c8952e] sm:text-4xl">
                What guides our work
              </p>
              <h2 className="mt-1 text-[clamp(2.4rem,4.5vw,4rem)] font-black leading-[0.98] tracking-[-0.07em] text-[#17211d]">
                One shared purpose, four ways to make it real.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52615b] sm:text-lg">
                From the story we tell to the people we serve, each part of URNI
                is rooted in a belief in Nigeria and its people.
              </p>
            </Reveal>
            <div className="relative mx-auto mt-12 grid max-w-[1240px] gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              <svg
                aria-hidden="true"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute left-0 top-[38px] hidden h-20 w-full overflow-visible lg:block"
              >
                <g
                  fill="none"
                  stroke="#6c9d86"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                >
                  <path className="about-flow-path" d="M222 58C258 18 332 18 370 58" />
                  <path className="about-flow-path" d="M522 58C558 18 632 18 670 58" />
                  <path className="about-flow-path" d="M822 58C858 18 932 18 970 58" />
                </g>
                <g fill="none" stroke="#6c9d86" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                  <path d="m362 51 8 7-9 5" />
                  <path d="m662 51 8 7-9 5" />
                  <path d="m962 51 8 7-9 5" />
                </g>
              </svg>
              {pillars.map((pillar, index) => (
                <Reveal
                  key={pillar.number}
                  direction="up"
                  delay={index * 100}
                  className="relative z-10 h-full"
                >
                  <article className="group flex h-full flex-col items-center text-center">
                    <PillarArtwork name={pillar.icon} />
                    <span className="mt-1 font-['Caveat'] text-xl font-bold text-[#c8952e]">
                      {pillar.number}
                    </span>
                    <p className="mt-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#0a7a5d]">
                      {pillar.category}
                    </p>
                    <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.045em] text-[#0b1511] sm:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-[270px] text-sm leading-6 text-[#52615b]">
                      {pillar.description}
                    </p>
                    {"points" in pillar && (
                      <ul className="mt-4 flex list-none flex-wrap justify-center gap-2 p-0">
                        {pillar.points.map((point) => (
                          <li
                            key={point}
                            className="rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-[#075b49] shadow-sm"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="urni-in-action"
          className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal direction="up" className="mb-6">
              <p className="font-['Caveat'] text-3xl font-bold text-[#c8952e] sm:text-4xl">
                Our story in motion
              </p>
              <h2 className="mt-1 text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight tracking-[-0.06em] text-[#17211d]">
                Get to know URNI
              </h2>
            </Reveal>

            <Reveal direction="zoom">
              <div
                className="relative aspect-video w-full overflow-hidden rounded-[28px] bg-[#102e25] shadow-[0_20px_50px_rgba(16,46,37,0.14)] sm:rounded-[36px]"
              >
                <iframe
                  title="When Patriots Rise, Nations Transform — URNI Rise Up Patriots Conference"
                  src="https://www.youtube-nocookie.com/embed/BfNcmQ6JNYM?rel=0"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </Reveal>

            <div className="mt-8 grid overflow-hidden rounded-[32px] shadow-[0_22px_55px_rgba(24,43,37,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal
                direction="left"
                className="flex flex-col items-start justify-center bg-[#102e25] px-7 py-9 text-white sm:px-10 sm:py-12 lg:px-12"
              >
                <p className="font-['Caveat'] text-3xl font-bold text-[#f2c65f] sm:text-4xl">
                  The next chapter is ours
                </p>
                <h2 className="mt-2 max-w-xl text-[clamp(2rem,4vw,3.25rem)] font-black leading-[1.02] tracking-[-0.06em]">
                  Let&apos;s tell Nigeria&apos;s story—together.
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
                  Join us in sharing a fuller picture of Nigeria and building
                  national pride through community.
                </p>
                <a
                  href="https://www.unveilingnigeria.ng/volunteer"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-bounce mt-7 inline-flex items-center gap-3 rounded-full bg-[#f2bf4b] px-6 py-3.5 text-sm font-black text-[#173d30]"
                >
                  Become a volunteer <span aria-hidden="true">→</span>
                </a>
              </Reveal>

              <Reveal direction="right" delay={100} className="relative min-h-[320px] bg-[#ecece7] sm:min-h-[380px]">
                <iframe
                  title="Map to URNI office at Suite F2 Melita Plaza, Area 11, Garki, Abuja"
                  src="https://maps.google.com/maps?q=Suite%20F2%20Melita%20Plaza%2C%20Area%2011%2C%20Garki%2C%20Abuja&z=16&output=embed"
                  className="absolute inset-0 h-full w-full border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Suite%20F2%20Melita%20Plaza%2C%20Area%2011%2C%20Garki%2C%20Abuja"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 left-4 z-10 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#075b49] shadow-lg transition hover:bg-[#f4faf6]"
                >
                  Suite F2 Melita Plaza · Open map ↗
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="leadership-section"
          className="scroll-mt-28 px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
        >
          <div className="mx-auto max-w-[1240px]">
            <Reveal
              direction="up"
              className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="font-['Caveat'] text-3xl font-bold text-[#c8952e] sm:text-4xl">
                  The people behind the purpose
                </p>
                <h2 className="mt-1 text-[clamp(2.5rem,4.5vw,4rem)] font-black leading-none tracking-[-0.07em] text-[#17211d]">
                  Meet the team
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#52615b]">
                Different strengths, one shared commitment to telling a more
                complete story of Nigeria.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {team.map((member, index) => (
                <Reveal key={member.name} direction="up" delay={index * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#dfe9e1] bg-[#f8faf8] shadow-[0_12px_34px_rgba(1,68,33,0.07)] transition duration-500 hover:-translate-y-2 hover:border-[#025836]/30 hover:shadow-[0_24px_48px_rgba(1,68,33,0.14)]">
                    <div className="relative overflow-hidden bg-[#e8f6ec]">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="h-[270px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1511]/35 to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#025836] shadow-sm backdrop-blur">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f0b620]" />
                        URNI team
                      </span>
                      <span className="absolute bottom-3 right-4 font-['Caveat'] text-2xl font-bold text-white drop-shadow">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#0a7a5d]">
                        Leadership
                      </p>
                      <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.045em] text-[#0b1511]">
                        {member.name}
                      </h3>
                      <div className="mt-4 flex-1 border-t border-[#e8eee8] pt-3">
                        <p className="text-sm font-bold leading-6 text-[#52615b]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="our-patron"
          className="scroll-mt-28 px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24"
        >
          <Reveal direction="zoom" className="mx-auto max-w-[1200px]">
            <div className="relative grid overflow-hidden rounded-[36px] bg-[#102e25] text-white shadow-[0_24px_60px_rgba(16,46,37,0.18)] md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <p className="font-['Caveat'] text-3xl font-bold text-[#f2c65f] sm:text-4xl">
                  With distinguished support
                </p>
                <h2 className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-white/65">
                  Our patron
                </h2>
                <h3 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[0.98] tracking-[-0.065em]">
                  Amb. Hassan Ardo Tukur
                  <span className="mt-2 block text-lg tracking-normal text-[#f2c65f]">
                    MFR, OFR
                  </span>
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
                  A Nigerian diplomat whose career reflects a deep commitment
                  to peace, development and global cooperation. His work in
                  public service and international relations has championed
                  Nigeria&apos;s ties abroad and the importance of unity.
                </p>
                <a
                  href="https://www.unveilingnigeria.ng/patron"
                  className="btn-bounce mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#f2bf4b] px-5 py-3 text-sm font-black text-[#173d30]"
                >
                  Learn more <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="relative min-h-[320px] overflow-hidden md:min-h-[470px]">
                <img
                  src={patronImage}
                  alt="Ambassador Hassan Ardo Tukur, URNI patron"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#102e25] via-[#102e25]/15 to-transparent md:bg-gradient-to-r" />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[32px] border-[#f2bf4b]/35"
                />
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer
        description="We project the positive image of Nigeria through technology and community engagement."
        phone="0817 764 0051, 0915 555 8929"
        email="unveilnigeria@gmail.com"
        location="Suite F2 Melita Plaza, Area 11, Garki, Abuja."
        organisationName="URNI"
        quickLinks={["About", "Impact", "Programmes", "Stories"]}
        programmes={["Education", "Health", "Women & Youth", "Resilience"]}
        socials={[
          { label: "Facebook", href: "https://www.facebook.com/unveilingnigeria" },
          { label: "Instagram", href: "https://www.instagram.com/unveilingnigeria?igsh=MXh0enhhNDBrZ29ucg==" },
          { label: "X", href: "https://x.com/unveilingng" },
          { label: "YouTube", href: "https://www.youtube.com/@unveilingrebrandingnigeria351" },
          { label: "TikTok", href: "https://www.tiktok.com/@unveilingnigeria?_t=ZS-8ycVqpqZ4Vt&_r=1" },
        ]}
      />
    </div>
  );
}
