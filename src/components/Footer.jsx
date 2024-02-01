/* eslint-disable react/prop-types */

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">Your Booking Platform</p>
          <p className="text-sm">Discover, Book, and Enjoy Your Perfect Stay</p>
        </div>
        <div className="flex space-x-4">
          <FooterLink href="#" text="Home" />
          <FooterLink href="#" text="Offerings" />
          <FooterLink href="#" text="About Us" />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }) => {
  return (
    <a href={href} className="text-sm hover:text-gray-300">
      {text}
    </a>
  );
};

export default Footer;
