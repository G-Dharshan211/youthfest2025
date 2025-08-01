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
    <div className="bg-[#456882]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#D2C1B6]/30 shadow-2xl">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="w-6 h-6 text-[#D2C1B6] mr-2" />
          <h3 className="text-2xl font-bold text-[#D2C1B6]">Event Countdown</h3>
        </div>
        <p className="text-[#F9F3EF]">Youth Fest 2025 begins in:</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-[#D2C1B6]/10 rounded-lg p-4 border border-[#D2C1B6]/20">
          <div className="text-3xl font-bold text-[#D2C1B6]">{timeLeft.days}</div>
          <div className="text-[#F9F3EF] text-sm">Days</div>
        </div>
        <div className="bg-[#D2C1B6]/10 rounded-lg p-4 border border-[#D2C1B6]/20">
          <div className="text-3xl font-bold text-[#D2C1B6]">{timeLeft.hours}</div>
          <div className="text-[#F9F3EF] text-sm">Hours</div>
        </div>
        <div className="bg-[#D2C1B6]/10 rounded-lg p-4 border border-[#D2C1B6]/20">
          <div className="text-3xl font-bold text-[#D2C1B6]">{timeLeft.minutes}</div>
          <div className="text-[#F9F3EF] text-sm">Minutes</div>
        </div>
        <div className="bg-[#D2C1B6]/10 rounded-lg p-4 border border-[#D2C1B6]/20">
          <div className="text-3xl font-bold text-[#D2C1B6]">{timeLeft.seconds}</div>
          <div className="text-[#F9F3EF] text-sm">Seconds</div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center text-[#D2C1B6]">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">August 11, 2025 • Don't miss out!</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;