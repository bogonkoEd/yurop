/* eslint-disable react/prop-types */
const Contact = () => {
  return (
    <div className="border-4 border-black h-[45lvh] bg-[#6e477b] flex flex-col items-center justify-center ">
      
        <h2 className="text-4xl font-bold mb-6 text-center underline">Contact Us</h2>
        <p className="text-lg mb-8 text-center">
          Have questions or need assistance? Reach out to our friendly team.
          We&apos;re here to help!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo
            title="Customer Support"
            icon="📞"
            detail="+254-712-345-678"
            email="support@example.com"
          />
          <ContactInfo
            title="Headquarters"
            icon="🏢"
            detail="123 Hotel Street, Kisumu"
            email="info@example.com"
          />
        </div>
      </div>

  );
};

const ContactInfo = ({ title, icon, detail, email }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-3xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-base mb-4 text-center">{detail}</p>
      <p className="text-base text-center">
        Email: <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
      </p>
    </div>
  );
};

export default Contact;
