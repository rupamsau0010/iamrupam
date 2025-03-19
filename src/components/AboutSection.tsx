
import React, { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const AboutSection = () => {
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
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-azure-50">
      <div className="section-container">
        <div ref={sectionRef} className="section-animate">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-2/5">
              <div className="sticky top-24">
                <span className="inline-block px-3 py-1 bg-data-100 text-data-800 rounded-full text-sm font-medium mb-4">
                  About Me
                </span>
                <h2 className="heading-lg">
                  Passionate about solving <span className="text-azure-600">complex data challenges</span>
                </h2>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-azure-500 to-data-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="md:w-3/5 space-y-6">
              <p className="text-lg text-gray-700">
                With over 5 years of experience as a Data Engineer specializing in Azure Cloud technologies, 
                I've developed a passion for designing and implementing robust data solutions that drive business value.
              </p>
              
              <p className="text-lg text-gray-700">
                My expertise spans the entire data lifecycle—from ingestion and transformation to storage and analytics. 
                I excel at building scalable data pipelines, ETL processes, and analytics solutions using Azure's comprehensive suite of services.
              </p>
              
              <div className="glass-card p-6 mt-8">
                <h3 className="heading-sm mb-4 text-azure-800">My Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">User-Centered Design</strong> — Building data solutions with the end-user's needs in mind
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Scalable Architecture</strong> — Designing systems that can grow with your organization
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Continuous Improvement</strong> — Iterating and refining solutions based on feedback and metrics
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Security First</strong> — Implementing robust security measures at every layer
                    </p>
                  </li>
                </ul>
              </div>
              
              <ScrollArea className="h-64 glass-card p-6 mt-8">
                <h3 className="heading-sm mb-4 text-azure-800">Career Journey</h3>
                <div className="relative pl-8 border-l-2 border-azure-200 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-500"></div>
                    <div className="mb-1 text-lg font-semibold">Senior Data Engineer</div>
                    <div className="text-sm text-gray-500 mb-2">TechInnovate Inc. • 2021 - Present</div>
                    <p className="text-gray-700">
                      Leading the design and implementation of enterprise-scale data platforms on Azure.
                      Successfully delivered solutions that reduced data processing times by 60%.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-300"></div>
                    <div className="mb-1 text-lg font-semibold">Data Engineer</div>
                    <div className="text-sm text-gray-500 mb-2">DataFlux Solutions • 2019 - 2021</div>
                    <p className="text-gray-700">
                      Designed and developed ETL pipelines using Azure Data Factory, Databricks,
                      and SQL Data Warehouse for clients across finance and healthcare sectors.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-200"></div>
                    <div className="mb-1 text-lg font-semibold">Data Analyst</div>
                    <div className="text-sm text-gray-500 mb-2">Analytics Co. • 2017 - 2019</div>
                    <p className="text-gray-700">
                      Performed data analysis and created dashboards using Power BI.
                      Helped migrate on-premise SQL databases to Azure SQL Database.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
