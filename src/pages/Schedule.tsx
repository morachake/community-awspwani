import React, { useState } from 'react';

const Schedule = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const tracks = [
    { id: 'all', name: 'All Tracks' },
    { id: 'keynote', name: 'Keynote' },
    { id: 'technical', name: 'Technical' },
    { id: 'business', name: 'Business' },
    { id: 'workshop', name: 'Workshops' }
  ];

  const sessions = [
    {
      time: '08:00 - 08:30',
      title: 'Registration & Check-in',
      track: 'all',
      description: 'Pick up your badge and conference materials'
    },
    {
      time: '08:30 - 08:45',
      title: 'National Anthem & Opening Prayer',
      track: 'All',
      description: 'Official start of the event'
    },
    {
      time: '08:45 - 09:00',
      title: 'Welcome Address',
      speaker: 'Event Organizers',
      track: 'All',
      description: 'Opening remarks and event overview'
    },
   
    {
      time: '12:15 - 13:15',
      title: 'Lunch Break & Networking',
      track: 'all',
      description: 'Enjoy lunch and network with fellow attendees'
    },
    
   
    {
      time: '17:15 - 17:30',
      title: 'Closing Remarks & Vote of Thanks',
      track: 'All',
      description: 'Final words and acknowledgments'
    }
  ];

  const filteredSessions = selectedTrack === 'all'
    ? sessions
    : sessions.filter(session => session.track === selectedTrack || session.track === 'all');

  return (
    <div className="pt-16">
      <div className="bg-[#232F3E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Event Schedule</h1>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            April 26th, 2025 | 8:00 AM - 5:30 PM
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-6 py-2 rounded-full ${
                selectedTrack === track.id
                  ? 'bg-[#FF9900] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {track.name}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredSessions.map((session, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <span className="text-[#FF9900] font-medium">{session.time}</span>
                  <h3 className="text-xl font-semibold mt-1">{session.title}</h3>
                  {session.speaker && (
                    <p className="text-gray-600 mt-1">Speaker: {session.speaker}</p>
                  )}
                </div>
                <div className="flex items-center">
                  <span className={`px-4 py-1 rounded-full text-sm ${
                    session.track === 'technical'
                      ? 'bg-blue-100 text-blue-800'
                      : session.track === 'business'
                      ? 'bg-green-100 text-green-800'
                      : session.track === 'workshop'
                      ? 'bg-purple-100 text-purple-800'
                      : session.track === 'keynote'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {session.track.charAt(0).toUpperCase() + session.track.slice(1)}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mt-4">{session.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;