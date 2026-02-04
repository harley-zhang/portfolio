import KeyboardShortcuts from './KeyboardShortcuts'

const LINKS = {
  github: 'https://github.com/harley-zhang',
  linkedin: 'https://www.linkedin.com/in/harley-zhang/',
  twitter: 'https://x.com/harleyhzhang',
} as const

export default function Footer() {
  return (
    <>
      <KeyboardShortcuts />
      <footer className="fixed bottom-4 left-4 right-4 z-50">
        <div className="flex flex-wrap gap-[2px]">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase focus-corners"
            style={
              {
                letterSpacing: '0',
                '--hit-top': '1rem',
                '--hit-left': '1rem',
                '--hit-bottom': '1rem',
              } as React.CSSProperties
            }
          >
            [G] GITHUB
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase focus-corners"
            style={
              {
                letterSpacing: '0',
                '--hit-top': '1rem',
                '--hit-bottom': '1rem',
              } as React.CSSProperties
            }
          >
            [L] LINKEDIN
          </a>
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['SohneMono'] text-xs font-light text-inherit no-underline bg-black/10 dark:bg-white/10 backdrop-blur-md py-[5px] px-2 rounded-[2px] mr-0 inline-block transition-all duration-200 uppercase focus-corners"
            style={
              {
                letterSpacing: '0',
                '--hit-top': '1rem',
                '--hit-right': '1rem',
                '--hit-bottom': '1rem',
              } as React.CSSProperties
            }
          >
            [X] TWITTER
          </a>
        </div>
      </footer>
    </>
  )
}
