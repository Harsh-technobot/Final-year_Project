"use client";
import * as React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import GrievanceItem from "./GrievanceItem";
import StatsSection from "../StatSection";
import grievances from "./GrievacnesData";
function GrievancesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    registered: false,
    inProgress: true,
    resolved: true,
  });

 const grievancess= grievances;
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterName, isChecked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: isChecked,
    }));
  };

  // Filter grievances based on search query and selected filters
  const filteredGrievances = grievances.filter((grievance) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      grievance.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grievance.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grievance.location.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by status
    const matchesStatus =
      (grievance.status === "registered" && filters.registered) ||
      (grievance.status === "in-progress" && filters.inProgress) ||
      (grievance.status === "resolved" && filters.resolved);

    return matchesSearch && matchesStatus;
  });

  return (
    <div className=" ">
    <section className="lg:p-6 py-3 px-2 mb-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <header className="flex justify-between lg:px-10 items-center mb-6 max-md:flex-col max-md:gap-4">

        <SearchBar
          placeholder="Search for title or description"
          onSearchChange={handleSearchChange}
        />

        <StatusFilter filters={filters} onFilterChange={handleFilterChange} />
      </header>

      <div className="flex flex-col h-[420px] max-md:h-[70vh] max-sm:h-[60vh] overflow-y-auto gap-4 p-2">
  {filteredGrievances.length > 0 ? (
    filteredGrievances.map((grievance) => (
      <GrievanceItem
        key={grievance.id}
        status={grievance.status}
        title={grievance.title}
        description={grievance.description}
        location={grievance.location}
        submissionDate={grievance.submissionDate}
      />
          ))
        ) : (
          <p className="text-gray-500 text-center">No grievances found.</p>
        )}
      </div>
      
    </section>
   
    </div>
  );
}

export default GrievancesSection;
