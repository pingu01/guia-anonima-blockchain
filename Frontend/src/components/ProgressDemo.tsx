import React from 'react';
import * as Progress from '@radix-ui/react-progress';

export const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-green-500 rounded-full w-300 h-25"
      style={{
        transform: 'translateZ(0)',
      }}
      value={progress}
    >
      <Progress.Indicator
        className="bg-white w-full h-full transition-transform duration-660 ease-cubic-bezier(0.65, 0, 0.35, 1)"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};
