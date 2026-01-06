import React, { useState,useRef,useEffect } from 'react';

const StarsLogo: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const manualPositions = [
    // A starts here                        J starts here                         S starts here                      
    { bottom: '90%', right: '60%' },     { bottom: '67%', right: '65.5%' },  { bottom: '100%', right: '61%' },   
    { bottom: '90%', right: '62%' },     { bottom: '67%', right: '64%' },    { bottom: '100%', right: '59%' },
    { bottom: '90%', right: '64%' },     { bottom: '67%', right: '62%' },    { bottom: '100%', right: '57%' },
    { bottom: '90%', right: '66%' },     { bottom: '67%', right: '60%' },    { bottom: '100%', right: '55%' },
    { bottom: '90%', right: '68%' },     { bottom: '67%', right: '58%' },    { bottom: '100%', right: '53%' },
    { bottom: '90%', right: '70%' },     { bottom: '67%', right: '56%' },    { bottom: '100%', right: '51%' },
    { bottom: '88%', right: '72%' },     { bottom: '67%', right: '54%' },    { bottom: '100%', right: '49%' },
    { bottom: '86%', right: '74%' },     { bottom: '67%', right: '52%' },    { bottom: '100%', right: '47%' },
    { bottom: '84%', right: '76%' },     { bottom: '67%', right: '50%' },    { bottom: '100%', right: '45%' },
    { bottom: '82%', right: '78%' },     { bottom: '67%', right: '48%' },    { bottom: '100%', right: '43%' },
    { bottom: '80%', right: '80%' },     { bottom: '67%', right: '46%' },    { bottom: '100%', right: '41%' },
    { bottom: '78%', right: '81%' },     { bottom: '67%', right: '44%' },    { bottom: '100%', right: '39%' },
    { bottom: '76%', right: '81%' },     { bottom: '67%', right: '42%' },    { bottom: '100%', right: '37%' },
    { bottom: '74%', right: '81%' },     { bottom: '67%', right: '40%' },    { bottom: '100%', right: '35%' },
    { bottom: '72%', right: '81%' },     { bottom: '67%', right: '38%' },    { bottom: '100%', right: '33%' },
    { bottom: '70%', right: '81%' },     { bottom: '67%', right: '36%' },    { bottom: '98%', right: '31%' },
    { bottom: '68%', right: '81%' },     { bottom: '67%', right: '34%' },    { bottom: '96%', right: '29%' },
    { bottom: '66%', right: '81%' },     { bottom: '67%', right: '32%' },    { bottom: '94%', right: '27%' },
    { bottom: '64%', right: '81%' },     { bottom: '67%', right: '30%' },    { bottom: '92%', right: '25%' },
    { bottom: '62%', right: '81%' },     { bottom: '67%', right: '28%' },    { bottom: '90%', right: '23%' },
    { bottom: '60%', right: '81%' },     { bottom: '67%', right: '26%' },    { bottom: '88%', right: '21%' },
    { bottom: '58%', right: '81%' },     { bottom: '67%', right: '24%' },    { bottom: '86%', right: '19%' },
    { bottom: '56%', right: '81%' },     { bottom: '67%', right: '22%' },    { bottom: '84%', right: '17%' },
    { bottom: '54%', right: '81%' },     { bottom: '67%', right: '20%' },    { bottom: '82%', right: '16%' },
    { bottom: '52%', right: '81%' },     { bottom: '67%', right: '18%' },    { bottom: '80%', right: '16%' },
    { bottom: '50%', right: '81%' },     { bottom: '67%', right: '16%' },    { bottom: '78%', right: '16%' },
    { bottom: '48%', right: '81%' },     { bottom: '67%', right: '14%' },    { bottom: '76%', right: '16%' },   
    { bottom: '46%', right: '81%' },     { bottom: '67%', right: '12%' },    { bottom: '76%', right: '18%' },
    { bottom: '44%', right: '81%' },     { bottom: '67%', right: '10%' },    { bottom: '76%', right: '20%' },
    { bottom: '42%', right: '81%' },     { bottom: '67%', right: '8%' },     { bottom: '76%', right: '22%' },
    { bottom: '40%', right: '81%' },     { bottom: '65%', right: '9.5%' },   { bottom: '76%', right: '24%' },
    { bottom: '38%', right: '81%' },     { bottom: '63%', right: '11%' },    { bottom: '76%', right: '26%' },
    { bottom: '38%', right: '80%' },     { bottom: '61%', right: '13%' },    { bottom: '78%', right: '26.5%' },
    { bottom: '39%', right: '78%' },     { bottom: '60%', right: '14%' },    { bottom: '80%', right: '26.7%' },
    { bottom: '41%', right: '76%' },     { bottom: '60%', right: '16%' },    { bottom: '81%', right: '28%' },
    { bottom: '42%', right: '74%' },     { bottom: '60%', right: '18%' },    { bottom: '83%', right: '30%' },
    { bottom: '43%', right: '72%' },     { bottom: '60%', right: '20%' },    { bottom: '85%', right: '32%' },
    { bottom: '45%', right: '72%' },     { bottom: '58%', right: '20%' },    { bottom: '87%', right: '34%' },
    { bottom: '49%', right: '72%' },     { bottom: '54%', right: '20%' },    { bottom: '91%', right: '38%' },
    { bottom: '51%', right: '72%' },     { bottom: '52%', right: '20%' },    { bottom: '92%', right: '39%' },
    { bottom: '47%', right: '72%' },     { bottom: '56%', right: '20%' },    { bottom: '89%', right: '36%' },
    { bottom: '53%', right: '72%' },     { bottom: '50%', right: '20%' },    { bottom: '92.5%', right: '41%' },
    { bottom: '55%', right: '72%' },     { bottom: '48%', right: '20%' },    { bottom: '92.5%', right: '43%' },
    { bottom: '58%', right: '72%' },     { bottom: '46%', right: '20%' },    { bottom: '92.5%', right: '45%' },
    { bottom: '60%', right: '72%' },     { bottom: '44%', right: '22%' },    { bottom: '92.5%', right: '47%' },
    { bottom: '62%', right: '72%' },     { bottom: '42%', right: '24.7%' },  { bottom: '92.5%', right: '49%' },
    { bottom: '64%', right: '72%' },     { bottom: '40%', right: '27.2%' },  { bottom: '92.5%', right: '51%' },
    { bottom: '62%', right: '72%' },     { bottom: '38%', right: '30%' },    { bottom: '92.5%', right: '52%' },
    { bottom: '66%', right: '72%' },     { bottom: '37%', right: '34%' },    { bottom: '89%', right: '52%' },
    { bottom: '68%', right: '72%' },     { bottom: '37%', right: '36%' },    { bottom: '87%', right: '52%' },
    { bottom: '64%', right: '72%' },     { bottom: '37%', right: '32%' },    { bottom: '91%', right: '52%' },
    { bottom: '70%', right: '72%' },     { bottom: '37%', right: '38%' },    { bottom: '85%', right: '52%' },
    { bottom: '72%', right: '72%' },     { bottom: '37%', right: '40%' },    { bottom: '83%', right: '52%' },
    { bottom: '74%', right: '72%' },     { bottom: '37%', right: '42%' },    { bottom: '81%', right: '52%' },
    { bottom: '76%', right: '71%' },     { bottom: '37%', right: '44%' },    { bottom: '79%', right: '52%' },
    { bottom: '78%', right: '69%' },     { bottom: '37%', right: '46%' },    { bottom: '77%', right: '52%' },
    { bottom: '80%', right: '67%' },     { bottom: '37%', right: '48%' },    { bottom: '75%', right: '52%' },
    { bottom: '81%', right: '65%' },     { bottom: '37%', right: '50%' },    { bottom: '73%', right: '52%' },
    { bottom: '81%', right: '63%' },     { bottom: '37%', right: '52%' },    { bottom: '71%', right: '52%' },
    { bottom: '81%', right: '61%' },     { bottom: '37%', right: '54%' },    { bottom: '69%', right: '52%' },
                                         { bottom: '37%', right: '56%' },    { bottom: '69%', right: '54%' },
                                         { bottom: '37%', right: '58%' },    { bottom: '69%', right: '56%' },
                                         { bottom: '37%', right: '60%' },    { bottom: '69%', right: '58%' },
                                         { bottom: '39%', right: '60%' },    { bottom: '69%', right: '60%' },
    { bottom: '81%', right: '51%' },     { bottom: '41%', right: '60%' },    { bottom: '70%', right: '60.5%' },
    { bottom: '79%', right: '47%' },     { bottom: '43%', right: '60%' },    { bottom: '72%', right: '60.5%' },
    { bottom: '77%', right: '45%' },
     { bottom: '80.3%', right: '49%' },  { bottom: '45%', right: '60%' },    { bottom: '74%', right: '60.5%' },
    { bottom: '75.2%', right: '43.4%'},  { bottom: '47%', right: '60%' },    { bottom: '76%', right: '60.5%' },
    { bottom: '73%', right: '43%' },     { bottom: '49%', right: '60%' },    { bottom: '78%', right: '60.5%' },
    { bottom: '71%', right: '43%' },     { bottom: '51%', right: '60%' },    { bottom: '80%', right: '60.5%' },
    { bottom: '69%', right: '43%' },     { bottom: '52%', right: '60%' },    { bottom: '82%', right: '60.5%' },
    { bottom: '67%', right: '43%' },     { bottom: '52%', right: '58%' },    { bottom: '84%', right: '60.5%' },
                                         { bottom: '52%', right: '56%' },    { bottom: '86%', right: '60.5%' },
                                         { bottom: '52%', right: '54%' },    { bottom: '88%', right: '60.5%' },
                                         { bottom: '52%', right: '52%' },    { bottom: '90%', right: '60.5%' },
    { bottom: '59%', right: '43%' },     { bottom: '52%', right: '51%' },    { bottom: '92%', right: '60.5%' },
    { bottom: '57%', right: '43%' },     { bottom: '50%', right: '51%' },    { bottom: '94%', right: '60.5%' },
    { bottom: '55%', right: '43%' },     { bottom: '48%', right: '51%' },    { bottom: '96%', right: '60.5%' },
    { bottom: '53%', right: '43%' },     { bottom: '46%', right: '51%' },    { bottom: '98%', right: '60.5%' },
    { bottom: '51%', right: '43%' },     { bottom: '44%', right: '51%' },    
    { bottom: '49%', right: '43%' },     { bottom: '43%', right: '49%' },
    { bottom: '48%', right: '43%' },     { bottom: '43%', right: '47%' },
    { bottom: '48%', right: '41%' },     { bottom: '43%', right: '45%' },
    { bottom: '48%', right: '39%' },     { bottom: '43%', right: '43%' },
    { bottom: '48%', right: '37%' },     { bottom: '43%', right: '41%' },
    { bottom: '49%', right: '35%' },     { bottom: '43%', right: '39%' },
    { bottom: '50.5%', right: '33.5%'},  { bottom: '43%', right: '37%' },
    { bottom: '53%', right: '33.5%' },   { bottom: '43%', right: '35%' },
    { bottom: '55%', right: '33.5%' },   { bottom: '43%', right: '34%' },
    { bottom: '57%', right: '33.5%' },   { bottom: '44.6%', right: '32%' },
    { bottom: '59%', right: '33.5%' },   { bottom: '46.4%', right: '30%' },
                                         { bottom: '48%', right: '28%' },
                                         { bottom: '49%', right: '27%' },
                                         { bottom: '51%', right: '27%' },
    { bottom: '67%', right: '33.5%' },   { bottom: '53%', right: '27%' },
    { bottom: '69%', right: '33.5%' },   { bottom: '55%', right: '27%' },
    { bottom: '71%', right: '33.5%' },   { bottom: '57%', right: '27%' },
    { bottom: '73%', right: '33.5%' },   { bottom: '59%', right: '27%' },
    { bottom: '75%', right: '33.5%' },   { bottom: '60%', right: '27%' },
    { bottom: '77.5%', right: '33.5%' }, { bottom: '60%', right: '29%' },
    { bottom: '80%', right: '35%' },     { bottom: '60%', right: '31%' },
    { bottom: '82%', right: '37%' },     { bottom: '60%', right: '33%' },
    { bottom: '84%', right: '39%' },     { bottom: '60%', right: '35%' },
    { bottom: '86%', right: '41%' },     { bottom: '60%', right: '37%' },
    { bottom: '88%', right: '43%' },     { bottom: '60%', right: '39%' },
    { bottom: '90%', right: '45%' },     { bottom: '60%', right: '41%' },
    { bottom: '90%', right: '47%' },     { bottom: '60%', right: '43%' },
    { bottom: '90%', right: '49%' },     { bottom: '60%', right: '45%' },
    { bottom: '90%', right: '51%' },     { bottom: '60%', right: '47%' },
                                         { bottom: '60%', right: '49%' },
                                         { bottom: '60%', right: '51%' },
                                         { bottom: '60%', right: '53%' },
                                         { bottom: '60%', right: '55%' },
                                         { bottom: '60%', right: '57%' },
                                         { bottom: '60%', right: '59%' },
                                         { bottom: '60%', right: '61%' },
                                         { bottom: '60%', right: '63%' },
                                         { bottom: '60%', right: '65%' },
                                         { bottom: '60%', right: '65.4%'},
                                         { bottom: '62%', right: '65.4%'},
                                         { bottom: '64%', right: '65.4%'},
                                         { bottom: '65.6%', right: '65.4%'}, 
  ];


  // Extra stars ke liye random positions
  const [extraStars, setExtraStars] = useState<Array<{
    id: number;
    bottom: string;
    right: string;
    size: number; // 1, 2, ya 3
    opacity: number;
  }>>([]);

  // Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Initialize extra stars with different sizes
  useEffect(() => {
    const stars = [];
    const totalStars = 1000;
    
    for (let i = 0; i < totalStars; i++) {
      // Random size distribution:
      // 60% small (1px), 30% medium (2px), 10% large (3px)
      const rand = Math.random();
      let size = 1;
      if (rand > 0.6 && rand <= 0.9) size = 2;
      if (rand > 0.9) size = 3;
      
      // Size ke hisaab se opacity
      let opacity = 0.3;
      if (size === 1) opacity = 0.2 + Math.random() * 0.3;  // 0.2-0.5
      if (size === 2) opacity = 0.4 + Math.random() * 0.3;  // 0.4-0.7
      if (size === 3) opacity = 0.6 + Math.random() * 0.3;  // 0.6-0.9
      
      stars.push({
        id: i,
        bottom: `${Math.random() * 860}%`,
        right: `${Math.random() * 270}%`,
        size,
        opacity
      });
    }
    
    setExtraStars(stars);
  }, []);

  // Random positions for main stars
  const createRandomPositions = (count: number) => {
    return Array.from({ length: count }, () => ({
      bottom: `${Math.random() * 860}%`,
      right: `${Math.random() * 270}%`
    }));
  };
  
  const [randomPositions, setRandomPositions] = useState(() => 
    createRandomPositions(manualPositions.length)
  );

  // Decide main stars positions
  const displayPositions = isHovering ? randomPositions : 
                          (isInView ? manualPositions : randomPositions);

  // Size class function
  const getSizeClass = (size: number) => {
    switch(size) {
      case 1: return 'h-[1px] w-[1px]';
      case 2: return 'h-[2px] w-[2px]';
      case 3: return 'h-[3px] w-[3px]';
      default: return 'h-[2px] w-[2px]';
    }
  };

  return (
    <div 
      ref={sectionRef}
      className='h-full w-full relative'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main stars - sab 2px ke, bilkul static */}
      {displayPositions.map((pos, index) => (
        <div 
          key={`main-${index}`}
          className='h-[2px] w-[2px] bg-[aqua] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000'
          style={{
            bottom: pos.bottom,
            right: pos.right
          }}
        />
      ))}

      {/* Extra stars - different sizes, bilkul static */}
      {extraStars.map((star) => {
        const sizeClass = getSizeClass(star.size);
        
        return (
          <div 
            key={`extra-${star.id}`}
            className={`${sizeClass} bg-[aqua] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2`}
            style={{
              bottom: star.bottom,
              right: star.right,
              opacity: star.opacity
            }}
          />
        );
      })}
    </div>
  );
};

export default StarsLogo;