import React, { useState, useRef, useEffect } from 'react';

interface StarPosition {
  bottom: string;
  right: string;
  size?: number; // Add size for manual stars
  opacity?: number; // Add opacity for manual stars
}

const StarsLogo: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  // Size distribution function for manual stars
  const getRandomSize = () => {
    const rand = Math.random();
    if (rand <= 0.6) return 1; // 60% small
    if (rand <= 0.9) return 2; // 30% medium
    return 3; // 10% large
  };

  const getRandomOpacity = (size: number) => {
    switch(size) {
      case 1: return 0.3 + Math.random() * 0.3; // 0.3-0.6
      case 2: return 0.5 + Math.random() * 0.3; // 0.5-0.8
      case 3: return 0.7 + Math.random() * 0.2; // 0.7-0.9
      default: return 0.5;
    }
  };

  // Manual positions with size and opacity
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
    { bottom: '51%', right: '43%' },     { bottom: '44%', right: '51%' },    { bottom: '98%', right: '50.5%' },
    { bottom: '49%', right: '43%' },     { bottom: '43%', right: '49%' },    { bottom: '95%', right: '55.5%' },
    { bottom: '48%', right: '43%' },     { bottom: '43%', right: '47%' },    { bottom: '88%', right: '54.5%' }, 
    { bottom: '48%', right: '41%' },     { bottom: '43%', right: '45%' },    { bottom: '83%', right: '56%' },
    { bottom: '48%', right: '39%' },     { bottom: '43%', right: '43%' },    { bottom: '91%', right: '57.5%' },
    { bottom: '48%', right: '37%' },     { bottom: '43%', right: '41%' },    { bottom: '79%', right: '24%' },
    { bottom: '49%', right: '35%' },     { bottom: '43%', right: '39%' },    { bottom: '71%', right: '58.5%' },
    { bottom: '50.5%', right: '33.5%'},  { bottom: '43%', right: '37%' },    { bottom: '84%', right: '21%' },    
    { bottom: '53%', right: '33.5%' },   { bottom: '43%', right: '35%' },    { bottom: '99%', right: '58%' },
    { bottom: '55%', right: '33.5%' },   { bottom: '43%', right: '34%' },    { bottom: '98%', right: '36%' },
    { bottom: '57%', right: '33.5%' },   { bottom: '44.6%', right: '32%' },  { bottom: '97%', right: '45.5%' },
    { bottom: '59%', right: '33.5%' },   { bottom: '46.4%', right: '30%' },  { bottom: '96%', right: '41%' },
                                         { bottom: '48%', right: '28%' },    { bottom: '94%', right: '53.5%' },
                                         { bottom: '49%', right: '27%' },    { bottom: '92%', right: '54.5%' },
                                         { bottom: '51%', right: '27%' },    { bottom: '90%', right: '28.5%' },
    { bottom: '67%', right: '33.5%' },   { bottom: '53%', right: '27%' },    { bottom: '88%', right: '30%' },
    { bottom: '69%', right: '33.5%' },   { bottom: '55%', right: '27%' },    { bottom: '86%', right: '55.5%' },
    { bottom: '71%', right: '33.5%' },   { bottom: '57%', right: '27%' },    { bottom: '84%', right: '58.5%' },
    { bottom: '73%', right: '33.5%' },   { bottom: '59%', right: '27%' },    { bottom: '82%', right: '22.5%' },
    { bottom: '75%', right: '33.5%' },   { bottom: '60%', right: '27%' },    { bottom: '80%', right: '21%' },
    { bottom: '77.5%', right: '33.5%' }, { bottom: '60%', right: '29%' },    { bottom: '78%', right: '18.5%' },
    { bottom: '80%', right: '35%' },     { bottom: '60%', right: '31%' },    { bottom: '76%', right: '55%' },
    { bottom: '82%', right: '37%' },     { bottom: '60%', right: '33%' },    { bottom: '74%', right: '57.5%' },
    { bottom: '84%', right: '39%' },     { bottom: '60%', right: '35%' },    { bottom: '72%', right: '54.5%' },
    { bottom: '86%', right: '41%' },     { bottom: '60%', right: '37%' },    { bottom: '74%', right: '55.5%' },
    { bottom: '88%', right: '43%' },     { bottom: '60%', right: '39%' },    { bottom: '76%', right: '58%' },
    { bottom: '90%', right: '45%' },     { bottom: '60%', right: '41%' },    { bottom: '78%', right: '55%' },
    { bottom: '90%', right: '47%' },     { bottom: '60%', right: '43%' },    { bottom: '80%', right: '57.5%' },
    { bottom: '90%', right: '49%' },     { bottom: '60%', right: '45%' },    { bottom: '82%', right: '54.5%' },
    { bottom: '90%', right: '51%' },     { bottom: '60%', right: '47%' },    { bottom: '84%', right: '24.5%' },
    { bottom: '87%', right: '45%' },     { bottom: '60%', right: '49%' },    { bottom: '86%', right: '27.5%' },
    { bottom: '55%', right: '38%' },     { bottom: '60%', right: '53%' },    { bottom: '88%', right: '57%' },
    { bottom: '47%', right: '74%' },     { bottom: '60%', right: '57%' },    { bottom: '84%', right: '28%' },//
    { bottom: '83%', right: '47%' },     { bottom: '60%', right: '55%' },    { bottom: '86%', right: '23.5%' },
    { bottom: '69%', right: '76%' },     { bottom: '60%', right: '59%' },    { bottom: '87%', right: '25.5%' },
    { bottom: '75%', right: '40%' },     { bottom: '60%', right: '51%' },    { bottom: '90%', right: '26%' },
    { bottom: '87%', right: '69%' },     { bottom: '60%', right: '61%' },    { bottom: '92%', right: '34%' },
    { bottom: '64%', right: '79%' },     { bottom: '60%', right: '63%' },    { bottom: '94%', right: '31%' },
    { bottom: '81%', right: '40%' },     { bottom: '60%', right: '65%' },    { bottom: '96%', right: '47.5%' },
    { bottom: '57%', right: '77%' },     { bottom: '60%', right: '65.4%'},   { bottom: '98%', right: '53%' },
    { bottom: '53%', right: '36%' },     { bottom: '62%', right: '65.4%'},   { bottom: '98%', right: '42.5%' },
    { bottom: '78%', right: '42%' },     { bottom: '64%', right: '65.4%'},   { bottom: '96%', right: '58.5%' },
    { bottom: '83%', right: '70%' },     { bottom: '63%', right: '14%'},     { bottom: '94%', right: '44.5%' },
    { bottom: '44%', right: '78%' },     { bottom: '63%', right: '14%'},     { bottom: '92%', right: '35.5%' },
    { bottom: '51%', right: '77%' },     { bottom: '65.6%', right: '16%'},   { bottom: '94%', right: '35.5%' },
    { bottom: '78%', right: '72%' },     { bottom: '65%', right: '12.6%'},   { bottom: '96%', right: '38.5%' },
    { bottom: '79%', right: '76%' },     { bottom: '61.6%', right: '17%'},   { bottom: '98%', right: '33%' },
    { bottom: '85%', right: '63%' },     { bottom: '63.6%', right: '17.6%'}, { bottom: '94%', right: '50%' },
    { bottom: '51%', right: '39%' },     { bottom: '65.6%', right: '22%'},   { bottom: '94%', right: '33%' },
    { bottom: '73%', right: '37%' },     { bottom: '62.6%', right: '33.4%'}, { bottom: '91%', right: '31%' },
    { bottom: '83%', right: '44%' },     { bottom: '61.6%', right: '44.4%'}, { bottom: '94%', right: '39%' },
    { bottom: '64%', right: '75%' },     { bottom: '63.6%', right: '36.4%'}, { bottom: '89%', right: '33%' },
    { bottom: '56%', right: '41%' },     { bottom: '61.6%', right: '18.4%'}, 
    { bottom: '84%', right: '66%' },     { bottom: '63.6%', right: '63%'},   
    { bottom: '74%', right: '78%' },     { bottom: '62.6%', right: '60%'},   
    { bottom: '73%', right: '74%' },     { bottom: '61.6%', right: '56.4%'},
    { bottom: '57%', right: '36%' },     { bottom: '62.6%', right: '49.4%'},
    { bottom: '71%', right: '40%' },     { bottom: '63.6%', right: '53.4%'},
    { bottom: '77%', right: '35%' },     { bottom: '63.5%', right: '29.4%'},
    { bottom: '77.7%', right: '38%' },   { bottom: '62.6%', right: '25.4%'},
    { bottom: '86%', right: '47%' },     { bottom: '61.6%', right: '53.4%'},
    { bottom: '88%', right: '49%' },     { bottom: '62.6%', right: '40.4%'},
    { bottom: '84%', right: '49%' },     { bottom: '63.6%', right: '20.4%'},
    { bottom: '54%', right: '74.7%' },   { bottom: '61.6%', right: '22.4%'},
    { bottom: '60%', right: '74%' },     { bottom: '65.6%', right: '46.4%'},
    { bottom: '70%', right: '36%' },     { bottom: '65%', right: '55.4%'},
    { bottom: '81%', right: '42%' },     { bottom: '65.1%', right: '27.4%'},
    { bottom: '83%', right: '73%' },     { bottom: '64.6%', right: '31.4%'},
    { bottom: '87%', right: '65%' },     { bottom: '63.6%', right: '33.4%'},
                                         { bottom: '65%', right: '38.4%'},//
                                         { bottom: '40%', right: '38.4%'},
                                         { bottom: '55%', right: '23.4%'},
                                         { bottom: '53%', right: '22.4%'},
                                         { bottom: '57%', right: '21.7%'},
                                         { bottom: '65%', right: '24.4%'},
                                         { bottom: '45%', right: '57.4%'},
                                         { bottom: '43%', right: '53.4%'},
                                         { bottom: '49%', right: '54.6%'},
                                         { bottom: '46.5%', right: '55.4%'},
                                         { bottom: '40%', right: '57.4%'},
                                         { bottom: '48%', right: '57.4%'},
                                         { bottom: '43%', right: '28.4%'},
                                         { bottom: '43%', right: '28.4%'},
                                         { bottom: '43%', right: '28.4%'},
                                         { bottom: '40.4%', right: '48.4%'},
                                         { bottom: '48%', right: '24.4%'},
                                         { bottom: '47%', right: '25.4%'},
                                         { bottom: '60%', right: '25%'},
                                         { bottom: '40%', right: '51.4%'},
                                         { bottom: '39%', right: '44.6%'},
                                         { bottom: '39%', right: '33.4%'},
                                         { bottom: '42%', right: '31.4%'},
                                         { bottom: '64%', right: '44.4%'},
                                         { bottom: '48%', right: '21.6%'},
                                         { bottom: '42%', right: '55.4%'},
                                         { bottom: '40%', right: '55%'},
                                         { bottom: '41%', right: '41.4%'},
                                         { bottom: '40.7%', right: '36.4%'},
                                         { bottom: '41.6%', right: '44.4%'},
                                         { bottom: '53%', right: '23.7%'},
                                         
                                         


];
  // Add size and opacity to manual positions
  const manualPositionsWithSize: StarPosition[] = manualPositions.map(pos => ({
    ...pos,
    size: getRandomSize(),
    opacity: getRandomOpacity(getRandomSize())
  }));

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
    const totalStars = 400;
    
    for (let i = 0; i < totalStars; i++) {
      const size = getRandomSize();
      const opacity = getRandomOpacity(size);
      
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

  // Random positions for main stars (hover ke liye)
  const createRandomPositions = (count: number) => {
    return Array.from({ length: count }, () => ({
      bottom: `${Math.random() * 860}%`,
      right: `${Math.random() * 270}%`,
      size: getRandomSize(),
      opacity: getRandomOpacity(getRandomSize())
    }));
  };
  
  const [randomPositions, setRandomPositions] = useState(() => 
    createRandomPositions(manualPositions.length)
  );

  // Decide main stars positions
  const displayPositions = isHovering ? randomPositions : 
                          (isInView ? manualPositionsWithSize : randomPositions);

  // Size class function
  const getSizeClass = (size?: number) => {
    if (!size) size = 2; // Default size
    switch(size) {
      case 1: return 'h-[2px] w-[2px]';
      case 2: return 'h-[2px] w-[2px]';
      case 3: return 'h-[3px] w-[3px]';
      case 4: return 'h-[1px] w-[1px]';
      default: return 'h-[2px] w-[2px]';
    }
  };


 return (
  <div 
    ref={sectionRef}
    className='h-full w-full relative'>
    
    {/* Main Circle with Blast Effect */}
    <div className='relative'>
      <div 
        className='h-30 w-30 rounded-full absolute top-27 left-1/2 -translate-y-1/2
                   -translate-x-1/2 cursor-grab z-[50] overflow-hidden
                   transition-all duration-500'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
     
      </div>
      
      {/* Blast Effect Layers - Appear on hover */}
      {isHovering && (
        <>

          <div 
            className='absolute top-27 left-1/2 -translate-y-1/2 -translate-x-1/2
                       border-4 border-red-500/70 rounded-full
                       animate-[shockwave_0.8s_ease-out_forwards]'
            style={{
              width: '7.5rem',
              height: '7.5rem'
            }}
          />
          
          {/* Particle Effects */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className='absolute h-[4px] w-[4px] rounded-full'
              style={{
                top: '50%',
                left: '50%',
                animation: `particle 0.6s ease-out ${i * 0.1}s forwards`,
                '--angle': `${(360 / 8) * i}deg`,
                '--distance': '120px'
              } as React.CSSProperties}
            />
          ))}
          
          {/* Glow Effect */}
          <div 
            className='absolute top-27 left-1/2 -translate-y-1/2 -translate-x-1/2
                       rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 
                       blur-xl animate-pulse'
            style={{
              width: '8rem',
              height: '8rem'
            }}
          />
        </>
      )}
    </div>

    {/* Main stars - different sizes */}
    {displayPositions.map((pos, index) => {
      const sizeClass = getSizeClass(pos.size);
      
      return (
        <div 
          key={`main-${index}`}
          className={`${sizeClass} bg-[aqua] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000`}
          style={{
            bottom: pos.bottom,
            right: pos.right,
            opacity: pos.opacity || 0.7
          }}
        />
      );
    })}

    {/* Extra stars - different sizes */}
    {extraStars.map((star) => {
      const sizeClass = getSizeClass(star.size);
      
      return (
        <div 
          key={`extra-${star.id}`}
          className={`${sizeClass} bg-[aqua] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-3000`}
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