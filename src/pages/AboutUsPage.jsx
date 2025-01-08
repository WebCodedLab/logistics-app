import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function AboutUsPage() {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Active Carriers', value: '1000+' },
    { label: 'Loads Delivered', value: '50K+' },
    { label: 'States Covered', value: '48' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'Over 20 years of logistics experience, pioneering innovative dispatch solutions.',
      image: 'https://images.unsplash.com/photo-1568133406340-792a41969489?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      description: 'Former fleet manager turned operations expert, specializing in carrier relations.',
      image: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Mike Chen',
      role: 'Technology Lead',
      description: 'Tech veteran focused on optimizing dispatch processes through automation.',
      image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>About Us | Logistics Hub - Truck Dispatching Experts</title>
        <meta name="description" content="Learn about Logistics Hub, our mission, values, and commitment to providing top-notch truck dispatching services across the USA." />
      </Helmet>

      <div className="bg-blue-600 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Logistics Hub</h1>
            <p className="text-xl text-blue-100">Revolutionizing truck dispatching through innovation, reliability, and dedication</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative -mt-16 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-lg shadow-lg p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-4">
                Logistics Hub stands at the forefront of truck dispatching services across the USA. Since our inception in 2008, we've been revolutionizing the way carriers connect with premium loads, ensuring optimal routes and maximum profitability.
              </p>
              <p className="text-lg text-gray-600">
                Our state-of-the-art dispatch center operates 24/7, powered by advanced technology and staffed by industry veterans who understand the unique challenges of modern trucking. We've built our reputation on providing reliable, round-the-clock support that keeps America's supply chain moving forward.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Excellence in Service</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    24/7 dedicated dispatch support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Real-time load tracking and updates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Rapid response times
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Carrier Success</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Premium load matching
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Rate negotiation expertise
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Route optimization
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="aspect-square w-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-center text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center text-sm">{member.description}</p>
                </div>
              ))}

            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Industry Partnerships</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-600 mb-6">
                Our expansive network includes partnerships with industry leaders and access to premium load boards:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
                <img src="https://www.costa.com.pk/images/international-movers-association.jpg" alt="" />
                <img src="https://www.costa.com.pk/images/freightnet.png" alt="" />
                <img src="https://www.costa.com.pk/images/movers-poe.png" alt="" />
                <img src="https://www.costa.com.pk/images/worldwide-erc.png" alt="" />
                <img src="https://www.costa.com.pk/images/moverworldwide.png" alt="" />
                <img src="https://www.costa.com.pk/images/lahore-chamber.png" alt="" />
              </div>
            </div>
          </section>

          <section className="text-center py-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">Join the thousands of carriers who trust Logistics Hub for their dispatching needs</p>
            <Link to='/contact' className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contact Us Today
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;