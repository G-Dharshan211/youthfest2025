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
    <section className="min-h-screen bg-gradient-to-br from-[#1B3C53] via-[#1B3C53] to-[#456882] flex items-center justify-center relative overflow-hidden">
      {/* 3D Particle Background */}
      <ThreeBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full animate-pulse" style={{ backgroundColor: '#D2C1B6' + '1A' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full animate-pulse delay-1000" style={{ backgroundColor: '#F9F3EF' + '0D' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full animate-bounce delay-500" style={{ backgroundColor: '#456882' + '14' }}></div>
      </div>

      {/* Hero content */}
      {!showRegistration ? (
        <div className="text-center space-y-8 px-4 pt-32 relative z-10">
                    <div className="animate-fade-in-up delay-1000">
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#F9F3EF' + 'CC' }}>
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
              className="inline-block bg-[#D2C1B6] text-[#1B3C53] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F9F3EF] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D2C1B6]/25 mr-4"
            >
              Register Now
            </button>
            <a
              href="#events"
              className="inline-block bg-transparent border-2 border-[#F9F3EF] text-[#F9F3EF] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F9F3EF] hover:text-[#1B3C53] transition-all duration-300 transform hover:scale-105"
            >
              Explore Events
            </a>
          </div>
        </div>
      ) : (
        /* Registration Form */
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 animate-fade-in-up">
          <div className="bg-[#456882] p-8 md:p-12 rounded-2xl shadow-2xl">
            {!formSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#F9F3EF]">
                    Join the Movement
                  </h2>
                  <p className="text-[#D2C1B6]">
                    Register for Youth Fest 2025 and be part of something
                    special.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="animate-fade-in-up delay-200">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#F9F3EF] mb-1"
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
                      className="w-full px-4 py-3 rounded-lg border border-[#D2C1B6] bg-[#1B3C53] text-[#F9F3EF] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="animate-fade-in-up delay-300">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#F9F3EF] mb-1"
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
                      className="w-full px-4 py-3 rounded-lg border border-[#D2C1B6] bg-[#1B3C53] text-[#F9F3EF] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="animate-fade-in-up delay-400">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#F9F3EF] mb-1"
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
                      className="w-full px-4 py-3 rounded-lg border border-[#D2C1B6] bg-[#1B3C53] text-[#F9F3EF] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* College */}
                  <div className="animate-fade-in-up delay-500">
                    <label
                      htmlFor="college"
                      className="block text-sm font-medium text-[#F9F3EF] mb-1"
                    >
                      College / Organization
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#D2C1B6] bg-[#1B3C53] text-[#F9F3EF] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Event Selection Dropdown */}
                  <div className="animate-fade-in-up delay-600">
                    <label
                      htmlFor="selectedEvent"
                      className="block text-sm font-medium text-[#F9F3EF] mb-1"
                    >
                      Select Event
                    </label>
                    <select
                      id="selectedEvent"
                      name="selectedEvent"
                      value={formData.selectedEvent || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#D2C1B6] bg-[#1B3C53] text-[#F9F3EF] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all duration-300"
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
                    <label className="block text-sm font-medium text-[#F9F3EF] mb-2">
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
                          className="h-4 w-4 text-[#D2C1B6] border-[#D2C1B6] rounded focus:ring-[#D2C1B6]"
                        />
                        <label htmlFor="event1" className="ml-3 text-[#F9F3EF]">
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
                          className="h-4 w-4 text-[#D2C1B6] border-[#D2C1B6] rounded focus:ring-[#D2C1B6]"
                        />
                        <label htmlFor="event2" className="ml-3 text-[#F9F3EF]">
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
                          className="h-4 w-4 text-[#D2C1B6] border-[#D2C1B6] rounded focus:ring-[#D2C1B6]"
                        />
                        <label htmlFor="event3" className="ml-3 text-[#F9F3EF]">
                          Networking Gala
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Source Dropdown */}
                  <div className="animate-fade-in-up delay-800">
                    <label
                      htmlFor="source"
                      className="block text-sm font-medium text-[#F9F3EF] mb-1"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#D2C1B6] bg-[#1B3C53] text-[#F9F3EF] focus:outline-none focus:ring-2 focus:ring-[#D2C1B6] focus:border-transparent transition-all duration-300"
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
                      className="w-full bg-[#D2C1B6] text-[#1B3C53] font-bold text-lg py-4 px-8 rounded-lg shadow-xl hover:bg-[#F9F3EF] transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now!
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowRegistration(false)}
                      className="w-full bg-[#1B3C53] text-[#F9F3EF] font-bold text-lg py-3 px-8 rounded-lg hover:bg-[#1B3C53]/80 transition-all duration-300"
                    >
                      Back to Hero
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success Message */
              <div className="text-center animate-fade-in-up">
                <div className="mb-6 p-6 bg-[#D2C1B6]/20 text-[#F9F3EF] border-l-4 border-[#D2C1B6] rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-[#F9F3EF]">
                    Registration Successful! 🎉
                  </h3>
                  <p className="text-[#D2C1B6]">
                    Thank you for registering! We've sent a confirmation to your
                    email.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="bg-[#D2C1B6] text-[#1B3C53] font-bold text-lg py-3 px-8 rounded-lg hover:bg-[#F9F3EF] transition-all duration-300 transform hover:scale-105"
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
