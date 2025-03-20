import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-5 w-full  bg-white text-gray-800 py-6 border-t border-gray-300">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2.5">
          <p className="text-3xl font-semibold">
            <span className="text-gray-800">Griev</span>
            <span className="font-bold text-blue-500">Ease</span>
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-6 mt-4 lg:mt-0">
          {[
            { name: "About", path: "/about" },
            { name: "Privacy Policy", path: "/privacy-policy" },
            { name: "Terms of Service", path: "/terms-of-service" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-gray-600 hover:text-blue-500 transition duration-200 text-base"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
