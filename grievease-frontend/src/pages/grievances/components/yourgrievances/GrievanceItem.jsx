import React from "react";
import StatusBadge from "./SatusBadge";


function GrievanceItem({
  status,
  title,
  description,
  location,
  submissionDate,
}) {
  return (
    <article className="flex flex-col gap-2 p-4 rounded-lg border border-solid">
      <StatusBadge status={status} />

      <h3 className="text-lg font-medium text-black">{title}</h3>

      <p className="text-sm text-gray-700 mb-1">{description}</p>

      <p className="text-base text-gray-600">{location}</p>

      <time className="text-sm text-right text-gray-500">
        Submitted: {submissionDate}
      </time>
    </article>
  );
}
export default GrievanceItem;
