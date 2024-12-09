import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import TicketPricing from '../components/registration/TicketPricing';

type FormStage = 'ticket' | 'details' | 'payment' | 'success';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  experience: string;
  tshirtSize: string;
  dietary: string;
  ticketPrice: number;
}

const Register = () => {
  const [stage, setStage] = useState<FormStage>('ticket');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    experience: '',
    tshirtSize: '',
    dietary: '',
    ticketPrice: 0
  });

  const handleTicketSelect = (price: number) => {
    setFormData({ ...formData, ticketPrice: price });
    setStage('details');
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage('payment');
  };

  const handlePayment = () => {
    setStage('success');
  };

  if (stage === 'success') {
    return (
      <div className="pt-16">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering for AWS Community Day Pwani 2024. We've sent a
              confirmation email with more details about the event.
            </p>
            <a
              href="/"
              className="inline-block bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="bg-[#232F3E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Register Now</h1>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Join us for AWS Community Day Pwani 2024
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4">
            {['ticket', 'details', 'payment'].map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      ['ticket', 'details', 'payment'].indexOf(stage) >= index
                        ? 'bg-[#FF9900] text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {step.charAt(0).toUpperCase() + step.slice(1)}
                  </span>
                </div>
                {index < 2 && (
                  <div className="w-16 h-1 bg-gray-200">
                    <div
                      className={`h-full ${
                        ['ticket', 'details', 'payment'].indexOf(stage) > index
                          ? 'bg-[#FF9900]'
                          : ''
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {stage === 'ticket' && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Select Your Ticket</h2>
            <TicketPricing onSelectTicket={handleTicketSelect} />
          </div>
        )}

        {stage === 'details' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleDetailsSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9900] focus:border-[#FF9900]"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9900] focus:border-[#FF9900]"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9900] focus:border-[#FF9900]"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    T-Shirt Size
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9900] focus:border-[#FF9900]"
                    value={formData.tshirtSize}
                    onChange={(e) =>
                      setFormData({ ...formData, tshirtSize: e.target.value })
                    }
                  >
                    <option value="">Select size</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">X-Large</option>
                    <option value="2XL">2X-Large</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dietary Requirements
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9900] focus:border-[#FF9900]"
                    value={formData.dietary}
                    onChange={(e) =>
                      setFormData({ ...formData, dietary: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          </div>
        )}

        {stage === 'payment' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              <div className="mb-8">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span>Ticket Price</span>
                    <span>KES {formData.ticketPrice}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>KES {formData.ticketPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dummy payment form */}
              <div className="space-y-4">
                <button
                  onClick={handlePayment}
                  className="w-full bg-[#FF9900] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
                >
                  Complete Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;