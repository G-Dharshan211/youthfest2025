import React, { useState, useEffect, useRef } from 'react';
import FlipCard from './FlipCard';

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

interface EventsSectionProps {
  onRegister: (event: Event) => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ onRegister }) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(8).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events: Event[] = [
    {
      id: 1,
      title: "Battle of Bands",
      description: "Showcase your musical talent in this epic competition where bands compete for the ultimate glory.",
      details: "A high-energy musical competition featuring live performances from talented bands across various genres. Participants will perform original compositions and covers, judged by industry professionals.",
      requirements: ["Band of 3-6 members", "Original song mandatory", "15-minute performance slot", "Own instruments required"],
      prizes: "Winner: $5000 + Recording Contract | Runner-up: $2000 | Third: $1000",
      date: "March 15, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Main Auditorium",
      capacity: "20 Bands",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Dance Championship",
      description: "Express yourself through movement in various dance categories from hip-hop to contemporary.",
      details: "A spectacular dance competition featuring solo and group performances across multiple dance styles. Professional choreographers will judge creativity, technique, and stage presence.",
      requirements: ["Solo or group (max 8 members)", "3-5 minute routine", "Original choreography preferred", "Costume coordination required"],
      prizes: "Winner: $3000 + Workshop with Pro Choreographer | Runner-up: $1500 | Third: $750",
      date: "March 16, 2025",
      time: "3:00 PM - 8:00 PM",
      location: "Sports Complex",
      capacity: "50 Dancers",
      image: "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Art Exhibition",
      description: "Display your creativity in painting, sculpture, and digital art in our prestigious exhibition.",
      details: "A comprehensive art showcase featuring traditional and digital artworks. Artists can display paintings, sculptures, digital art, and mixed media pieces in a professional gallery setting.",
      requirements: ["Maximum 3 artworks per artist", "Original work only", "Artist statement required", "Professional presentation"],
      prizes: "Best in Show: $2500 + Gallery Feature | Category Winners: $1000 each | People's Choice: $500",
      date: "March 17, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Gallery Hall",
      capacity: "100 Artists",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Gaming Tournament",
      description: "Compete in esports tournaments featuring popular games like FIFA, COD, and League of Legends.",
      details: "Multi-game esports tournament featuring the most popular competitive games. Professional gaming setups provided with live streaming and commentary for all major matches.",
      requirements: ["Valid game accounts", "Tournament registration", "Fair play agreement", "Team formation for team games"],
      prizes: "Grand Champion: $4000 + Gaming Setup | Game Winners: $1500 each | Participation: Gaming Merchandise",
      date: "March 18, 2025",
      time: "12:00 PM - 10:00 PM",
      location: "Tech Hub",
      capacity: "200 Gamers",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Poetry Slam",
      description: "Share your voice and stories through powerful spoken word performances and poetry.",
      details: "An intimate evening of spoken word poetry where participants share original pieces on themes of youth, dreams, and social change. Professional poets will provide feedback and mentorship.",
      requirements: ["Original poetry only", "3-5 minute performance", "No props or music", "Theme-based content encouraged"],
      prizes: "Winner: $1500 + Poetry Workshop | Runner-up: $750 | Third: $400 + Publication Opportunity",
      date: "March 19, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Literary Cafe",
      capacity: "30 Poets",
      image: "https://images.pexels.com/photos/3811087/pexels-photo-3811087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Fashion Show",
      description: "Walk the runway and showcase cutting-edge fashion designs in our glamorous fashion extravaganza.",
      details: "A professional fashion show featuring student designers and models. Participants can showcase original designs or model for designers in a high-end runway setting with professional lighting and photography.",
      requirements: ["Portfolio submission", "Original designs (for designers)", "Professional attitude", "Rehearsal attendance mandatory"],
      prizes: "Best Designer: $3500 + Fashion Week Opportunity | Best Model: $2000 + Agency Introduction | Innovation Award: $1000",
      date: "March 20, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "Grand Ballroom",
      capacity: "40 Models",
      image: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 7,
      title: "Startup Pitch",
      description: "Present your innovative business ideas to a panel of investors and industry experts.",
      details: "A professional pitch competition where young entrepreneurs present their startup ideas to real investors and industry leaders. Winners receive mentorship and potential funding opportunities.",
      requirements: ["Business plan required", "10-minute pitch + 5-minute Q&A", "Prototype/MVP preferred", "Market research essential"],
      prizes: "Winner: $10000 Seed Funding + Incubator Program | Runner-up: $5000 + Mentorship | Third: $2500 + Business Consultation",
      date: "March 21, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Innovation Center",
      capacity: "25 Startups",
      image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 8,
      title: "Film Festival",
      description: "Screen your short films and documentaries in our curated film festival celebration.",
      details: "A celebration of young filmmakers featuring short films, documentaries, and experimental cinema. Professional screening equipment and industry networking opportunities provided.",
      requirements: ["Maximum 20-minute runtime", "Original content only", "High-quality video/audio", "Director's statement required"],
      prizes: "Best Film: $4000 + Distribution Deal | Best Director: $2000 + Film School Scholarship | Audience Choice: $1000",
      date: "March 22, 2025",
      time: "1:00 PM - 9:00 PM",
      location: "Cinema Hall",
      capacity: "50 Films",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-[#1B3C53]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#D2C1B6] mb-4">
            Featured Events
          </h2>
          <p className="text-[#F9F3EF] text-lg max-w-3xl mx-auto">
            Discover amazing events and competitions designed to showcase your talents and connect with like-minded youth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={el => cardRefs.current[index] = el}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FlipCard
                event={event}
                isVisible={visibleCards[index]}
                onRegister={onRegister}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;