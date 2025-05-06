import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1d3557] text-[#f1faee] pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6">chef.in.your.kitchen</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience culinary excellence in a warm and inviting atmosphere. Gourmet Haven blends tradition with innovation to create memorable dining.
            </p>
            <div className="flex space-x-4">
              {[FaInstagram, FaFacebook, FaTwitter].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 hover:text-[#e63946] text-xl transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-serif font-bold mb-6">Explore</h4>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((label, i) => (
                <li key={i}>
                  <a
                    href={`/${label.toLowerCase()}`}
                    className="relative inline-block text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#e63946] transition-all duration-300 group-hover:w-full"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-serif font-bold mb-6">Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </motion.div> */}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-serif font-bold mb-6">Contact</h4>
            <address className="not-italic text-gray-300 space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#e63946]" />
                <div>
                  <p>123 Culinary Street</p>
                  <p>Foodville, FC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-[#e63946]" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-[#e63946]" />
                <p>info@gourmethaven.com</p>
              </div>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} chef.in.your.kitchen. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
  
  export default Footer;