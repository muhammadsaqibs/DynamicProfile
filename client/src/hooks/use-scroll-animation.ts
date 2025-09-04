import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Animate skill progress bars when in view
          const skillCard = entry.target.closest('.skill-card');
          if (skillCard) {
            const progressBar = skillCard.querySelector('.skill-progress') as HTMLElement;
            if (progressBar) {
              const width = progressBar.style.width;
              progressBar.style.width = '0%';
              setTimeout(() => {
                progressBar.style.width = width;
              }, 200);
            }
          }
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}
