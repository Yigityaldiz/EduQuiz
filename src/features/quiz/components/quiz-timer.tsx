import React, { useState, useEffect, useCallback, memo } from "react";
import { Clock } from "lucide-react";

const TimeDisplay = memo(
  ({
    hours,
    minutes,
    seconds,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <div className="bg-white rounded-full flex px-8 py-2 space-x-4 h-full">
      {[hours, minutes, seconds].map((value, index) => (
        <React.Fragment key={index}>
          <p className="text-[#464646] font-bold flex flex-col items-center text-lg">
            <span className="text-3xl">
              {value.toString().padStart(2, "0")}
            </span>
            <span className="text-xs">{["HRS", "MIN", "SEC"][index]}</span>
          </p>
          {index < 2 && (
            <div className="w-[1px] rounded-full h-full bg-slate-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
);

TimeDisplay.displayName = "TimeDisplay";

interface QuizTimerProps {
  duration: number;
  onTimeUp: () => void;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, seconds: secs };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration, onTimeUp]);

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="bg-option rounded-full w-fit z-20 flex items-center space-x-6 justify-center pr-2 pl-4 py-2">
      <p className="flex items-center gap-2 text-[#464646]">
        <Clock />
        <span className="leading-6 text font-bold">
          Quiz <br />
          Time Left
        </span>
      </p>
      <TimeDisplay hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};

QuizTimer.displayName = "QuizTimer";

export default QuizTimer;
