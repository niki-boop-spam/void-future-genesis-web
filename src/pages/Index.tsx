import { useState, useRef } from 'react';
import { ArrowRight, ChevronDown, Code, Database, FileText, Zap } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import DeveloperForm from '@/components/DeveloperForm';
import BusinessForm from '@/components/BusinessForm';
import AboutModal from '@/components/AboutModal';
import PrivacyModal from '@/components/PrivacyModal';

const Index = () => {
  // State for forms and modals
  const [showDeveloperForm, setShowDeveloperForm] = useState(false);
  const [showBusinessForm, setShowBusinessForm] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  
  // Refs for scrolling
  const developerSectionRef = useRef<HTMLDivElement>(null);
  
  // Handler for careers button
  const handleCareersClick = () => {
    if (developerSectionRef.current) {
      developerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-brand-secondary-dark/90 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-brand-primary-light dark:bg-brand-primary-dark animate-pulse-subtle"></div>
            <span className="text-xl font-display font-semibold">The Void Company</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#solutions" className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">Solutions</a>
              <a href="#features" className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">Features</a>
              <a href="#contact" className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">Contact</a>
            </nav>
            <ThemeToggle />
            <button 
              onClick={() => setShowBusinessForm(true)}
              className="hidden md:block btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Building future tech for future generations.
              </h1>
              <p className="text-lg md:text-xl text-utility-text-secondary-light dark:text-utility-text-secondary-dark max-w-2xl">
                We develop frameworks and tools that help businesses improve efficiency and scale innovation, transforming abstract possibilities into tangible results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setShowBusinessForm(true)}
                  className="btn-primary"
                >
                  Partner with us
                </button>
                <button 
                  onClick={() => setShowDeveloperForm(true)}
                  className="btn-secondary"
                >
                  Join our team
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-80 md:h-96 w-full bg-brand-secondary-light/30 dark:bg-brand-secondary-dark/50 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-brand-primary-light dark:bg-brand-primary-dark animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <a 
              href="#solutions" 
              className="flex flex-col items-center text-utility-text-secondary-light dark:text-utility-text-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors"
            >
              <span className="mb-2">Explore our solutions</span>
              <ChevronDown className="h-6 w-6 animate-float" />
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-brand-secondary-light dark:bg-brand-secondary-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Solutions</h2>
            <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark max-w-3xl mx-auto">
              We create cutting-edge frameworks and tools that transform how businesses operate, innovate, and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:translate-y-[-8px] transition-all">
              <div className="rounded-full bg-brand-primary-light/10 dark:bg-brand-primary-dark/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-brand-primary-light dark:text-brand-primary-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Development Frameworks</h3>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                Accelerate your development process with our streamlined, adaptable frameworks that reduce complexity and boost productivity.
              </p>
              <div className="mt-6 text-brand-primary-light dark:text-brand-primary-dark flex items-center group-hover:translate-x-1 transition-transform">
                <span className="mr-2 font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            
            <div className="card group hover:translate-y-[-8px] transition-all">
              <div className="rounded-full bg-accent-2-light/10 dark:bg-accent-2-dark/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-accent-2-light dark:text-accent-2-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Integration Tools</h3>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                Seamlessly connect and leverage your data across platforms with our intelligent integration tools designed for the modern enterprise.
              </p>
              <div className="mt-6 text-accent-2-light dark:text-accent-2-dark flex items-center group-hover:translate-x-1 transition-transform">
                <span className="mr-2 font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            
            <div className="card group hover:translate-y-[-8px] transition-all">
              <div className="rounded-full bg-accent-3-light/10 dark:bg-accent-3-dark/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-accent-3-light dark:text-accent-3-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automation Solutions</h3>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                Transform repetitive tasks into automated workflows, freeing your team to focus on innovation and strategic initiatives.
              </p>
              <div className="mt-6 text-accent-3-light dark:text-accent-3-dark flex items-center group-hover:translate-x-1 transition-transform">
                <span className="mr-2 font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Key Features</h2>
            <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark max-w-3xl mx-auto">
              Our technology is built with adaptability, scalability, and user experience at its core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="flex flex-col space-y-12">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="h-12 w-12 rounded-lg bg-semantic-success-light/10 dark:bg-semantic-success-dark/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-semantic-success-light dark:text-semantic-success-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modular Architecture</h3>
                  <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                    Build exactly what you need with our component-based approach that adapts to your specific business requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="h-12 w-12 rounded-lg bg-semantic-success-light/10 dark:bg-semantic-success-dark/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-semantic-success-light dark:text-semantic-success-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                    Rest easy with built-in security protocols that protect your data and ensure compliance with industry standards.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="h-12 w-12 rounded-lg bg-semantic-success-light/10 dark:bg-semantic-success-dark/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-semantic-success-light dark:text-semantic-success-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                  <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                    Connect with your existing tech stack through our comprehensive API and integration capabilities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-12">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="h-12 w-12 rounded-lg bg-brand-primary-light/10 dark:bg-brand-primary-dark/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-brand-primary-light dark:text-brand-primary-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
                  <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                    Grow without constraints using our cloud-native technologies that scale effortlessly with your business.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="h-12 w-12 rounded-lg bg-brand-primary-light/10 dark:bg-brand-primary-dark/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-brand-primary-light dark:text-brand-primary-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                  <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                    Make informed decisions with powerful analytics tools that provide insights exactly when you need them.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="h-12 w-12 rounded-lg bg-brand-primary-light/10 dark:bg-brand-primary-dark/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-brand-primary-light dark:text-brand-primary-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intuitive User Experience</h3>
                  <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                    Enjoy elegant, user-centric interfaces that reduce learning curves and boost productivity across your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="contact" className="py-20 px-4 bg-brand-secondary-light dark:bg-brand-secondary-dark/30" ref={developerSectionRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Join Our Team</h2>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                We're always looking for talented individuals who are passionate about building the future of technology. 
                Join us in our mission to create innovative solutions that make a difference.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setShowDeveloperForm(true)}
                  className="btn-primary glow-on-hover"
                >
                  Apply as Developer
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Partner With Us</h2>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                Looking to take your business to the next level? Our team is ready to help you implement 
                solutions that drive efficiency, innovation, and growth.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setShowBusinessForm(true)}
                  className="btn-primary glow-on-hover"
                >
                  Request a Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-tertiary-light/10 dark:bg-brand-tertiary-dark/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-brand-primary-light dark:bg-brand-primary-dark"></div>
              <span className="text-lg font-display font-semibold">The Void Company</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowAboutModal(true)}
                className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={handleCareersClick}
                className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors"
              >
                Careers
              </button>
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors"
              >
                Privacy Policy
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-utility-text-secondary-light/20 dark:border-utility-text-secondary-dark/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark text-sm">
                &copy; {new Date().getFullYear()} The Void Company. All rights reserved.
              </p>
              
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Forms and Modals */}
      <DeveloperForm open={showDeveloperForm} onClose={() => setShowDeveloperForm(false)} />
      <BusinessForm open={showBusinessForm} onClose={() => setShowBusinessForm(false)} />
      <AboutModal open={showAboutModal} onClose={() => setShowAboutModal(false)} />
      <PrivacyModal open={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
    </div>
  );
};

export default Index;
