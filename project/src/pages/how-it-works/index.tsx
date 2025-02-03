import React from 'react';
import { UserPlus, ListPlus, ShoppingCart, Truck } from 'lucide-react';

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How TerraPure Works</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to connect farmers with buyers for organic produce
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-200" />

            {/* Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Create an Account</h3>
                    <p className="text-gray-600">
                      Sign up as a farmer or buyer. Farmers will need to provide organic certification details for verification.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <UserPlus className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <img
                      src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                      alt="Sign Up"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                    <img
                      src="https://images.unsplash.com/photo-1512314889357-e157c22f938d"
                      alt="List Products"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <ListPlus className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">List Your Products</h3>
                    <p className="text-gray-600">
                      Farmers can easily list their organic produce with details, pricing, and availability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Shop & Purchase</h3>
                    <p className="text-gray-600">
                      Buyers can browse products, compare prices, and make secure purchases directly from farmers.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <ShoppingCart className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <img
                      src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0"
                      alt="Shopping"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                    <img
                      src="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736"
                      alt="Delivery"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery & Feedback</h3>
                    <p className="text-gray-600">
                      Products are delivered fresh to buyers, who can then rate their experience and provide feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}