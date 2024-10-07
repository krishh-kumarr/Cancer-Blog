import React, { useState } from 'react';
import './Home.css'; // Importing the CSS file

const Home = () => {
  const [showResearchInfo, setShowResearchInfo] = useState(false);
  const [showCaseStudiesInfo, setShowCaseStudiesInfo] = useState(false);
  const [showUpdatesInfo, setShowUpdatesInfo] = useState(false);

  const toggleResearchInfo = () => setShowResearchInfo(!showResearchInfo);
  const toggleCaseStudiesInfo = () => setShowCaseStudiesInfo(!showCaseStudiesInfo);
  const toggleUpdatesInfo = () => setShowUpdatesInfo(!showUpdatesInfo);

  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Cancer Biology Research Platform</h1>
      <p className="subtitle">Your hub for the latest research, case studies, and updates in cancer biology.</p>

      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hello! I am <strong>Aditya Singh</strong>, a first-year BTech student specializing in Bioinformatics. 
          My passion lies at the intersection of biology and technology, where I aim to leverage computational 
          methods to unravel complex biological data and contribute to advancements in healthcare.
        </p>
        <p>
          In this project, I present a platform designed to facilitate access to vital information in cancer 
          research. This initiative aims to bridge the gap between researchers, healthcare professionals, and 
          the general public by providing a centralized repository of knowledge.
        </p>
        <p>
          With an enthusiastic and proactive approach, I aim to engage with the community and create valuable resources 
          that empower users to stay informed and connected. Let's work together to advance the field of cancer biology!
        </p>
      </div>

      <h2>What Our App Does</h2>
      <p>Our platform offers three main features:</p>
      
      <div className="feature-section">
        <button onClick={toggleResearchInfo} className="feature-button">
          {showResearchInfo ? 'Hide Research Info' : 'Show Research Info'}
        </button>
        {showResearchInfo && (
          <p className="feature-info">
            We integrate the latest research findings in cancer biology, providing users access to current studies and innovations. 
            Users can explore detailed articles and publications to stay updated on advancements in the field.
          </p>
        )}
      </div>

      <div className="feature-section">
        <button onClick={toggleCaseStudiesInfo} className="feature-button">
          {showCaseStudiesInfo ? 'Hide Case Studies Info' : 'Show Case Studies Info'}
        </button>
        {showCaseStudiesInfo && (
          <p className="feature-info">
            Our platform features a collection of case studies that highlight successful treatment approaches and patient outcomes. 
            These real-world examples aim to enhance understanding of cancer management and inspire further research.
          </p>
        )}
      </div>

      <div className="feature-section">
        <button onClick={toggleUpdatesInfo} className="feature-button">
          {showUpdatesInfo ? 'Hide Updates Info' : 'Show Updates Info'}
        </button>
        {showUpdatesInfo && (
          <p className="feature-info">
            Users can find regular updates about ongoing clinical trials, new treatment modalities, and significant breakthroughs in 
            cancer research. We aim to keep our community informed and engaged with the latest developments.
          </p>
        )}
      </div>

      <h2>Join Us</h2>
      <p>
        Through this platform, I aspire to create a community dedicated to advancing cancer research and 
        improving patient outcomes. As I continue my journey in bioinformatics, I am excited to contribute 
        to this critical field and collaborate with others who share a similar vision.
      </p>
    </div>
  );
};

export default Home;
