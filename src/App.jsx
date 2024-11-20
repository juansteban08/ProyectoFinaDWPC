import './styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tips from './components/Tips';
import Home from "./components/Home"; // Tu página principal
import { AuthProvider } from "./components/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>

                {/* Siempre presente: Header y Footer */}
                <Header />
                <Routes>

                    <Route path="/" element={<Home />} />

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

        </AuthProvider>
    );
}

export default App;
