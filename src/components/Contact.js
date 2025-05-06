import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [animateForm, setAnimateForm] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setAnimateForm(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        query: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 bg-black text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 hover:scale-100 transition-transform duration-5000"
          style={{ 
            backgroundImage: "url('/worship-hands.jpg')", 
            opacity: 0.5 
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative h-full">
          <div className="flex flex-col justify-center h-full max-w-xl">
            <p className="text-sm uppercase mb-2 tracking-wider">CONTACT</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 transform transition-all duration-500 ease-out">
              GET IN TOUCH WITH<br />
              OUR CHURCH
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${animateForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
            {/* Contact Form */}
            <div className="bg-white p-6 shadow-md rounded-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-6">CONTACT FORM:</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4 transform transition-all duration-300 hover:-translate-y-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-4 transform transition-all duration-300 hover:-translate-y-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-4 transform transition-all duration-300 hover:-translate-y-1">
                  <input
                    type="text"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Query Related"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-6 transform transition-all duration-300 hover:-translate-y-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all duration-300"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full bg-amber-200 hover:bg-amber-300 text-black font-bold py-3 px-4 rounded-md uppercase transition-all duration-300 transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md animate-pulse">
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white p-6 shadow-md rounded-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-3">Address</h4>
                <p className="text-gray-800 font-bold">NH 234 PUBLIC SQUARE</p>
                <p className="text-gray-800 font-bold">SAN FRANCISCO 65368</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-3">Contact Details</h4>
                <div className="flex items-center mb-2 transform transition-all duration-300 hover:translate-x-2">
                  <Phone size={18} className="mr-2 text-amber-400" />
                  <p className="text-gray-800">(480) 555-0103</p>
                </div>
                <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                  <Mail size={18} className="mr-2 text-amber-400" />
                  <p className="text-gray-800">FINSWEET@EXAMPLE.COM</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-3">Find us here</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-300 transform hover:scale-125">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-300 transform hover:scale-125">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-300 transform hover:scale-125">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;