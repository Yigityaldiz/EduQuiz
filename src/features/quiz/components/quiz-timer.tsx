import { useState, useEffect, useCallback, memo } from "react";
import { Clock } from "lucide-react";

const TimeDisplay = memo(({ hours, minutes, seconds }: {
  hours: number;
  minutes: number;
  seconds: number;
}) => (
  <div className="bg-white rounded-full flex px-8 py-2 space-x-4 h-full">
    <p className="text-[#464646] font-bold flex flex-col items-center text-lg">
      <span className="text-3xl">{hours.toString().padStart(2, "0")}</span>
      <span className="text-xs">HRS</span>
    </p>

    <div className="w-[1px] rounded-full h-full bg-slate-200"></div>

    <p className="text-[#464646] font-bold flex flex-col items-center text-lg">
      <span className="text-3xl">{minutes.toString().padStart(2, "0")}</span>
      <span className="text-xs">MIN</span>
    </p>

    <div className="w-[1px] rounded-full h-full bg-slate-200"></div>

    <p className="text-[#464646] font-bold flex flex-col items-center text-lg">
      <span className="text-3xl">{seconds.toString().padStart(2, "0")}</span>
      <span className="text-xs">SEC</span>
    </p>
  </div>
));

TimeDisplay.displayName = 'TimeDisplay';

const QuizTimer = memo(({ duration, onTimeUpdate }: {
  duration: number;
  onTimeUpdate: (timeElapsed: number) => void;
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive] = useState(true);

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, seconds: secs };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          onTimeUpdate(duration - newTime);
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, duration, onTimeUpdate]);

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="bg-option rounded-full z-20 flex items-center space-x-6 justify-center pr-2 pl-4 py-2">
      <p className="flex items-center gap-2 text-[#464646]">
        <span><Clock /></span>
        <span className="leading-6 text font-bold">
          Quiz <br />
          Time Left
        </span>
      </p>
      <TimeDisplay hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
});

QuizTimer.displayName = 'QuizTimer';

export default QuizTimer;