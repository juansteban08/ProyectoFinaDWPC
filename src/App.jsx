import './styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tips from './components/Tips';

function App() {
    return (
        <Router>
            {/* Siempre presente: Header y Footer */}
            <Header />
            <Routes>
                {/* Ruta principal con todas las secciones */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <Hero />
                            <Menu />
                            <About />
                            <Contact />
                        </>
                    } 
                />
                {/* Ruta para la sección de tips */}
                <Route path="/tips" element={<Tips />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
