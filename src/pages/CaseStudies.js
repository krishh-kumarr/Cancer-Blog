import React from 'react';
import './CaseStudies.css'; // Importing the CSS file

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Case Study of CAR T-Cell Therapy in Lymphoma',
      description: 'A patient with relapsed diffuse large B-cell lymphoma underwent CAR T-cell therapy. After treatment, the patient achieved a complete response, showcasing the effectiveness of this immunotherapy despite side effects like cytokine release syndrome.',
      link: 'https://www.cancer.gov/about-cancer/treatment/research/car-t-cells'
    },
    {
      id: 2,
      title: 'Metastatic Colorectal Cancer Treatment',
      description: 'A 72-year-old woman with stage 4 metastatic colorectal cancer was treated with a combination of FOLFOX and bevacizumab, showing initial response but later progression. The case highlights the importance of molecular profiling in treatment decisions.',
      link: 'https://www.targetedonc.com/view/metastatic-colorectal-cancer-treatment'
    },
    {
      id: 3,
      title: 'Breast Cancer Immunotherapy',
      description: 'A clinical trial involving pembrolizumab in breast cancer showed improved outcomes in patients with PD-L1 positive tumors, illustrating the potential of immunotherapy in aggressive cancer types.',
      link: 'https://www.cancer.gov/news-events/cancer-currents-blog/2023/breast-cancer-immunotherapy-pembrolizumab'
    },
    {
      id: 4,
      title: 'Targeted Therapy in Lung Cancer',
      description: 'A patient with non-small cell lung cancer was treated with osimertinib after testing positive for an EGFR mutation. The patient experienced a significant reduction in tumor size, demonstrating the success of targeted therapies.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/osimertinib'
    },
    {
      id: 5,
      title: 'Combination Therapy for Melanoma',
      description: 'A melanoma patient received a combination of nivolumab and ipilimumab, resulting in durable remission. The case underscores the effectiveness of dual checkpoint inhibition in advanced melanoma.',
      link: 'https://www.cancer.gov/news-events/cancer-currents-blog/2023/melanoma-combination-immunotherapy'
    },
    {
      id: 6,
      title: 'Chronic Lymphocytic Leukemia (CLL) Case Study',
      description: 'A 68-year-old man with CLL was treated with ibrutinib. The patient\'s condition improved significantly, highlighting the impact of targeted therapies in hematologic malignancies.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/ibrutinib'
    },
    {
      id: 7,
      title: 'Advanced Prostate Cancer Treatment',
      description: 'A patient with metastatic prostate cancer received enzalutamide after progression on androgen deprivation therapy. The patient\'s response demonstrated the efficacy of androgen receptor signaling inhibitors in advanced stages.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/enzalutamide'
    },
    {
      id: 8,
      title: 'Hodgkin Lymphoma Treatment',
      description: 'An adolescent patient with Hodgkin lymphoma was treated with ABVD chemotherapy. The case illustrates the typical treatment protocol and the importance of early intervention.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/hodgkin-lymphoma'
    },
    {
      id: 9,
      title: 'Pancreatic Cancer Treatment',
      description: 'A patient with localized pancreatic cancer underwent Whipple surgery followed by adjuvant chemotherapy. This case emphasizes the role of surgery in curative treatment and the challenges of recurrence.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/pancreatic-cancer'
    },
    {
      id: 10,
      title: 'Multiple Myeloma Case Study',
      description: 'A patient with relapsed multiple myeloma received a regimen of lenalidomide and dexamethasone. The patient\'s response demonstrated the effectiveness of newer agents in managing this condition.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/lenalidomide'
    },
    {
      id: 11,
      title: 'Ovarian Cancer Treatment Outcomes',
      description: 'A case study discussed the use of carboplatin and paclitaxel in a patient with advanced ovarian cancer. The patient\'s response underscored the importance of combination chemotherapy.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/ovarian-cancer'
    },
    {
      id: 12,
      title: 'Head and Neck Cancer Management',
      description: 'A patient with squamous cell carcinoma of the head and neck received concurrent chemotherapy and radiation. This case illustrates the standard of care and the importance of multidisciplinary approaches.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/head-and-neck-cancer'
    },
    {
      id: 13,
      title: 'Kidney Cancer Immunotherapy',
      description: 'A patient with metastatic renal cell carcinoma was treated with nivolumab, leading to a significant decrease in tumor burden. The case highlights advancements in immunotherapy for kidney cancer.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/nivolumab'
    },
    {
      id: 14,
      title: 'Esophageal Cancer Treatment',
      description: 'A patient with esophageal cancer underwent neoadjuvant chemotherapy followed by surgery, emphasizing the multimodal treatment approach in improving surgical outcomes.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/esophageal-cancer'
    },
    {
      id: 15,
      title: 'Gastric Cancer Immunotherapy',
      description: 'An advanced gastric cancer patient treated with trastuzumab in combination with chemotherapy demonstrated improved survival outcomes, illustrating the role of targeted therapies in gastric cancer.',
      link: 'https://www.cancer.gov/about-cancer/treatment/drugs/gastric-cancer'
    }
  ];

  return (
    <div className="case-studies-container">
      <h1 className="case-studies-title">Case Studies on Cancer Treatments</h1>
      <ul className="case-studies-list">
        {caseStudies.map(caseStudy => (
          <li key={caseStudy.id} className="case-study-item">
            <h3 className="case-study-title">{caseStudy.title}</h3>
            <p className="case-study-description">{caseStudy.description}</p>
            <a href={caseStudy.link} target="_blank" rel="noopener noreferrer" className="case-study-link">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudies;
