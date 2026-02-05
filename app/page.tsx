import type { CSSProperties } from 'react'
import { WORK, RESEARCH, CONTACT } from './lib/constants'
import Footer from './components/Footer'
import Link from './components/ui/Link'
import Section from './components/ui/Section'

const linkStyle = {
  '--hit-top': '1rem',
  '--hit-right': '1rem',
  '--hit-bottom': '1rem',
  '--hit-left': '1rem',
} as CSSProperties

const bodyTextClass = 'text-[0.95rem] leading-[1.7] font-light text-left ml-6'
const inlineLinkClass = 'font-normal no-underline relative text-[#666] dark:text-[#bbb] focus-corners link-hit'

function Intro() {
  return (
    <>
      <h1
        className="text-[2rem] mb-8 font-normal text-left font-['Sohne',ui-sans-serif]"
        style={{ letterSpacing: '-0.06em' }}
      >
        Harley Zhang
      </h1>
      <p className={bodyTextClass}>
        I'm a product-focused software and design engineer. I go to Waterloo
        and study Software Engineering. I'm originally from Toronto.
      </p>
    </>
  )
}

function WorkSection() {
  const [current, ...previous] = WORK

  return (
    <Section title="Work">
      <p className={bodyTextClass}>
        I'm currently at{' '}
        <Link href={current.href} external className={inlineLinkClass} style={linkStyle}>
          {current.name}
        </Link>
        . I previously worked at{' '}
        {previous.map((job, i) => (
          <span key={job.name}>
            <Link
              href={job.href}
              external
              className={job.note ? 'font-light no-underline relative text-[#666] dark:text-[#bbb] focus-corners link-hit' : inlineLinkClass}
              style={linkStyle}
            >
              {job.name}
            </Link>
            {job.note && `, where I was the ${job.note}`}
            {i < previous.length - 1 ? ' and ' : '.'}
          </span>
        ))}
      </p>
    </Section>
  )
}

function ResearchSection() {
  return (
    <Section title="Research">
      <ul className="text-left list-none pl-0">
        {RESEARCH.map((item) => (
          <li key={item.institution} className={`mb-5 ${bodyTextClass}`}>
            <span className="font-normal">{item.institution}</span> — {item.topic}
            {item.paper && <ResearchPaper href={item.paper} />}
          </li>
        ))}
      </ul>
    </Section>
  )
}

function ResearchPaper({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center border-0 rounded-[2px] py-[6px] px-3 mt-2 focus-corners"
      style={{
        '--corner-inset': '0',
        '--hit-top': '1rem',
        '--hit-right': '1rem',
        '--hit-bottom': '1rem',
        '--hit-left': '1rem',
      } as CSSProperties}
    >
      <div>
        <span className="font-normal no-underline relative text-[#666] dark:text-[#bbb]">
          Computational Modeling of Climate Change Impacts on Sagebrush Ecosystems
        </span>
        <br />
        <small
          className="text-xs font-light font-['SohneMono'] ml-0"
          style={{ letterSpacing: '0' }}
        >
          RYAN DOUGHERTY, HARLEY ZHANG
        </small>
      </div>
    </a>
  )
}

function ContactSection() {
  return (
    <Section title="Contact">
      <p className={bodyTextClass}>{CONTACT.email}</p>
    </Section>
  )
}

export default function Home() {
  return (
    <main className="max-w-[640px] w-full mx-auto p-4 pt-[clamp(2rem,15vw,8rem)] pb-24">
      <Intro />
      <WorkSection />
      <ResearchSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
