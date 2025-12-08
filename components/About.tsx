import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Clock, Smile } from 'lucide-react';

const values = [
  { icon: <Camera />, title: "Creativity", desc: "Unique perspectives in every shot." },
  { icon: <Heart />, title: "Quality", desc: "High-resolution, pristine editing." },
  { icon: <Smile />, title: "Transparency", desc: "No hidden costs, just great service." },
  { icon: <Clock />, title: "Experience", desc: "Over 2 years of timeless memories." },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop" 
                alt="Photographer at work" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decor */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-rose-200 rounded-2xl z-0 hidden md:block" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-stone-800">2Frame Photography</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Based in the heart of Coimbatore, 2Frame Photography is more than just a service; 
              it is a passion project dedicated to freezing time. With over 2 years of experience, 
              we specialize in turning fleeting moments into everlasting memories.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Whether it's the tender first days of a newborn, the joy of a wedding, or a candid 
              family gathering, our approach is always personal, professional, and artistic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-rose-50 text-rose-500 rounded-lg">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{v.title}</h4>
                    <p className="text-sm text-stone-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};