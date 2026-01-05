import React, { useState, useRef, useEffect } from 'react';
import AboutCard from './Component/AboutCard';
import { GiBookshelf } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import SectionHeading from "../../../../Components/Layout/SectionHeading"

const AboutSection: React.FC = () => {
  const Experience = <GiBookshelf className="text-aqua" />
  const Skills = <FaCrown className="text-aqua" />
  const Goal = <GoGoal className="text-aqua" />

  const [activeCard, setActiveCard] = useState<'experience' | 'skills' | 'goal'>('skills');
  
  // Refs for elements
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const detailsPanelRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Visibility states
  const [isVisible, setIsVisible] = useState({
    heading: false,
    text: false,
    cards: false,
    panel: false
  });

  // Intersection Observer setup
  useEffect(() => {
    const elements = [
      { ref: headingRef, key: 'heading', delay: 0 },
      { ref: textRef, key: 'text', delay: 10 },
      { ref: cardsRef, key: 'cards', delay: 20 },
      { ref: detailsPanelRef, key: 'panel', delay: 30 }
    ];

    const observers = elements.map(element => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setIsVisible(prev => ({ ...prev, [element.key]: true }));
              }, element.delay);
            } else {
              setTimeout(() => {
                setIsVisible(prev => ({ ...prev, [element.key]: false }));
              }, 300);
            }
          });
        },
        { 
          threshold: 0.3,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      if (element.ref.current) {
        observer.observe(element.ref.current);
      }

      return observer;
    });

    // Observe the main section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            // Section se bahar jaane par sab kuch hide karo
            setIsVisible({
              heading: false,
              text: false,
              cards: false,
              panel: false
            });
          }
        });
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
      sectionObserver.disconnect();
    };
  }, []);

  const cardDetails = {
    experience: {
      title: "Experience",
      icon: Experience,
      description: "We bring over 4 years of experience in delivering professional web development solutions",
      fullDetails: `Experience ke bare mein complete details. At [Your Company Name], we craft exceptional digital experiences through comprehensive web development solutions. Specializing in UX/UI design, we build intuitive interfaces that users love.`,
      tools: "",
    },

    skills: {
      title: "Skills & Tools",
      icon: Skills,
      description: "At AeroJex Syndicate, we combine cutting-edge technologies with proven methodologies to deliver exceptional digital solutions...",
      fullDetails: `At AeroJex Syndicate, we combine cutting-edge technologies with proven methodologies to deliver exceptional digital solutions. Our expertise spans across modern web development stacks, intuitive design tools, to your business needs.`,
      tools: `React, Next.js, TypeScript, Tailwind CSS, Vue.js, JavaScript (ES6+)
              Node.js, Eireframing
              Git, GitHub, VS Code, NPM/Yarn`,
    },
    
    goal: {
      title: "Goal",
      icon: Goal,
      description: "We bring over 4 years of experience in delivering professional web development solutions",
      fullDetails: `Goal ke bare mein complete details. At [Your Company Name], we aim to deliver exceptional digital experiences through comprehensive web development solutions. Our goal is to build intuitive interfaces that users love.`,
      tools: ``,
    }
  };

  const handleCardClick = (cardType: 'experience' | 'skills' | 'goal') => {
    setActiveCard(cardType);
    
    // Card change hone par panel ko highlight karo
    if (detailsPanelRef.current) {
      detailsPanelRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (detailsPanelRef.current) {
          detailsPanelRef.current.style.transform = 'scale(1)';
        }
      }, 300);
    }

    // Mobile screen par details panel ko scroll karo
    const isMobile = window.innerWidth < 768;
    if (isMobile && detailsPanelRef.current) {
      setTimeout(() => {
        detailsPanelRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const getActiveCardDetails = () => {
    return cardDetails[activeCard];
  };

  // Animation styles
  const headingStyle = {
    transform: isVisible.heading 
      ? 'translateY(0px)' 
      : 'translateY(30px)',
    opacity: isVisible.heading ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const textStyle = {
    transform: isVisible.text 
      ? 'translateY(0px)' 
      : 'translateY(20px)',
    opacity: isVisible.text ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  };

  const cardsStyle = {
    transform: isVisible.cards 
      ? 'translateY(0px)' 
      : 'translateY(20px)',
    opacity: isVisible.cards ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
  };

  const panelStyle = {
    transform: isVisible.panel 
      ? 'translateX(0px)' 
      : 'translateX(100px)',
    opacity: isVisible.panel ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
  };

  return (
    <div id='about' ref={sectionRef} className='w-full md:h-[650px] max-w-[1920px] mx-auto flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-0 overflow-hidden'>
      
      <div className='w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 px-4'>
        
        {/* Left Section */}
        <div className='w-full lg:w-[60%] flex flex-col justify-center'>
          
          {/* Header Section with Animation */}
          <div 
            ref={headingRef}
            className='transform-gpu'
            style={headingStyle}
          >
            <SectionHeading 
              headingStart='ABOUT '
              headingMid='US'
              SubHeading='This is all about us..'
              UnderLineWidth='w-[45%] lg:w-[33%]'
            />
          </div>
         
          {/* Description with Animation */}
          <div 
            ref={textRef}
            className='transform-gpu'
            style={textStyle}
          >
            <p className='text-[#3AC3F9] mt-6 text-sm sm:text-base md:text-lg lg:text-[13.5px] xl:text-base leading-relaxed'>
              AeroJex Syndicate is a premium web development and digital solutions
              company that helps businesses elevate their online presence from ordinary
              to extraordinary through state-of-the-art technologies. Our company's
              vision is not just to build websites, but to create digital experiences
              that captivate users and propel businesses to new levels of success.
            </p>
          </div>
        
          {/* Cards Container with Animation */}
          <div 
            ref={cardsRef}
            className='mt-8 md:mt-10 lg:mt-6 xl:mt-8 transform-gpu'
            style={cardsStyle}
          >
            {/* Mobile (< 640px): Vertical Stack with 80% width */}
            <div className='flex flex-col items-center gap-4 sm:hidden'>
              <AboutCard 
                Icon={cardDetails.experience.icon}
                Tittle={cardDetails.experience.title}
                peragraph={cardDetails.experience.description}
                isActive={activeCard === 'experience'}
                onClick={() => handleCardClick('experience')}
                className='w-[80%] max-w-[320px] bg-white/10 backdrop-blur'
              />
              
              <AboutCard 
                Icon={cardDetails.skills.icon}
                Tittle={cardDetails.skills.title}
                peragraph={cardDetails.skills.description}
                isActive={activeCard === 'skills'}
                onClick={() => handleCardClick('skills')}
                className='w-[80%] max-w-[320px] bg-white/10 backdrop-blur'
              />
              
              <AboutCard 
                Icon={cardDetails.goal.icon}
                Tittle={cardDetails.goal.title}
                peragraph={cardDetails.goal.description}
                isActive={activeCard === 'goal'}
                onClick={() => handleCardClick('goal')}
                className='w-[80%] max-w-[320px] bg-white/10 backdrop-blur'
              />
            </div>

            {/* SM SCREEN (640px-768px): 80% Width Cards */}
            <div className='hidden sm:flex md:hidden flex-col items-center gap-6'>
              <div className='flex flex-col sm:flex-row gap-6 w-full justify-center'>
                <div className='w-full sm:w-[48%] flex justify-center'>
                  <AboutCard 
                    Icon={cardDetails.experience.icon}
                    Tittle={cardDetails.experience.title}
                    peragraph={cardDetails.experience.description}
                    isActive={activeCard === 'experience'}
                    onClick={() => handleCardClick('experience')}
                    className='w-full max-w-[320px] bg-white/10 backdrop-blur'
                  />
                </div>
                
                <div className='w-full sm:w-[48%] flex justify-center'>
                  <AboutCard 
                    Icon={cardDetails.skills.icon}
                    Tittle={cardDetails.skills.title}
                    peragraph={cardDetails.skills.description}
                    isActive={activeCard === 'skills'}
                    onClick={() => handleCardClick('skills')}
                    className='w-full max-w-[320px] bg-white/10 backdrop-blur'
                  />
                </div>
              </div>
              
              <div className='w-full flex justify-center'>
                <AboutCard 
                  Icon={cardDetails.goal.icon}
                  Tittle={cardDetails.goal.title}
                  peragraph={cardDetails.goal.description}
                  isActive={activeCard === 'goal'}
                  onClick={() => handleCardClick('goal')}
                  className='w-full max-w-[320px] bg-white/10 backdrop-blur'
                />
              </div>
            </div>

            {/* Desktop (≥768px): Original 3 Cards Layout */}
            <div className='hidden md:flex justify-start lg:justify-between xl:justify-start gap-4 lg:gap-6 xl:gap-8'>
              <AboutCard 
                Icon={cardDetails.experience.icon}
                Tittle={cardDetails.experience.title}
                peragraph={cardDetails.experience.description}
                isActive={activeCard === 'experience'}
                onClick={() => handleCardClick('experience')}
                className='bg-white/10 backdrop-blur'
              />
              
              <AboutCard 
                Icon={cardDetails.skills.icon}
                Tittle={cardDetails.skills.title}
                peragraph={cardDetails.skills.description}
                isActive={activeCard === 'skills'}
                onClick={() => handleCardClick('skills')}
                className='bg-white/10 backdrop-blur'
              />
              
              <AboutCard 
                Icon={cardDetails.goal.icon}
                Tittle={cardDetails.goal.title}
                peragraph={cardDetails.goal.description}
                isActive={activeCard === 'goal'}
                onClick={() => handleCardClick('goal')}
                className='bg-white/10 backdrop-blur'
              />
            </div>
          </div>

        </div>

        {/* Right Section - Details Panel with Animation */}
        <div 
          ref={detailsPanelRef}
          className='w-full lg:w-[40%] flex items-center scroll-mt-4 transform-gpu'
          style={panelStyle}
        >
          <div className='h-full w-full bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6 md:p-8 text-white/50 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col'>
            
            {/* Active Card Icon */}
            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl'>
              {getActiveCardDetails().icon}
            </div>
            
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[25px] xl:text-3xl font-bold text-white mt-3 sm:mt-4'>
              {getActiveCardDetails().title}
            </h1>

            <p className='text-sm sm:text-base md:text-lg lg:text-[14px] xl:text-base mt-3 sm:mt-4 leading-relaxed flex-grow'> 
              {getActiveCardDetails().fullDetails}
            </p>
              
            {getActiveCardDetails().tools && (
              <div className='mt-4 sm:mt-6'>
                <p className='text-sm sm:text-base md:text-lg lg:text-[14px] xl:text-base font-medium text-white/70 mb-2'>
                  Technologies & Tools:
                </p>
                <div className='bg-black/20 p-3 sm:p-4 rounded-lg'>
                  <pre className='text-xs sm:text-sm md:text-base lg:text-[13px] xl:text-sm text-white/60 whitespace-pre-wrap leading-relaxed font-sans'>
                    {getActiveCardDetails().tools}
                  </pre>
                </div>
              </div>
            )}

            {/* Mobile par back button */}
            <div className='md:hidden mt-4 pt-4 border-t border-white/10'>
              <button
                onClick={() => {
                  const cardsSection = document.querySelector('.flex.flex-col.justify-center');
                  cardsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className='w-full text-center py-2 text-[#3AF9EF] font-medium hover:text-white transition-colors'
              >
                ← Back to Cards
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutSection