import { useEffect, useState } from "react";

const sections = ["home", "info", "about", "services", "contact", "Footer"];

const SideNav = () => {
  const [active, setActive] = useState("home");
  const [isScrolled , setIsScrolled] = useState(0);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
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


  useEffect(() => {
   const handleScroll2 = () => {
      setIsScrolled(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll2);
    
    return()=>{
      window.removeEventListener('scroll', handleScroll2);
    }

  },[]);

  return ( 
    <nav className="h-[60vh] w-16 flex items-center justify-center fixed md:-right-1 -right-4 top-[25%] overflow-hidde
                    scale-[.7] transition transform duration-300 z-[999]"
        style={{
            opacity:isScrolled
        }}>
      <div className="flex flex-col gap-6 justify-center py-4 h-full">
        {sections.map((item) => (
          <div
            key={item}
            onClick={() => handleScrollTo(item)}
            className={`
              cursor-pointer transition text-[1px] text-transparent h-4 rounded-full w-4 bg-[#3AE9F9] 
              ${active === item
                ? "font-bold scale-[1.1]"
                : "scale-[.6]"}
            `}
          >
            {item}
          </div>
        ))}
        <div className="h-[100%] absolute w-[2px] rounded-full  bg-[radial-gradient(circle_at_center,#3AE9F9,transparent)]
                        left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">

        </div>
      </div>
    </nav>
  );
};

export default SideNav