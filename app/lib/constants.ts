export const LINKS = {
  github: 'https://github.com/harley-zhang',
  linkedin: 'https://www.linkedin.com/in/harley-zhang/',
  twitter: 'https://x.com/harleyhzhang',
} as const

type WorkItem = {
  name: string
  href: string
  current?: boolean
  note?: string
}

export const WORK: WorkItem[] = [
  { name: 'Polymarket', href: 'https://polymarket.com/', current: true },
  { name: 'Shopify', href: 'https://shopify.com/' },
  { name: 'ThirdLayer', href: 'https://thirdlayer.inc/', note: 'first engineer' },
]

type ResearchItem = {
  institution: string
  topic: string
  paper?: string
}

export const RESEARCH: ResearchItem[] = [
  { institution: 'Cornell Tech', topic: 'LLM geocoding and mapping' },
  { institution: 'University of California, Berkeley', topic: '3D brain viewing models' },
  { institution: 'Yale University', topic: 'Climate simulation modelling', paper: '/sagebrush.pdf' },
  { institution: 'University of Toronto', topic: 'ML classification for satellite imagery' },
]

export const CONTACT = {
  email: 'harleyzhang06 (at) gmail (dot) com',
} as const
