import React, { useState } from "react";
import StatusBadge from "./SatusBadge";
const GrievanceModal = ({
  status,
  title,
  description,
  location,
  submissionDate,
  images = [],
  comments = [],
  onClose,
}) => {
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: commentList.length + 1,
        user: "Current User", // Replace with actual user data in a real app
        text: newComment,
        timestamp: new Date().toLocaleString(),
      };
      setCommentList([...commentList, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-teal-700">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Grievance Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <StatusBadge status={status} />
            <p className="text-sm text-gray-500">
              Submitted: {submissionDate}
            </p>
          </div>
          <p className="text-base text-gray-600">
            <span className="font-medium">Location:</span> {location}
          </p>
          <p className="text-base text-gray-700">{description}</p>
        </div>

        {/* Images Section */}
        {images.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-teal-700 mb-2">Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Grievance Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-teal-700 mb-2">Comments</h3>
          <div className="space-y-4 max-h-48 overflow-y-auto">
            {commentList.length > 0 ? (
              commentList.map((comment) => (
                <div
                  key={comment.id}
                  className="p-3 bg-gray-100 rounded-lg shadow-sm"
                >
                  <p className="text-sm font-medium text-gray-800">
                    {comment.user}
                  </p>
                  <p className="text-sm text-gray-600">{comment.text}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {comment.timestamp}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No comments yet.</p>
            )}
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="mt-4 flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrievanceModal;