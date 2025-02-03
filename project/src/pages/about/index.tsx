import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About TerraPure</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing organic farming through technology and community
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower farmers by providing direct market access and fair returns while promoting sustainable organic farming practices. We believe in creating a transparent ecosystem where both farmers and consumers benefit from quality organic produce.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A future where organic farming is the norm, not the exception. Where farmers prosper through fair trade practices, and consumers have easy access to certified organic produce directly from the source.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">Building strong relationships between farmers and consumers</p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Promoting eco-friendly farming practices for a better future</p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Trade</h3>
              <p className="text-gray-600">Ensuring fair compensation for farmers' hard work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
              },
              {
                name: 'Michael Chen',
                role: 'Head of Agriculture',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
              },
              {
                name: 'Emily Williams',
                role: 'Community Manager',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}