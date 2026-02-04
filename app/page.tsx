import ExternalLink from './components/ExternalLink'
import Footer from './components/Footer'
import ResearchPaper from './components/ResearchPaper'

const linkStyle = {
  '--hit-top': '1rem',
  '--hit-right': '1rem',
  '--hit-bottom': '1rem',
  '--hit-left': '1rem',
} as React.CSSProperties

function Intro() {
  return (
    <>
      <h1
        className="text-[2rem] mb-8 font-normal text-left font-['Sohne',ui-sans-serif]"
        style={{ letterSpacing: '-0.06em' }}
      >
        Harley Zhang
      </h1>
      <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6">
        I'm a product focused software and design engineer. I go to Waterloo
        and study Software Engineering.
      </p>
      <h2
        className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase"
        style={{ letterSpacing: '0' }}
      >
        / Work
      </h2>
      <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6">
        I'm currently at{' '}
        <ExternalLink
          href="https://polymarket.com/"
          className="font-normal no-underline relative text-[#666] dark:text-[#bbb] focus-corners link-hit"
          style={linkStyle}
        >
          Polymarket
        </ExternalLink>
        . I previously worked at{' '}
        <ExternalLink
          href="http://shopify.com/"
          className="font-normal no-underline relative text-[#666] dark:text-[#bbb] focus-corners link-hit"
          style={linkStyle}
        >
          Shopify
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink
          href="http://thirdlayer.inc/"
          className="font-light no-underline relative text-[#666] dark:text-[#bbb] focus-corners link-hit"
          style={linkStyle}
        >
          ThirdLayer
        </ExternalLink>
        , where I was the first engineer.
      </p>
    </>
  )
}

function ResearchSection() {
  return (
    <section>
      <h2
        className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase"
        style={{ letterSpacing: '0' }}
      >
        / Research
      </h2>
      <ul className="text-left list-none pl-0">
        <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6">
          <span className="font-normal">Cornell Tech</span> — LLM geocoding and
          mapping
        </li>
        <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6">
          <span className="font-normal">
            University of California, Berkeley
          </span>{' '}
          — 3D brain viewing models
        </li>
        <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6">
          <span className="font-normal">Yale University</span> — Climate
          simulation modelling
          <ResearchPaper />
        </li>
        <li className="mb-5 text-[0.95rem] leading-[1.7] font-light text-left ml-6">
          <span className="font-normal">University of Toronto</span> — ML
          classification for satellite imagery
        </li>
      </ul>
    </section>
  )
}

function ContactSection() {
  return (
    <section>
      <h2
        className="text-xs mt-12 mb-3 font-light text-left font-['SohneMono'] uppercase"
        style={{ letterSpacing: '0' }}
      >
        / Contact
      </h2>
      <p className="text-[0.95rem] leading-[1.7] font-light text-left ml-6">
        harleyzhang06 (at) gmail (dot) com
      </p>
    </section>
  )
}

export default function Home() {
  return (
    <main className="max-w-[640px] w-full mx-auto p-4 pt-[clamp(4rem,20vh,10rem)] pb-24">
      <Intro />
      <ResearchSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
