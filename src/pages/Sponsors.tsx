import React from 'react';
import { Mail } from 'lucide-react';

const sponsorTiers = [
  {
    tier: 'Platinum',
    sponsors: [
      {
        name: 'TechCorp Solutions',
        logo: 'https://source.unsplash.com/random/400x200?tech&sig=1',
        description: 'Leading provider of cloud solutions'
      },
      {
        name: 'CloudTech Systems',
        logo: 'https://source.unsplash.com/random/400x200?technology&sig=2',
        description: 'Enterprise cloud services'
      }
    ]
  },
  {
    tier: 'Gold',
    sponsors: [
      {
        name: 'DevOps Pro',
        logo: 'https://source.unsplash.com/random/400x200?computer&sig=3',
        description: 'DevOps automation platform'
      },
      {
        name: 'Security Plus',
        logo: 'https://source.unsplash.com/random/400x200?security&sig=4',
        description: 'Cloud security solutions'
      },
      {
        name: 'DataFlow Inc',
        logo: 'https://source.unsplash.com/random/400x200?data&sig=5',
        description: 'Big data analytics'
      }
    ]
  },
  {
    tier: 'Silver',
    sponsors: [
      {
        name: 'StartUp Cloud',
        logo: 'https://source.unsplash.com/random/400x200?startup&sig=6',
        description: 'Cloud solutions for startups'
      },
      {
        name: 'CodeMasters',
        logo: 'https://source.unsplash.com/random/400x200?code&sig=7',
        description: 'Development tools'
      }
    ]
  }
];

const Sponsors = () => {
  return (
    <div className="pt-16">
      <div className="bg-[#232F3E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Our Sponsors</h1>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Thank you to our amazing sponsors who make AWS Community Day Pwani possible
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {sponsorTiers.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="border-b-4 border-[#FF9900] pb-2">
                {tier.tier} Sponsors
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier.sponsors.map((sponsor, sponsorIndex) => (
                <div
                  key={sponsorIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                    <p className="text-gray-600">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us in supporting the AWS community in Pwani. Reach out to learn more
            about our sponsorship packages and opportunities.
          </p>
          <a
            href="mailto:sponsors@awscommunitydaypwani.com"
            className="inline-flex items-center bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact for Sponsorship
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;