import { motion } from 'framer-motion';
import { FaAward, FaSeedling, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f1faee] to-[#d8e8e4]">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl font-serif font-bold text-[#1d3557] mb-4">
            Our <span className="text-[#e63946]">Story</span>
          </h1>
          <div className="h-1 w-24 bg-[#e63946] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of passion, flavor, and culinary excellence
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 bg-white p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-3xl font-serif font-semibold text-[#1d3557] mb-6 flex items-center">
            <FaSeedling className="text-green-600 mr-3" /> Our Beginnings
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Founded in 2010 by Chef Alexandre Dubois, Gourmet Haven began as a cozy 10-table bistro. 
              With a rich background in Michelin-starred kitchens across Europe, Chef Dubois envisioned 
              a space that blends fine cuisine with heartfelt hospitality.
            </p>
            <p>
              As we grew, our core remained unchanged: to craft memorable dining experiences through 
              innovative dishes, warm ambiance, and personalized service.
            </p>
          </div>
        </motion.div>

        {/* Our Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 bg-white p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-3xl font-serif font-semibold text-[#1d3557] mb-6">Our Philosophy</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              We believe that culinary excellence begins with the finest ingredients. That's why we work 
              closely with local farmers, fishers, and artisans committed to quality and sustainability.
            </p>
            <p>
              Our seasonal menus are a celebration of nature's bounty—each dish a tribute to the stories 
              behind the ingredients and the people who cultivate them.
            </p>
          </div>
        </motion.div>

        {/* Meet Our Chef */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 bg-[#1d3557] text-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Meet Our Chef</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-[#e63946]">
              <img 
                src="https://images.unsplash.com/photo-1600566752227-8f3b1a2a3e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Chef Alexandre Dubois" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-bold mb-4">Chef Alexandre Dubois</h3>
              <p className="leading-relaxed mb-6">
                With over 25 years of global culinary experience, Chef Dubois infuses classic French techniques 
                with international flair. His commitment to storytelling through food has defined Gourmet Haven's legacy.
              </p>
              <div className="bg-[#e63946]/20 p-4 rounded-lg border-l-4 border-[#e63946]">
                <FaQuoteLeft className="text-[#e63946] text-2xl mb-2" />
                <blockquote className="italic">
                  "For me, cooking is about creating memories. I want every guest to leave with not just a full belly, 
                  but a story to tell."
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-3xl font-serif font-semibold text-[#1d3557] mb-6 flex items-center">
            <FaAward className="text-yellow-500 mr-3" /> Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { award: "Michelin Star", years: "2018-2023" },
              { award: "Best Fine Dining", source: "City Food Awards 2022" },
              { award: "Top 100 Restaurants", source: "Gourmet Magazine" },
              { award: "Best Wine Pairing", source: "International Restaurant Awards 2021" }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-[#e63946] text-white p-2 rounded-full mr-4">
                  <FaAward className="text-sm" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1d3557]">{item.award}</h4>
                  <p className="text-gray-600">{item.years || item.source}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
