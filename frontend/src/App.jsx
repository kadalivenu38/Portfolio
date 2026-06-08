import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}