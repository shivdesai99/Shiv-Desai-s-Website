import React from 'react';
import './AboutMe.css';
import ProfessionalPhoto from './../assets/ProfessionalPhoto.jpg';

import FaGithub from './../assets/github.png';
import FaLinkedin from './../assets/linkedin.png';
import FaGmail from './../assets/gmail.png';
import FaResume from './../assets/resume.png';
import myResume from './../assets/myresume.pdf';

const AboutMe = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };

    const handleResumeClick = () => {
        window.open(myResume, '_blank');
    };

    const handleGmailClick = () => {
        window.location.href = 'mailto:your.email@example.com';
    };

    return (
        <div className="about-me-container">
            <div className="content-wrapper">
                <div className="profile-section">
                    <div className="photo-container">
                        <img src={ProfessionalPhoto} alt="My Photo" className="profile-photo" />
                    </div>
                    <div className="social-icons">
                        <img 
                            src={FaGithub} 
                            alt="GitHub" 
                            className="icon" 
                            onClick={() => handleIconClick('https://github.com/shivdesai99')} 
                            title="GitHub" 
                            aria-label="GitHub Profile"
                        />
                        <img 
                            src={FaLinkedin} 
                            alt="LinkedIn" 
                            className="icon" 
                            onClick={() => handleIconClick('https://www.linkedin.com/in/shivdesai02/')} 
                            title="LinkedIn" 
                            aria-label="LinkedIn Profile"
                        />
                        <img 
                            src={FaGmail} 
                            alt="Gmail" 
                            className="icon" 
                            onClick={handleGmailClick} 
                            title="Email" 
                            aria-label="Send Email"
                        />
                        <img 
                            src={FaResume} 
                            alt="Resume" 
                            className="icon" 
                            onClick={handleResumeClick} 
                            title="Resume" 
                            aria-label="Download Resume"
                        />
                    </div>
                </div>
                <div className="info-section">
                    <h1>About Me</h1>
                    <div className="info-boxes">
                        <div className="info-box">
                            <h2>Background</h2>
                            <p>
                                I am a senior at Emory University pursuing a B.S. in Computer Science. After my freshman year, I transferred from Indiana University’s Kelley School of Business to Emory to follow my passion for coding. I have maintained a competitive GPA and consistently made the Dean’s List, all while catching up on credits to graduate on time, as I began the degree in my sophomore year.
                            </p>
                        </div>
                        <div className="info-box">
                            <h2>Hobbies</h2>
                            <p>
                                Outside of academics, I enjoy working out, going on runs, making food, and watching How I Met Your Mother. I love to play soccer and golf, and love to watch Man United and the NFL whenever there are games to watch.
                            </p>
                        </div>
                        <div className="info-box">
                            <h2>Goals</h2>
                            <p>
                                My short-term goal is to excel in full-stack development, while my long-term goal is to become a tech leader and contribute to projects that positively impact society.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
