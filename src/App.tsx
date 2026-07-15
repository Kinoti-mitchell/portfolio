import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { DemoRequestForm } from './components/DemoRequestForm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { DemoProvider } from './context/DemoContext'

function App() {
  return (
    <DemoProvider>
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
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
