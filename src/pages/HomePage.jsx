import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'remixicon/fonts/remixicon.css';

function HomePage() {

  const services = [
    { title: 'Load Matching', icon: 'ri-stack-line', desc: 'Find loads tailored to your trucking preferences.' },
    { title: 'Rate Negotiation', icon: 'ri-money-dollar-circle-line', desc: 'Secure competitive rates for every load.' },
    { title: 'Paperwork Handling', icon: 'ri-file-copy-line', desc: 'Focus on driving while we manage the paperwork.' },
    { title: 'Route Optimization', icon: 'ri-roadster-line', desc: 'Plan the most efficient routes for better profitability.' },
  ];
  const reviews = [
    {
      name: 'John Doe',
      feedback:
        'Logistics Hub helped me find consistent loads and improve my earnings. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      feedback:
        'The 24/7 support is fantastic. I feel like I have a partner that truly cares about my business.',
    },
    {
      name: 'Michael Johnson',
      feedback:
        'Their rate negotiation skills are top-notch. I’ve seen a significant boost in my profitability.',
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <Helmet>
        <title>Logistics Hub - Home | Reliable Truck Dispatching Services</title>
        <meta
          name="description"
          content="Logistics Hub offers 24/7 dispatch services, matching truckers with high-quality loads for dry vans, reefers, flatbeds, hotshots, and box trucks across the USA."
        />
      </Helmet>

      <section
        className="relative bg-cover bg-center text-white py-72 flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5 sm:text-5xl md:text-6xl text-shadow-md">
            Maximize Your Hauls, Minimize Your Downtime
          </h1>
          <p className="text-lg mb-10 text-shadow-sm sm:text-xl">
            24/7 dispatch service, matching truckers with premium loads for all truck types.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-colors duration-300 hover:bg-blue-700 shadow-md"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Why Choose Logistics Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg text-center shadow-md transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
              <i className="ri-truck-line text-blue-600 text-5xl mb-5"></i>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Diverse Truck Types</h3>
              <p className="text-gray-600">
                Dispatch for dry vans, reefers, flatbeds, hotshots, and box trucks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-md transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
              <i className="ri-road-map-line text-blue-600 text-5xl mb-5"></i>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Freight Access</h3>
              <p className="text-gray-600">
                Access to premium freight and real-time load matching.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-md transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
              <i className="ri-time-line text-blue-600 text-5xl mb-5"></i>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock dispatch support from experienced professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-lg text-center shadow-md transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              >
                <i className={`${service.icon} text-blue-600 text-5xl mb-5`}></i>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              >
                <p className="text-gray-600 italic mb-5">&ldquo;{testimonial.feedback}&rdquo;</p>
                <h3 className="text-xl font-semibold text-gray-900">- {testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 text-center bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="container mx-auto bg-white bg-opacity-75 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Ready to Boost Your Trucking Business?
          </h2>
          <p className="text-lg mb-10 text-gray-600">
            Join Logistics Hub today and experience the difference of professional dispatching.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-7 py-4 rounded-full font-semibold inline-block transition-colors duration-300 hover:bg-blue-700 shadow-md"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
