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
    <div className="bg-[#1B3C53] text-[#F9F3EF] overflow-x-hidden">
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
      <footer className="bg-[#456882] border-t border-[#D2C1B6]/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-[#F9F3EF] mb-2">
            © 2025 Youth Fest. All rights reserved.
          </p>
          <p className="text-[#D2C1B6] text-sm">
            Empowering the next generation through creativity and innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;