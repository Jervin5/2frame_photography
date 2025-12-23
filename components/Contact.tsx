import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Let's Capture Your Story</h2>
              <p className="text-stone-600 mb-8">
                Ready to book a session? Have questions about our packages? 
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all" placeholder="Phone Number" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Shoot Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all">
                    <option>Wedding Photography</option>
                    <option>Maternity Shoot</option>
                    <option>Baby Shoot</option>
                    <option>Outdoor Session</option>
                    <option>Family Function</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all" placeholder="Tell us about your event..."></textarea>
                </div>
                <button type="button" className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 p-3 rounded-full text-rose-500">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800">Studio Location</h4>
                      <p className="text-stone-600">
                        123 Art Street, RS Puram,<br />
                        Coimbatore, Tamil Nadu 641002
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 p-3 rounded-full text-rose-500">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800">Phone</h4>
                      <p className="text-stone-600">+91 918124270526</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 p-3 rounded-full text-rose-500">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800">Email</h4>
                      <p className="text-stone-600">2framesphotography2022@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-12 w-full h-64 bg-stone-200 rounded-xl overflow-hidden shadow-lg relative">
                 Map Placeholder
                 <div className="absolute inset-0 flex items-center justify-center bg-stone-300">
                    <span className="text-stone-500 font-semibold">Google Map Embed</span>
                 </div>
                 In a real app, embed iframe here
                 <iframe src="..." className="w-full h-full border-0" allowFullScreen loading="lazy"></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 border-t border-stone-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold font-serif mb-2">2Frame Photography</h2>
              <p className="text-stone-400 text-sm">Capturing timeless memories in Coimbatore.</p>
            </div>
            
            <div className="flex gap-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-rose-400 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-rose-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-rose-400 transition-colors"><MessageCircle /></a>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-500 text-sm">
            &copy; 2023 2Frame Photography. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};