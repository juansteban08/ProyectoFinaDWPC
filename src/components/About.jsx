import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
    <section id="about" className="about">
        <h2>Sobre Nosotros</h2>
        <div className="about-container">
            <div className="about-card">
                <h3>Nuestra Misión</h3>
                <p>
                    Creemos que una alimentación saludable no tiene que ser aburrida. Estamos
                    aquí para transformar tu percepción de la comida nutritiva.
                </p>
            </div>
            <div className="about-card">
                <h3>Nuestros Valores</h3>
                <p>
                    Compromiso con el bienestar, innovación culinaria y un enfoque sostenible para
                    crear experiencias únicas.
                </p>
            </div>
            <div className="about-card">
                <h3>Nuestro Equipo</h3>
                <p>
                    Un grupo apasionado de chefs, nutricionistas y amantes de la comida
                    que trabajan juntos para ofrecer lo mejor.
                </p>
            </div>
        </div>
        {/* Botón para leer más */}
        <Link to="/about" className="read-more-btn">
                Leer más
            </Link>
    </section>
);

export default About;
