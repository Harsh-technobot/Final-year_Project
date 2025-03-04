import React from "react";

function StatusBadge({ status }) {
  // Determine badge color based on status
  let badgeClass = "px-2 py-1 text-xs rounded w-fit ";

  if (status === "in-progress") {
    badgeClass += "bg-blue-100 text-blue-800";
  } else if (status === "resolved") {
    badgeClass += "bg-green-100 text-green-800";
  } else if (status === "registered") {
    badgeClass += "bg-yellow-100 text-yellow-800";
  }

  // Format status text for display (capitalize and replace hyphens with spaces)
  const displayStatus = status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <span className={badgeClass}>{displayStatus}</span>;
}

export default StatusBadge;
