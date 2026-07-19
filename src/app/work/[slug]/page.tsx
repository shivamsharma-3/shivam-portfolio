import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'
import CaseStudyPage from '@/components/portfolio/case-study'
import Nav from '@/components/portfolio/nav'
import Footer from '@/components/portfolio/footer'
import type { Metadata } from 'next'

// Pre-generate all case study pages at build time
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

// Per-page metadata for SEO + social sharing
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}

  return {
    title: `${study.name} — Case Study · Shivam Sharma`,
    description: study.summary.slice(0, 155),
    openGraph: {
      title: `${study.name} — Case Study`,
      description: study.tagline,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.name} — Case Study`,
      description: study.tagline,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <>
      <Nav />
      <main className="relative pt-20">
        <CaseStudyPage study={study} />
      </main>
      <Footer />
    </>
  )
}
