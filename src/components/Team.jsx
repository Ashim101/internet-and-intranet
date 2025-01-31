import React from 'react';
import './Team.css';
import amrit from '../assets/amrit.jpg';
import biraj from '../assets/biraj.jpg';
import ashim from '../assets/ashim.jpg';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Amrit Sharma",
            role: "Backend Developer",
            description: "Oversees the project and ensures all deliverables are met.",
            imageUrl: amrit,
        },
        {
            id: 2,
            name: "Ashim Sapkota",
            role: "Frontend Developer",
            description: "Develops themaintainable frontend for the project.",
            imageUrl: ashim,
        },
        {
            id: 3,
            name: "Biraj Acharya",
            role: "AI/ML Engineer",
            description: "Develops AI models for seismic image processing.",
            imageUrl: biraj,
        },
       
    ];

    return (
        <section id="team" className="team-container">
            <h2 className="team-title">Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card">
                        <img src={member.imageUrl} alt={member.name} className="team-image" />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        <p className="team-description">{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
