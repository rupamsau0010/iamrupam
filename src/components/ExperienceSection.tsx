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
      role: 'Data Engineer (Associate)',
      company: 'Cognizant Technology Solutions',
      duration: 'June 2025 - Present',
      location: 'Kolkata, West Bengal, India',
      description: 'Driving end-to-end data engineering and L3 production operations on Azure, delivering scalable pipelines, high data quality, and efficient, cloud-native analytics solutions.',
      achievements: {
        development: [
          'Driving the data engineering initiatives for a major insurance client, architecting cloud-native data solutions on Azure.',
          'Designing and developing scalable data pipelines on Azure Databricks, processing 10+ TB of data across multiple domains, including real-time IoT streaming using Kafka and Spark Structured Streaming.',
          'Building robust ETL/ELT frameworks with PySpark and Delta Lake that cut data processing time by 45% and significantly improve data quality.',
          "Working closely with Data Scientists, BI Engineers, and business teams to deliver analytics-ready datasets that support key decision-making.",
          'Implementing DataOps practices—CI/CD, automated testing, and IaC with Azure DevOps—resulting in 60% faster deployment cycles.'
        ],
        support: [
          'Providing L3 production support for mission-critical data platforms, maintaining 99.5% uptime for pipelines supporting 200+ downstream systems.',
          'Leading high-priority incident resolution and root cause analysis, reducing MTTR from 4 hours to under 90 minutes.',
          'Setting up strong data quality and anomaly-detection frameworks using ADF and Databricks, preventing issues before they reach business users.',
          'Mentoring L1/L2 teams and creating detailed runbooks and knowledge-base documentation, improving first-call resolution by 35%.',
          'Driving performance tuning and cost-optimization efforts that reduce compute costs by 30% while ensuring all SLAs are met.'
        ]
      }
    },
    {
      id: 2,
      role: 'Data Engineer (Programmer Analyst)',
      company: 'Cognizant Technology Solutions',
      duration: 'Oct 2022 - June 2025',
      location: 'Kolkata, West Bengal, India',
      description: 'Contributing to large-scale data engineering initiatives for a leading property insurance provider in North America, focusing on Azure cloud technologies.',
      achievements: [
        'Designed and implemented a scalable Operational Data Store (ODS) on Azure from scratch.',
        'Optimized ETL pipelines to handle 7+ TBs of data efficiently, improving ingestion speed.',
        'Collaborated with Data Scientists and BI Engineers to ensure high-quality data for analytics.',
        'Developed Spark-based ETL solutions reducing execution time by 40%, leading to cost efficiency.'
      ]
    },
    {
      id: 3,
      role: 'Big Data Engineer Intern',
      company: 'Cognizant Technology Solutions',
      duration: 'Feb 2022 - Aug 2022',
      location: 'Kolkata, West Bengal, India',
      description: 'Hands-on experience with Big Data technologies like Hadoop, Hive, and Kafka, focusing on performance optimization.',
      achievements: [
        'Developed a POC to flatten large machine-generated JSON/XML files, reducing transformation time by 150%.',
        'Collaborated with senior developers on data engineering best practices and optimization strategies.',
        'Worked on real-world Big Data challenges using the Hadoop ecosystem.'
      ]
    },
    {
      id: 4,
      role: 'Backend Developer Intern',
      company: 'Mentorsity',
      duration: 'Mar 2021 - May 2021',
      location: 'Kolkata, West Bengal, India',
      description: 'Worked on backend systems using Node.js with a microservice architecture and MongoDB for database solutions.',
      achievements: [
        'Designed RESTful APIs ensuring modularity, scalability, and 100% availability.',
        'Built efficient data models and handled CRUD operations with MongoDB.',
        'Collaborated with the frontend engineering team to ensure seamless API integration.'
      ]
    },
    {
      id: 5,
      role: 'Full-stack Developer',
      company: 'Freelance',
      duration: 'Aug 2020 - Oct 2022',
      location: 'Kolkata, West Bengal, India',
      description: 'Developed responsive web applications as a freelancer using modern JavaScript frameworks and cloud solutions.',
      achievements: [
        'Worked as a freelancer on Fiver and freelance.com, delivering projects on time.',
        'Built full-stack web apps using React.js, Node.js, Express.js, and MongoDB.',
        'Implemented scalable backend services and intuitive frontend designs.',
        'Managed end-to-end project delivery from requirements gathering to deployment.'
      ]
    }
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
                      {Array.isArray(exp.achievements) ? (
                        exp.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-azure-500 mt-1.5 mr-2"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))
                      ) : (
                        <>
                          <div className="mb-2 font-medium text-azure-200">Development</div>
                          <ul className="space-y-2 mb-4">
                            {exp.achievements.development.map((a: string, i: number) => (
                              <li key={`dev-${i}`} className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-azure-500 mt-1.5 mr-2"></div>
                                <span className="text-gray-300">{a}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mb-2 font-medium text-azure-200">Support</div>
                          <ul className="space-y-2">
                            {exp.achievements.support.map((a: string, i: number) => (
                              <li key={`sup-${i}`} className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-azure-500 mt-1.5 mr-2"></div>
                                <span className="text-gray-300">{a}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
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
