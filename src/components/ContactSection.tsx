import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-yellow-200 text-lg max-w-3xl mx-auto">
            Have questions about Youth Fest 2025? Need help with registration? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-yellow-200">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-yellow-300">info@youthfest2025.com</p>
                  </div>
                </div>
                <div className="flex items-center text-yellow-200">
                  <Phone className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-yellow-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center text-yellow-200">
                  <MapPin className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-yellow-300">Youth Convention Center<br />123 Festival Street, City</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500/20">
              <h4 className="text-yellow-400 font-semibold mb-3">Event Dates</h4>
              <p className="text-yellow-200 text-sm mb-2">March 15-22, 2025</p>
              <p className="text-yellow-300 text-sm">
                Join us for an unforgettable week of creativity, competition, and community!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-yellow-200 text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-yellow-200 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-yellow-200 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-yellow-500/30 rounded-lg text-yellow-100 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;