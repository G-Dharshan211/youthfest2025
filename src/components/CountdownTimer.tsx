import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-11T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 shadow-2xl">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="w-6 h-6 text-[#FFCB61] mr-2" />
          <h3 className="text-2xl font-bold text-[#FFCB61]">Event Countdown</h3>
        </div>
        <p className="text-[#77BEF0]">Youth Fest 2025 begins in:</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-[#FFCB61]/10 rounded-lg p-4 border border-[#FFCB61]/20">
          <div className="text-3xl font-bold text-[#FFCB61]">{timeLeft.days}</div>
          <div className="text-[#77BEF0] text-sm">Days</div>
        </div>
        <div className="bg-[#FFCB61]/10 rounded-lg p-4 border border-[#FFCB61]/20">
          <div className="text-3xl font-bold text-[#FFCB61]">{timeLeft.hours}</div>
          <div className="text-[#77BEF0] text-sm">Hours</div>
        </div>
        <div className="bg-[#FFCB61]/10 rounded-lg p-4 border border-[#FFCB61]/20">
          <div className="text-3xl font-bold text-[#FFCB61]">{timeLeft.minutes}</div>
          <div className="text-[#77BEF0] text-sm">Minutes</div>
        </div>
        <div className="bg-[#FFCB61]/10 rounded-lg p-4 border border-[#FFCB61]/20">
          <div className="text-3xl font-bold text-[#FFCB61]">{timeLeft.seconds}</div>
          <div className="text-[#77BEF0] text-sm">Seconds</div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center text-[#FF894F]">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">August 11, 2025 • Don't miss out!</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;