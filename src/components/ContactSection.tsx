import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Code } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-background/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 section-animate" ref={sectionRef}>
          <div className="inline-block animate-fade-in opacity-0 mb-4" style={{ animationDelay: '0.1s' }}>
            <span className="px-3 py-1 bg-azure-900/40 text-azure-200 rounded-full text-sm font-medium border border-azure-700/30">
              Get In Touch
            </span>
          </div>
          <h2 className="heading-lg text-foreground">
            Let's Work Together
          </h2>
          <p className="mt-6 text-gray-300">
            Are you a recruiter hiring the best Data Engineers for your company? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 section-animate" style={{ animationDelay: '0.2s' }}>
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-6 space-y-6">
              <h3 className="heading-sm text-azure-300 mb-4">Contact Information</h3>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-azure-900 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-4 w-4 text-azure-400" />
                </div>
                <div>
                  <h4 className="font-medium text-azure-300">Email</h4>
                  <p className="text-gray-300 mb-2">rupamsau721401@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-azure-900 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-4 w-4 text-azure-400" />
                </div>
                <div>
                  <h4 className="font-medium text-azure-300">Phone</h4>
                  <p className="text-gray-300 mb-2">+91 - 9064869734</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-azure-900 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-azure-400" />
                </div>
                <div>
                  <h4 className="font-medium text-azure-300">Location</h4>
                  <p className="text-gray-300 mb-2">Kolkata, WB, India</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="heading-sm text-azure-300 mb-4">Connect With Me</h3>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/in/rupamsau0010/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-azure-900 flex items-center justify-center hover:bg-azure-800 transition-colors">
                  <Linkedin className="h-5 w-5 text-azure-400" />
                </a>
                <a href="https://github.com/rupamsau0010" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-azure-900 flex items-center justify-center hover:bg-azure-800 transition-colors">
                  <Github className="h-5 w-5 text-azure-400" />
                </a>
                <a href="https://leetcode.com/u/rupamsau_0010/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-azure-900 flex items-center justify-center hover:bg-azure-800 transition-colors">
                  <Code className="h-5 w-5 text-azure-400" />
                </a>
                <a href="https://instagram.com/rupamsau_0010" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-azure-900 flex items-center justify-center hover:bg-azure-800 transition-colors">
                  <Instagram className="h-5 w-5 text-azure-400" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="glass-card p-8">
              <h3 className="heading-sm text-azure-300 mb-6">Send Me a Message</h3>
              
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const mailto = `mailto:rupamsau721401@gmail.com?cc=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
                  window.location.href = mailto;
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-azure-300">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                      className="bg-azure-950/50 border-azure-800 text-gray-700 placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-azure-300">
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
                      className="bg-azure-950/50 border-azure-800 text-gray-700 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-azure-300">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?" 
                    required 
                    className="bg-azure-950/50 border-azure-800 text-gray-700 placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-azure-300">
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
                    className="bg-azure-950/50 border-azure-800 text-gray-700 placeholder:text-gray-500"
                  />
                </div>
                
                <Button type="submit" className="w-full flex items-center justify-center gap-2">
                  Send Message <Send className="h-4 w-4" />
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
