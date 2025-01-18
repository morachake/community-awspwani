import React from 'react';
import { Calendar, Clock, Users, Award, Lightbulb, Zap } from 'lucide-react'

const speakers = [
];
const tracks = [
  { name: 'Serverless', icon: Zap },
  { name: 'Containers', icon: Users },
  { name: 'Machine Learning', icon: Lightbulb },
  { name: 'DevOps', icon: Clock },
  { name: 'Security', icon: Award },
  { name: 'Networking', icon: Calendar },
]

const Speakers = () => {
  return (
    <div className="pt-16">
      
      <div className="bg-[#232F3E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Our Speakers</h1>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Learn from industry experts and thought leaders in cloud computing
          </p>
        </div>
      </div>
      <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Speakers</h1>
        
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Call for Speakers</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're looking for passionate speakers to share their knowledge and experience with the AWS community.
              If you have an interesting AWS use case, best practice, or technical deep-dive, we want to hear from you!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Why Speak at AWS Community Day Pwani?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>Share your knowledge with a passionate audience of 500+ attendees</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>Gain recognition as a thought leader in the AWS community</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>Inspire others with your innovative solutions and experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>Receive a free ticket to the event and exclusive speaker perks</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">What We're Looking For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>45-minute technical sessions or 20-minute lightning talks</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>Real-world case studies and practical demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>Innovative uses of AWS services and architectures</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-[#FF9900] mr-2 flex-shrink-0" />
                    <span>Best practices, lessons learned, and expert tips</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Tracks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {tracks.map((track) => (
                <div key={track.name} className="flex items-center p-3 bg-gray-100 rounded-lg">
                  <track.icon className="h-6 w-6 text-[#FF9900] mr-2" />
                  <span className="text-gray-800 font-medium">{track.name}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Speaker Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Free admission to AWS Community Day Pwani 2025</li>
                <li>Exclusive speaker dinner and networking event</li>
                <li>Professional video recording of your session</li>
                <li>Featured profile on our website and social media</li>
                <li>Opportunity to connect with AWS experts and community leaders</li>
              </ul>
            </div>

            <div className="text-center">
              <button
                rel="noopener noreferrer"
                className="inline-block bg-[#FF9900] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#FF9900]/90 transition-colors"
              >
                Submit Your Talk Proposal
              </button>
              <p className="mt-4 text-gray-600">
                Deadline for submissions: December 31, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">Featured Speakers</h2>
        <p className="text-center mt-8 text-gray-700 text-lg">
          More speakers will be announced soon. Stay tuned!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-[#FF9900] font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-600 mb-4">{speaker.company}</p>
                <p className="text-gray-700 mb-4">{speaker.bio}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Speaking Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {speaker.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;