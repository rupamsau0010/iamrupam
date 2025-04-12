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
                As a Computer Science Engineer, I am passionate about utilizing technology to analyze complex business problems and provide simple and effective solutions. My love for new challenges and continuous learning has enabled me to develop expertise in Big Data technologies.
              </p>
              
              <p className="text-lg text-gray-700">
                I specialize in working with cutting-edge technologies such as Azure Databricks, Azure Data Factory, Azure SQL, Azure Synapse Analytics, and ADLS Gen2 to deliver efficient and effective solutions for clients. Through my experience and expertise, I have developed a keen understanding of how to leverage technology to drive business growth and success.
              </p>
              
              <div className="glass-card p-6 mt-8">
                <h3 className="heading-sm mb-4 text-azure-800">My Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Data-Driven Solutions</strong> — Building scalable data architectures that deliver actionable insights
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Cloud-First Engineering</strong> — Leveraging Azure's powerful ecosystem for optimal performance
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Continuous Learning</strong> — Staying updated with the latest technologies and best practices
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-600"></div>
                    </div>
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Dynamic Collaboration</strong> — Working with teams to deliver integrated solutions
                    </p>
                  </li>
                </ul>
              </div>
              
              <ScrollArea className="h-64 glass-card p-6 mt-8">
                <h3 className="heading-sm mb-4 text-azure-800">Career Journey</h3>
                <div className="relative pl-8 border-l-2 border-azure-200 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-500"></div>
                    <div className="mb-1 text-lg font-semibold">Programming Analyst</div>
                    <div className="text-sm text-gray-500 mb-2">Cognizant • 2022 - Present</div>
                    <p className="text-gray-700">
                      Working on Azure-based data engineering projects, building ETL processes, 
                      and implementing data solutions using Azure Databricks and Data Factory.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-300"></div>
                    <div className="mb-1 text-lg font-semibold">Full-stack Developer</div>
                    <div className="text-sm text-gray-500 mb-2">Freelance • 2020 - Present</div>
                    <p className="text-gray-700">
                      Developing web applications using modern JavaScript frameworks and libraries,
                      creating custom solutions for various client needs.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-200"></div>
                    <div className="mb-1 text-lg font-semibold">Computer Science Engineering</div>
                    <div className="text-sm text-gray-500 mb-2">Future Institute Of Engineering and Management • 2018 - 2022</div>
                    <p className="text-gray-700">
                      Bachelor's degree in Computer Science, focusing on building a strong foundation 
                      in programming, data structures, and software development.
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
