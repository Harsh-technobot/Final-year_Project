import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">GRIEVEASE</h1>
      <div className="space-x-4">
        <a href="/about" className="text-gray-600 hover:underline">About</a>
        <a href="/privacy" className="text-gray-600 hover:underline">Privacy Policy</a>
        <a href="/terms" className="text-gray-600 hover:underline">Terms of Service</a>
        <a href="/contact" className="text-gray-600 hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;