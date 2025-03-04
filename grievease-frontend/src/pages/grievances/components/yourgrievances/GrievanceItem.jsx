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
    <article className="flex flex-col gap-1 p-4 lg:mx-2 rounded-2xl border border-gray-300 border-solid">
      <StatusBadge status={status} />

      <h3 className="text-lg font-medium text-black">{title}</h3>
      <p className="text-base text-gray-600">{location}</p>

      <time className="text-sm text-right text-gray-500">
        Submitted: {submissionDate}
      </time>
    </article>
  );
}
export default GrievanceItem;
