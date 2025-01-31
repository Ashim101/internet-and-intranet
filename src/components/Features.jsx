import React from 'react';
import './Features.css';

const Features = () => {
    const featuresList = [
        { id: 1, title: "Superresolution", description: "Enhances the resolution of seismic images for better analysis.", icon: "🖼️" },
        { id: 2, title: "Denoising", description: "Reduces noise in seismic data for clearer insights.", icon: "🔊" },
        { id: 3, title: "Real-Time Processing", description: "Processes seismic data quickly for on-the-spot decision-making.", icon: "⚡" },
        { id: 4, title: "Custom Models", description: "Utilizes advanced AI models tailored to seismic imaging.", icon: "🤖" },
    ];

    return (
        <section id="features" className="features-container">
            <h2 className="features-title">Key Features</h2>
            <div className="features-grid">
                {featuresList.map(feature => (
                    <div key={feature.id} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
