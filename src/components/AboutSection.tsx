import React, { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from './ThemeProvider';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
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
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div ref={sectionRef} className="section-animate">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-2/5">
              <div className="sticky top-24">
                <div className="inline-block animate-fade-in opacity-0 mb-4" style={{ animationDelay: '0.1s' }}>
                  <span className="px-3 py-1 bg-azure-900/40 text-azure-200 rounded-full text-sm font-medium border border-azure-700/30">
                    About Me
                  </span>
                </div>
                <h2 className="heading-lg text-foreground">
                  Passionate about solving <span className="text-azure-400">complex data challenges</span>
                </h2>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-azure-500 to-data-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="md:w-3/5 space-y-6">
              <p className="text-lg text-gray-300">
                Hi, I'm Rupam; with over 3 years of experience as a Data Engineer specializing in Azure Cloud technologies, I've developed a passion for designing and implementing robust data solutions that drive business value.
              </p>
              
              <p className="text-lg text-gray-300">
                My expertise spans the entire data lifecycle—from ingestion and transformation to storage and analytics. I excel at building scalable data pipelines, ETL processes, and analytics solutions using Azure's comprehensive suite of services.
              </p>
              
              <div className="glass-card p-6 mt-8">
                <h3 className="heading-sm mb-4 text-azure-300">My Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-900 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-400"></div>
                    </div>
                    <p className="text-gray-300">
                      <strong className="text-gray-100">User-Centered Design</strong> — Building data solutions with the end-user's needs in mind
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-900 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-400"></div>
                    </div>
                    <p className="text-gray-300">
                      <strong className="text-gray-100">Scalable Architecture</strong> — Designing systems that can grow with your organization
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-900 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-400"></div>
                    </div>
                    <p className="text-gray-300">
                      <strong className="text-gray-100">Continuous Improvement</strong> — Iterating and refining solutions based on feedback and metrics
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-azure-900 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-azure-400"></div>
                    </div>
                    <p className="text-gray-300">
                      <strong className="text-gray-100">Security First</strong> — Implementing robust security measures at every layer
                    </p>
                  </li>
                </ul>
              </div>
              
              <ScrollArea className="h-80 glass-card p-6 mt-8">
                <h3 className="heading-sm mb-4 text-azure-300">Career Journey</h3>
                <div className="relative pl-8 border-l-2 border-azure-700 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-800"></div>
                    <div className="mb-1 text-lg font-semibold text-gray-100">Programmer Analyst - Data Engineer</div>
                    <div className="text-sm text-gray-400 mb-2">Cognizant Technology Solutions • Oct 2022 - Present</div>
                    <p className="text-gray-300">
                      Implemented a high-performance data ecosystem for a major insurance provider, slashing processing times by 40% while efficiently managing 7+ TB of data through custom Azure ODS and optimized Spark ETL solutions.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-700"></div>
                    <div className="mb-1 text-lg font-semibold text-gray-100">GenC Next Intern - AIAModernDataEngineering</div>
                    <div className="text-sm text-gray-400 mb-2">Cognizant Technology Solutions • Feb 2022 - Sep 2022</div>
                    <p className="text-gray-300">
                      Accelerated machine-generated data processing by 150% through hands-on implementation of Hadoop, Hive, and Kafka while mastering data engineering best practices.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-600"></div>
                    <div className="mb-1 text-lg font-semibold text-gray-100">Backend Developer Intern</div>
                    <div className="text-sm text-gray-400 mb-2">Mentorsity • Mar 2021 - May 2021</div>
                    <p className="text-gray-300">
                      Built robust Node.js microservice APIs with MongoDB integration, delivering 100% availability while ensuring seamless data flow between backend systems and frontend applications.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[29px] w-6 h-6 rounded-full bg-azure-500"></div>
                    <div className="mb-1 text-lg font-semibold text-gray-100">B.tech - Computer Science & Engineering</div>
                    <div className="text-sm text-gray-400 mb-2">MAKAUT • July 2018 - Jun 2022</div>
                    <p className="text-gray-300">
                    Completed Bachelor of Technology in Computer Science & Engineering with a distinguished 9.10 CGPA from Future Institute of Engineering and Management, Kolkata (MAKAUT University).
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
