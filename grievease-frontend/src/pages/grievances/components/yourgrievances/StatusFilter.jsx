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
    <div className="flex lg:text-md text-sm gap-3 max-sm:mt-4">
      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="registered"
          checked={filters.registered}
          className="w-5 h-5 rounded-2xl"
          onChange={handleCheckboxChange}
        />
          <label className="rounded-md bg-[#A5D7FF47] text-[#2E91E2] px-2 " htmlFor="registered">Registered</label>
      </div>

      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="in-progress"
          checked={filters.inProgress}
          className="w-5 h-5 rounded-2xl"
          onChange={handleCheckboxChange}
        />
        <label className="bg-[#FEF9C3] text-[#854D0E] rounded-md px-2" htmlFor="in-progress">In Progress</label>
      </div>

      <div className="flex gap-1 items-center">
        <input
          type="checkbox"
          id="resolved"
          checked={filters.resolved}
          className="w-5 h-5 rounded-2xl"
          onChange={handleCheckboxChange}
        />
        <label  className="bg-[#DCFCE7] text-[#166534] rounded-md px-2" htmlFor="resolved">Resolved</label>
      </div>
    </div>
  );
}

export default StatusFilter;
