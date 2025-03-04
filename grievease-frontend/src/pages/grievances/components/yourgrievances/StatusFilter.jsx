"use client";
import React from "react";

function StatusFilter({ filters, onFilterChange }) {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;

    // Convert checkbox id to filter name in camelCase
    let filterName;
    if (id === "registered") {
      filterName = "registered";
    } else if (id === "in-progress") {
      filterName = "inProgress";
    } else if (id === "resolved") {
      filterName = "resolved";
    }

    onFilterChange(filterName, checked);
  };

  return (
    <div className="flex gap-3 max-sm:mt-4">
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="registered"
          checked={filters.registered}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="registered">Registered</label>
      </div>

      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="in-progress"
          checked={filters.inProgress}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="in-progress">In Progress</label>
      </div>

      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="resolved"
          checked={filters.resolved}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="resolved">Resolved</label>
      </div>
    </div>
  );
}

export default StatusFilter;
