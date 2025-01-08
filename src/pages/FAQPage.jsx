import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function FAQPage() {
  const faqs = [
    {
      question: "What is truck dispatching?",
      answer: "Truck dispatching is a service that connects truckers with freight loads. A dispatcher acts as an intermediary between trucking companies or independent drivers and shippers or brokers, helping to secure loads, manage paperwork, and optimize routes."
    },
    {
      question: "How much does dispatching cost?",
      answer: "Dispatching costs can vary depending on the service provider and the specific needs of the trucker. Typically, dispatchers charge either a flat fee per load or a percentage of the load's value, usually ranging from 5% to 10%. Contact us for a personalized quote based on your needs."
    },
    {
      question: "How fast can I get loads?",
      answer: "The speed of securing loads depends on various factors, including your location, the type of truck you operate, and current market conditions. With our extensive network and 24/7 service, we strive to match you with suitable loads as quickly as possible, often within hours of availability."
    },
    {
      question: "How do I get paid?",
      answer: "Payment methods can vary, but typically, you'll be paid directly by the broker or shipper after delivering the load. We can assist with invoicing and ensuring timely payments. Some options include quick pay, factoring, or standard payment terms, usually ranging from 15 to 30 days."
    },
    {
      question: "Can I choose my loads?",
      answer: "Yes, you have the final say on which loads you accept. Our dispatchers will present you with load options that match your preferences and equipment type, but the decision to accept or decline a load is always yours."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page py-20">
      <Helmet>
        <title>FAQ | Logistics Hub - Answers to Your Dispatching Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about truck dispatching services at Logistics Hub. Learn about costs, payment methods, load selection, and more." />
      </Helmet>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center m-12">Frequently Asked Questions</h1>

        <div id="accordion-collapse" className=" mx-auto" data-accordion="collapse">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                    activeIndex === index ? 'rounded-b-none' : ''
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
                  activeIndex === index ? '' : 'hidden'
                }`}
                aria-labelledby={`accordion-collapse-heading-${index}`}
              >
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              </div>
               
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;