import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { DemoRequestForm } from './components/DemoRequestForm'
import { Documents } from './components/Documents'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OpenTo } from './components/OpenTo'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { WhyHireMe } from './components/WhyHireMe'
import { DemoProvider } from './context/DemoContext'

function App() {
  return (
    <DemoProvider>
      <Background />
      <Header />
      <main>
        <Hero />
        <OpenTo />
        <About />
        <WhyHireMe />
        <Experience />
        <Education />
        <Documents />
        <Projects />
        <DemoRequestForm />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </DemoProvider>
  )
}

export default App
