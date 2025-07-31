import React, { useState } from "react";
import ThreeBackground from "./ThreeBackground";
import CountdownTimer from "./CountdownTimer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  selectedEvent: string;
  events: string[];
  source: string;
}

const HeroSection: React.FC = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    college: "",
    selectedEvent: "",
    events: [],
    source: "Social Media",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      events: checked
        ? [...prev.events, value]
        : prev.events.filter((event) => event !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (formData.name.trim() === "") {
      console.error("Name is required.");
      return;
    }

    console.log("Form Submitted with data:", formData);
    // In a real app, you would send this data to your backend
    // Example: fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) });

    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setShowRegistration(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      selectedEvent: "",
      events: [],
      source: "Social Media",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* 3D Particle Background */}
      <ThreeBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full animate-pulse" style={{ backgroundColor: '#77BEF0' + '1A' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full animate-pulse delay-1000" style={{ backgroundColor: '#FFCB61' + '0D' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full animate-bounce delay-500" style={{ backgroundColor: '#FF894F' + '14' }}></div>
      </div>

      {/* Hero content */}
      {!showRegistration ? (
        <div className="text-center space-y-8 px-4 pt-32 relative z-10">
                    <div className="animate-fade-in-up delay-1000">
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#77BEF0' + 'CC' }}>
              Where young minds meet endless possibilities. Experience the biggest youth festival of the year with 
              competitions, workshops, and networking opportunities.
            </p>
          </div>

          <div className="animate-fade-in-up delay-1000 max-w-md mx-auto">
            <CountdownTimer />
          </div>

          <div className="animate-fade-in-up delay-1500 space-y-4">
            <button
              onClick={() => setShowRegistration(true)}
              className="inline-block bg-[#FFCB61] text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF894F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FFCB61]/25 mr-4"
            >
              Register Now
            </button>
            <a
              href="#events"
              className="inline-block bg-transparent border-2 border-[#77BEF0] text-[#77BEF0] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#77BEF0] hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore Events
            </a>
          </div>
        </div>
      ) : (
        /* Registration Form */
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 animate-fade-in-up">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
            {!formSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                    Join the Movement
                  </h2>
                  <p className="text-gray-600">
                    Register for Youth Fest 2025 and be part of something
                    special.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="animate-fade-in-up delay-200">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#77BEF0] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="animate-fade-in-up delay-300">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#77BEF0] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="animate-fade-in-up delay-400">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#77BEF0] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* College */}
                  <div className="animate-fade-in-up delay-500">
                    <label
                      htmlFor="college"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      College / Organization
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#77BEF0] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Event Selection Dropdown */}
                  <div className="animate-fade-in-up delay-600">
                    <label
                      htmlFor="selectedEvent"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Select Event
                    </label>
                    <select
                      id="selectedEvent"
                      name="selectedEvent"
                      value={formData.selectedEvent || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#77BEF0] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Choose an event</option>
                      <option value="Battle of Bands">Battle of Bands</option>
                      <option value="Dance Championship">Dance Championship</option>
                      <option value="Art Exhibition">Art Exhibition</option>
                      <option value="Gaming Tournament">Gaming Tournament</option>
                    </select>
                  </div>

                  {/* Events Checkboxes */}
                  <div className="animate-fade-in-up delay-700">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Which events will you attend?
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="event1"
                          value="Tech Workshop"
                          type="checkbox"
                          checked={formData.events.includes("Tech Workshop")}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-[#77BEF0] border-gray-300 rounded focus:ring-[#77BEF0]"
                        />
                        <label htmlFor="event1" className="ml-3 text-gray-700">
                          Tech for Good Workshop
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="event2"
                          value="Guest Session"
                          type="checkbox"
                          checked={formData.events.includes("Guest Session")}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-[#77BEF0] border-gray-300 rounded focus:ring-[#77BEF0]"
                        />
                        <label htmlFor="event2" className="ml-3 text-gray-700">
                          Guest Speaker Session
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="event3"
                          value="Networking Gala"
                          type="checkbox"
                          checked={formData.events.includes("Networking Gala")}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-[#77BEF0] border-gray-300 rounded focus:ring-[#77BEF0]"
                        />
                        <label htmlFor="event3" className="ml-3 text-gray-700">
                          Networking Gala
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Source Dropdown */}
                  <div className="animate-fade-in-up delay-800">
                    <label
                      htmlFor="source"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#77BEF0] focus:border-transparent transition-all duration-300"
                    >
                      <option>Social Media</option>
                      <option>Friend or Colleague</option>
                      <option>College Campus</option>
                      <option>News Article</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="animate-fade-in-up delay-900 space-y-4">
                    <button
                      type="submit"
                      className="w-full bg-[#FFCB61] text-gray-900 font-bold text-lg py-4 px-8 rounded-lg shadow-xl hover:bg-[#FF894F] transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now!
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowRegistration(false)}
                      className="w-full bg-[#EA5B6F] text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-[#EA5B6F]/80 transition-all duration-300"
                    >
                      Back to Hero
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success Message */
              <div className="text-center animate-fade-in-up">
                <div className="mb-6 p-6 bg-green-100 text-green-800 border-l-4 border-green-500 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    Registration Successful! 🎉
                  </h3>
                  <p>
                    Thank you for registering! We've sent a confirmation to your
                    email.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="bg-[#FFCB61] text-gray-900 font-bold text-lg py-3 px-8 rounded-lg hover:bg-[#FF894F] transition-all duration-300 transform hover:scale-105"
                >
                  Register Another Person
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
