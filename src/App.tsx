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
import { Projects } from './components/Projects'
import { RecruiterPath } from './components/RecruiterPath'
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
        <RecruiterPath />
        <About />
        <WhyHireMe />
        <Experience />
        <Education />
        <Documents />
        <Projects />
        <Skills />
        <Contact />
        <DemoRequestForm />
      </main>
      <Footer />
    </DemoProvider>
  )
}

export default App
