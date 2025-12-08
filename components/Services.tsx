import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import baby from '../images/baby_1.jpg'
import family from '../images/family-2.jpg'
import maternity from '../images/maternity-1.jpg'
import outdoor from '../images/outdoor-1.jpg'
import wedding1 from '../images/wedding-3.jpg'
import baby2 from '../images/baby-2.jpg'
const services: Service[] = [
  {
    id: 'baby',
    title: 'Baby Shoot',
    description: 'Capturing the innocence of your little ones with safe and creative themes.',
    image: baby
  },
  {
    id: 'maternity',
    title: 'Maternity',
    description: 'Celebrating the glow of motherhood with elegance and style.',
    image: maternity
  },
  {
    id: 'wedding',
    title: 'Marriage',
    description: 'Documenting your big day from candid moments to grand rituals.',
    image: wedding1
  },
  {
    id: 'outdoor',
    title: 'Outdoor',
    description: 'Utilizing natural light and landscapes for breathtaking portraits.',
    image: outdoor
  },
  {
    id: 'family',
    title: 'Family Functions',
    description: 'Preserving the joy of togetherness at birthdays and gatherings.',
    image: family
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Services</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We offer a wide range of photography services tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-96 overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};