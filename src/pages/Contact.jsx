const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1d3557] mb-4">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or want to make a reservation? Reach out to us—we'd love to hear from you.
            </p>
          </div>
          
          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-8 pb-4 border-b border-gray-100">
                Our Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#e63946] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#1d3557] mb-2">Address</h3>
                    <address className="not-italic text-gray-600">
                      123 Culinary Street<br />
                      Foodville, FC 12345<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#e63946] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#1d3557] mb-2">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#e63946] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#1d3557] mb-2">Email</h3>
                    <p className="text-gray-600">reservations@gourmethaven.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  {/* <div className="bg-[#e63946] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div> */}
                  {/* <div>
                    <h3 className="font-serif font-bold text-xl text-[#1d3557] mb-2">Hours</h3>
                    <ul className="text-gray-600 space-y-2">
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
                  </div> */}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-8 pb-4 border-b border-gray-100">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition appearance-none bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="private-event">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#e63946] to-[#ff6b6b] hover:from-[#d62a38] hover:to-[#e63946] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-8 text-center">
              Visit Us
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256007466!2d-73.9878449241642!3d40.74844097138968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623861234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  title="Restaurant Location"
                ></iframe>
              </div>
              <div className="p-6 bg-[#1d3557] text-white flex justify-between items-center">
                <div>
                  <h3 className="font-serif font-bold text-xl mb-1">Gourmet Haven</h3>
                  <p className="text-gray-300">123 Culinary Street, Foodville, FC 12345</p>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#1d3557] hover:bg-gray-100 font-bold py-2 px-4 rounded-lg transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;