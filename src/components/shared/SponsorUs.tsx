import { additionalPackages, sponsorshipPackages } from "@/utilis/data";

export default function SponsorUsPage() {
   
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Become a Sponsor</h1>
        <p className="text-xl text-center mb-12">
          Support the AWS community and showcase your brand to hundreds of cloud enthusiasts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsorshipPackages.map((pkg) => (
            <div key={pkg.name} className="border rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
              <p className="text-3xl font-bold mb-6">{pkg.price}</p>
              <ul className="list-disc list-inside mb-6">
                {pkg.benefits.map((benefit, index) => (
                  <li key={index} className="mb-2">{benefit}</li>
                ))}
              </ul>
              <button
                className="block text-center bg-[#FF9900] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
              >
                Contact Us
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 mt-8">
          {additionalPackages.map((pkg) => (
            <div key={pkg.name} className="border rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
              <ul className="list-disc list-inside mb-6">
                {pkg.benefits.map((benefit, index) => (
                  <li key={index} className="mb-2">{benefit}</li>
                ))}
              </ul>
              <button
                className="block text-center bg-[#FF9900] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#FF9900]/90 transition-colors"
              >
                Contact Us
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl mb-4">
            Don't see a package that fits your needs? We're happy to create custom sponsorship packages.
          </p>
        </div>
      </div>
    </div>
  )
}

