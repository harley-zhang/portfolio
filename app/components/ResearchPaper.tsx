export default function ResearchPaper() {
  return (
    <a
      href="/sagebrush.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center border-0 rounded-[2px] py-[6px] px-3 mt-2 focus-corners"
      style={
        {
          '--corner-inset': '0',
          '--hit-top': '1rem',
          '--hit-right': '1rem',
          '--hit-bottom': '1rem',
          '--hit-left': '1rem',
        } as React.CSSProperties
      }
    >
      <div>
        <span className="font-normal no-underline relative text-[#666] dark:text-[#bbb]">
          Computational Modeling of Climate Change Impacts on Sagebrush
          Ecosystems
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
