import React from 'react';
import { Link } from 'react-router-dom'; 
import './AboutArticle.css';

const AboutArticle = () => {
    return (
        <article className="about-article">
            <h2>About NextWave</h2>
            <section className="about-section">
                <div className="about-card">
                    <p>
                        NextWave is at the forefront of the fight against poverty, focusing on sustainable job employment and social integration. Our mission is to create opportunities that enable individuals to break free from the cycle of poverty and build a better future.
                    </p>
                    <Link to="/opportunities" className="about-link">
                        <span className="arrow">→</span> Explore Opportunities
                    </Link>
                </div>
                <div className="about-card">
                    <p>
                        We believe that employment is more than just a job; it's a pathway to dignity, stability, and growth. Through partnerships with local businesses and community organizations, NextWave provides tailored job placements that match the skills and aspirations of individuals with the needs of employers.
                    </p>
                    <Link to="/partners" className="about-link">
                        <span className="arrow">→</span> Explore our Partnerships
                    </Link>
                </div>
                <div className="about-card">
                    <p>
                        But we don't stop there. Our holistic approach includes social support services that help individuals integrate fully into their communities, ensuring long-term success and well-being. We are committed to making a lasting impact and invite you to join us in transforming lives and communities.
                    </p>
                    <Link to="/funding" className="about-link">
                        <span className="arrow">→</span> Learn about Funding
                    </Link>
                </div>
            </section>
        </article>
    );
}

export default AboutArticle;
