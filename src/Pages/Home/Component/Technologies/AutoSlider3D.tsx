import React, { useState, useEffect, useRef } from 'react';

const AutoSlider3D: React.FC = () => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState<number>(2);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
 const intervalRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const divs = [
    { id: 1, label: 'Requirement Analysis', details: 'We gather client goals, requirements, timelines, and budget to understand project scope clearly fully.' },
    { id: 2, label: 'Planning & UI/UX Design', details: 'Wireframes layouts and user journeys are designed to ensure intuitive and conversion focused experiences.' },
    { id: 3, label: 'Development', details: 'We build scalable, responsive websites using modern technologies with clean code and performance optimization.' },
    { id: 4, label: 'Testing & Quality Assurance', details: 'Rigorous testing ensures functionality, responsiveness, security, and browser compatibility before final project delivery approval.' },
    { id: 5, label: 'Deployment & Support', details: 'We deploy the website smoothly, provide documentation, maintenance, updates, and ongoing technical support services.' }
  ];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentCenterIndex((prev) => {
          if (direction === 'forward') {
            if (prev === divs.length - 1) {
              setDirection('backward');
              return prev - 1;
            }
            return prev + 1;
          } else {
            if (prev === 0) {
              setDirection('forward');
              return prev + 1;
            }
            return prev - 1;
          }
        });
      }, 2000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [divs.length, direction, isPaused]);

  const getPosition = (index: number) => {
    const diff = (index - currentCenterIndex + divs.length) % divs.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === divs.length - 1) return 'side';
    return 'hidden';
  };

  const shouldShowOnLeft = (index: number) => {
    const diff = (index - currentCenterIndex + divs.length) % divs.length;
    return diff === divs.length - 1;
  };

  const shouldShowOnRight = (index: number) => {
    const diff = (index - currentCenterIndex + divs.length) % divs.length;
    return diff === 1;
  };

  const getTransform = (index: number) => {
    const position = getPosition(index);
    if (position === 'center') return 'rotateY(0deg) translateZ(80px) scale(1.2)';
    if (position === 'side') {
      if (shouldShowOnLeft(index)) return 'rotateY(30deg) translateZ(20px) scale(1.2)';
      if (shouldShowOnRight(index)) return 'rotateY(-30deg) translateZ(20px) scale(1.2)';
      return 'rotateY(90deg) translateZ(-100px) scale(0.8)';
    }
    return 'rotateY(90deg) translateZ(-100px) scale(0.8)';
  };

  const getZIndex = (index: number) => {
    const position = getPosition(index);
    return position === 'center' ? 50 : position === 'side' ? 30 : 10;
  };

  const getOpacity = (index: number) => {
    const position = getPosition(index);
    return position === 'center' ? 'opacity-100' : position === 'side' ? 'opacity-100' : 'opacity-0';
  };

  const getLeftPosition = (index: number) => {
    const position = getPosition(index);
    if (position === 'center') return 0;
    if (position === 'side') {
      if (shouldShowOnLeft(index)) return -270;
      if (shouldShowOnRight(index)) return 270;
    }
    return (index - currentCenterIndex) * 270;
  };

  return (
    <div className='relative w-full h-full'>
      <div
        className='absolute flex justify-center items-center gap-3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 [perspective:800px]'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {divs.map((div, index) => (
          <div
            key={div.id}
            className={`h-[100px] w-[200px] backdrop-blur bg-white/10 border hover:scale-[1.2]
                        top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-white
                        transition-all duration-700 ease-in-out ${getOpacity(index)}`}
            style={{
              transform: getTransform(index),
              zIndex: getZIndex(index),
              position: 'absolute',
              left: `${getLeftPosition(index)}px`
            }}
          >
            <div className='h-full flex items-center justify-center px-2'>
              <span className='text-white font-bold text-[12px]'>
                {div.label}
                <p className='font-thin text-[8px]'>{div.details}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider3D;
