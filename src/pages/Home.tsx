'use client'

import React from 'react'
import { Calendar, MapPin, Users, Star, Coffee, Laptop } from 'lucide-react'
import CountdownTimer from '../components/shared/CountDown'

export default function Home() {
  const eventDate = new Date('2025-04-26T09:00:00')

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#232F3E] text-white relative overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="AWS Community Day Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          /> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 flex flex-col justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AWS Community Day <span className="text-[#FF9900]">Pwani 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              April 26th, 2025 | Pwani, Kenya
            </p>
            <CountdownTimer targetDate={eventDate} />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                className="bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
              >
                Register Now
              </button>
              <button
                className="border-2 border-[#FF9900] text-[#FF9900] px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900] hover:text-white transition-colors"
              >
                Call for Speakers
              </button>
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
                <p className="text-gray-600">April 26th, 2025</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Star className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Speakers</h3>
              <p className="text-gray-600">Learn from industry leaders and AWS heroes</p>
            </div>
            <div className="text-center">
              <Coffee className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with fellow cloud enthusiasts</p>
            </div>
            <div className="text-center">
              <Laptop className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hands-on Workshops</h3>
              <p className="text-gray-600">Gain practical skills in AWS technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#232F3E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us at AWS Community Day Pwani 2025</h2>
          <p className="text-xl mb-8">Don't miss this opportunity to learn, network, and grow your AWS skills</p>
          <div className="flex justify-center space-x-4">
            <button
              className="inline-block bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
            >
              Register Now
            </button>
            <button
              className="inline-block border-2 border-[#FF9900] text-[#FF9900] px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900] hover:text-white transition-colors"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

