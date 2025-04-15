
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const PrivacyModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-seasons">Privacy Policy</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4 font-alice">
          <p className="text-sm text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
            Effective Date: {currentDate}
          </p>
          
          <h3 className="text-xl font-seasons font-semibold">Introduction</h3>
          <p className="leading-relaxed">
            The Void Company ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website or 
            interact with our services.
          </p>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Information We Collect</h3>
          <p className="leading-relaxed">
            We collect personal data solely to respond to inquiries and evaluate developer applications. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Professional information (work experience, education, skills)</li>
            <li>Information you provide in forms or communications with us</li>
            <li>Technical information about your device and interactions with our website</li>
          </ul>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">How We Use Your Information</h3>
          <p className="leading-relaxed">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to your inquiries and providing customer service</li>
            <li>Evaluating job applications and recruiting</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
            <li>Protecting our rights, property, or safety</li>
          </ul>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Data Sharing and Disclosure</h3>
          <p className="leading-relaxed">
            Data is not shared without permission. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist us in operating our business</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Data Security</h3>
          <p className="leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
            the internet or electronic storage is 100% secure.
          </p>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Your Rights</h3>
          <p className="leading-relaxed">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Restrict or object to our processing of your data</li>
            <li>Data portability</li>
          </ul>
          <p className="leading-relaxed mt-4">
            To exercise these rights, please contact us at privacy@thevoidcompany.com.
          </p>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Cookies and Tracking Technologies</h3>
          <p className="leading-relaxed">
            We use cookies and similar tracking technologies to collect information about your browsing activities. 
            You can manage your cookie preferences through your browser settings.
          </p>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Children's Privacy</h3>
          <p className="leading-relaxed">
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal 
            information from children under 16.
          </p>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Changes to This Privacy Policy</h3>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
            new Privacy Policy on this page and updating the effective date.
          </p>
          
          <h3 className="text-xl font-seasons font-semibold mt-6">Contact Us</h3>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at privacy@thevoidcompany.com.
          </p>
          
          <p className="mt-6 font-medium">
            By using our site, you agree to this policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
