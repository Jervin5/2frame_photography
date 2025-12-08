import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types';
import baby from '../images/baby_1.jpg'
import bride from '../images/bride-3.jpg'
import maternity from '../images/maternity-1.jpg'
import outdoor from '../images/outdoor-1.jpg'
import wedding1 from '../images/wedding-2.jpg'
import baby2 from '../images/baby-2.jpg'

const portfolioItems: PortfolioItem[] = [
  { id: '1', category: 'Wedding', src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop', title: 'Traditional Wedding' },
  { id: '2', category: 'Baby', src: baby, title: 'Newborn Sleep' },
  { id: '3', category: 'Outdoor', src: outdoor, title: 'Sunset Portrait' },
  { id: '4', category: 'Maternity', src: maternity, title: 'Forest Maternity' },
  { id: '5', category: 'Family', src: bride, title: 'Bride Pic' },
  { id: '6', category: 'Wedding', src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop', title: 'Ring Exchange' },
  { id: '7', category: 'Baby', src: baby2, title: 'First touch' },
  { id: '8', category: 'wedding', src: wedding1, title: 'New journey' },
];

export const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Selected Works</h2>
          <p className="text-stone-600">A glimpse into the stories we've told.</p>
        </div>

        {/* Masonry Layout using Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedId(item.id)}
              className="relative rounded-lg overflow-hidden break-inside-avoid cursor-pointer group shadow-md hover:shadow-xl transition-all"
            >
              <img src={item.src} alt={item.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <span className="text-rose-300 text-sm uppercase tracking-wider font-bold">{item.category}</span>
                <h3 className="text-xl font-serif">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
              onClick={() => setSelectedId(null)}
            >
              <button className="absolute top-6 right-6 text-white hover:text-rose-400">
                <X size={32} />
              </button>
              
              {portfolioItems.find(i => i.id === selectedId) && (
                 <motion.img
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   src={portfolioItems.find(i => i.id === selectedId)?.src}
                   alt="Selected"
                   className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm"
                   onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                 />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};