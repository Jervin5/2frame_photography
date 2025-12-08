import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Rahul",
    role: "Wedding Clients",
    content: "2Frame made our wedding day unforgettable. The team was so patient and creative. Every photo looks like a masterpiece!",
  },
  {
    id: 2,
    name: "Anita M.",
    role: "Maternity Shoot",
    content: "I was very conscious about the shoot, but they made me feel so comfortable. The maternity pictures are the best gift I have.",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    role: "Family Function",
    content: "Professionalism at its peak. They arrived on time, captured every important moment, and delivered the album faster than expected.",
  },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-rose-50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-stone-800 mb-12">Kind Words</h2>
        
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <Quote className="absolute top-8 left-8 text-rose-200 w-16 h-16 -z-0 opacity-50" />
          
          <div className="relative z-10 h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-2xl text-stone-600 font-light italic mb-6">
                  "{testimonials[current].content}"
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-stone-800">{testimonials[current].name}</h4>
                  <p className="text-rose-500 text-sm font-medium">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors">
              <ChevronLeft />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};