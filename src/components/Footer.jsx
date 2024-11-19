import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <h4>Fitness Bites</h4>
            <p>Transformando vidas a través de la comida saludable.</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Fitness Bites. Todos los derechos reservados.</p>
        </div>
    </footer>
);

export default Footer;
