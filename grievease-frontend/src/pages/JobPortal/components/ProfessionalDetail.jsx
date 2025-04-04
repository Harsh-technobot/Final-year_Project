import React, { useState } from "react";
import { Star, MessageCircle, Briefcase, ArrowLeft, Send } from "lucide-react";

const ProfessionalDetailPage = ({ professional, goBack }) => {
  const [reviews, setReviews] = useState(professional?.reviewList || []);
  const [newReview, setNewReview] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageText, setMessageText] = useState("");

  if (!professional) return null;

  const handleAddReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, { user: "You", text: newReview }]);
      setNewReview("");
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      alert(`Message sent: "${messageText}"`);
      setMessageText("");
      setShowMessageModal(false);
    }
  };

  const handleHire = () => {
    alert(`You have hired ${professional.name}!`);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-10">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft size={18} /> Back to Professionals
        </button>

        {/* Profile */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={professional.image}
            alt={professional.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-200"
          />
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{professional.name}</h1>
            <p className="text-blue-600 font-medium">{professional.profession}</p>
            <p className="text-gray-600">{professional.experience}</p>
            <div className="flex justify-center md:justify-start items-center gap-2 text-yellow-500">
              <Star size={18} /> <span>{professional.rating}</span> ({professional.reviews})
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
          <ul className="space-y-3">
            {professional.services.map((s, i) => (
              <li key={i} className="flex justify-between bg-gray-100 p-3 rounded-md">
                <span>{s.name}</span>
                <span className="font-medium">{s.rate}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleHire}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <Briefcase size={16} /> Hire
          </button>
          <button
            onClick={() => setShowMessageModal(true)}
            className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <MessageCircle size={16} /> Message
          </button>
        </div>

        {/* Review Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-md">
                <p className="font-semibold text-gray-800">{r.user}</p>
                <p className="text-sm text-gray-600 italic">"{r.text}"</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write a review..."
              className="flex-1 border border-gray-300 rounded-md p-2 text-sm"
            />
            <button
              onClick={handleAddReview}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4 shadow-xl">
            <h3 className="text-lg font-semibold">Send Message to {professional.name}</h3>
            <textarea
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type your message..."
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowMessageModal(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-1"
              >
                <Send size={14} /> Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalDetailPage;
