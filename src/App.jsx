import Header from './components/Header';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <Header />
            <h2 id="timeline" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 text-4xl font-bold text-center pb-8">Timeline</h2>
            <Timeline />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}