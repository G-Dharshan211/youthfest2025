import React, { useState } from 'react';
import { X, User, Mail, Phone, Calendar, Building, CheckCircle } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  image: string;
  details?: string;
  requirements?: string[];
  prizes?: string;
}

interface EnhancedRegistrationModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EnhancedRegistrationModal: React.FC<EnhancedRegistrationModalProps> = ({ event, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    age: '',
    events: [] as string[],
    source: 'Social Media',
    experience: '',
    requirements: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const availableEvents = [
    'Battle of Bands',
    'Dance Championship',
    'Art Exhibition',
    'Gaming Tournament',
    'Poetry Slam',
    'Fashion Show',
    'Startup Pitch',
    'Film Festival'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.age || parseInt(formData.age) < 16 || parseInt(formData.age) > 30) {
      newErrors.age = 'Age must be between 16 and 30';
    }
    if (formData.events.length === 0) newErrors.events = 'Please select at least one event';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Simulate API call
    console.log('Registration submitted:', {
      ...formData,
      registrationId: `YF2025-${Date.now()}`,
      timestamp: new Date().toISOString()
    });
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        age: '',
        events: [],
        source: 'Social Media',
        experience: '',
        requirements: ''
      });
      setErrors({});
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleEventChange = (eventName: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      events: checked 
        ? [...prev.events, eventName]
        : prev.events.filter(e => e !== eventName)
    }));
    if (errors.events) {
      setErrors(prev => ({ ...prev, events: '' }));
    }
  };

  if (!isOpen || !event) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 rounded-xl max-w-md w-full p-8 text-center border border-yellow-500/20">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#FFCB61] mb-2">Registration Successful!</h2>
          <p className="text-[#77BEF0] mb-4">
            Thank you for registering for {event.title}. We've sent a confirmation to your email.
          </p>
          <div className="animate-pulse text-[#FF894F] text-sm">
            Closing automatically...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-yellow-500/20">
        <div className="relative p-6 border-b border-yellow-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#FFCB61] hover:text-[#FF894F] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#FFCB61] mb-2">Join the Movement</h2>
            <p className="text-[#77BEF0]">Register for Youth Fest 2025 and be part of something special</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#77BEF0] text-sm font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-yellow-100 focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-[#FFCB61]/30 focus:border-[#FFCB61]'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-[#77BEF0] text-sm font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-yellow-100 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#FFCB61]/30 focus:border-[#FFCB61]'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-[#77BEF0] text-sm font-medium mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-yellow-100 focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-[#FFCB61]/30 focus:border-[#FFCB61]'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-[#77BEF0] text-sm font-medium mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                College / Organization
              </label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-[#FFCB61]/30 rounded-lg text-yellow-100 focus:border-[#FFCB61] focus:outline-none transition-colors"
                placeholder="Enter your college or organization"
              />
            </div>

            <div>
              <label className="block text-[#77BEF0] text-sm font-medium mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="16"
                max="30"
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-yellow-100 focus:outline-none transition-colors ${
                  errors.age ? 'border-red-500' : 'border-[#FFCB61]/30 focus:border-[#FFCB61]'
                }`}
                placeholder="Enter your age"
              />
              {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age}</p>}
            </div>

            <div>
              <label className="block text-[#77BEF0] text-sm font-medium mb-2">
                How did you hear about us?
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-[#FFCB61]/30 rounded-lg text-yellow-100 focus:border-[#FFCB61] focus:outline-none transition-colors"
              >
                <option>Social Media</option>
                <option>Friend or Colleague</option>
                <option>College Campus</option>
                <option>News Article</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[#77BEF0] text-sm font-medium mb-3">
              Which events will you attend? *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {availableEvents.map((eventName) => (
                <div key={eventName} className="flex items-center">
                  <input
                    id={`event-${eventName}`}
                    type="checkbox"
                    checked={formData.events.includes(eventName)}
                    onChange={(e) => handleEventChange(eventName, e.target.checked)}
                    className="h-4 w-4 text-[#77BEF0] border-[#FFCB61]/30 rounded focus:ring-[#77BEF0]"
                  />
                  <label htmlFor={`event-${eventName}`} className="ml-2 text-[#77BEF0] text-sm">
                    {eventName}
                  </label>
                </div>
              ))}
            </div>
            {errors.events && <p className="text-red-400 text-sm mt-1">{errors.events}</p>}
          </div>

          <div>
            <label className="block text-[#77BEF0] text-sm font-medium mb-2">
              Experience Level
            </label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-[#FFCB61]/30 rounded-lg text-yellow-100 focus:border-[#FFCB61] focus:outline-none transition-colors"
              placeholder="Beginner, Intermediate, Advanced, Professional"
            />
          </div>

          <div>
            <label className="block text-[#77BEF0] text-sm font-medium mb-2">
              Special Requirements or Notes
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-[#FFCB61]/30 rounded-lg text-yellow-100 focus:border-[#FFCB61] focus:outline-none transition-colors resize-none"
              placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
            />
          </div>

          <div className="bg-gray-800 rounded-lg p-4 border border-[#FFCB61]/20">
            <h3 className="text-[#FFCB61] font-semibold mb-2">Selected Event: {event.title}</h3>
            <p className="text-[#77BEF0] text-sm mb-2">{event.description}</p>
            <p className="text-[#FF894F] text-sm">
              <strong>Date:</strong> {event.date} • <strong>Time:</strong> {event.time} • <strong>Location:</strong> {event.location}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFCB61] text-gray-900 font-bold text-lg py-4 px-8 rounded-lg shadow-xl hover:bg-[#FF894F] transition-all duration-300 transform hover:scale-105"
          >
            Register Now!
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnhancedRegistrationModal;