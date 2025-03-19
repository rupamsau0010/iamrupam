
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, Database, Server, BarChart, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = [
  {
    id: 1,
    title: 'Enterprise Data Lake Architecture',
    description: 'Designed and implemented a comprehensive data lake solution on Azure to consolidate data from various sources, enabling advanced analytics and ML workloads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Azure Data Lake', 'Databricks', 'Data Factory', 'Python'],
    category: 'data-engineering',
    icon: Database,
    features: [
      'Multi-layer data architecture (Bronze, Silver, Gold)',
      'Automated ETL pipelines using Azure Data Factory',
      'Data quality checks and monitoring',
      'Integration with Power BI for reporting'
    ]
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'Built a real-time analytics solution that processes streaming data from IoT devices and visualizes insights through interactive dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Stream Analytics', 'Event Hubs', 'Power BI', 'IoT Hub'],
    category: 'analytics',
    icon: BarChart,
    features: [
      'Real-time data ingestion via Azure Event Hubs',
      'Stream processing with Azure Stream Analytics',
      'Interactive Power BI dashboards',
      'Anomaly detection algorithms'
    ]
  },
  {
    id: 3,
    title: 'Data Warehouse Migration',
    description: 'Successfully migrated a legacy on-premise data warehouse to Azure Synapse Analytics, improving performance and reducing operational costs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Azure Synapse', 'SQL DW', 'ETL', 'Data Modeling'],
    category: 'data-engineering',
    icon: Server,
    features: [
      'Schema conversion and optimization',
      'Historical data migration with minimal downtime',
      'Performance tuning and optimization',
      'Automated testing framework'
    ]
  },
  {
    id: 4,
    title: 'Machine Learning Pipeline',
    description: 'Created an end-to-end ML pipeline for predictive maintenance using Azure Machine Learning and Azure Databricks.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Azure ML', 'Databricks', 'Python', 'MLOps'],
    category: 'machine-learning',
    icon: Cloud,
    features: [
      'Automated feature engineering',
      'Model training and evaluation',
      'CI/CD pipeline for ML models',
      'Model monitoring and retraining'
    ]
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
    <section id="projects" className="py-20 bg-azure-50/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate" ref={sectionRef}>
          <span className="inline-block px-3 py-1 bg-azure-100 text-azure-800 rounded-full text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="heading-lg">
            Data Solutions Portfolio
          </h2>
          <p className="mt-6 text-gray-600">
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex items-center space-x-1">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-azure-900/60 text-white border-none hover:bg-azure-900/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-azure-100 flex items-center justify-center mr-3">
                    <project.icon className="h-4 w-4 text-azure-700" />
                  </div>
                  <h3 className="heading-sm">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-start">
                        <ChevronRight className="h-4 w-4 text-azure-600 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Source
                  </Button>
                  <Button size="sm" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </Button>
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
