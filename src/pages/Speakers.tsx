import React from 'react';

const speakers = [
  {
    name: 'Sarah Johnson',
    role: 'AWS Solutions Architect',
    company: 'Amazon Web Services',
    bio: 'Expert in cloud architecture with 10+ years of experience in AWS services.',
    topics: ['Serverless Architecture', 'Container Security'],
    image: 'https://source.unsplash.com/random/400x400?portrait&sig=1'
  },
  {
    name: 'Michael Chen',
    role: 'Cloud Security Specialist',
    company: 'CloudSec Solutions',
    bio: 'Specializes in AWS security best practices and compliance.',
    topics: ['Cloud Security', 'Compliance'],
    image: 'https://source.unsplash.com/random/400x400?portrait&sig=2'
  },
  {
    name: 'Lisa Patel',
    role: 'DevOps Engineer',
    company: 'Tech Innovators',
    bio: 'Passionate about automation and CI/CD pipelines.',
    topics: ['DevOps', 'Infrastructure as Code'],
    image: 'https://source.unsplash.com/random/400x400?portrait&sig=3'
  },
  {
    name: 'James Wilson',
    role: 'AWS Community Hero',
    company: 'Cloud Consulting Co.',
    bio: 'AWS certified professional with expertise in cloud migration.',
    topics: ['Migration Strategies', 'Cost Optimization'],
    image: 'https://source.unsplash.com/random/400x400?portrait&sig=4'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Senior Developer',
    company: 'ServerlessFirst',
    bio: 'Serverless advocate and full-stack developer.',
    topics: ['Lambda Functions', 'API Gateway'],
    image: 'https://source.unsplash.com/random/400x400?portrait&sig=5'
  },
  {
    name: 'David Kim',
    role: 'Cloud Architect',
    company: 'Global Tech Solutions',
    bio: 'Specializes in distributed systems and microservices.',
    topics: ['Microservices', 'System Design'],
    image: 'https://source.unsplash.com/random/400x400?portrait&sig=6'
  }
];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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