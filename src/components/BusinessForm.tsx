
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export const BusinessForm = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    website: '',
    purpose: '',
    message: '',
    preferredTime: '',
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
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.role.trim()) newErrors.role = 'Role is required';
    if (!formData.purpose) newErrors.purpose = 'Purpose of contact is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.consent) newErrors.consent = 'You must agree to our data usage policy';
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Insert form data into Supabase
      const { error } = await supabase.from('business_submissions').insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        role: formData.role,
        website: formData.website || null,
        purpose: formData.purpose,
        message: formData.message,
        preferred_time: formData.preferredTime
      });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Request Submitted",
          description: "Thank you for reaching out! We'll get back to you soon.",
        });
        
        // Reset form and close
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          website: '',
          purpose: '',
          message: '',
          preferredTime: '',
          consent: false
        });
        onClose();
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-display">Reach Out / Request Callback</DialogTitle>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <X className="h-5 w-5" />
            </button>
          </div>
          <DialogDescription>
            Interested in our solutions? Fill out the form below and our team will get back to you.
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
              {errors.phone && <p className="mt-1 text-sm text-semantic-error-light">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="company" className="label">Company Name *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`input-field ${errors.company ? 'border-semantic-error-light' : ''}`}
                disabled={isSubmitting}
              />
              {errors.company && <p className="mt-1 text-sm text-semantic-error-light">{errors.company}</p>}
            </div>

            <div>
              <label htmlFor="role" className="label">Role / Designation *</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`input-field ${errors.role ? 'border-semantic-error-light' : ''}`}
                disabled={isSubmitting}
              />
              {errors.role && <p className="mt-1 text-sm text-semantic-error-light">{errors.role}</p>}
            </div>

            <div>
              <label htmlFor="website" className="label">Website URL (optional)</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="input-field"
                placeholder="https://example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="purpose" className="label">Purpose of Contact *</label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className={`select-field ${errors.purpose ? 'border-semantic-error-light' : ''}`}
                disabled={isSubmitting}
              >
                <option value="">Select a purpose</option>
                <option value="Request Callback">Request Callback</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Promotion">Promotion</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Other">Other</option>
              </select>
              {errors.purpose && <p className="mt-1 text-sm text-semantic-error-light">{errors.purpose}</p>}
            </div>

            <div>
              <label htmlFor="preferredTime" className="label">Preferred Time for Contact *</label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className={`input-field ${errors.preferredTime ? 'border-semantic-error-light' : ''}`}
                placeholder="e.g., Weekdays 9AM-5PM EST"
                disabled={isSubmitting}
              />
              {errors.preferredTime && <p className="mt-1 text-sm text-semantic-error-light">{errors.preferredTime}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="label">Message or Intent *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`textarea-field ${errors.message ? 'border-semantic-error-light' : ''}`}
              placeholder="Tell us how we can help you..."
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-semantic-error-light">{errors.message}</p>}
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
                disabled={isSubmitting}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="text-utility-text-secondary-light dark:text-utility-text-secondary-dark">
                I consent to The Void Company processing my data for business communication purposes *
              </label>
              {errors.consent && <p className="mt-1 text-sm text-semantic-error-light">{errors.consent}</p>}
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BusinessForm;
