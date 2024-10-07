import React from 'react';
import './Research.css'; // Assuming the CSS is saved in Research.css

const Research = () => {
  const publications = [
    {
      id: 1,
      title: 'Ultrasound-Enhanced Immunotherapy for Glioblastoma',
      abstract: 'Researchers at Northwestern University conducted a study using ultrasound to deliver drugs and antibodies directly to glioblastoma tumors, enhancing immune recognition of cancer cells. Early trials showed promise for improved treatment outcomes.',
      link: 'https://news.feinberg.northwestern.edu/2024/06/06/new-glioblastoma-treatment-reaches-human-brain-tumor-and-helps-immune-cells-recognize-cancer-cells/'
    },
    {
      id: 2,
      title: 'AI and Machine Learning in Immunotherapy',
      abstract: 'The Cancer Research Institute emphasizes integrating AI and machine learning to analyze complex biological data and identify novel treatment approaches, leading to 13 new FDA-approved immunotherapy treatments in the past year.',
      link: 'https://www.cancerresearch.org'
    },
    {
      id: 3,
      title: 'Therapeutic Cancer Vaccines',
      abstract: 'A study focusing on personalized cancer vaccines aims to train the immune system to target specific tumor antigens, improving patient outcomes by tailoring treatments to individual tumor profiles.',
      link: 'https://www.cancerresearch.org'
    },
    {
      id: 4,
      title: 'Adjuvant Therapy for Colorectal Cancer',
      abstract: 'A large-scale clinical trial demonstrated that combining adjuvant chemotherapy with immunotherapy significantly improved survival rates in high-risk colorectal cancer patients, supporting dual therapies in enhancing treatment efficacy.',
      link: 'https://cancerblog.mayoclinic.org/2024/04/25/new-study-finds-triple-negative-breast-cancer-tumors-with-an-increase-in-immune-cells-have-lower-risk-of-recurrence-after-surgery/'
    },
    {
      id: 5,
      title: 'New Drug Combination for Lung Cancer',
      abstract: 'Researchers identified a new drug combination that targets non-small cell lung cancer (NSCLC), showing enhanced efficacy in prolonging survival compared to standard treatments, marking a significant advance in personalized cancer therapy.',
      link: 'https://www.cancer.gov'
    },
    {
      id: 6,
      title: 'Oncolytic Virus Therapy',
      abstract: 'A clinical trial investigated an oncolytic virus that selectively infects and kills cancer cells while sparing healthy tissue. Results indicated significant potential for treating advanced melanoma.',
      link: 'https://news.feinberg.northwestern.edu/'
    },
    {
      id: 7,
      title: 'Gene Editing for Cancer Treatment',
      abstract: 'Recent research on CRISPR technology has shown promising results in targeting genes responsible for cancer progression, potentially leading to groundbreaking therapies that alter the genetic makeup of cancer cells.',
      link: 'https://www.cancer.gov'
    },
    {
      id: 8,
      title: 'Liquid Biopsies for Early Cancer Detection',
      abstract: 'A study found that circulating tumor DNA can be used to detect early-stage cancers with high accuracy, offering a non-invasive method for timely interventions and improved patient outcomes.',
      link: 'https://cancerblog.mayoclinic.org'
    },
    {
      id: 9,
      title: 'Targeted Therapy in Breast Cancer',
      abstract: 'Research revealed that targeting specific protein receptors in breast cancer can lead to better responses in patients, supporting the development of targeted therapies focused on the molecular characteristics of tumors.',
      link: 'https://www.cancer.gov'
    },
    {
      id: 10,
      title: 'Integrating Palliative Care Early in Treatment',
      abstract: 'A comprehensive study has shown that integrating palliative care early in cancer treatment improves quality of life and reduces symptoms, emphasizing the importance of holistic care alongside traditional treatments.',
      link: 'https://www.cancer.gov'
    }
  ];

  return (
    <div className="research-container">
      <h1 className="research-title">Research Publications</h1>
      <ul className="space-y-6">
        {publications.map((pub) => (
          <li key={pub.id} className="research-item">
            <h3 className="research-item-title">{pub.title}</h3>
            <p className="research-description">{pub.abstract}</p>
            <a 
              href={pub.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="research-item-link"
              aria-label={`Read more about ${pub.title}`}
            >
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Research;
