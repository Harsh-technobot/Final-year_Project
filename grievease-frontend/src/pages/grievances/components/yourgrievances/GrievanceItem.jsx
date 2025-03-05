import React, { useState } from "react";
import GrievanceModal from "./GrievanceDetailed";
import StatusBadge from "./SatusBadge";

function GrievanceItem({
  status,
  title,
  description,
  location,
  submissionDate,
  images = [], // Add images prop (array of image URLs)
  comments = [], // Add comments prop (array of comment objects)
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article
        onClick={openModal}
        className="flex flex-col gap-1 p-4 lg:mx-2 rounded-2xl border border-gray-300 border-solid cursor-pointer hover:shadow-md transition-shadow duration-300"
      >
        <StatusBadge status={status} />

        <h3 className="text-lg font-medium text-black">{title}</h3>
        <p className="text-base text-gray-600">{location}</p>

        <time className="text-sm text-right text-gray-500">
          Submitted: {submissionDate}
        </time>
      </article>

      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && (
        <GrievanceModal
          status={status}
          title={title}
          description={description}
          location={location}
          submissionDate={submissionDate}
          images={images}
          comments={comments}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default GrievanceItem;