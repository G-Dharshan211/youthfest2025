import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventsSection from './components/EventsSection';
import EnhancedRegistrationModal from './components/EnhancedRegistrationModal';
import ContactSection from './components/ContactSection';

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

function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <div id="events">
        <EventsSection onRegister={handleRegister} />
      </div>
      <ContactSection />
      
      <EnhancedRegistrationModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-yellow-500/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-yellow-200 mb-2">
            © 2025 Youth Fest. All rights reserved.
          </p>
          <p className="text-yellow-400 text-sm">
            Empowering the next generation through creativity and innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;