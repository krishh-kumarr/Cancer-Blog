import React from 'react';
import './Solutions.css'; // Import the CSS file

const Solutions = () => {
  const solutions = [
    {
      title: 'Regular Screening and Early Detection',
      description: 'Awareness of family health history and adherence to screening guidelines can lead to early detection of precancerous conditions and cancers. Early intervention significantly improves treatment outcomes.',
      links: [
        { text: 'Cancer Awareness Hub', url: 'https://www.cancerawarenesshub.com/' },
        { text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }
      ]
    },
    {
      title: 'Tobacco Cessation',
      description: 'Avoiding tobacco in all forms is crucial since it is linked to numerous cancers, including lung and colorectal cancers. Quitting at any stage reduces cancer risk.',
      links: [{ text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }]
    },
    {
      title: 'Sun Protection',
      description: 'Using sunscreen, wearing protective clothing, and avoiding tanning beds can help prevent skin cancer, the most common cancer in the U.S.',
      links: [{ text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }]
    },
    {
      title: 'Healthy Diet',
      description: 'A diet rich in fruits, vegetables, whole grains, and lean proteins, while low in processed foods and red meats, is associated with a reduced risk of cancer.',
      links: [{ text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }]
    },
    {
      title: 'Limit Alcohol Consumption',
      description: 'Reducing alcohol intake can lower the risk of several cancers, including breast and liver cancer. Guidelines suggest moderation, defined as up to one drink per day for women and two for men.',
      links: [{ text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }]
    },
    {
      title: 'Maintain a Healthy Weight',
      description: 'Obesity is linked to various cancers, so a balanced diet combined with regular physical activity can help maintain a healthy weight and reduce cancer risk.',
      links: [
        { text: 'Cancer Awareness Hub', url: 'https://www.cancerawarenesshub.com/' },
        { text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }
      ]
    },
    {
      title: 'Physical Activity',
      description: 'Engaging in regular physical exercise (at least 150 minutes per week) can lower the risk of several cancers and promote overall health.',
      links: [{ text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }]
    },
    {
      title: 'Safe Sex Practices',
      description: 'Practicing safe sex reduces the risk of HPV and hepatitis infections, which can lead to cancers like cervical and liver cancer.',
      links: [{ text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }]
    },
    {
      title: 'Vaccination',
      description: 'Vaccinations against HPV and hepatitis B can significantly reduce the risk of cancers associated with these viruses.',
      links: [{ text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }]
    },
    {
      title: 'Healthy Lifestyle Choices',
      description: 'Minimizing exposure to environmental toxins, such as radon and asbestos, and maintaining a healthy work-life balance can further reduce cancer risks.',
      links: [
        { text: 'Cancer Awareness Hub', url: 'https://www.cancerawarenesshub.com/' },
        { text: 'Prevent Cancer Foundation', url: 'https://www.preventcancer.org/' }
      ]
    }
  ];

  return (
    <div className="solutions-container">
      <h1 className="solutions-title">Solutions</h1>
      <p className="solutions-intro">Explore various strategies to reduce cancer risk and enhance health outcomes.</p>
      <ul className="solutions-list">
        {solutions.map((solution, index) => (
          <li key={index} className="solution-item">
            <h3 className="solution-title">{solution.title}</h3>
            <p className="solution-description">{solution.description}</p>
            <p className="solution-links">
              Sources: {solution.links.map((link, idx) => (
                <span key={idx}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="solution-link">{link.text}</a>
                  {idx < solution.links.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Solutions;
