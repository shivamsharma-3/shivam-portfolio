import Navigation from '@/components/portfolio/nav'
import Hero from '@/components/portfolio/hero'
import Projects from '@/components/portfolio/projects'
import Skills from '@/components/portfolio/skills'
import About from '@/components/portfolio/about'
import Contact from '@/components/portfolio/contact'
import Footer from '@/components/portfolio/footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ color: '#fafafa' }}>
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
