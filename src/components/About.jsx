/* eslint-disable react/prop-types */

const About = () => {
  return (
    <div className="border-4 border-black h-[65vh] bg-[#f2f0a3] p-8">
      <h1 className="text-5xl font-bold mb-4 text-center text-[#6e477b] underline underline-offset-4">About Us</h1>
      <h2 className="text-4xl font-bold mb-6 text-center text-[#6e477b]">Discover Your Perfect Stay</h2>
      <p className="text-lg font-extralight mb-8 text-center">
        Welcome to our booking platform, where we connect you with a diverse range of
        hotels and lodging options. Whether you&apos;re planning a business trip, a family vacation,
        or a romantic getaway, we&apos;ve got you covered.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Wide Selection"
          icon="🏨"
          description="Explore a vast array of hotels, ranging from luxury resorts to cozy boutique accommodations."
        />
        <FeatureCard
          title="Easy Booking"
          icon="📅"
          description="Our user-friendly platform ensures a seamless booking experience with just a few clicks."
        />
        <FeatureCard
          title="Local Experiences"
          icon="🌍"
          description="Immerse yourself in the culture of each destination with our curated list of local experiences."
        />
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#6e477b]">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="John Doe"
            location="CBD, Kisumu"
            quote="Absolutely loved my stay! The variety of hotels to choose from made it easy to find the perfect match for my preferences."
          />
          <TestimonialCard
            name="Jane Smith"
            location="Kisian, Kisumu"
            quote="Booking was a breeze, and the local experiences recommended by the platform added an extra layer of enjoyment to my trip."
          />
          <TestimonialCard
            name="Alex Johnson"
            location="Kisian, Kisumu"
            quote="Great service! The platform offers a diverse selection, and the booking process is straightforward. Highly recommended!"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, icon, description }) => {
  return (
    <div className="bg-[#fdbb37] p-6 rounded-lg shadow-md">
      <div className="text-3xl mb-4 text-center text-[#6e477b]">{icon}</div>
      <h3 className="text-3xl font-semibold mb-2 text-center text-[#6e477b]">{title}</h3>
      <p className="text-m text-center font-extralight">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ name, location, quote }) => {
  return (
    <div className="bg-[#fdbb37] p-6 rounded-lg shadow-md">
      <p className="text-lg mb-4 text-center font-extralight">{quote}</p>
      <div className="text-lg font-semibold text-center text-[#6e477b]">
        {name}, <span className="text-gray-500">{location}</span>
      </div>
    </div>
  );
};

export default About;
