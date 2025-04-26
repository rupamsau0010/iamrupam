import React, { useEffect, useRef } from 'react';
import { BarChart, Database, Code, Server, Cloud, Network, Link, Github } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
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

  const technicalSkills = [
    { name: 'Azure Databricks', value: 95 },
    { name: 'PySpark', value: 95 },
    { name: 'SQL & T-SQL', value: 90 },
    { name: 'Python', value: 90 },
    { name: 'Delta Lake', value: 90 },
    { name: 'Azure Data Factory', value: 85 },
    { name: 'Azure Synapse Analytics', value: 85 },
    { name: 'Hadoop', value: 80 },
    { name: 'Power BI', value: 75 },
    { name: 'Kafka', value: 70 },
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'SQL', 'PySpark', 'Java', 'Scala', 'R', 'JavaScript', 'C++', 'C'],
    },
    {
      icon: Database,
      title: 'Data Storage',
      skills: ['Databricks Delta Tables', 'Azure SQL Database', 'Azure Data Lake Storage Gen2', 'Azure Blob Storage', 'Azure Cosmos DB', 'Apache Kafka'],
    },
    {
      icon: Server,
      title: 'Data Processing & ETL',
      skills: ['Azure Databricks', 'Azure Data Factory'],
    },
    {
      icon: Network,
      title: 'Big Data',
      skills: ['Hadoop', 'Spark', 'Apache Kafka', 'Apache Sqoop', 'Apache HBase'],
    },
    {
      icon: BarChart,
      title: 'Warehouse & Analytics',
      skills: ['Power BI', 'Azure Synapse Analytics', 'Azure Fabric'],
    },
    {
      icon: Github,
      title: 'DevOps',
      skills: ['GitHub', 'Azure DevOps', 'Azure Monitor'],
    },
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate">
          <div className="inline-block animate-fade-in opacity-0 mb-4" style={{ animationDelay: '0.1s' }}>
            <span className="px-3 py-1 bg-azure-900/40 text-azure-200 rounded-full text-sm font-medium border border-azure-700/30">
              Skills & Expertise
            </span>
          </div>
          <h2 className="heading-lg">
            Technical Proficiencies
          </h2>
          <p className="mt-6 text-gray-300">
            With specialized expertise in Azure Cloud and data technologies, I bring a comprehensive skill set to tackle complex data engineering challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 section-animate" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-6 space-y-6">
            <h3 className="heading-sm text-azure-800 flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Technical Proficiency
            </h3>
            
            <div className="space-y-4 text-gray-300">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <Progress 
                    value={skill.value} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <div key={index} className="glass-card p-5 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center mb-3">
                    <category.icon className="h-5 w-5 text-azure-600 mr-2" />
                    <h4 className="font-semibold text-azure-800 flex items-center gap-2">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-azure-500 mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 glass-card p-8 section-animate" style={{ animationDelay: '0.4s' }}>
          <h3 className="heading-sm text-azure-800 mb-6 flex items-center gap-2">
            <Link className="h-5 w-5" />
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border border-azure-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-3">
                  <Database className="h-5 w-5 text-azure-700" />
                </div>
                <div>
                  <a href="https://example.com/databricks-certified-data-engineer-professional" target="_blank" rel="noopener noreferrer">
                    <h4 className="font-medium text-azure-800">Databricks Certified:</h4>
                    <p className="text-sm text-gray-600">Data Engineer Professional</p>
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Issued: Jan 2025 • Expires: Jan 2027</p>
            </div>
            
            <div className="border border-azure-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-3">
                  <Cloud className="h-5 w-5 text-azure-700" />
                </div>
                <div>
                  <a href="https://example.com/microsoft-certified-azure-data-engineer-associate" target="_blank" rel="noopener noreferrer">
                    <h4 className="font-medium text-azure-800">Microsoft Certified:</h4>
                    <p className="text-sm text-gray-600">Azure Data Engineer Associate</p>
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Issued: Jun 2024 • Expires: Jul 2025</p>
            </div>
            
            <div className="border border-azure-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-3">
                  <Database className="h-5 w-5 text-azure-700" />
                </div>
                <div>
                  <a href="https://example.com/databricks-certified-data-engineer-associate" target="_blank" rel="noopener noreferrer">
                    <h4 className="font-medium text-azure-800">Databricks Certified:</h4>
                    <p className="text-sm text-gray-600">Data Engineer Associate</p>
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Issued: Mar 2024 • Expires: Mar 2026</p>
            </div>
            
            <div className="border border-azure-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-3">
                  <Cloud className="h-5 w-5 text-azure-700" />
                </div>
                <div>
                  <a href="https://example.com/microsoft-certified-azure-ai-fundamentals" target="_blank" rel="noopener noreferrer">
                    <h4 className="font-medium text-azure-800">Microsoft Certified:</h4>
                    <p className="text-sm text-gray-600">Azure AI Fundamentals</p>
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Issued: Feb 2023</p>
            </div>
            
            <div className="border border-azure-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-3">
                  <Cloud className="h-5 w-5 text-azure-700" />
                </div>
                <div>
                  <a href="https://example.com/microsoft-certified-azure-data-fundamentals" target="_blank" rel="noopener noreferrer">
                    <h4 className="font-medium text-azure-800">Microsoft Certified:</h4>
                    <p className="text-sm text-gray-600">Azure Data Fundamentals</p>
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Issued: Feb 2023</p>
            </div>
            
            <div className="border border-azure-100 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-3">
                  <Cloud className="h-5 w-5 text-azure-700" />
                </div>
                <div>
                  <a href="https://example.com/microsoft-certified-azure-fundamentals" target="_blank" rel="noopener noreferrer">
                    <h4 className="font-medium text-azure-800">Microsoft Certified:</h4>
                    <p className="text-sm text-gray-600">Azure Fundamentals</p>
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Issued: Feb 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
