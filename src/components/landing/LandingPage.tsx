import { Navbar } from './Navbar/Navbar'
import { Hero } from './Hero/Hero'
import { Footer } from './Footer/Footer'

export function LandingPage() {
  return (
    <div className="bg-[#f1ffef] font-['Nunito',sans-serif] text-[#19352f]">
      <Navbar
        items={['Home', 'About Us', 'Programmes', 'Impact', 'Stories', 'Contact Us']}
        ctaLabel="Donate Now"
        ctaHref="https://www.unveilingnigeria.ng/donate"
      />

      <Hero
        tagline="Who We Are"
        headlineStart="Showcasing"
        headlineAccent="Nigeria"
        headlineEnd="in her true light"
        description="Unveiling and Rebranding Nigeria Initiative is a nonprofit organization committed to showcasing Nigeria’s true potential; its people, heritage, and promise. Using technology and media, we present a vibrant and dynamic Nigeria to the world."
        primaryCta="Learn More"
      />

      <Footer
        description="We support community-led action, youth empowerment and inclusive development that helps people thrive with dignity."
        phone="+234 800 000 0000"
        email="hello@urni.org"
        organisationName="URNI"
        quickLinks={['About', 'Impact', 'Programmes', 'Stories']}
        programmes={['Education', 'Health', 'Women & Youth', 'Resilience']}
        socials={[
          { label: 'Instagram', href: '#' },
          { label: 'LinkedIn', href: '#' },
          { label: 'X', href: '#' },
        ]}
      />
    </div>
  )
}
