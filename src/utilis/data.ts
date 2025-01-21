import { Calendar, Clock, Users, Award, Lightbulb, Zap } from 'lucide-react'

export const years = ['2020', '2021', '2022', '2023', '2024'];

export  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Volunteers', href: '/volunteers' },
    { name: 'Register', href: '/register' },
  ];

  export const tickets = [
    {
      type: 'Early Bird',
      price: 250,
      features: [
        'Full conference access',
        'Swag ',
        'Lunch and refreshments',
        'Access to networking session'
      ],
      available: true
    },
    {
      type: 'Regular',
      price: 350,
      features: [
        'Full conference access',
        'Swag ',
        'Lunch and refreshments',
        'Access to networking session'
      ],
      available: true
    },
    {
      type: 'Late Bird',
      price: 500,
      features: [
        'Full conference access',
        'Swag ',
        'Lunch and refreshments',
        'Access to networking session',
        'Priority seating'
      ],
      available: true
    }
  ];

 export  const sponsorshipPackages = [
    {
      name: 'Platinum',
      price: 'KES ',
      benefits: [
        'Exclusive keynote acknowledgment',
        'Prime logo placement on all event materials, website, and signage',
        'Dedicated booth in the main foyer',
        '10 complimentary passes for your team',
        'Brand inclusion on attendee lanyards and promotional items',
        'Opportunity for a 30-minute technical talk reviewed by our organizing team',
        '4 Slots Available',
      ],
    },
    {
      name: 'Gold',
      price: 'KES ',
      benefits: [
        'Acknowledgment during keynotes',
        'Logo placement on all event materials and website',
        'Dedicated booth in a prominent location',
        '5 complimentary passes for your team',
        'Shout-outs on event social media channels',
        '6 Slots Available',
      ],
    },
    {
      name: 'Silver',
      price: 'KES ',
      benefits: [
        'Logo placement on the event website and materials',
        'Acknowledgment during keynotes',
        '3 complimentary passes for your team',
        'Social media mentions',
        '8 Slots Available',
      ],
    },
  ]


export const additionalPackages = [
  {
    name: 'Additional Opportunities',
    price: 'Custom Pricing',
    benefits: [
      'Networking Coffee Break - KES ',
      'Lunch Sponsorship - KES (Includes branded materials on tables)',
      'Attendee Swag - KES  (Water bottles, notebooks, branded gifts)',
      'Workshop Sponsorship - KES  (Includes branding in workshop areas)',
      'T-Shirts - KES ',
    ],
  },
]


export const sponsorTiers = [
//   {
//     tier: 'Platinum',
//     sponsors: [
//       {
//         name: 'TechCorp Solutions',
//         logo: 'https://source.unsplash.com/random/400x200?tech&sig=1',
//         description: 'Leading provider of cloud solutions'
//       },
//       {
//         name: 'CloudTech Systems',
//         logo: 'https://source.unsplash.com/random/400x200?technology&sig=2',
//         description: 'Enterprise cloud services'
//       }
//     ]
//   },
  // {
  //   tier: 'Gold',
  //   sponsors: [
  //     {
  //       name: 'DevOps Pro',
  //       logo: 'https://source.unsplash.com/random/400x200?computer&sig=3',
  //       description: 'DevOps automation platform'
  //     },
  //     {
  //       name: 'Security Plus',
  //       logo: 'https://source.unsplash.com/random/400x200?security&sig=4',
  //       description: 'Cloud security solutions'
  //     },
  //     {
  //       name: 'DataFlow Inc',
  //       logo: 'https://source.unsplash.com/random/400x200?data&sig=5',
  //       description: 'Big data analytics'
  //     }
  //   ]
  // },
  // {
  //   tier: 'Silver',
  //   sponsors: [
  //     {
  //       name: 'StartUp Cloud',
  //       logo: 'https://source.unsplash.com/random/400x200?startup&sig=6',
  //       description: 'Cloud solutions for startups'
  //     },
  //     {
  //       name: 'CodeMasters',
  //       logo: 'https://source.unsplash.com/random/400x200?code&sig=7',
  //       description: 'Development tools'
  //     }
  //   ]
  // }
];

export const speakers = [
];
export const tracks = [
  { name: 'Serverless', icon: Zap },
  { name: 'Containers', icon: Users },
  { name: 'Machine Learning', icon: Lightbulb },
  { name: 'DevOps', icon: Clock },
  { name: 'Security', icon: Award },
  { name: 'Networking', icon: Calendar },
]


export const sessioTracks = [
  { id: 'all', name: 'All Tracks' },
  { id: 'keynote', name: 'Keynote' },
  { id: 'technical', name: 'Technical' },
  { id: 'business', name: 'Business' },
  { id: 'workshop', name: 'Workshops' }
];

export const sessions = [
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

export const eventData = {
  venue: 'Mombasa  ',
  address: 'Mombasa',
  country: 'Kenya',
  date: 'April 26th, 2025',
  time: '9:00 AM - 5:00 PM',
  attendees: '500',
  speakers: '20',
  sessions: '20',
  tracks: '6',
  experience: ['Hands-on Workshops', 'Networking Events', 'Panel Discussion', 'Keynotes']
}