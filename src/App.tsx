import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Footer } from "./components/landing/Footer/Footer";
import { Navbar } from "./components/landing/Navbar/Navbar";
import { SponsorCarousel } from "./components/animations/SponsorCarousel";
import { Reveal, Parallax } from "./components/animations/ScrollReveal";
import logoImage from "./assets/URNI-logo.png";
import cursorIcon from "./assets/URNI LOGO - ICON.svg";
import mapImage from "./assets/map2.png";
import heroImage from "./assets/donate-hero.png";
import storyImage from "./assets/story.png";
import volunteerImage from "./assets/volunteer-hero.png";
import blogImage from "./assets/blog.jpg";
import aboutHero1 from "./assets/About-hero-1.png";
import aboutHero2 from "./assets/About-hero-2.png";
import aboutHero3 from "./assets/About-hero-3.png";
import heartDecoration from "./assets/heart-decoration.svg";
import brushStrokeGreen from "./assets/brush-stroke-green.svg";
import yellowRings from "./assets/yellow-rings.svg";

const navItems = [
  "Home",
  "About Us",
  "Programmes",
  "Impact",
  "Stories",
  "Contact Us",
];

const facts = [
  { value: "250+", label: "ethnic groups" },
  { value: "230 Million", label: "people in Nigeria" },
  { value: "1st Oct, 1960", label: "independence day" },
  { value: "923,768 Km²", label: "land mass" },
];

const volunteers = [
  {
    name: "URNI Volunteer Network",
    role: "Community & Advocacy",
    image: volunteerImage,
  },
  {
    name: "Field Outreach Teams",
    role: "IDP & Relief Support",
    image: storyImage,
  },
  {
    name: "Creative & Media Ambassadors",
    role: "Campaigns & Storytelling",
    image: blogImage,
  },
];

const highlights = [
  { label: "National Identity", total: "250+ ethnic groups", tone: "light" },
  { label: "Our people", total: "230M citizens", tone: "gold" },
  { label: "Heritage", total: "500+ languages", tone: "green" },
];

const articles = [
  {
    title:
      "Unveiling and Rebranding Nigeria Initiative Announces the Rise Up Patriot Conference 2.0",
    date: "13 Oct, 2025",
    views: "2277",
    image:
      "https://www.unveilingnigeria.ng/storage/app/media/news/RISE%20UP%20PATRIOTS%20CONFERENCE%20NEWS.png",
    link: "https://www.unveilingnigeria.ng/news-details/unveiling-and-rebranding-nigeria-initiative-announces-rise-patriot-conference-20",
  },
  {
    title:
      "URNI Engages NOA on Strengthening National Patriotism and Youth Development",
    date: "21 Aug, 2025",
    views: "1904",
    image:
      "https://www.unveilingnigeria.ng/storage/app/media/news/WhatsApp%20Image%202025-08-24%20at%2020.20.18_0cfd9301.jpg",
    link: "https://www.unveilingnigeria.ng/news-details/urni-engages-noa-strengthening-national-patriotism-and-youth-development",
  },
  {
    title:
      "Nigerian Photographer Sets New Guinness World Record for Most Headshots In One Hour",
    date: "18 Dec, 2024",
    views: "2189",
    image:
      "https://www.unveilingnigeria.ng/storage/app/media/news/Selected%20News%20Image%204.jpg",
    link: "https://www.unveilingnigeria.ng/news-details/nigerian-photographer-sets-new-guinness-world-record-most-headshots-one-hour",
  },
  {
    title:
      "Nigeria Through My Lens: URNI Unveils Photography Contest to Showcase Nigeria’s Beauty",
    date: "24 Aug, 2025",
    views: "2352",
    image:
      "https://www.unveilingnigeria.ng/storage/app/media/news/NTML%20NEW%20WEBSITE%20NEWS%202.png",
    link: "https://www.unveilingnigeria.ng/news-details/nigeria-through-my-lens-urni-unveils-photography-contest-showcase-nigerias-beauty",
  },
  {
    title:
      "Nigerian Army's Operation Fansan Yamma Is Winning Against Terrorism",
    date: "23 Jan, 2025",
    views: "1792",
    image:
      "https://www.unveilingnigeria.ng/storage/app/media/news/Selected%20News%20Image%202.jpg",
    link: "https://www.unveilingnigeria.ng/news-details/nigerian-armys-operation-fansan-yamma-winning-against-terrorism",
  },
  {
    title: "D’Tigress Make History with 5th Consecutive AfroBasket Title",
    date: "20 Aug, 2025",
    views: "1688",
    image:
      "https://www.unveilingnigeria.ng/storage/app/media/news/DTigress.png",
    link: "https://www.unveilingnigeria.ng/news-details/dtigress-make-history-5th-consecutive-afrobasket-title",
  },
];

const events = [
  {
    id: "school-supplies-drive",
    title: "School Supplies Drive",
    date: "10 Jun 2026",
    time: "10:00 AM",
    location: "Abuja",
    image: storyImage,
    description:
      "A community outreach focused on helping children return to school with the essentials they need to learn with confidence and dignity.",
    points: [
      "Back-to-school kits for children",
      "Volunteer-led distribution across communities",
      "Partnering with local schools and families",
    ],
  },
  {
    id: "community-health-outreach",
    title: "Community Health Outreach",
    date: "12 Jul 2026",
    time: "9:30 AM",
    location: "Kano",
    image: blogImage,
    description:
      "We will bring life-saving health education, screening support and community care to families in underserved neighbourhoods.",
    points: [
      "Health screening and awareness",
      "Maternal and child wellness support",
      "Community advisory and follow-up",
    ],
  },
  {
    id: "food-relief-day",
    title: "Food Relief Day",
    date: "18 Aug 2026",
    time: "8:00 AM",
    location: "Jos",
    image: volunteerImage,
    description:
      "A practical response to food insecurity, bringing support, comfort and nourishment to families in crisis and displacement.",
    points: [
      "Emergency food packs",
      "Care packages for vulnerable families",
      "Volunteer coordination and logistics",
    ],
  },
  {
    id: "youth-innovation-forum",
    title: "Youth Innovation Forum",
    date: "22 Sep 2026",
    time: "1:00 PM",
    location: "Lagos",
    image: heroImage,
    description:
      "An open platform for Nigerian youth to connect, learn and co-create solutions for a more prosperous and inclusive future.",
    points: [
      "Startup and innovation sessions",
      "Mentorship and networking",
      "Solutions for local community challenges",
    ],
  },
  {
    id: "patriotism-and-culture-day",
    title: "Patriotism & Culture Day",
    date: "05 Oct 2026",
    time: "11:00 AM",
    location: "Enugu",
    image: storyImage,
    description:
      "A celebration of Nigerian heritage, identity and national pride through culture, performances, and community engagement.",
    points: [
      "Cultural showcases and storytelling",
      "Youth leadership moments",
      "National unity and civic engagement",
    ],
  },
];

function EventDetailPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#f1ffef] px-4 py-10 text-[#333]">
        <div className="mx-auto max-w-3xl rounded-4xl bg-white/80 p-8 shadow-[0_18px_45px_rgba(1,68,33,0.12)] backdrop-blur-sm">
          <h1 className="text-3xl font-black text-[#025836]">
            Event not found
          </h1>
          <Link
            to="/"
            className="mt-6 inline-flex text-[#025836] underline underline-offset-4"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1ffef] px-4 py-8 text-[#333]">
      <div className="mx-auto max-w-5xl rounded-4xl bg-white/80 p-4 shadow-[0_18px_45px_rgba(1,68,33,0.12)] backdrop-blur-sm md:p-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center text-base font-bold text-[#025836]"
        >
          ← Back to events
        </Link>

        <div className="overflow-hidden rounded-3xl border border-[#dfe9e1] bg-[#f8f9fa]">
          <img
            src={event.image}
            alt={event.title}
            className="h-85 w-full object-cover md:h-105"
          />
        </div>

        <div className="mt-8 space-y-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#025836]">
            Event &amp; Program
          </p>
          <h1 className="text-4xl font-black tracking-tighter text-[#0b1511] md:text-5xl">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-[#2d4d43]">
            <span className="rounded-full bg-[#e8f6ec] px-3 py-2">
              {event.date}
            </span>
            <span className="rounded-full bg-[#fff4ce] px-3 py-2">
              {event.time}
            </span>
            <span className="rounded-full bg-[#edf7ff] px-3 py-2">
              {event.location}
            </span>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#4b5d58]">
            {event.description}
          </p>

          <ul className="space-y-3 text-base text-[#2f4d46]">
            {event.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f0c419]"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            className="inline-flex items-center rounded-full bg-[#025836] px-6 py-3 text-base font-black text-white shadow-[0_12px_24px_rgba(2,88,54,0.2)] transition hover:-translate-y-0.5"
            href="https://www.unveilingnigeria.ng/donate"
            target="_blank"
            rel="noreferrer"
          >
            Support this event
          </a>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const eventTrackRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateParallax = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`,
      );
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    return () => window.removeEventListener("scroll", updateParallax);
  }, []);

  useEffect(() => {
    const track = eventTrackRef.current;
    if (!track || isPaused) return;

    let frameId = 0;

    const animate = () => {
      if (!track) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;

      if (track.scrollLeft >= maxScroll) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += 1.2;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <div className="w-full bg-[#f1ffef] text-[#333]" style={{ cursor: `url(${cursorIcon}) 8 8, auto` }}>
      <Navbar
        items={navItems}
        ctaLabel="Donate Now"
        ctaHref="https://www.unveilingnigeria.ng/donate"
      />

      <main className="mx-auto w-[min(100%,1360px)]">
        <section className="relative mx-auto max-w-[1400px] overflow-hidden bg-[linear-gradient(180deg,rgba(241,255,239,0.96),rgba(168,212,184,0.15))] px-4 pb-4 pt-8 md:px-6 lg:px-8">
          <Parallax speed={-0.1} className="absolute inset-0 z-0 opacity-80 pointer-events-none">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_center,rgba(2,88,54,0.14),transparent_65%)]" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(240,182,32,0.22),transparent_63%)]" />
          </Parallax>

          <div className="relative z-10 mx-auto grid max-w-[1250px] items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal direction="left" duration={900} className="max-w-[620px] justify-self-center lg:justify-self-start lg:pl-4">
              <p className="mb-4 inline-flex items-center gap-4 text-[clamp(1.4rem,2vw,2.25rem)] font-bold italic tracking-[-0.04em] text-[#025836]">
                <span
                  className="inline-block h-[2px] w-16 rounded-full bg-[#025836]/70"
                  aria-hidden="true"
                />
                Rediscovering Nigeria
              </p>

              <h1 className="text-[clamp(3.1rem,6vw,7rem)] font-black leading-[1] tracking-[-0.08em] text-[#0b1511]">
                Change <span className="text-[#f0b620] drop-shadow-sm">Begins</span>
                <br />
                with Us
              </h1>

              <p className="mt-6 max-w-[520px] text-base leading-8 text-[#3d514c] md:text-lg">
                Together we are shaping Nigeria&apos;s narrative, celebrating its rich heritage, and empowering its people to thrive. Join us in unveiling the true potential of our nation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  className="btn-bounce inline-flex items-center gap-3 rounded-full bg-[#025836] px-6 py-3.5 text-base font-black text-white shadow-[0_12px_28px_rgba(2,88,54,0.28)] transition-all"
                  href="https://www.unveilingnigeria.ng/about-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discover Now
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffd700] text-[#014421] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  className="btn-bounce flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#ffd700] to-[#e29f1d] text-xl text-[#014421] shadow-[0_12px_25px_rgba(245,177,61,0.35)] transition-all"
                  href="https://www.unveilingnigeria.ng/donate"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Make a donation"
                >
                  ▶
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" duration={900} delay={150} className="relative z-10 flex items-center justify-center">
              <div className="relative w-full animate-float-slow">
                <img
                  src={mapImage}
                  alt="Nigeria map illustration"
                  className="w-full object-cover drop-shadow-[0_24px_45px_rgba(2,88,54,0.18)]"
                />

                {/* Floating Badge 1: 230M People */}
                <div className="animate-bounce-gentle absolute -top-3 left-2 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2 shadow-[0_12px_28px_rgba(2,88,54,0.15)] backdrop-blur-md sm:left-6 md:left-8">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f8ed] text-sm shadow-inner">💚</span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-[#025836]">Our People</p>
                      <p className="text-xs font-black text-[#0b1511]">230M+ Citizens</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: 250+ Ethnic Groups */}
                <div className="animate-float-delayed absolute -bottom-3 right-2 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2 shadow-[0_12px_28px_rgba(240,182,32,0.2)] backdrop-blur-md sm:right-6 md:right-8">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff4ce] text-sm shadow-inner">✨</span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-[#977300]">Heritage</p>
                      <p className="text-xs font-black text-[#0b1511]">250+ Ethnic Groups</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 3: Civic Movement */}
                <div className="animate-pulse-soft absolute right-0 top-1/3 hidden rounded-2xl border border-white/80 bg-[#025836] px-3.5 py-2 text-white shadow-[0_12px_28px_rgba(2,88,54,0.25)] sm:flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f0b620] animate-ping" />
                  <span className="text-xs font-black tracking-wide">Rise Up Patriots</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div
            className="pointer-events-none absolute -bottom-6 left-8 z-0 opacity-80"
            aria-hidden="true"
          >
            <div className="flex gap-3 text-[2.5rem] text-[#025836]/20">
              <span className="animate-bounce-gentle">✋</span>
              <span className="animate-float-slow">🤝</span>
              <span className="animate-float-delayed text-red-500/30">❤</span>
            </div>
          </div>

          {/* Scroll Down Hint with Bounce */}
          <div className="relative z-10 mt-6 flex flex-col items-center justify-center pb-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#025836]/60">
              Scroll To Explore
            </span>
            <div className="mt-1 text-sm font-bold text-[#025836] animate-bounce">
              ↓
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-none px-0 py-16 md:px-6 xl:px-8">
          <Parallax speed={-0.12} className="pointer-events-none absolute left-[-70px] top-12 h-56 w-56 opacity-90">
            <div
              aria-hidden="true"
              className="h-full w-full"
              style={{ backgroundImage: `url(${brushStrokeGreen})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
          </Parallax>
          <Parallax speed={0.16} className="pointer-events-none absolute right-[-10px] top-10 h-36 w-36 opacity-70">
            <div
              aria-hidden="true"
              className="h-full w-full"
              style={{ backgroundImage: `url(${yellowRings})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
          </Parallax>
          <Parallax speed={-0.1} className="pointer-events-none absolute bottom-8 left-10 h-20 w-20 opacity-80">
            <div
              aria-hidden="true"
              className="h-full w-full animate-bounce-gentle"
              style={{ backgroundImage: `url(${heartDecoration})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            />
          </Parallax>

          <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal direction="left" duration={850} className="relative mx-auto w-full max-w-[560px]">
              <div className="relative overflow-hidden rounded-[42px] bg-none p-4">
                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                    <div className="group overflow-hidden rounded-[32px] bg-[#dfe9e1] shadow-[0_12px_30px_rgba(1,68,33,0.08)]">
                      <img src={aboutHero1} alt="Children looking through a window" className="h-72 w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" />
                    </div>
                    <div className="group overflow-hidden rounded-[32px] bg-[#dfe9e1] shadow-[0_12px_30px_rgba(1,68,33,0.08)]">
                      <img src={aboutHero2} alt="A child smiling" className="h-72 w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" />
                    </div>
                  </div>

                  <div className="group overflow-hidden rounded-[32px] bg-[#dfe9e1] shadow-[0_12px_30px_rgba(1,68,33,0.08)]">
                    <img src={aboutHero3} alt="Children in a boat" className="h-60 w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" duration={850} delay={150} className="max-w-[620px] lg:justify-self-end">
              <h2 className="text-[clamp(2.1rem,3vw,3.5rem)] font-black leading-[0.95] tracking-[-0.07em] text-[#0c1413]">
                Rediscovering Nigeria
                <br />
                <span className="text-[#025836]">By Nigerians</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#425952]">
                Unveiling and Rebranding Nigeria Initiative is a nonprofit organization committed to showcasing Nigeria’s true potential; its people, heritage, and promise. Using technology and media, we present a vibrant and dynamic Nigeria to the world.
              </p>

              <div className="mt-4 space-y-6">
                <div className="group flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f6ec] text-sm font-black text-[#025836] transition-transform duration-300 group-hover:scale-110">
                    ✓
                  </span>
                  <div>
                    <h3 className="text-[1.5rem] font-black leading-none tracking-[-0.05em] text-[#0c1413]">Community Engagement</h3>
                    <p className="mt-2 max-w-[430px] text-lg leading-7 text-[#4d685f]">
                      Bringing life-saving community support, education, and hope to vulnerable families and youths across the country.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff4ce] text-sm font-black text-[#856500] transition-transform duration-300 group-hover:scale-110">
                    ♥
                  </span>
                  <div>
                    <h3 className="text-[1.5rem] font-black leading-none tracking-[-0.05em] text-[#0c1413]">Donation Making</h3>
                    <p className="mt-2 max-w-[430px] text-lg leading-7 text-[#4d685f]">
                      Our success stories highlight the real-life impact of your donations and the resilience of those we help.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.unveilingnigeria.ng/about-us"
                target="_blank"
                rel="noreferrer"
                className="btn-bounce mt-6 inline-flex items-center gap-3 rounded-full bg-[#0a7a5d] px-6 py-4 text-lg font-black text-white shadow-[0_12px_24px_rgba(10,122,93,0.22)] transition-all"
              >
                About More
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          </div>

          <div className="relative z-10 mx-auto mt-12 grid max-w-[1200px] grid-cols-2 gap-8 border-t border-[#d5d9d3] pt-8 md:grid-cols-4">
            {facts.map((fact, index) => (
              <Reveal key={fact.label} direction="up" delay={index * 100}>
                <div className="group text-center transition-transform duration-300 hover:-translate-y-1 md:text-left">
                  <strong className="block text-[clamp(2rem,3vw,3.5rem)] font-black tracking-[-0.08em] text-[#0a7a5d] transition-transform duration-300 group-hover:scale-105">
                    {fact.value}
                  </strong>
                  <span className="mt-2 block text-sm font-medium text-[#425952] md:text-base">
                    {fact.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-8 px-4 pb-16 md:grid-cols-2 md:px-6">
          <Reveal direction="left" duration={850} className="overflow-hidden rounded-[28px] border border-[#dfe9e1] bg-[#eef7f0]">
            <img
              src={storyImage}
              alt="URNI impact story at Wassa IDP camp"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>

          <Reveal direction="right" duration={850} delay={150} className="flex flex-col justify-center rounded-[28px] bg-white p-8 shadow-[0_18px_45px_rgba(1,68,33,0.06)]">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#025836]">
              Our impact stories
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#0b1511]">
              Take a Leap of Love for Nigeria
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4b5d58]">
              On Valentine&apos;s Day, URNI visited the Wassa IDP Camp, reaching
              out to displaced families with gifts, encouragement, and acts of
              kindness. The visit was a reminder that true love goes beyond
              celebration and is found in giving hope and compassion to those in
              need.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f4fbf5] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <strong className="block text-lg font-black text-[#014421]">
                  Community
                </strong>
                <span className="mt-1 block text-sm text-[#4b5d58]">
                  Lives touched with compassion
                </span>
              </div>
              <div className="rounded-2xl bg-[#fff8e7] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <strong className="block text-lg font-black text-[#014421]">
                  Outreach
                </strong>
                <span className="mt-1 block text-sm text-[#4b5d58]">
                  Volunteer-led support
                </span>
              </div>
            </div>
            <a
              className="btn-bounce mt-6 inline-flex w-fit rounded-full border border-[#dfe9e1] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#025836] transition hover:border-[#025836] hover:bg-[#f1ffef]"
              href="https://www.unveilingnigeria.ng/about-us"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </Reveal>
        </section>

        <section className="px-4 pb-16 md:px-6">
          <Reveal direction="up" className="mb-8 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#025836]">
              Volunteer with us
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#0b1511]">
              Join Our Volunteer Network
            </h2>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg leading-8 text-[#4b5d58]">
              Our passionate volunteers use their skills to drive meaningful
              change and create lasting impact across Nigeria. Join us to give
              back to the society, grow, and connect with like-minded individuals.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {volunteers.map((person, index) => (
              <Reveal key={person.name} direction="up" delay={index * 150}>
                <article
                  className="card-bounce-hover group overflow-hidden rounded-[26px] border border-[#dfe9e1] bg-white shadow-[0_16px_35px_rgba(1,68,33,0.06)] hover:border-[#025836]/40"
                >
                  <div className="overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-90 w-full object-cover transition duration-700 group-hover:scale-108"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black text-[#0b1511] transition-colors duration-300 group-hover:text-[#025836]">
                      {person.name}
                    </h3>
                    <span className="mt-2 block text-sm font-bold text-[#025836]">
                      {person.role}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-4 pb-16 md:px-6">
          <Reveal direction="up" className="mb-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#025836]">
              Featured News &amp; Blogs
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#0b1511]">
              Stories shaping Nigeria&apos;s future
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
            <Reveal direction="left" duration={800} className="group overflow-hidden rounded-[30px] bg-white shadow-[0_18px_45px_rgba(1,68,33,0.06)] card-bounce-hover">
              <div className="overflow-hidden">
                <img
                  src="https://www.unveilingnigeria.ng/storage/app/media/news/RISE%20UP%20PATRIOTS%20CONFERENCE%20NEWS.png"
                  alt="Rise Up Patriots Conference"
                  className="h-65 w-full object-cover transition duration-700 group-hover:scale-108"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-[#eef7f0] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#025836]">
                  News
                </span>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[#0b1511] transition-colors duration-300 group-hover:text-[#025836]">
                  URNI announces the Rise Up Patriot Conference 2.0
                </h3>
              </div>
            </Reveal>

            {highlights.map((item, index) => (
              <Reveal key={item.label} direction="up" delay={index * 120}>
                <div
                  className={`card-bounce-hover group rounded-[30px] p-6 shadow-[0_18px_45px_rgba(1,68,33,0.06)] ${item.tone === "gold" ? "bg-[#fff4ce]" : item.tone === "green" ? "bg-[#e9f7ef]" : "bg-[#ffffff]"}`}
                >
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-[#025836]">
                    {item.label}
                  </div>
                  <strong className="mt-5 block text-3xl font-black tracking-tighter text-[#0b1511] transition-transform duration-300 group-hover:scale-105">
                    {item.total}
                  </strong>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#013c2d] px-4 py-12 text-white md:px-6">
          <Parallax speed={0.14} className="pointer-events-none absolute -right-16 top-0 h-52 w-72 rotate-20 rounded-full bg-[#f0b620] opacity-95 blur-[1px]">
            <div className="h-full w-full" />
          </Parallax>
          <div
            className="absolute inset-0 opacity-80"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Reveal direction="left">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#f0b620]">
                Event &amp; Program
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
                Our Upcoming Events
              </h2>
            </Reveal>

            <Reveal direction="right">
              <a
                className="btn-bounce inline-flex items-center rounded-full bg-[#d3f0e4] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#013c2d] transition hover:bg-white"
                href="https://www.unveilingnigeria.ng/contact"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us Now{" "}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <div
            ref={eventTrackRef}
            className="relative z-10 mx-auto mt-8 flex max-w-7xl gap-5 overflow-x-auto pb-2 md:overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {events.concat(events).map((event, index) => (
              <Link
                key={`${event.id}-${index}`}
                to={`/events/${event.id}`}
                className="group relative block h-90 w-70 shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f0b620]/60 md:-skew-x-6 md:w-75"
                aria-label={`View ${event.title}`}
              >
                <div className="h-full w-full md:skew-x-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover grayscale contrast-125 brightness-[0.8] transition duration-500 group-hover:scale-108 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#011d12]/85 via-[#011d12]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[0.7rem] font-black uppercase tracking-[0.12em] text-white/90">
                      {event.date}
                    </span>
                    <h3 className="mt-3 text-xl font-black tracking-tighter text-white transition-colors duration-300 group-hover:text-[#f0b620] md:text-2xl">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 md:px-6">
          <Reveal direction="up" className="mb-8 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#025836]">
              Interesting facts
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#0b1511]">
              Facts &amp; figures about Nigeria
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-4">
            {["250+", "230M", "1960", "500+"].map((value, index) => (
              <Reveal key={value} direction="up" delay={index * 100}>
                <div
                  className="card-bounce-hover group rounded-[28px] border border-[#dfe9e1] bg-white p-6 shadow-[0_16px_35px_rgba(1,68,33,0.05)] hover:border-[#025836]/40"
                >
                  <span className="mb-4 inline-flex text-sm font-black uppercase tracking-[0.2em] text-[#025836]">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl font-black tracking-tighter text-[#0b1511] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#025836]">
                    {value}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#50625e]">
                    {index === 0 &&
                      "Ethnic groups, including the Hausa, Yoruba, and Igbo."}
                    {index === 1 && "Nigeria has a population of 230 million."}
                    {index === 2 &&
                      "Nigeria gained independence on 1st of October, 1960."}
                    {index === 3 &&
                      "Native languages are spoken across the country."}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal direction="zoom">
          <section className="mx-4 my-8 flex flex-col items-center justify-between gap-6 rounded-[30px] bg-[#0b1511] px-6 py-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] md:mx-6 md:flex-row md:px-10">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ffd700]">
                Support Nigeria&apos;s future
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tighter text-white md:text-4xl">
                Are you passionate about Nigeria&apos;s progress?
              </h2>
            </div>
            <a
              className="btn-bounce inline-flex items-center rounded-full bg-[#025836] px-7 py-3.5 text-base font-black text-white shadow-[0_12px_24px_rgba(2,88,54,0.35)] transition-all hover:bg-[#037246]"
              href="https://www.unveilingnigeria.ng/donate"
              target="_blank"
              rel="noreferrer"
            >
              Make a Donation
            </a>
          </section>
        </Reveal>

        <section className="px-4 pb-16 md:px-6">
          <Reveal direction="up" className="mb-8 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#025836]">
              Latest stories
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#0b1511]">
              Featured News &amp; Blogs
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal key={article.title} direction="up" delay={index * 100}>
                <article
                  className="card-bounce-hover group overflow-hidden rounded-[28px] border border-[#dfe9e1] bg-white shadow-[0_16px_35px_rgba(1,68,33,0.06)] hover:border-[#025836]/40"
                >
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-55 w-full object-cover transition duration-700 group-hover:scale-108"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex rounded-full bg-[#f1ffef] px-2.5 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#025836]">
                      {article.date}
                    </span>
                    <h3 className="mt-4 text-xl font-black tracking-[-0.04em] text-[#0b1511] transition-colors duration-300 group-hover:text-[#025836]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm font-bold text-[#666]">
                      {article.views} views
                    </p>
                    <a
                      className="btn-bounce mt-5 inline-flex rounded-full border border-[#dfe9e1] px-4 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-[#025836] transition hover:border-[#025836] hover:bg-[#f1ffef]"
                      href={article.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      {/* ========================================================
          SPONSORS CAROUSEL: directly before the footer
          ======================================================== */}
      <Reveal direction="up" duration={800}>
        <SponsorCarousel />
      </Reveal>

      <Footer
        description="We support community-led action, youth empowerment and inclusive development that helps people thrive with dignity."
        phone="+234 800 000 0000"
        email="hello@urni.org"
        organisationName="URNI"
        quickLinks={["About", "Impact", "Programmes", "Stories"]}
        programmes={["Education", "Health", "Women & Youth", "Resilience"]}
        socials={[
          { label: "Instagram", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "X", href: "#" },
        ]}
      />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-all duration-700 ${
          isLoading ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-live="polite"
        aria-busy={isLoading}
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className={`origin-center transition-all duration-700 ${
              isLoading ? "scale-100 opacity-100" : "scale-[1.28] opacity-0"
            }`}
          >
            <img
              src={logoImage}
              alt="URNI logo"
              className="h-24 w-auto md:h-32"
            />
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
