import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, Database, Server, BarChart, Cloud, Mail, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = [
  {
    id: 1,
    title: 'Email Automation Tool in Azure',
    description: 'Developed a scheduler-based email automation tool for conditional batch processing of emails using Azure technologies, including ADF, Databricks, ADLS Gen2, and Azure SQL.',
    image: 'https://martech.org/wp-content/uploads/2024/10/Email-marketing-automation-concept.png',
    tags: ['ADF', 'Databricks', 'ADLS Gen2', 'Azure SQL'],
    category: 'data-engineering',
    icon: Mail,
    features: [
      'Built email processing workflows using Azure Data Factory',
      'Implemented conditional logic for email routing and processing',
      'Created a scheduling system for batch email operations',
      'Developed monitoring dashboards for email processing metrics'
    ],
    duration: 'Feb 2023 - Mar 2023',
    source: 'https://github.com/rupamsau0010/email-automation-dashboard-databricks'
  },
  {
    id: 2,
    title: 'ThirdEye-Spy: Attendance Monitoring',
    description: 'Created a real-time attendance monitoring system with face-recognition algorithm, enhancing attendance tracking through face-recognition where all user activity can be tracked.',
    image: 'https://repository-images.githubusercontent.com/194294975/e6cdef00-99ef-11e9-90d0-c64097fc903d',
    tags: ['Python', 'Face Recognition', 'SQL', 'Node.js', 'React.js'],
    category: 'machine-learning',
    icon: Cloud,
    features: [
      'Implemented face detection and recognition algorithms',
      'Built web application for real-time monitoring',
      'Created database storage for attendance records',
      'Developed analytics for attendance patterns'
    ],
    duration: 'Mar 2020 - Dec 2020',
    source: 'https://github.com/rupamsau0010/ThirdEye-Spy'
  },
  {
    id: 3,
    title: 'Covid-19 Data Processing',
    description: 'Developed a complete data pipeline in the Azure environment for processing Covid-19 data, leveraging ADF, Databricks, ADLS Gen2, and Azure SQL.',
    image: 'https://www.tableau.com/sites/default/files/2021-09/COVID_Starter.png',
    tags: ['ADF', 'Databricks', 'ADLS Gen2', 'Azure SQL'],
    category: 'data-engineering',
    icon: Activity,
    features: [
      'Ingested and processed global COVID-19 statistics',
      'Built streamlined data pipeline for efficient processing',
      'Created visualizations and dashboards for data insights',
      'Implemented scalable architecture to handle changing data volumes'
    ],
    duration: 'Dec 2022 - Feb 2023',
    source: 'https://github.com/rupamsau0010/covid-reporting-adf'
  },
  {
    id: 4,
    title: 'Formula 1 Racing Data Analytics',
    description: 'Transformed historical data from Formula 1 racing into meaningful insights using Azure Databricks, Delta Table, Azure SQL, and ADLS Gen2. The project involved tasks from data ingestion to processing and visualization.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jRcdvzxE1oqJt4D8',
    tags: ['Azure Databricks', 'Delta Table', 'Azure SQL', 'ADLS Gen2'],
    category: 'data-engineering',
    icon: BarChart,
    features: [
      'Designed and implemented ETL pipelines for race telemetry data',
      'Created optimized storage schema with Delta Tables',
      'Built interactive dashboards for race performance analysis',
      'Implemented real-time data processing for live race insights'
    ],
    duration: 'Nov 2022 - Jan 2023',
    source: 'https://github.com/rupamsau0010/azure-databricks-formula-1'
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
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

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  return (
    <section id="projects" className="py-20 bg-background/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate" ref={sectionRef}>
          <div className="inline-block animate-fade-in opacity-0 mb-4" style={{ animationDelay: '0.1s' }}>
            <span className="px-3 py-1 bg-azure-900/40 text-azure-200 rounded-full text-sm font-medium border border-azure-700/30">
              Featured Projects
            </span>
          </div>
          <h2 className="heading-lg text-foreground">
            Data Solutions Portfolio
          </h2>
          <p className="mt-6 text-gray-300">
            Explore a collection of data engineering projects that showcase my expertise in Azure Cloud technologies and data solutions.
          </p>
          
          <div className="mt-8">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="data-engineering">Data Eng</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="machine-learning">ML</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-animate" style={{ animationDelay: '0.2s' }}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex items-center space-x-1">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-azure-900/80 text-azure-100 border-none hover:bg-azure-900/90">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-azure-900 flex items-center justify-center mr-3">
                      <project.icon className="h-4 w-4 text-azure-400" />
                    </div>
                    <h3 className="heading-sm text-gray-100">{project.title}</h3>
                  </div>
                  <span className="text-sm text-gray-400">{project.duration}</span>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-gray-100">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start">
                        <ChevronRight className="h-4 w-4 text-azure-400 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      Source
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
