import deMiposLogo from "../../assets/DE MIPOS LUXURY SUITE.png";
import eagleNetLogo from "../../assets/EAGLENET LOGISTICS.png";
import ipnxLogo from "../../assets/IPNX.png";
import modernShelterLogo from "../../assets/MODERN SHELTER.png";
import noaLogo from "../../assets/NOA 1.png";
import ariseNewsLogo from "../../assets/ARISE NEWS.png";
import cgsLogo from "../../assets/CGS-logo.png";
import channelsLogo from "../../assets/CHANNELS-logo.png";

interface Sponsor {
  name: string;
  category: string;
  logo: string;
  scale?: string;
}

const SPONSORS: Sponsor[] = [
  {
    name: "De Mipos Luxury Suite",
    category: "Hospitality & Tourism",
    logo: deMiposLogo,
    scale: "scale-100",
  },
  {
    name: "EagleNet Logistics",
    category: "Logistics & Supply Chain",
    logo: eagleNetLogo,
    scale: "scale-105",
  },
  {
    name: "ipNX Nigeria",
    category: "Broadband & ICT",
    logo: ipnxLogo,
    scale: "scale-95",
  },
  {
    name: "Modern Shelter",
    category: "Real Estate & Infrastructure",
    logo: modernShelterLogo,
    scale: "scale-100",
  },
  {
    name: "National Orientation Agency",
    category: "Government Partner",
    logo: noaLogo,
    scale: "scale-100",
  },
  {
    name: "ARISE News",
    category: "Broadcasting & Media",
    logo: ariseNewsLogo,
    scale: "scale-95",
  },
  {
    name: "CGS",
    category: "Strategic Services",
    logo: cgsLogo,
    scale: "scale-105",
  },
  {
    name: "Channels Television",
    category: "Media & Journalism",
    logo: channelsLogo,
    scale: "scale-105",
  },
];

export function SponsorCarousel() {
  // Duplicate the sponsors array to guarantee continuous, seamless infinite loop
  const duplicatedSponsors = [...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <section className="relative w-full overflow-hidden py-10 md:py-16">
      {/* Background glow and subtle mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-44 w-3/4 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(2,88,54,0.08),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#025836]/20 bg-white/70 px-4 py-1.5 shadow-[0_4px_14px_rgba(2,88,54,0.06)] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#025836] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#025836]">
              Strategic Partners &amp; Sponsors
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[#0b1511] md:text-3xl">
            Trusted by Leaders Powering Nigeria&apos;s Renaissance
          </h3>
          <p className="mt-2 max-w-xl text-sm font-medium text-[#4b5d58] md:text-base">
            Collaborating with forward-thinking organizations committed to amplifying national pride, cultural heritage, and youth empowerment.
          </p>
        </div>
      </div>

      {/* Marquee wrapper with gradient fade edges */}
      <div className="group relative w-full overflow-hidden py-4">
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f1ffef] via-[#f1ffef]/80 to-transparent sm:w-28 md:w-40" />

        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f1ffef] via-[#f1ffef]/80 to-transparent sm:w-28 md:w-40" />

        {/* Infinite Sliding Track */}
        <div className="flex w-max animate-marquee-infinite items-center gap-6 group-hover:[animation-play-state:paused]">
          {duplicatedSponsors.map((sponsor, idx) => (
            <div
              key={`${sponsor.name}-${idx}`}
              className="group/card relative flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-[#dfe9e1] bg-white/90 p-4 shadow-[0_8px_24px_rgba(1,68,33,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#025836]/40 hover:bg-white hover:shadow-[0_16px_36px_rgba(2,88,54,0.12)] md:h-28 md:w-64"
            >
              <div className="flex h-full w-full items-center justify-center p-2">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className={`max-h-12 w-auto max-w-[85%] object-contain filter transition-all duration-300 group-hover/card:scale-108 ${sponsor.scale || "scale-100"}`}
                  loading="lazy"
                />
              </div>

              {/* Tooltip badge on hover */}
              <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                <span className="whitespace-nowrap rounded-md bg-[#025836] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                  {sponsor.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
