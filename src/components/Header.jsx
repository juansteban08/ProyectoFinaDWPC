import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* El logo redirige a la página principal */}
                <Link to="/">Fitness Bites</Link>
            </div>
            <nav className="navigation">
                {/* Menú de navegación */}
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/tips">Tips</Link></li>
                    <li><a href="#menu">Menú</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
