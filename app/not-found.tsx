import Link from 'next/link'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <main className="max-w-[640px] w-full mx-auto p-4 pt-[clamp(4rem,20vh,10rem)] pb-24 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="flex items-center justify-center mb-8 select-none">
        <span
          className="text-[6rem] font-medium leading-none font-['Sohne',ui-sans-serif]"
          style={{ letterSpacing: '-0.06em' }}
        >
          4
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-[4.5rem] h-[4.5rem] -mx-3 relative"
          style={{ top: '0.15rem' }}
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="28" fill="#34B989" />
        </svg>
        <span
          className="text-[6rem] font-medium leading-none font-['Sohne',ui-sans-serif]"
          style={{ letterSpacing: '-0.06em' }}
        >
          4
        </span>
      </div>

      <Link
        href="/"
        className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] inline-block transition-all duration-200 uppercase focus-corners"
        style={{ letterSpacing: '0' }}
      >
        ← BACK TO HOME
      </Link>

      <Footer />
    </main>
  )
}
