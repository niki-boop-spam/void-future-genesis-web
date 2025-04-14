
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

type EducationOrRole = 'education' | 'role';

export const DeveloperForm = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { toast } = useToast();
  const [formType, setFormType] = useState<EducationOrRole>('education');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    educationYear: '1',
    educationField: '',
    workRole: '',
    experience: '',
    linkedinUrl: '',
    githubUrl: '',
    portfolioUrl: '',
    bio: '',
    technologies: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
    
    // Clear error when user checks the box
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    if (formType === 'education') {
      if (!formData.educationField.trim()) newErrors.educationField = 'Education field is required';
    } else {
      if (!formData.workRole.trim()) newErrors.workRole = 'Work role is required';
      if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    }
    
    if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
    if (!formData.technologies.trim()) newErrors.technologies = 'Technologies are required';
    if (!formData.consent) newErrors.consent = 'You must agree to our data processing policy';
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Form submission logic would go here
    
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest! We'll review your application and contact you soon.",
    });
    
    // Reset form and close
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      educationYear: '1',
      educationField: '',
      workRole: '',
      experience: '',
      linkedinUrl: '',
      githubUrl: '',
      portfolioUrl: '',
      bio: '',
      technologies: '',
      consent: false
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-display">Join The Void Company as a Developer</DialogTitle>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <X className="h-5 w-5" />
            </button>
          </div>
          <DialogDescription>
            We're looking for talented developers to help build future tech. Please fill out the form below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="label">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`input-field ${errors.fullName ? 'border-semantic-error-light' : ''}`}
              />
              {errors.fullName && <p className="mt-1 text-sm text-semantic-error-light">{errors.fullName}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'border-semantic-error-light' : ''}`}
              />
              {errors.email && <p className="mt-1 text-sm text-semantic-error-light">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input-field ${errors.phone ? 'border-semantic-error-light' : ''}`}
              />
              {errors.phone && <p className="mt-1 text-sm text-semantic-error-light">{errors.phone}</p>}
            </div>

            <div>
              <label className="label">Current Status *</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    checked={formType === 'education'}
                    onChange={() => setFormType('education')}
                    className="mr-2"
                  />
                  <span>Student</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    checked={formType === 'role'}
                    onChange={() => setFormType('role')}
                    className="mr-2"
                  />
                  <span>Professional</span>
                </label>
              </div>
            </div>

            {formType === 'education' ? (
              <>
                <div>
                  <label htmlFor="educationYear" className="label">Current Year *</label>
                  <select
                    id="educationYear"
                    name="educationYear"
                    value={formData.educationYear}
                    onChange={handleChange}
                    className="select-field"
                  >
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                    <option value="5+">Year 5+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="educationField" className="label">Field of Study *</label>
                  <input
                    type="text"
                    id="educationField"
                    name="educationField"
                    value={formData.educationField}
                    onChange={handleChange}
                    className={`input-field ${errors.educationField ? 'border-semantic-error-light' : ''}`}
                  />
                  {errors.educationField && <p className="mt-1 text-sm text-semantic-error-light">{errors.educationField}</p>}
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="workRole" className="label">Current Work Role/Title *</label>
                  <input
                    type="text"
                    id="workRole"
                    name="workRole"
                    value={formData.workRole}
                    onChange={handleChange}
                    className={`input-field ${errors.workRole ? 'border-semantic-error-light' : ''}`}
                  />
                  {errors.workRole && <p className="mt-1 text-sm text-semantic-error-light">{errors.workRole}</p>}
                </div>
                
                <div>
                  <label htmlFor="experience" className="label">Years of Professional Experience *</label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`input-field ${errors.experience ? 'border-semantic-error-light' : ''}`}
                  />
                  {errors.experience && <p className="mt-1 text-sm text-semantic-error-light">{errors.experience}</p>}
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="linkedinUrl" className="label">LinkedIn Profile URL</label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="input-field"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            
            <div>
              <label htmlFor="githubUrl" className="label">GitHub Profile URL</label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="input-field"
                placeholder="https://github.com/yourusername"
              />
            </div>
            
            <div>
              <label htmlFor="portfolioUrl" className="label">Portfolio URL</label>
              <input
                type="url"
                id="portfolioUrl"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                className="input-field"
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="label">Short Bio or Motivation *</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className={`textarea-field ${errors.bio ? 'border-semantic-error-light' : ''}`}
              placeholder="Tell us about yourself and why you want to join The Void Company..."
            ></textarea>
            {errors.bio && <p className="mt-1 text-sm text-semantic-error-light">{errors.bio}</p>}
          </div>

          <div>
            <label htmlFor="technologies" className="label">Preferred Technologies or Interests *</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className={`input-field ${errors.technologies ? 'border-semantic-error-light' : ''}`}
              placeholder="e.g., React, TypeScript, Node.js, Python, ML, AI..."
            />
            {errors.technologies && <p className="mt-1 text-sm text-semantic-error-light">{errors.technologies}</p>}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-gray-300 text-brand-primary-light focus:ring-brand-primary-light/50"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                I consent to The Void Company processing my data for recruitment purposes *
              </label>
              {errors.consent && <p className="mt-1 text-sm text-semantic-error-light">{errors.consent}</p>}
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary">Submit Application</button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeveloperForm;
