'use client'

import React from 'react'
import CountdownTimer from '../components/shared/CountDown'
import { Calendar, MapPin, Users, Star, Coffee, Laptop, ArrowRight } from 'lucide-react'

export default function Home() {
  const eventDate = new Date('2025-04-26T09:00:00')

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#232F3E] text-white relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="AWS Community Day Background"
            fill
            className="object-cover opacity-10"
            priority
          /> */}
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#232F3E] via-[#232F3E]/90 to-[#1B2631]" />
        
        <div className="relative z-10 container mx-auto px-4 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block bg-[#FF9900]/10 px-4 py-2 rounded-full">
                <span className="text-[#FF9900] font-semibold">April 26th, 2025 | Pwani, Kenya</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                AWS Community Day <span className="text-[#FF9900]">Pwani 2025</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Join the largest AWS community event in Kenyan Coast . Connect with cloud experts, Students
                learn best practices, and explore the future of cloud computing.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  className="bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors inline-flex items-center gap-2"
                >
                  Register Now <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  className="border-2 border-[#FF9900] text-[#FF9900] px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900] hover:text-white transition-colors"
                >
                  Call for Speakers
                </button>
              </div>
            </div>
            <div className="lg:pl-12 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-8">
                <h2 className="text-2xl font-semibold text-center">Event Starts In</h2>
                <CountdownTimer targetDate={eventDate} />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#FF9900]">500+</div>
                    <div className="text-sm text-gray-300">Attendees</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#FF9900]">20+</div>
                    <div className="text-sm text-gray-300">Speakers</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#FF9900]">20+</div>
                    <div className="text-sm text-gray-300">Sessions</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#FF9900]">6+</div>
                    <div className="text-sm text-gray-300">Tracks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Highlights */}
        <div className="relative z-10 container mx-auto px-4 -mt-20 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Calendar className="h-8 w-8 text-[#FF9900] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Date & Time</h3>
              <p className="text-gray-300">April 26th, 2025</p>
              <p className="text-gray-300">9:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="h-8 w-8 text-[#FF9900] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-300">TBA</p>
              <p className="text-gray-300">Mombasa, Kenya</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="h-8 w-8 text-[#FF9900] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Attendees</h3>
              <p className="text-gray-300">500+ Expected</p>
              <p className="text-gray-300">Attendees</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Star className="h-8 w-8 text-[#FF9900] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Experience</h3>
              <p className="text-gray-300">Hands-on Workshops</p>
              <p className="text-gray-300">Networking Events</p>
              <p className="text-gray-300">Panel Discussion</p>
              <p className="text-gray-300">Keynotes</p>
            </div>
          </div>
        </div>
      </div>


      {/* Event Details */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Calendar className="h-10 w-10 text-[#FF9900]" />
              <div>
                <h3 className="font-semibold text-lg">Date & Time</h3>
                <p className="text-gray-600">April 26th, 2025</p>
                <p className="text-gray-600">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 text-[#FF9900]" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600">Pwani Convention Center</p>
                <p className="text-gray-600">Pwani, Kenya</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Star className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Speakers</h3>
              <p className="text-gray-600">Learn from industry leaders and AWS heroes</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Coffee className="h-12 w-12 text-[#FF9900] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with fellow cloud enthusiasts</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
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

