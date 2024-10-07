import React from 'react';
import './DailyUpdates.css'; // Import the CSS file

const DailyUpdates = () => {
  const updates = [
    {
      title: 'Combination Therapy for HER2-Negative Breast Cancer',
      description: 'A phase IB study revealed that combining the HDAC inhibitor entinostat with dual immune checkpoint inhibitors (nivolumab and ipilimumab) resulted in a 25% overall response rate in advanced HER2-negative breast cancer patients. Notably, triple-negative patients had a 40% response rate, indicating a promising direction for treatment.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6908431/'
    },
    {
      title: 'Innovations in Ovarian Cancer Treatments',
      description: 'New targeted therapies like monoclonal antibodies and PARP inhibitors are enhancing treatment for ovarian cancer. The recently FDA-approved drug mirvetuximab soravtansine shows a significant response rate, targeting folate receptors on cancer cells.',
      link: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-mirvetuximab-soravtansine-advanced-ovarian-cancer'
    },
    {
      title: 'Advancements in Blood Cancer',
      description: 'Research from the University of Pennsylvania indicates that a new CAR-T cell therapy may improve outcomes in patients with B-cell malignancies. This approach genetically modifies patients’ T cells to better attack cancer cells.',
      link: 'https://www.pennmedicine.org/news/news-releases/2023/05/penn-researchers-develop-new-car-t-cell-therapy'
    },
    {
      title: 'Immunotherapy for Kidney Cancer',
      description: 'A clinical trial is assessing the combination of immune checkpoint inhibitors with targeted therapies for metastatic renal cell carcinoma, aiming to improve patient survival rates.',
      link: 'https://clinicaltrials.gov/ct2/show/NCT03617994'
    },
    {
      title: 'Next-Generation Sequencing in Precision Medicine',
      description: 'A new study shows that using next-generation sequencing can help identify specific mutations in tumors, leading to more personalized and effective treatment strategies for cancer patients.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6888525/'
    },
    {
      title: 'CAR-T Therapy for Multiple Myeloma',
      description: 'Clinical trials are exploring CAR-T cell therapy\'s efficacy in multiple myeloma, focusing on enhancing the body\'s immune response against this challenging form of blood cancer.',
      link: 'https://www.mskcc.org/news/multiple-myeloma-car-t-cell-therapy'
    },
    {
      title: 'Role of Artificial Intelligence in Cancer Detection',
      description: 'Recent advancements in AI technology are improving early cancer detection rates. AI algorithms are being developed to analyze imaging and pathology data, significantly enhancing diagnostic accuracy.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7303486/'
    },
    {
      title: 'Targeting Pancreatic Cancer with New Drugs',
      description: 'Researchers are investigating novel therapies that inhibit specific molecular pathways in pancreatic cancer, aiming to overcome its notoriously aggressive nature and improve patient outcomes.',
      link: 'https://www.cancer.gov/news-events/cancer-currents-blog/2023/pancreatic-cancer-new-drug'
    },
    {
      title: 'Combination Therapies in Lung Cancer',
      description: 'Studies indicate that combining immunotherapy with chemotherapy offers significant survival benefits for patients with non-small cell lung cancer, leading to a paradigm shift in treatment approaches.',
      link: 'https://www.ascopost.com/issues/december-25-2022/combination-therapies-in-lung-cancer/'
    },
    {
      title: 'Genetic Insights into Breast Cancer',
      description: 'New research identifies genetic markers that could help predict breast cancer recurrence, enabling more tailored follow-up therapies and improving patient management strategies.',
      link: 'https://www.breastcancer.org/research/genetics'
    },
    {
      title: 'Promising Vaccine Research',
      description: 'A novel vaccine targeting ovarian cancer is under development, combining dendritic cell vaccines with immune checkpoint inhibitors to enhance immune response against tumors.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7994799/'
    },
    {
      title: 'Improving Quality of Life for Cancer Survivors',
      description: 'New studies are emphasizing holistic approaches, including nutritional support and mental health resources, to enhance the quality of life for cancer survivors post-treatment.',
      link: 'https://www.cancer.org/latest-news/improving-quality-of-life-cancer-survivors.html'
    },
    {
      title: 'Long-term Efficacy of Immunotherapy',
      description: 'Research continues to demonstrate that immunotherapy can provide durable responses in certain cancers, offering hope for long-term survival.',
      link: 'https://www.sciencedirect.com/science/article/pii/S0140673618311548'
    },
    {
      title: 'Screening Innovations',
      description: 'Ongoing research aims to develop a reliable screening test for ovarian cancer, which currently lacks effective screening methods. Early detection could significantly improve outcomes.',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7342652/'
    },
    {
      title: 'Clinical Trials Expanding Access to New Treatments',
      description: 'Initiatives are underway to make innovative cancer treatments more accessible to patients through expanded clinical trial participation, particularly in underserved populations.',
      link: 'https://www.cancer.gov/news-events/cancer-currents-blog/2022/clinical-trials-expanding-access'
    },
  ];

  return (
    <div className="daily-updates">
      <h1 className="title">Daily Updates</h1>
      <ul className="updates-list">
        {updates.map((update, index) => (
          <li key={index} className="update-item">
            <h3 className="update-title">{update.title}</h3>
            <p className="update-description">{update.description}</p>
            <a 
              href={update.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="read-more"
            >
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyUpdates;
