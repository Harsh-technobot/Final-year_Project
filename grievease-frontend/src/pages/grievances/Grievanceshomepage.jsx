import React, { useState } from "react";
import Logo from "../components/Logo";
import { FaRegBell } from "react-icons/fa6";

const Grievanceshomepage = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [notifications, setNotifications] = useState(3); // Example notification count

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 25 * 1024 * 1024) {
      // 25MB in bytes
      setFile(selectedFile);
    } else {
      alert("File size must be less than 25MB");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log({ category, location, description, file });
    alert("Grievance submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="flex justify-between items-center px-12  py-3 border-b bg-white  border-gray-200">
        <Logo />
        <div className="space-x-6">
          <a href="/grievances" className="text-blue-500 hover:underline">
            Grievances
          </a>
          <a href="/community" className="text-blue-500 hover:underline">
            Community
          </a>
          <a href="/job-portal" className="text-blue-500 hover:underline">
            Job Portal
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex bg-[#E5E7EB] px-3 py-2 items-center space-x-1 rounded-xl">
            <FaRegBell className="  hover:text-blue-500" />
         
          <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {notifications}
          </span>
          </div>
          <img
            src={"https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg=w240-h480-rw"}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </nav>

      <div className="flex justify-around p-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          About us
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
          New grievance
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600">
          Your grievances
        </button>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-6">
        <h2 className="text-2xl font-semibold mb-4">Register New Grievance</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="file-upload"
              className="block w-full border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-gray-400"
            >
              <span className="text-2xl mb-2">📎</span>
              Click to Upload or drag and drop
              <br />
              (Max. file size: 25MB)
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,application/pdf"
            />
            {file && (
              <p className="text-gray-700 mt-2">Selected file: {file.name}</p>
            )}
          </div>

          <div className="text-center text-2xl text-blue-500 mb-4">🤖</div>

          <div className="space-y-2">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your grievance"
              className="w-full p-2 border border-gray-300 rounded h-24 resize-vertical"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit Grievance
          </button>
        </form>
      </div>

      <footer className="border-t border-gray-200 p-4 text-center">
        <h1 className="text-2xl font-bold mb-2">GRIEVEASE</h1>
        <div className="space-x-4">
          <a href="/about" className="text-gray-600 hover:underline">
            About
          </a>
          <a href="/privacy" className="text-gray-600 hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-600 hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="text-gray-600 hover:underline">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Grievanceshomepage;
