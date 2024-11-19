import { useState } from 'react';
import db from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    // Maneja cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            // Agrega los datos a la colección "messages" en Firestore
            await addDoc(collection(db, 'messages'), formData);
            setStatus('Mensaje enviado con éxito.');
            setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
        } catch (error) {
            setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
            console.error('Error al guardar el mensaje en Firebase:', error);
        }
    };

    return (
        <section id="contact" className="contact">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
                {status && <p className="status">{status}</p>}
            </form>
        </section>
    );
};

export default Contact;

