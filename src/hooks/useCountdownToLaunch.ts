import { useEffect, useState } from 'react';

export default function useCountdownToLaunch(launchTimeUnix: number) {
  const [timeToLaunch, setTimeToLaunch] = useState<number>();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      const timeLeft = launchTimeUnix - Math.round(+new Date() / 1000);
      setTimeToLaunch(timeLeft);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return {
    timeToLaunch,
  };
}
