
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export const AboutModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-display">About The Void Company</DialogTitle>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="leading-relaxed">
            The Void Company builds lean, scalable tech that helps businesses unlock their full potential. 
            We believe in turning abstract possibilities into real, usable frameworks. Our minimalist, 
            future-forward approach is about innovation, clarity, and intelligent systems.
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Our Mission</h3>
          <p className="leading-relaxed">
            To develop frameworks and tools that empower businesses to navigate the complexities of 
            the digital landscape with confidence and efficiency. We're committed to creating 
            solutions that are not only powerful but also intuitive and accessible.
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Our Vision</h3>
          <p className="leading-relaxed">
            A world where technology serves as a seamless extension of human creativity and potential, 
            where businesses of all sizes can harness the power of advanced tools without getting 
            lost in technical complexity.
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Our Core Values</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Innovation:</span> We continuously push the boundaries of what's possible.</li>
            <li><span className="font-medium">Simplicity:</span> We believe the most powerful solutions are often the most elegant.</li>
            <li><span className="font-medium">Integrity:</span> We maintain the highest standards of honesty and ethics in all our interactions.</li>
            <li><span className="font-medium">Impact:</span> We measure our success by the positive change we create for our clients.</li>
            <li><span className="font-medium">Collaboration:</span> We believe great ideas emerge from diverse perspectives working together.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6">Our Approach</h3>
          <p className="leading-relaxed">
            At The Void Company, we take a holistic approach to technology development. We don't just 
            build tools; we create ecosystems that enhance productivity, foster innovation, and scale 
            with your business. Our frameworks are designed with the future in mind, anticipating 
            changes in the technological landscape and adapting accordingly.
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Leadership Team</h3>
          <p className="leading-relaxed">
            Our team consists of industry veterans, visionary engineers, and passionate problem-solvers 
            who are dedicated to pushing the boundaries of what technology can achieve. With decades of 
            combined experience across various sectors, we bring a wealth of knowledge and insight to 
            every project we undertake.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
