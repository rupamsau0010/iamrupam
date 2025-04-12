
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
      role: 'Programming Analyst',
      company: 'Cognizant',
      duration: 'Oct 2022 - Present',
      location: 'Kolkata, West Bengal, India',
      description: 'Working on Azure-based data engineering projects, building scalable data solutions.',
      achievements: [
        'Designed and implemented ETL pipelines using Azure Data Factory and Databricks',
        'Created optimized data solutions leveraging Azure cloud services',
        'Implemented data quality frameworks to ensure data integrity',
        'Collaborated with data science teams on predictive analytics solutions'
      ]
    },
    {
      id: 2,
      role: 'GenC Next Intern',
      company: 'Cognizant',
      duration: 'Feb 2022 - Oct 2022',
      location: 'Remote',
      description: 'Trained on various big data technologies including Apache Sqoop and HBase.',
      achievements: [
        'Learned and applied big data concepts in real-world scenarios',
        'Gained hands-on experience with Apache ecosystem tools',
        'Participated in data engineering training programs',
        'Assisted in data integration and processing projects'
      ]
    },
    {
      id: 3,
      role: 'Full-stack Developer',
      company: 'Freelance',
      duration: 'Aug 2020 - Present',
      location: 'Kolkata, West Bengal, India',
      description: 'Developed web applications using modern JavaScript frameworks and libraries.',
      achievements: [
        'Built responsive web applications using React.js, Node.js and other frameworks',
        'Created custom client solutions for various business needs',
        'Implemented database designs and integrations using SQL',
        'Managed projects from requirements gathering to deployment'
      ]
    },
    {
      id: 4,
      role: 'Back End Developer (Node.js)',
      company: 'Mentorsity',
      duration: 'Mar 2021 - May 2021',
      location: 'Internship',
      description: 'Worked on backend development using Node.js, with experience in Git and SQL.',
      achievements: [
        'Developed RESTful APIs using Node.js and Express',
        'Implemented database models and queries',
        'Collaborated with frontend developers for seamless integration',
        'Participated in code reviews and followed Git workflow'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate" ref={sectionRef}>
          <span className="inline-block px-3 py-1 bg-azure-900/40 text-azure-200 rounded-full text-sm font-medium mb-4 border border-azure-700/30">
            Professional Journey
          </span>
          <h2 className="heading-lg">
            Work Experience
          </h2>
          <p className="mt-6 text-gray-400">
            A track record of success in designing and implementing data solutions that drive business value.
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto section-animate" style={{ animationDelay: '0.2s' }}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`glass-card p-8 hover:shadow-lg transition-shadow ${index === 0 ? 'border-t-4 border-t-azure-500' : ''}`}>
              <div className="md:flex justify-between items-start">
                <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                  <div className="flex items-center text-azure-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-300 mb-2">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">{exp.role}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-azure-300 flex items-center mb-3">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-azure-500 mt-1.5 mr-2"></div>
                          <span className="text-gray-300">{achievement}</span>
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
