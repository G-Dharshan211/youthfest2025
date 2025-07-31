import React from "react";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

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

interface EventCardProps {
  event: Event;
  isVisible: boolean;
  onRegister: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  isVisible,
  onRegister,
}) => {
  return (
    <div
      className={`flip-card-container transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ height: "400px" }}
    >
      <div className="flip-card relative w-full h-full cursor-pointer">
        {/* Front Face */}
        <div className="flip-card-front bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-blue-400/20" style={{ borderColor: '#77BEF0' + '33' }}>
          <div className="relative h-48 overflow-hidden" style={{ background: 'linear-gradient(135deg, #77BEF0, #FFCB61)' }}>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{event.title}</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="mb-4 text-sm leading-relaxed" style={{ color: '#77BEF0' }}>
              {event.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-sm" style={{ color: '#77BEF0' }}>
                <Calendar className="w-4 h-4 mr-2" style={{ color: '#FFCB61' }} />
                {event.date}
              </div>
              <div className="flex items-center text-sm" style={{ color: '#77BEF0' }}>
                <Clock className="w-4 h-4 mr-2" style={{ color: '#FFCB61' }} />
                {event.time}
              </div>
              <div className="flex items-center text-sm" style={{ color: '#77BEF0' }}>
                <MapPin className="w-4 h-4 mr-2" style={{ color: '#FFCB61' }} />
                {event.location}
              </div>
              <div className="flex items-center text-sm" style={{ color: '#77BEF0' }}>
                <Users className="w-4 h-4 mr-2" style={{ color: '#FFCB61' }} />
                {event.capacity} participants
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="flip-card-back rounded-xl shadow-2xl" style={{ background: 'linear-gradient(135deg, #FF894F, #EA5B6F)', border: '1px solid #FFCB61' }}>
          <div className="h-full flex flex-col justify-center items-center p-8 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-white/90 text-lg font-medium">
                Ready to Join?
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center text-white font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  {event.date}
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center text-white font-semibold">
                  <Clock className="w-5 h-5 mr-2" />
                  {event.time}
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center text-white font-semibold">
                  <MapPin className="w-5 h-5 mr-2" />
                  {event.location}
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onRegister(event);
              }}
              className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-xl text-white border-2 hover:bg-[#FFCB61] hover:text-[#1f2937]"
              style={{ 
                backgroundColor: '#77BEF0', 
                borderColor: '#FFCB61'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFCB61';
                e.currentTarget.style.color = '#1f2937';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#77BEF0';
                e.currentTarget.style.color = 'white';
              }}
            >
              Register Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
