import { useEffect, useState, useRef } from "react";

interface StatsCounterProps {
  label: string;
  value: number;
  suffix?: string;
}

const StatsCounter = ({ label, value, suffix = "" }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds animation
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <dt className="text-sm font-medium text-gray-500 truncate">
        {label}
      </dt>
      <dd className="mt-1 text-3xl font-semibold text-primary">
        {count}{suffix}
      </dd>
    </div>
  );
};

export default StatsCounter;
