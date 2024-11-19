import './Hero.css'; // Asegúrate de tener este archivo CSS

const Hero = () => {
    return (
        <div className="hero">
            <div className="slider">
                <img src="/src/imagenes/Background.webp" alt="Imagen 1" />
                <img src="/src/imagenes/ensalada.jpg" alt="Imagen 2" />
                <img src="/src/imagenes/quinoa.webp" alt="Imagen 3" />
            </div>
            <div className="hero-content">
                <h1>Bienvenido a Fitness Bites</h1>
                <p>Descubre nuestro delicioso menú saludable</p>
                <a href="#menu" className="btn">Ver Menú</a>
            </div>
        </div>
    );
};

export default Hero;
