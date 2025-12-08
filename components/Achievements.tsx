import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Camera, Users, Award } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  { id: 1, label: "Years Experience", value: 2, suffix: "+", icon: <Calendar /> },
  { id: 2, label: "Happy Clients", value: 50, suffix: "+", icon: <Users /> },
  { id: 3, label: "Shoots Completed", value: 100, suffix: "+", icon: <Camera /> },
  // { id: 4, label: "Awards Won", value: 12, suffix: "", icon: <Award /> },
];

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

export const Achievements: React.FC = () => {
  return (
    <section className="py-16 bg-stone-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 text-rose-400 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter from={0} to={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-stone-300 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};