"use client";
import * as React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import GrievanceItem from "./GrievanceItem";
import StatsSection from "../StatSection";

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
    {
      id: 4,
      status: "registered",
      title: "Garbage Collection Delay",
      description: "Garbage not collected for the past week, causing hygiene issues",
      location: "Sector 5, Near Park",
      submissionDate: "Feb 10, 2025",
    },
    {
      id: 5,
      status: "in-progress",
      title: "Water Supply Disruption",
      description: "Irregular water supply in the morning hours",
      location: "Rajeev Nagar, Lane 3",
      submissionDate: "Jan 28, 2025",
    },
    {
      id: 6,
      status: "resolved",
      title: "Sewage Overflow",
      description: "Blocked drainage causing waterlogging in the streets",
      location: "MG Road, Market Area",
      submissionDate: "Dec 15, 2024",
    },
    {
      id: 7,
      status: "in-progress",
      title: "Public Park Maintenance",
      description: "Broken swings and unclean park conditions",
      location: "Central Park, Green Valley",
      submissionDate: "Feb 5, 2025",
    },
    {
      id: 8,
      status: "registered",
      title: "Unauthorized Construction",
      description: "Illegal building construction causing inconvenience to neighbors",
      location: "Sector 12, Near Bus Stand",
      submissionDate: "Feb 14, 2025",
    },
    {
      id: 9,
      status: "resolved",
      title: "Noise Pollution Complaint",
      description: "Loudspeakers being played late at night",
      location: "Sector 9, Residential Area",
      submissionDate: "Dec 30, 2024",
    },
    {
      id: 10,
      status: "in-progress",
      title: "Traffic Signal Malfunction",
      description: "Traffic signal not working properly, causing congestion",
      location: "Crossroad 3, City Center",
      submissionDate: "Feb 8, 2025",
    },
    {
      id: 11,
      status: "registered",
      title: "Stray Animal Issue",
      description: "Increase in stray dogs causing safety concerns",
      location: "Sector 18, Near School",
      submissionDate: "Feb 16, 2025",
    },
    {
      id: 12,
      status: "resolved",
      title: "Damaged Footpath",
      description: "Broken footpath tiles causing risk to pedestrians",
      location: "Lane 4, City Mall Road",
      submissionDate: "Jan 20, 2025",
    }
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
    <div className=" ">
    <section className="p-6 mb-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <header className="flex justify-between lg:px-10 items-center mb-6 max-md:flex-col max-md:gap-4">
        <h2 className="text-xl font-bold text-black">
          Your Previous Grievances
        </h2>

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
    <StatsSection/>
    </div>
  );
}

export default GrievancesSection;
