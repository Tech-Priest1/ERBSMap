import { useState, useEffect } from 'react';

// Day/Night cycle durations
const dayNightCycles = [
  { isDay: true, duration: 150 }, // Day 1
  { isDay: false, duration: 110 }, // Night 1
  { isDay: true, duration: 140 }, // Day 2
  { isDay: false, duration: 130 }, // Night 2
  { isDay: true, duration: 140 }, // Day 3
  { isDay: false, duration: 120 }, // Night 3
  { isDay: true, duration: 100 }, // Day 4
  { isDay: false, duration: 100 }, // Night 4
  { isDay: true, duration: 100 }, // Day 5
  { isDay: false, duration: 80 }, // Night 5
  { isDay: true, duration: 50 }, // Day 6
  { isDay: false, duration: 90 }, // Night 6
  { isDay: true, duration: 60 }, // Day 7
  { isDay: false, duration: 80 }, // Night 7
];

// Function to format seconds into minutes:seconds (e.g., 150s -> 2m29s)
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m${remainingSeconds.toString().padStart(2, '0')}s`;
};

export const useDayNightCycle = () => {
  const [cycleTime, setCycleTime] = useState(0);
  const [isDay, setIsDay] = useState(true);
  const [currentCycleIndex, setCurrentCycleIndex] = useState(0);

  // Update day/night cycle every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCycleTime((prevCycleTime) => {
        const currentCycle = dayNightCycles[currentCycleIndex];
        if (prevCycleTime < currentCycle.duration - 1) {
          return prevCycleTime + 1;
        } else {
          // Move to the next cycle
          setCurrentCycleIndex((prevIndex) => (prevIndex + 1) % dayNightCycles.length);
          setIsDay((prevIsDay) => !prevIsDay);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentCycleIndex]);

  return {
    cycleTime,
    isDay,
    currentCycleIndex,
    currentCycle: dayNightCycles[currentCycleIndex],
    formatTime,
  };
};