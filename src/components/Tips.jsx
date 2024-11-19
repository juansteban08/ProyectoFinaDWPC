import './Tips.css';

const tipsData = [
    {
        id: 1,
        title: 'Beneficios de la Ensalada Detox',
        description: 'Descubre cómo esta ensalada ayuda a desintoxicar tu cuerpo de manera natural.',
        video: 'videos/detox.mp4',
    },
    {
        id: 2,
        title: '¿Por qué incluir smoothies en tu dieta?',
        description: 'Aprende cómo los smoothies pueden proporcionarte energía y vitalidad.',
        video: 'videos/smoothie.mp4',
    },
    {
        id: 3,
        title: 'Propiedades de la Quinoa',
        description: 'Explora los beneficios de la quinoa como fuente de proteína vegetal.',
        video: 'videos/quinoa.mp4',
    },
];

const Tips = () => {
    return (
        <section className="tips-section">
            <h2>Consejos y Beneficios</h2>
            <div className="tips-container">
                {tipsData.map((tip) => (
                    <div key={tip.id} className="tip-card">
                        <video className="tip-video" controls>
                            <source src={tip.video} type="video/mp4" />
                            Tu navegador no soporta videos HTML5.
                        </video>
                        <h3>{tip.title}</h3>
                        <p>{tip.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tips;
