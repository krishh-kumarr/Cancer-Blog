import React from 'react';
import './TrialMethods.css'; // Import the CSS file

const TrialMethods = () => {
  return (
    <div className="trial-methods-container">
      <h1 className="trial-title">Trial Methods</h1>
      <p className="trial-description">Details about ongoing and completed trials.</p>

      <h2 className="trial-subtitle">Key Cancer Trial Phases</h2>
      {[
        {
          title: 'Phase 0 Trials',
          description: `Involves a small number of patients (usually under 15). These early trials explore how a drug behaves in the body, how it reaches the tumor, and its potential effects. They are typically brief and involve low doses.`,
          links: ['https://www.cancer.gov/about-cancer/development/drugs/phase-0-trials'],
        },
        {
          title: 'Phase I Trials',
          description: `Focus on determining the safe dosage of a new drug and understanding its side effects. This phase typically involves fewer than 100 patients and assesses the best method of administration.`,
          links: [
            'https://www.cancer.org/cancer/cancer-basics/clinical-trials/clinical-trial-phases.html',
            'https://www.cancer.gov/about-cancer/development/drugs/phase-1-trials',
          ],
        },
        {
          title: 'Phase II Trials',
          description: `Tests the effectiveness of the drug on specific cancer types, using a larger patient group (around 25-100 patients). The primary goal is to determine if the treatment shrinks the tumor or halts its progression.`,
          links: [
            'https://www.cancer.gov/about-cancer/development/drugs/phase-2-trials',
            'https://www.cancer.org/cancer/cancer-basics/clinical-trials/clinical-trial-phases.html',
          ],
        },
        {
          title: 'Phase III Trials',
          description: `Compare new treatments with standard therapies across a larger patient population, often involving hundreds or thousands of participants. These trials help determine if the new treatment is more effective than existing options.`,
          links: [
            'https://www.cancer.gov/about-cancer/development/drugs/phase-3-trials',
            'https://www.cancer.org/cancer/cancer-basics/clinical-trials/clinical-trial-phases.html',
          ],
        },
        {
          title: 'Phase IV Trials',
          description: `Conducted after FDA approval, these trials track long-term side effects and quality-of-life impacts. They may involve thousands of participants.`,
          links: [
            'https://www.cancer.gov/about-cancer/development/drugs/phase-4-trials',
            'https://www.cancer.gov/about-cancer/development/drugs/phase-4-trials',
          ],
        },
      ].map((trial, index) => (
        <div key={index} className="trial-phase">
          <h3 className="trial-phase-title">{trial.title}</h3>
          <p className="trial-phase-description">
            {trial.description}
            {trial.links.map((link, idx) => (
              <span key={idx}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="trial-link">
                  {' '}(Source)
                </a>
                {idx < trial.links.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
      ))}

      <h2 className="trial-subtitle">Eligibility and Patient Information</h2>
      <p className="trial-eligibility">
        Each trial has strict eligibility criteria, such as age, gender, cancer stage, and previous treatments. Patients are monitored closely for safety and potential benefits, with a chance to contribute to advancing cancer research.
        <a href="https://www.cancer.gov/about-cancer/development/drugs/clinical-trial-eligibility" target="_blank" rel="noopener noreferrer" className="trial-link"> (Source)</a>
      </p>

      <h2 className="trial-subtitle">Learn More</h2>
      <p className="trial-learn-more">
        For more detailed information, including examples of specific trials, you can explore resources from the 
        <a href="https://www.cancer.org/" target="_blank" rel="noopener noreferrer" className="trial-link"> American Cancer Society</a> and
        <a href="https://www.cancer.gov/" target="_blank" rel="noopener noreferrer" className="trial-link"> Cancer Awareness Hub</a>.
      </p>
    </div>
  );
};

export default TrialMethods;
