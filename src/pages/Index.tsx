import { useState, useRef } from 'react';
import { ArrowRight, ChevronDown, Code, Database, FileText, Zap, Linkedin } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import DeveloperForm from '@/components/DeveloperForm';
import BusinessForm from '@/components/BusinessForm';
import AboutModal from '@/components/AboutModal';
import PrivacyModal from '@/components/PrivacyModal';
import VoidLogo from '@/components/VoidLogo';

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
            <div className="h-10 w-10 rounded-full bg-brand-primary-light dark:bg-brand-primary-dark animate-pulse-subtle flex items-center justify-center overflow-hidden relative">
              <VoidLogo className="text-white absolute opacity-0 group-hover:opacity-100 transition-opacity duration-[10000ms] scale-50" />
            </div>
            <span className="text-xl font-seasons">The Void Company</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6 font-alice">
              <a href="#solutions" className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">Solutions</a>
              <a href="#features" className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">Features</a>
              <a href="#contact" className="text-utility-text-primary-light dark:text-utility-text-primary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">Contact</a>
            </nav>
            <ThemeToggle />
            <button 
              onClick={() => setShowBusinessForm(true)}
              className="hidden md:block btn-primary font-alice"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-seasons leading-tight">
                Building future tech for future generations.
              </h1>
              <p className="text-lg md:text-xl text-utility-text-secondary-light dark:text-utility-text-secondary-dark max-w-2xl font-alice">
                We develop frameworks and tools that help businesses improve efficiency and scale innovation, transforming abstract possibilities into tangible results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setShowBusinessForm(true)}
                  className="btn-primary font-alice"
                >
                  Partner with us
                </button>
                <button 
                  onClick={() => setShowDeveloperForm(true)}
                  className="btn-secondary font-alice"
                >
                  Join our team
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-80 md:h-96 w-full bg-brand-secondary-light/30 dark:bg-brand-secondary-dark/50 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center group hover:shadow-[0_0_30px_rgba(142,151,253,0.6)] dark:hover:shadow-[0_0_30px_rgba(124,154,146,0.6)] transition-all duration-500">
              <div className="h-24 w-24 rounded-full bg-brand-primary-light dark:bg-brand-primary-dark group-hover:scale-[20] transition-all duration-[10000ms] group-hover:bg-purple-500 dark:group-hover:bg-teal-400 relative flex items-center justify-center">
                <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms] delay-[2000ms]">
                  <VoidLogo className="text-white" width={300} height={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <a 
              href="#solutions" 
              className="flex flex-col items-center text-utility-text-secondary-light dark:text-utility-text-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors font-alice"
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
            <h2 className="text-3xl md:text-4xl font-seasons font-bold mb-4">Our Solutions</h2>
            <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark max-w-3xl mx-auto">
              We create cutting-edge frameworks and tools that transform how businesses operate, innovate, and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:translate-y-[-8px] hover:shadow-[0_0_30px_rgba(142,151,253,0.4)] dark:hover:shadow-[0_0_30px_rgba(124,154,146,0.4)] transition-all">
              <div className="rounded-full bg-brand-primary-light/10 dark:bg-brand-primary-dark/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-brand-primary-light dark:text-brand-primary-dark" />
              </div>
              <h3 className="text-xl font-seasons font-semibold mb-3">Development Frameworks</h3>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                Accelerate your development process with our streamlined, adaptable frameworks that reduce complexity and boost productivity.
              </p>
            </div>
            
            <div className="card group hover:translate-y-[-8px] hover:shadow-[0_0_30px_rgba(77,57,210,0.4)] dark:hover:shadow-[0_0_30px_rgba(77,57,210,0.4)] transition-all">
              <div className="rounded-full bg-accent-2-light/10 dark:bg-accent-2-dark/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-accent-2-light dark:text-accent-2-dark" />
              </div>
              <h3 className="text-xl font-seasons font-semibold mb-3">Data Integration Tools</h3>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                Seamlessly connect and leverage your data across platforms with our intelligent integration tools designed for the modern enterprise.
              </p>
            </div>
            
            <div className="card group hover:translate-y-[-8px] hover:shadow-[0_0_30px_rgba(77,238,139,0.4)] dark:hover:shadow-[0_0_30px_rgba(77,238,139,0.4)] transition-all">
              <div className="rounded-full bg-accent-3-light/10 dark:bg-accent-3-dark/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-accent-3-light dark:text-accent-3-dark" />
              </div>
              <h3 className="text-xl font-seasons font-semibold mb-3">Automation Solutions</h3>
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                Transform repetitive tasks into automated workflows, freeing your team to focus on innovation and strategic initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-seasons font-bold mb-4">Key Features</h2>
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
                  <h3 className="text-xl font-seasons font-semibold mb-2">Modular Architecture</h3>
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
                  <h3 className="text-xl font-seasons font-semibold mb-2">Enterprise-Grade Security</h3>
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
                  <h3 className="text-xl font-seasons font-semibold mb-2">Seamless Integration</h3>
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
                  <h3 className="text-xl font-seasons font-semibold mb-2">Scalable Infrastructure</h3>
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
                  <h3 className="text-xl font-seasons font-semibold mb-2">Real-Time Analytics</h3>
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
                  <h3 className="text-xl font-seasons font-semibold mb-2">Intuitive User Experience</h3>
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
              <h2 className="text-3xl md:text-4xl font-seasons font-bold">Join Our Team</h2>
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
              <h2 className="text-3xl md:text-4xl font-seasons font-bold">Partner With Us</h2>
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
              <div className="h-8 w-8 rounded-full bg-brand-primary-light dark:bg-brand-primary-dark flex items-center justify-center">
                <VoidLogo className="scale-50" />
              </div>
              <span className="text-lg font-seasons">The Void Company</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 font-alice">
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
              <p className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark text-sm font-alice">
                &copy; {new Date().getFullYear()} The Void Company. All rights reserved.
              </p>
              
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark hover:text-brand-primary-light dark:hover:text-brand-primary-dark transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
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
