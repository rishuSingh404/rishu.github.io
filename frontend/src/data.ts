export const PUBLICATION_SUBTOPICS = [
  { id: 'multimodal-understanding', label: 'Multimodal Understanding' },
  { id: 'interpretability', label: 'Interpretability & Safety' },
  { id: 'agentic', label: 'Agentic AI' },
  { id: 'nlp', label: 'NLP' },
] as const

export type PublicationSubtopicId = (typeof PUBLICATION_SUBTOPICS)[number]['id']

export type Publication = {
  title: string
  authors: string
  venue: string
  year: number
  summary: string
  tags: string[]
  subtopics: PublicationSubtopicId[]
  links: { label: string; href: string }[]
  image?: string
  imageAlt?: string
  award?: string
}

export type EducationItem = {
  period: string
  school: string
  degree: string
  logo?: string
}

export type InternshipItem = {
  period: string
  org: string
  role: string
  logo?: string
}

export type ProfileLinkVariant = 'scholar' | 'github' | 'cv' | 'email' | 'twitter'

export type ProfileLink = {
  label: string
  href: string
  variant: ProfileLinkVariant
}

export const profile = {
  photo: '/rishu.jpeg',
  photoAlt: 'Rishu Kumar Singh',
  name: 'Rishu Kumar Singh',
  role: 'Undergraduate Researcher · IIT Patna',
  tagline:
    'Multimodal AI · Mechanistic Interpretability · AI Safety',
  location: 'Patna, India',
  email: 'rishu_2301ee36@iitp.ac.in',
  bio: `Third-year undergraduate at IIT Patna, working on interpretability and explainability of vision-language models, multimodal reasoning, and agentic AI.`,
  contactBlurb: `I'm always happy to discuss research ideas and potential collaborations — feel free to reach out.`,
  links: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=sIy2A7oAAAAJ&hl=en',
      variant: 'scholar',
    },
    { label: 'GitHub', href: 'https://github.com/rishuSingh404', variant: 'github' },
    { label: 'Email', href: 'mailto:rishu_2301ee36@iitp.ac.in', variant: 'email' },
  ] satisfies ProfileLink[],
}

export const aboutParagraphs = [
  `I am a third-year undergraduate at IIT Patna working across two labs: the **AI-NLP-ML Research Lab** under Prof. Sriparna Saha, where I focus on multimodal reasoning and conversational AI; and the **Video Surveillance and Biomedical Signal Processing Lab** under Prof. Maheshkumar H. Kolekar, where I work on interpretability and explainability of vision-language models in medical settings.`,
  `My published work spans Mixture-of-Experts systems for fine-grained complaint understanding, severity detection in multi-turn dialogues, and long-horizon multimodal agents for healthcare GUI automation. I have work accepted at **AAAI 2026**, **ECIR 2026**, and **CVPR 2026 Findings**, with ongoing research under review at **NeurIPS 2026** and **ICML 2026**.`,
  `My broader interest lies in making AI systems **interpretable, safe, and reliable** — understanding how large multimodal models represent knowledge and failure internally, how we can intervene at the representation level to improve their behavior, and how causal concept-grounding can make predictions auditable. I am especially drawn to mechanistic interpretability, activation steering, and the design of systems that can articulate the reasoning behind their decisions.`,
]

export const heroFocus = {
  title: 'Research Statement',
  headline: 'Building Transparent and Steerable Multimodal AI',
  intro: {
    preamble:
      'I build and study multimodal AI systems that are not just accurate but **transparent and steerable**. My research spans two connected threads:',
    pipeline: 'Multimodal Reasoning → Representation Analysis → Interpretability → Behavioral Steering',
    afterPipeline: `On the **application side**, I design Mixture-of-Experts architectures for multimodal and conversational reasoning, and agentic frameworks for long-horizon task automation in high-stakes settings. On the **foundations side**, I investigate how vision-language models encode and route information internally — how failure modes manifest in representation space, how targeted interventions can repair model behavior, and how causal concept-grounding can make predictions faithful and auditable.`,
  },
  paragraphs: [
    `A recurring theme across my work is **expert routing under complexity**: whether it's routing modality-specific experts for multi-turn complaint dialogues or routing failure-type-specific adapters in medical VLMs, the core question is the same — how do you compose specialized capacity without destructive gradient interference?`,
    `I am increasingly drawn to the boundary between interpretability and safety: understanding **why models fail silently**, how failure signatures manifest in internal representations, and how to build principled methods for detection and steering before deployment. I want to pursue research that bridges empirical AI system-building with a principled theoretical understanding of model internals.`,
  ],
}

export const education: EducationItem[] = [
  {
    period: '2023.08 – 2027.05 (Expected)',
    school: 'Indian Institute of Technology Patna',
    degree: 'Electrical & Electronics Engineering, BTech · CPI 8.12',
  },
]

export const internships: InternshipItem[] = [
  { period: '2025', org: 'redBus Data Decode Hackathon', role: 'Top 60 / 8,700+ participants' },
  { period: '2025', org: 'Flipkart GRiD 7.0', role: 'Semi-finalist — 160,000+ registrations nationwide' },
  { period: '2025', org: 'Amazon ML Summer School', role: 'Selected among 3,000 engineering students nationwide' },
  { period: '2024', org: 'Inter IIT Tech Meet 13.0', role: 'Enhanced Chandrayaan-2 CLASS resolution: 12.5 km → 1.25 km' },
  { period: '2023', org: 'JEE Advanced', role: 'AIR 6613 — Top 0.5% among 1.2M+ candidates' },
]

export const serviceAndTalk = {
  talks: [] as string[],
  reviewing: [] as string[],
}

const publicationSourceRaw: Omit<Publication, 'subtopics'>[] = [
  {
    title:
      'Talk, Snap, Complain: Validation-Aware Multimodal Expert Framework for Fine-Grained Customer Grievances',
    authors:
      'Rishu Kumar Singh*, Navneet Shreya*, Sarmistha Das*, Apoorva Singh*, Sriparna Saha',
    venue: 'AAAI 2026',
    year: 2026,
    summary:
      'Introduces VALOR, a multimodal Mixture-of-Experts framework for fine-grained complaint classification across multi-turn customer support dialogues containing text and images. Proposes cross-modal semantic alignment scoring and a meta-fusion strategy for coherent multi-expert reasoning. Also introduces CIViL, a curated multimodal complaint dataset. Consistently outperforms unimodal and multimodal baselines.',
    tags: ['Multimodal', 'MoE', 'NLP', 'Complaint Analysis'],
    links: [
      { label: 'Paper', href: 'http://arxiv.org/abs/2511.14693' },
      { label: 'Code', href: 'https://github.com/sarmistha-D/VALOR' },
    ],
    image: '/projects/valor.png',
    imageAlt: 'VALOR framework — multimodal MoE for complaint understanding',
    award: 'AAAI 2026',
  },
  {
    title: 'ExpertMix: Aspect and Severity Detection in Conversational Complaints',
    authors:
      'Sarmistha Das*, Apoorva Singh*, Rishu Kumar Singh*, Navneet Shreya*, Sriparna Saha',
    venue: 'ECIR 2026',
    year: 2026,
    summary:
      'Introduces CompSense, a multi-task Mixture-of-Experts framework with commonsense-aware contextualization, severity-aware expert gating, hierarchical aspect-to-severity classification, and supervised contrastive learning. Targets joint detection of complaint aspects and severity levels in multi-turn customer-support dialogues. Achieves state-of-the-art results on conversational complaint benchmarks.',
    tags: ['NLP', 'Conversational AI', 'MoE', 'Aspect Detection'],
    links: [{ label: 'Code', href: 'https://github.com/sarmistha-D/CompSense' }],
    image: '/projects/compsense.png',
    imageAlt: 'CompSense framework — MoE for aspect and severity detection',
    award: 'ECIR 2026',
  },
  {
    title:
      'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare',
    authors:
      'A. Ghosh, T. Ashraf, Rishu Kumar Singh, N. Saeed, S. Saha, X. Chen, S. Khan',
    venue: 'CVPR 2026 Findings',
    year: 2026,
    summary:
      'Proposes CarePilot, an actor-critic multiagent framework with dual memory (long-term and short-term) for complex, long-horizon GUI automation across healthcare software — DICOM viewers, EHR systems, and lab information platforms. Also introduces CareFlow, an expert-annotated benchmark of real clinical workflows. Achieves state-of-the-art performance across all domains.',
    tags: ['Computer Vision', 'Multimodal', 'Agentic AI', 'Healthcare'],
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2603.24157' }],
    image: '/projects/carepilot.png',
    imageAlt: 'CarePilot — actor-critic agent for healthcare GUI automation',
    award: 'CVPR 2026 Findings',
  },
]

const publicationSubtopicsByTitle: Record<string, PublicationSubtopicId[]> = {
  'Talk, Snap, Complain: Validation-Aware Multimodal Expert Framework for Fine-Grained Customer Grievances':
    ['multimodal-understanding', 'nlp'],
  'ExpertMix: Aspect and Severity Detection in Conversational Complaints': ['nlp'],
  'CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare': [
    'agentic',
    'multimodal-understanding',
  ],
}

const publicationSource: Publication[] = publicationSourceRaw.map((p) => {
  const subtopics = publicationSubtopicsByTitle[p.title]
  if (!subtopics?.length) throw new Error(`Missing publication subtopics: ${p.title}`)
  return { ...p, subtopics }
})

export const allPublications: Publication[] = [...publicationSource].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year
  return a.title.localeCompare(b.title)
})

export type NewsItem = {
  date: string
  venue?: string
  text: string
}

export const news: NewsItem[] = [
  { date: '2026.04', venue: 'CVPR 2026 Findings', text: 'CarePilot accepted.' },
  { date: '2026.03', venue: 'AAAI 2026', text: 'VALOR accepted (First Author).' },
  { date: '2026.03', venue: 'ECIR 2026', text: 'CompSense / ExpertMix accepted.' },
  { date: '2025.08', venue: 'Amazon ML Summer School', text: 'Selected among 3,000 engineering students nationwide.' },
  { date: '2025.07', venue: 'redBus Hackathon', text: 'Top 60 of 8,700+ teams.' },
  { date: '2025.02', venue: 'Flipkart GRiD 7.0', text: 'Semi-finalist (160,000+ registrations).' },
  { date: '2024.12', venue: 'AI-NLP-ML Lab, IIT Patna', text: 'Joined as Undergraduate Research Intern under Prof. Sriparna Saha.' },
]
