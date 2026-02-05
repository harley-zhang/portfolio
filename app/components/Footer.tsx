import { LINKS } from '../lib/constants'
import Button from './ui/Button'
import KeyboardShortcuts from './KeyboardShortcuts'

export default function Footer() {
  return (
    <>
      <KeyboardShortcuts />
      <footer className="fixed bottom-8 left-8 right-8 z-50">
        <div className="flex flex-wrap gap-[2px]">
          <Button
            href={LINKS.github}
            external
            hitArea={{
              '--hit-top': '1rem',
              '--hit-left': '1rem',
              '--hit-bottom': '1rem',
            }}
          >
            [G] GITHUB
          </Button>
          <Button
            href={LINKS.linkedin}
            external
            hitArea={{
              '--hit-top': '1rem',
              '--hit-bottom': '1rem',
            }}
          >
            [L] LINKEDIN
          </Button>
          <Button
            href={LINKS.twitter}
            external
            hitArea={{
              '--hit-top': '1rem',
              '--hit-right': '1rem',
              '--hit-bottom': '1rem',
            }}
          >
            [X] TWITTER
          </Button>
        </div>
      </footer>
    </>
  )
}
