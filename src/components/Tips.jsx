import './Tips.css';

const tipsData = [
    {
        id: 1,
        title: 'Beneficios de la Ensalada Detox',
        description: 'Descubre cómo esta ensalada ayuda a desintoxicar tu cuerpo de manera natural.',
        video: 'https://www.youtube.com/embed/CKaH9NhzWfs',
    },
    {
        id: 2,
        title: '¿Por qué incluir smoothies en tu dieta?',
        description: 'Aprende cómo los smoothies pueden proporcionarte energía y vitalidad.',
        video: 'https://www.youtube.com/embed/qPDwGpmJSuE', // Reemplaza TU_VIDEO_ID_2
    },
    {
        id: 3,
        title: 'Propiedades de la Quinoa',
        description: 'Explora los beneficios de la quinoa como fuente de proteína vegetal.',
        video: 'https://www.youtube.com/embed/8iQLTpLD4nk', // Video local
    },
];

const Tips = () => {
    return (
        <section className="tips-section">
            <h2>Consejos y Beneficios</h2>
            <div className="tips-container">
                {tipsData.map((tip) => (
                    <div key={tip.id} className="tip-card">
                        {tip.video.includes('youtube') ? (
                            <iframe
                                className="tip-video"
                                src={tip.video}
                                title={tip.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video className="tip-video" controls>
                                <source src={tip.video} type="video/mp4" />
                                Tu navegador no soporta videos HTML5.
                            </video>
                        )}
                        <h3>{tip.title}</h3>
                        <p>{tip.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tips;
