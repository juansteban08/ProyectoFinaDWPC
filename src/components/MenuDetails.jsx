import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuDetails.css';

const MenuDetails = ({ data, onClose }) => {
    const navigate = useNavigate();

    if (!data) return null;
    
    return (
        <div className="menu-overlay">
            <div className="menu-card">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                <img src={data.img} alt={data.name} className="menu-card-img" />
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <p><strong>Categoría:</strong> {data.category}</p>
                <p>{data.items}</p>
                {/* Enlace que redirige a la página de Tips */}
                <button 
                    className="benefits-link" 
                    onClick={() => navigate('/tips')}
                >
                    Beneficios
                </button>
            </div>
        </div>
    );
};

MenuDetails.propTypes = {
    data: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        items: PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
};

export default MenuDetails;
