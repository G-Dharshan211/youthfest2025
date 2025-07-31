import React, { useState } from 'react';
import { X, User, Mail, Phone, Calendar } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  image: string;
}

interface RegistrationModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ event, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registration successful for ${event?.title}!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      experience: '',
      requirements: ''
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-yellow-500/20">
        <div className="relative p-6 border-b border-yellow-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Register for {event.title}
          </h2>
          <p className="text-yellow-200 text-sm">
            {event.date} • {event.time} • {event.location}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-yellow-200 text-sm font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-yellow-200 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-yellow-200 text-sm font-medium mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-yellow-200 text-sm font-medium mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="16"
                max="30"
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Enter your age"
              />
            </div>
          </div>

          <div>
            <label className="block text-yellow-200 text-sm font-medium mb-2">
              Experience Level
            </label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors"
              placeholder="Beginner, Intermediate, Advanced, Professional"
            />
          </div>

          <div>
            <label className="block text-yellow-200 text-sm font-medium mb-2">
              Special Requirements or Notes
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
              placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
            />
          </div>

          <div className="bg-gray-800 rounded-lg p-4 border border-yellow-500/20">
            <h3 className="text-yellow-400 font-semibold mb-2">Event Details</h3>
            <p className="text-yellow-200 text-sm mb-2">{event.description}</p>
            <p className="text-yellow-300 text-sm">
              <strong>Capacity:</strong> {event.capacity}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-700 text-yellow-200 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors transform hover:scale-105"
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;