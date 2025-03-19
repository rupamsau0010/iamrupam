
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
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
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-azure-50/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate" ref={sectionRef}>
          <span className="inline-block px-3 py-1 bg-azure-100 text-azure-800 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="heading-lg">
            Let's Work Together
          </h2>
          <p className="mt-6 text-gray-600">
            Interested in discussing a project or have questions about my work? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 section-animate" style={{ animationDelay: '0.2s' }}>
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-6 space-y-6">
              <h3 className="heading-sm text-azure-800 mb-4">Contact Information</h3>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-4 w-4 text-azure-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contact@dataengineer.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-4 w-4 text-azure-600" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-azure-600" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Seattle, Washington, USA</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="heading-sm text-azure-800 mb-4">Connect With Me</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center hover:bg-azure-200 transition-colors">
                  <Linkedin className="h-5 w-5 text-azure-700" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center hover:bg-azure-200 transition-colors">
                  <Github className="h-5 w-5 text-azure-700" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-azure-100 flex items-center justify-center hover:bg-azure-200 transition-colors">
                  <Twitter className="h-5 w-5 text-azure-700" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="glass-card p-8">
              <h3 className="heading-sm text-azure-800 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending<span className="animate-pulse">...</span></>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
