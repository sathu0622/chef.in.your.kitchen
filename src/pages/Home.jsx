import HeroImage from '../assets/images/hero1.jpg';
import { motion } from 'framer-motion';
import { FaStar, FaUtensils, FaLeaf, FaWineGlassAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HeroImage}
            alt="Restaurant interior"
            className="w-full h-full object-cover object-center scale-110 animate-zoom-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30 z-0"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            chef.in.your.kitchen
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl mx-auto drop-shadow-sm leading-relaxed">
            Where culinary artistry meets warm hospitality in an unforgettable dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e63946] hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              Reserve a Table
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              <a href='/menu'>View Menu</a>
            </motion.button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-[#1d3557] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaStar className="text-3xl mb-2 text-[#ffddd2]" />, text: "Michelin-Starred Chef" },
              { icon: <FaLeaf className="text-3xl mb-2 text-[#a8dadc]" />, text: "Locally-Sourced" },
              { icon: <FaUtensils className="text-3xl mb-2 text-[#f1faee]" />, text: "Seasonal Menu" },
              { icon: <FaWineGlassAlt className="text-3xl mb-2 text-[#ffddd2]" />, text: "Curated Wine Pairings" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4"
              >
                {feature.icon}
                <p className="font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#f1faee]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-6">Our Culinary Journey</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Founded in 2010, Gourmet Haven has evolved from a humble bistro to an award-winning dining destination, 
                celebrated for our innovative approach to classic cuisine.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Our executive chef, with 20 years of international experience across Paris, Tokyo, and New York, 
                crafts each dish as an edible masterpiece using the finest seasonal ingredients from local purveyors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/about"
                  className="bg-[#e63946] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 text-center"
                >
                  Our Story
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/team"
                  className="bg-transparent border-2 border-[#1d3557] hover:bg-[#1d3557]/10 text-[#1d3557] font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 text-center"
                >
                  Meet the Team
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-1 lg:order-2 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Chef preparing food"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-[#e63946] text-white p-3 rounded-full mr-3">
                    <FaStar className="text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1d3557]">20+ Years Experience</p>
                    <p className="text-sm text-gray-600">Professional culinary team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-4">Seasonal Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our menu changes with the seasons to bring you the freshest flavors at their peak
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Truffle Pasta",
                description: "Handmade pasta with black truffle cream sauce and wild mushrooms",
                price: "$24",
                image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                featured: true
              },
              {
                name: "Grilled Salmon",
                description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
                price: "$28",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Chocolate Soufflé",
                description: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
                price: "$12",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                featured: true
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${item.featured ? 'border-t-4 border-[#e63946]' : ''}`}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-[#e63946] text-white px-3 py-1 rounded-full text-sm font-bold">
                      Chef's Special
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold">{item.name}</h3>
                    <p className="text-[#e63946] font-bold">{item.price}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-[#1d3557] font-medium hover:text-[#e63946] transition-colors">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/menu"
              className="inline-block bg-[#1d3557] hover:bg-[#14213d] text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300"
            >
              Explore Full Menu
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#ffff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1d3557] mb-4">Guest Experiences</h2>
            <p className="text-xl text-[#1d3557]/80 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our guests have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The best dining experience I've had this year. Every dish was a masterpiece of flavor and presentation!",
                author: "Sarah Johnson",
                role: "Food Critic",
                rating: 5
              },
              {
                quote: "Impeccable service and flavors that were out of this world. The wine pairings were perfection!",
                author: "Michael Chen",
                role: "Regular Guest",
                rating: 5
              },
              {
                quote: "The atmosphere was perfect for our anniversary dinner. The staff made us feel so special!",
                author: "Emily & David Wilson",
                role: "First-time Visitors",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#e63946] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[#1d3557]">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-transparent border-2 border-[#1d3557] hover:bg-[#1d3557] text-[#1d3557] hover:text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
            >
              Share Your Experience
            </motion.button>
          </div> */}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-[#1d3557] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready for an Unforgettable Experience?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Book your table today and let us take you on a culinary journey you won't forget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/reservations"
                className="bg-[#e63946] hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 inline-block"
              >
                Reserve Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+1234567890"
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 inline-block"
              >
                Call: (123) 456-7890
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;