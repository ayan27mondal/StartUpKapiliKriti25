import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does TerraPure work?',
    answer: 'TerraPure connects organic farmers directly with buyers, eliminating middlemen. Farmers can list their produce, and buyers can purchase directly through our platform, ensuring fair prices and transparency.',
  },
  {
    question: 'How do I become a verified farmer?',
    answer: 'To become a verified farmer, register on our platform and provide your organic certification details. Our team will verify your credentials within 48 hours.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit cards, debit cards, and bank transfers. Payments are processed securely through our platform.',
  },
  {
    question: 'How is produce quality guaranteed?',
    answer: 'All farmers on our platform are verified and must maintain organic certification. We also have a rating system and quality guarantee policy to ensure high standards.',
  },
  {
    question: 'What is the delivery process?',
    answer: 'We work with trusted logistics partners to ensure timely delivery. Orders are typically delivered within 24-48 hours, depending on your location.',
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about TerraPure
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}