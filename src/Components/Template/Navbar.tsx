import React, { useEffect, useState, type ReactNode } from "react";

interface NaveProps{
  className?: ReactNode
}


const sections = ["home", "info", "about", "services", "contact"];

const Navbar:React.FC<NaveProps> = ({className}) => {
  const [active, setActive] = useState("home");

  const smoothScrollTo = (elementId: string, duration: number = 1200) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
    
    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };
      
      const run = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * run);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setActive(elementId);
      }
    };
    
    requestAnimationFrame(animation);
  };

  const handleScrollTo = (id: string) => {
    smoothScrollTo(id, 1200);
    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav >
      <ul className={`${className}`}>
        {sections.map((item) => (
          <li
            key={item}
            onClick={() => handleScrollTo(item)}
            className={`
              cursor-pointer uppercase transition
              ${active === item
                ? "text-[#3AE9F9] font-boldsemi scale-[1.1] Active-btn"
                : "text-[#7DF4FF] font-thin hover:text-[#3AE9F9] scale-[1] hover:scale-[1.1] "}
            `}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;