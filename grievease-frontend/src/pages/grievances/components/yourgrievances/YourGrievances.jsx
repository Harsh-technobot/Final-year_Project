"use client";
import * as React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import GrievanceItem from "./GrievanceItem";

function GrievancesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    registered: false,
    inProgress: true,
    resolved: true,
  });

  const grievances = [
    {
      id: 1,
      status: "in-progress",
      title: "Road Maintenance Required",
      description: "Multiple potholes and cracks need urgent repair for safety",
      location: "Sector 7, Main Road",
      submissionDate: "Jan 15, 2025",
    },
    {
      id: 2,
      status: "resolved",
      title: "Street Light Installation",
      description: "Area is too dark at night, need proper lighting for safety",
      location: "Block B, Indira Nagar",
      submissionDate: "Dec 20, 2024",
    },
    {
      id: 3,
      status: "resolved",
      title: "Street Light Installation",
      description: "Replacement of broken street lights in residential area",
      location: "Block B, Indira Nagar",
      submissionDate: "Dec 20, 2024",
    },
  ];

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
    <section className="p-6 mb-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <header className="flex justify-between items-center mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
        <h2 className="text-xl font-bold text-black">
          Your Previous Grievances
        </h2>

        <SearchBar
          placeholder="Search for title or description"
          onSearchChange={handleSearchChange}
        />

        <StatusFilter filters={filters} onFilterChange={handleFilterChange} />
      </header>

      <div className="flex flex-col gap-2">
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
  );
}

export default GrievancesSection;
