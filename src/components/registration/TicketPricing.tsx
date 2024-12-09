import React from 'react';

const tickets = [
  {
    type: 'Early Bird',
    price: 250,
    features: [
      'Full conference access',
      'Swag bag',
      'Lunch and refreshments',
      'Access to networking session'
    ],
    available: true
  },
  {
    type: 'Regular',
    price: 300,
    features: [
      'Full conference access',
      'Swag bag',
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
      'Swag bag',
      'Lunch and refreshments',
      'Access to networking session',
      'Priority seating'
    ],
    available: true
  }
];

const TicketPricing = ({ onSelectTicket }: { onSelectTicket: (price: number) => void }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tickets.map((ticket, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 border-2 border-transparent hover:border-[#FF9900] transition-all"
        >
          <h3 className="text-xl font-bold mb-2">{ticket.type}</h3>
          <p className="text-3xl font-bold text-[#FF9900] mb-4">
            KES {ticket.price}
          </p>
          <ul className="space-y-3 mb-6">
            {ticket.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-gray-600">
                <svg
                  className="h-5 w-5 text-[#FF9900] mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={() => onSelectTicket(ticket.price)}
            className="w-full bg-[#232F3E] text-white py-2 rounded-md hover:bg-[#FF9900] transition-colors"
            disabled={!ticket.available}
          >
            Select Ticket
          </button>
        </div>
      ))}
    </div>
  );
};

export default TicketPricing;