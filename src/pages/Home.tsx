import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#232F3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AWS Community Day <span className="text-[#FF9900]">Pwani 2024</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              April 13th, 2024 | Pwani, Kenya
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/register"
                className="bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
              >
                Register Now
              </a>
              <a
                href="/schedule"
                className="border-2 border-[#FF9900] text-[#FF9900] px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900] hover:text-white transition-colors"
              >
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
              <Calendar className="h-10 w-10 text-[#FF9900]" />
              <div>
                <h3 className="font-semibold text-lg">Date & Time</h3>
                <p className="text-gray-600">April 13th, 2024</p>
                <p className="text-gray-600">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
              <MapPin className="h-10 w-10 text-[#FF9900]" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600">Pwani Convention Center</p>
                <p className="text-gray-600">Pwani, Kenya</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
              <Users className="h-10 w-10 text-[#FF9900]" />
              <div>
                <h3 className="font-semibold text-lg">Attendees</h3>
                <p className="text-gray-600">500+ Expected</p>
                <p className="text-gray-600">Cloud Enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About The Event</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              AWS Community Day Pwani is a community-led conference where cloud 
              computing enthusiasts come together to connect, collaborate, and share 
              knowledge. Join us for a day filled with technical sessions, workshops, 
              and networking opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Speakers Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Speakers</h2>
            <p className="text-gray-600">Learn from industry experts and AWS heroes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/400x400?portrait&sig=${i}`}
                  alt="Speaker"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">John Doe</h3>
                  <p className="text-gray-600 mb-2">AWS Solutions Architect</p>
                  <p className="text-gray-500">Company Name</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/speakers"
              className="inline-block bg-[#232F3E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#232F3E]/90 transition-colors"
            >
              View All Speakers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;