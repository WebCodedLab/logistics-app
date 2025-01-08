import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
  };

    return (
        <div className="contact-us-page font-sans text-gray-800">
            <Helmet>
                <title>Contact Us | Logistics Hub - Get in Touch for Dispatching Services</title>
                <meta
                    name="description"
                    content="Contact Logistics Hub for premium truck dispatching services. Get in touch with our team for reliable freight dispatching across the USA."
                />
            </Helmet>
        {/* Hero Section */}
        <div className="bg-blue-600 py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-blue-100">Revolutionizing truck dispatching through innovation, reliability, and dedication</p>
                </div>
            </div>
         </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap */}
                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8"> {/* Added shadow and padding */}
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4"> {/* Added space-y for form spacing */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="phone"
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="serviceType">
                                    Service Type
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="Dry Van">Dry Van</option>
                                    <option value="Reefer">Reefer</option>
                                    <option value="Flatbed">Flatbed</option>
                                    <option value="Hotshot">Hotshot</option>
                                    <option value="Box Truck">Box Truck</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="message"
                                    placeholder="Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Contact Information</h2>
                        <div className="mb-6">
                        <p className="mb-3">
                            <strong className="font-medium">Phone:</strong>
                                <a href="tel:1234567890" className="text-blue-500 hover:underline ml-1">123-456-7890</a>
                        </p>
                            <p className="mb-3">
                                <strong className="font-medium">Email:</strong>
                                <a href="mailto:info@logisticshub.com" className="text-blue-500 hover:underline ml-1">info@logisticshub.com</a>
                           </p>
                        <p className="mb-3">
                            <strong className="font-medium">Address:</strong>
                            <span className="ml-1">123 Logistics Way, Trucktown, USA 12345</span>
                            </p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Our Location</h3>
                           <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616562308246!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Our Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
