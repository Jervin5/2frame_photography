import React from 'react';
import { motion } from 'framer-motion';

export const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="relative py-32 bg-stone-900 text-white overflow-hidden">
      {/* Background Image Parallax */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1590514163909-3286b3dc7c33?q=80&w=2070&auto=format&fit=crop" 
          alt="Studio Setup" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">World-Class Infrastructure</h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Our studio in Coimbatore is designed to bring your imagination to life. 
              We are equipped with state-of-the-art cameras, professional lighting rigs, 
              and a variety of props and backdrops suitable for any theme.
            </p>
            <ul className="space-y-4 text-stone-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                High-End Sony & Canon Gear
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                Professional Studio Lighting Setup
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                Creative Props for Baby & Maternity Shoots
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1595856980598-1e438c22731c?q=80&w=2070&auto=format&fit=crop" alt="Gear 1" className="rounded-lg shadow-lg hover:scale-105 transition-transform" />
            <img src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1974&auto=format&fit=crop" alt="Gear 2" className="rounded-lg shadow-lg hover:scale-105 transition-transform mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};