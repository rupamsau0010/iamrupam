
import React, { useEffect, useRef } from 'react';
import { Calendar, Building, Briefcase, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      role: 'Senior Data Engineer',
      company: 'TechInnovate Inc.',
      duration: 'Jan 2021 - Present',
      location: 'Seattle, WA',
      description: 'Leading the design and implementation of enterprise-scale data platforms on Azure.',
      achievements: [
        'Architected and delivered a data lake solution that reduced data processing times by 60%',
        'Led a team of 5 data engineers in migrating on-premise data warehouse to Azure Synapse',
        'Implemented CI/CD pipelines for automated deployment of data solutions',
        'Optimized data pipelines resulting in 45% cost reduction in cloud service usage'
      ]
    },
    {
      id: 2,
      role: 'Data Engineer',
      company: 'DataFlux Solutions',
      duration: 'Mar 2019 - Dec 2020',
      location: 'San Francisco, CA',
      description: 'Designed and developed ETL pipelines using Azure Data Factory, Databricks, and SQL Data Warehouse.',
      achievements: [
        'Built real-time data processing solution using Azure Stream Analytics and Event Hubs',
        'Developed data quality framework to ensure data integrity across multiple sources',
        'Created automated reporting dashboard using Power BI, improving decision-making process',
        'Collaborated with data science team to implement ML models for predictive analytics'
      ]
    },
    {
      id: 3,
      role: 'Data Analyst',
      company: 'Analytics Co.',
      duration: 'Jul 2017 - Feb 2019',
      location: 'Austin, TX',
      description: 'Performed data analysis and created dashboards using Power BI. Helped migrate on-premise SQL databases to Azure.',
      achievements: [
        'Analyzed large datasets to identify trends and provide actionable insights',
        'Developed interactive dashboards that improved executive decision-making',
        'Assisted in migrating SQL Server databases to Azure SQL Database',
        'Implemented data transformation processes using SQL and Python'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate" ref={sectionRef}>
          <span className="inline-block px-3 py-1 bg-azure-100 text-azure-800 rounded-full text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="heading-lg">
            Work Experience
          </h2>
          <p className="mt-6 text-gray-600">
            A track record of success in designing and implementing data solutions that drive business value.
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto section-animate" style={{ animationDelay: '0.2s' }}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`glass-card p-8 hover:shadow-lg transition-shadow ${index === 0 ? 'border-t-4 border-t-azure-500' : ''}`}>
              <div className="md:flex justify-between items-start">
                <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                  <div className="flex items-center text-azure-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">{exp.role}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-azure-800 flex items-center mb-3">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-azure-500 mt-1.5 mr-2"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
