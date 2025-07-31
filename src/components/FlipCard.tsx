import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  image: string;
  details: string;
  requirements: string[];
  prizes: string;
}

interface FlipCardProps {
  event: Event;
  isVisible: boolean;
  onRegister: (event: Event) => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ event, isVisible, onRegister }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card-container transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ perspective: '1000px' }}
    >
      <div
        className={`flip-card relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-yellow-500/20 hover:shadow-yellow-500/20">
          <div className="relative h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{event.title}</h3>
            </div>
            <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
              Click to flip
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-yellow-100 mb-4 text-sm leading-relaxed">
              {event.description}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center text-yellow-200 text-sm">
                <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                {event.date}
              </div>
              <div className="flex items-center text-yellow-200 text-sm">
                <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                {event.time}
              </div>
              <div className="flex items-center text-yellow-200 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                {event.location}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-yellow-500/20 p-6">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-yellow-400">{event.title}</h3>
              <div className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">
                Details
              </div>
            </div>
            
            <div className="flex-1 space-y-4 text-sm">
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">Event Details</h4>
                <p className="text-yellow-200 leading-relaxed">{event.details}</p>
              </div>
              
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">Requirements</h4>
                <ul className="text-yellow-200 space-y-1">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">Prizes</h4>
                <p className="text-yellow-200">{event.prizes}</p>
              </div>
              
              <div className="flex items-center text-yellow-300 text-xs">
                <Users className="w-4 h-4 mr-2" />
                Capacity: {event.capacity}
              </div>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRegister(event);
              }}
              className="w-full mt-4 bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center"
            >
              Register Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;