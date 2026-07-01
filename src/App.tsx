import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Rooms from './components/Rooms'
import Features from './components/Features'
import Deposit from './components/Deposit'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Rooms />
        <Features />
        <Deposit />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
