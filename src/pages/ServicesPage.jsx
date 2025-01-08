import React from 'react';
import { Helmet } from 'react-helmet';
import 'remixicon/fonts/remixicon.css';



function ServicesPage() {
    const services = [
        {
            title: 'Dry Vans',
            description:
                'Our dry van dispatching services are designed to keep your standard freight moving smoothly and efficiently across the country. We handle the complexities of route planning, load negotiation, and paperwork, ensuring your dry van trucks are consistently booked with reliable loads. We\'ll find you the best routes and rates, maximizing your revenue potential while minimizing downtime.',
            icon: 'ri-truck-line',
            bg: 'bg-blue-100',
            iconColor: 'text-blue-600',
        },
        {
            title: 'Reefers',
            description:
                'We specialize in dispatching refrigerated trucks (reefers) and understand the unique challenges that come with temperature-sensitive freight. Our team ensures your reefer trucks are constantly working within safe temperature ranges, adhering to compliance regulations, and that the goods arrive in perfect condition. We are experts in managing perishable goods and will secure high-paying loads that fit your needs and schedules.',
            icon: 'ri-snowy-line',
            bg: 'bg-teal-100',
            iconColor: 'text-teal-600',
        },
        {
            title: 'Flatbeds',
            description:
                'For oversized and uniquely shaped freight, our flatbed dispatching services offer the reliable solution you need. We manage the intricacies involved with flatbed loads—from load securement to permits, we take care of everything. Whether you are hauling steel, lumber, or machinery, we’ll find you the right loads that keep your business moving forward. Our experienced team will ensure you\'re always loaded, moving, and making profit.',
            icon: 'ri-building-line',
            bg: 'bg-orange-100',
            iconColor: 'text-orange-600',
        },
        {
            title: 'Hotshots',
            description:
                'When speed and efficiency are paramount, our hotshot dispatching services are second to none. We understand that hotshot drivers need quick turnaround and high-paying loads. We work diligently to ensure that your hotshot trucks are continuously moving and that we are maximizing your revenue potential by quickly locating and dispatching the most profitable loads available. We take care of the logistics so you can keep on truckin\'.',
            icon: 'ri-fire-line',
            bg: 'bg-red-100',
            iconColor: 'text-red-600',
        },
        {
            title: 'Box Trucks',
            description:
                'Our box truck dispatching services cater to the specific needs of both regional and over-the-road box truck operations. We understand the versatility of box trucks, and we find opportunities to suit your needs in both local and long-haul routes. We are dedicated to finding consistent, profitable loads for our box truck drivers. Our experienced dispatchers handle everything from booking and load negotiations to ensure you get the most from each day.',
            icon: 'ri-boxing-line',
            bg: 'bg-green-100',
            iconColor: 'text-green-600',
        },
    ];

    return (
        <div className="services-page font-sans text-gray-800">
            <Helmet>
                <title>Our Services | Logistics Hub - Truck Dispatching</title>
                <meta
                    name="description"
                    content="Logistics Hub offers dispatching services for dry vans, reefers, flatbeds, hotshots, and box trucks. Find the right service for your trucking needs."
                />
            </Helmet>

            <div className="relative bg-gray-100 py-16 my-16 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://cdn.pixabay.com/photo/2024/03/26/11/57/trucks-8656643_1280.jpg"
                        alt="Trucks"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Empowering Your Logistics Journey
                    </h1>
                    <p className="text-xl text-gray-100 mb-8">
                        Your dedicated partner in streamlining truck dispatching through innovation and reliability.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Our Dispatch Services
                </h2>
                <p className="text-lg text-gray-600">
                    Explore the various types of dispatch services we provide, tailored to meet the unique demands of your fleet.
                </p>
            </div>
            <div className="container mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${service.bg} overflow-hidden`}
                        >
                            <div className="p-6 flex flex-col items-center">
                                <div className={`text-5xl mb-4 ${service.iconColor}`}>
                                    <i className={service.icon}></i>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                                    {service.title}
                                </h2>
                                <p className="text-center text-gray-700">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Why Choose Our Dispatching Services?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <i className="ri-time-line text-4xl mb-4 text-blue-500"></i>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Efficient Load Booking
                            </h3>
                            <p className="text-gray-700">
                                We focus on securing the best loads quickly, minimizing downtime and maximizing your revenue.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <i className="ri-award-line text-4xl mb-4 text-green-500"></i>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Experienced Dispatchers
                            </h3>
                            <p className="text-gray-700">
                                Our team of experienced dispatchers is dedicated to providing the best support for your business.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <i className="ri-shield-check-line text-4xl mb-4 text-orange-500"></i>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Compliance and Safety
                            </h3>
                            <p className="text-gray-700">
                                We ensure that all operations are within compliance regulations, prioritizing the safety of your drivers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            Reliable Dispatchers At Your Service
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Our skilled dispatchers understand the nuances of the transportation industry and are ready to help you find the best loads at great rates. We are committed to making your business successful by ensuring your trucks are always moving efficiently and you're making profit.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src='https://media.istockphoto.com/id/598560886/photo/delivery-men-unloading-boxes-from-truck.jpg?s=612x612&w=0&k=20&c=35nYghyhT1lKsxIK48_v5aq97HFR3z-hhAwI-WB_rWY=' alt="Dispatchers" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>


            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Contact us today to discuss your needs and how we can help your
                        business grow.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;